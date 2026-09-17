#!/usr/bin/env bash
# Shared helpers for scripts/handoff-check and scripts/publish.
# Bash 3.2+ (macOS default) + git + awk + sed. No other dependencies; GNU/BSD differences are wrapped below.

POLICY_VERSION="2.0"
BASELINE_TAG="design-studio-operating-model-v1"
ACTORS="claude-code claude-design codex grok david"
ROLES="orchestrator brand-strategist visual-designer marketing-creative-designer critic chaos-agent steward"
LANES="routine judgment divergence"
STATUSES="draft ready dispatched landed accepted returned blocked superseded"
EVENTS="handoff-created status-changed output-landed governance recovery"
LIMIT_IMAGE=512000      # 500 KB
LIMIT_FILE=2097152      # 2 MB
LIMIT_COMMIT=10485760   # 10 MB
STALE_SECONDS=172800    # 48 h

# portable wrappers (GNU coreutils vs. BSD/macOS)
sha256() { if command -v sha256sum >/dev/null 2>&1; then sha256sum | cut -c1-64; else shasum -a 256 | cut -c1-64; fi; }
fsize()  { stat -c %s "$1" 2>/dev/null || stat -f %z "$1"; }
epoch_to_date() { date -u -d @"$1" +%Y-%m-%d 2>/dev/null || date -u -r "$1" +%Y-%m-%d; }
lower()  { printf '%s' "$1" | tr '[:upper:]' '[:lower:]'; }
# read lines from a command into an array (bash 3.2 has no mapfile): read_into ARR cmd args...
read_into() { local _n=$1; shift; eval "$_n=()"; local _l; while IFS= read -r _l; do eval "$_n+=(\"\$_l\")"; done < <("$@"); }

RED=$'\033[31m'; GRN=$'\033[32m'; YEL=$'\033[33m'; NC=$'\033[0m'
FAILS=0; WARNS=0
ok()   { printf '%s  ok   %s%s\n' "$GRN" "$NC" "$*"; }
fail() { printf '%s  FAIL %s%s\n' "$RED" "$NC" "$*"; FAILS=$((FAILS+1)); }
warn() { printf '%s  warn %s%s\n' "$YEL" "$NC" "$*"; WARNS=$((WARNS+1)); }
die()  { printf '%sERROR:%s %s\n' "$RED" "$NC" "$*" >&2; exit 2; }

in_list() { local x=$1; shift; for i in "$@"; do [ "$i" = "$x" ] && return 0; done; return 1; }

repo_root() { git rev-parse --show-toplevel; }

# --- header parsing (flat YAML front matter: scalars and "  - item" lists) ---
hdr_present() { [ "$(head -n1 "$1")" = "---" ]; }

hdr_get() {  # file key -> scalar value (inline "# comment" stripped)
  awk -v k="$2" '
    NR==1 { if ($0!="---") exit; next }
    $0=="---" { exit }
    index($0, k":")==1 { s=$0; sub("^"k":[ ]*","",s); sub(/[ ]+#.*$/,"",s); print s; exit }' "$1"
}

hdr_list() {  # file key -> list items, one per line
  awk -v k="$2" '
    NR==1 { if ($0!="---") exit; next }
    $0=="---" { exit }
    inl && $0 ~ /^  - / { s=$0; sub(/^  - /,"",s); sub(/[ ]+#.*$/,"",s); if (s!="") print s; next }
    { inl=0 } index($0, k":")==1 && $0 ~ ("^"k":[ ]*(#.*)?$") { inl=1 }' "$1"
}

hdr_set() {  # file key value -> rewrite scalar in front matter (insert before closing --- if absent)
  local f=$1 k=$2 v=$3
  awk -v k="$k" -v v="$v" '
    BEGIN{fm=0;done=0}
    NR==1 { print; fm=1; next }
    fm==1 && $0=="---" { if(!done){ print k": "v; done=1 } fm=2; print; next }
    fm==1 && index($0,k":")==1 { print k": "v; done=1; next }
    { print }' "$f" > "$f.tmp" && mv "$f.tmp" "$f"
}

body_frozen() {  # file -> body after front matter, up to (excluding) "## Amendments"
  awk '
    NR==1 { if ($0!="---") { print; } fm=1; next }
    fm==1 && $0=="---" { fm=2; next }
    fm==2 && $0=="## Amendments" { exit }
    fm==2 { print }' "$1"
}

frozen_hash() {  # file -> sha256 over role/lane/inputs/outputs + frozen body
  { echo "role=$(hdr_get "$1" role)"; echo "lane=$(hdr_get "$1" lane)"
    echo "inputs:"; hdr_list "$1" inputs; echo "outputs:"; hdr_list "$1" outputs
    echo "body:"; body_frozen "$1"; } | sha256
}

# --- handoff id / path helpers ---
packet_from_id() {  # "<slug>/<NNN>" -> path (must be exactly one match)
  local slug=${1%%/*} nnn=${1##*/} m
  m=$(ls "projects/$slug/handoff/$nnn"-*.md 2>/dev/null | grep -v README || true)
  [ "$(printf '%s\n' "$m" | grep -c .)" -eq 1 ] || return 1
  printf '%s' "$m"
}

path_parts() {  # packet path -> sets SLUG NNN FROLE
  local p=$1 base
  case "$p" in projects/*/handoff/*.md) ;; *) return 1;; esac
  SLUG=${p#projects/}; SLUG=${SLUG%%/*}
  base=$(basename "$p" .md)
  NNN=${base%%-*}; FROLE=${base#*-}
  [[ "$NNN" =~ ^[0-9]{3}$ ]] || return 1
}

on_main() { git cat-file -e "origin/main:$1" 2>/dev/null; }
main_sha() { git rev-parse --short=7 origin/main; }
fetch_main() { [ "${NO_FETCH:-0}" = "1" ] || git fetch --quiet origin main || die "cannot fetch origin main"; }

# Path references in a packet body that look like repo paths.
body_path_refs() {
  body_frozen "$1" | grep -oE '(projects|docs|config|prompts|scripts)/[A-Za-z0-9_./<>*-]+' \
    | sed -E 's/[.,;:)]+$//' | grep -vE '[<>*]' | grep -vE '/$' | sort -u
}

# Derived next action for a handoff row in STATE.md
next_action_for() {  # status actor role -> text
  case "$1" in
    draft)      echo "orchestrator: finish packet, run handoff-check";;
    ready)      echo "orchestrator: dispatch (publish --dispatch)";;
    dispatched) echo "$2 as $3: produce declared outputs, then publish";;
    landed)     echo "orchestrator: accept or return";;
    returned)   echo "orchestrator: write superseding handoff";;
    blocked)    echo "see reason in packet; owner decides";;
    accepted|superseded) echo "-";;
    *)          echo "?";;
  esac
}
