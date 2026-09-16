(function () {
  const root = document.getElementById('mock-root');
  const option = root.dataset.option;
  const view = root.dataset.view;

  const chrome = (title, subject = 'AP Biology + AP Statistics') => `
    <header class="topbar">
      <div class="brand"><span class="brand-mark" aria-hidden="true"></span><span>Open Hand</span></div>
      <div class="top-actions"><span>${subject}</span><button class="ghost">Glossary</button><button class="ghost">Study plan</button></div>
    </header>`;

  const statusKey = () => `<div class="status-key" aria-label="Orientation state key">
      <div class="status-item"><span class="swatch unstarted"></span>Not visited yet</div>
      <div class="status-item"><span class="swatch revisit"></span>Worth another pass</div>
      <div class="status-item"><span class="swatch steady"></span>Holding steady</div>
    </div>`;

  function placeFrame(title, sub, terrain, recommendation, className) {
    root.className = `mock-shell ${className}`;
    root.innerHTML = `${chrome(title)}<main class="place-layout">
      <section class="place-main"><div class="place-head"><div><div class="crumb">Curriculum map · ${title}</div><h1 class="screen-title">${title}</h1><p class="screen-sub">${sub}</p></div><div class="place-tools"><button class="ghost">Outline view</button><button class="ghost">Show map layers</button></div></div>${terrain}</section>
      <aside class="panel recommend">${recommendation}${statusKey()}<p class="note">Orientation states are separate from scoring. No points, streaks, totals, or leaderboards.</p></aside>
    </main>`;
    hookNodes();
  }

  const recommend = (heading, topic, detail, cta) => `<div class="eyebrow">A calm next move</div><h2>${heading}</h2><p><strong>${topic}</strong><br>${detail}</p><div class="meta-row"><span>≈ 12 min</span><span>1 sample</span><span>1 revision</span></div><button class="primary">${cta}</button><button class="ghost">Choose another place</button>`;

  function hookNodes() {
    root.querySelectorAll('[data-topic]').forEach((node) => node.addEventListener('click', () => {
      root.querySelectorAll('[data-topic]').forEach(n => n.classList.remove('current'));
      node.classList.add('current');
      const title = root.querySelector('.recommend h2');
      const p = root.querySelector('.recommend p strong');
      if (title) title.textContent = 'Selected place';
      if (p) p.textContent = node.dataset.topic;
    }));
  }

  function drawDoorPlace() {
    const terrain = `<div class="terrain" aria-label="AP Statistics and AP Biology terrain">
      <div class="subject-label" style="left:5%;top:6%">AP Statistics</div><div class="subject-label" style="left:57%;top:6%">AP Biology</div>
      <span class="route" style="left:12%;top:33%;width:31%;transform:rotate(15deg)"></span><span class="route active" style="left:27%;top:50%;width:22%;transform:rotate(-13deg)"></span><span class="route" style="left:59%;top:34%;width:29%;transform:rotate(19deg)"></span><span class="route" style="left:61%;top:65%;width:25%;transform:rotate(-18deg)"></span>
      <button class="node steady" data-topic="Exploring one-variable data" style="left:6%;top:22%">One-variable data<small>Holding steady</small></button>
      <button class="node revisit" data-topic="Interpreting slope in context" style="left:26%;top:47%">Two-variable data<small>Worth another pass</small></button>
      <button class="node" data-topic="Sampling distributions" style="left:12%;top:70%">Sampling distributions<small>Not visited yet</small></button>
      <button class="node steady" data-topic="Cell structure and function" style="left:55%;top:22%">Cell structure<small>Holding steady</small></button>
      <button class="node revisit" data-topic="Cellular energetics" style="left:75%;top:45%">Energetics<small>Worth another pass</small></button>
      <button class="node" data-topic="Natural selection" style="left:57%;top:72%">Natural selection<small>Not visited yet</small></button>
      <div class="eyebrow" style="position:absolute;left:44%;top:86%;color:#6f3cff">You are here</div>
    </div>`;
    placeFrame('The Living Route','Two connected subject territories. Pull detail when you want it; one route stays clear when you do not.',terrain,recommend('Trace this route','Interpreting slope in context','A short practice move can strengthen a recent gap.','Trace this route'),'o1');
  }

  function softPlace() {
    const terrain = `<div class="terrain archipelago" aria-label="Study archipelago">
      <div class="subject-label" style="left:6%;top:7%">AP Statistics</div><div class="subject-label" style="left:62%;top:7%">AP Biology</div>
      <button class="island steady" data-topic="One-variable data" style="left:5%;top:23%;width:220px;height:125px"><strong>One-variable data</strong><small>Holding steady</small></button>
      <button class="island revisit" data-topic="Sampling distributions" style="left:27%;top:50%;width:245px;height:135px"><strong>Sampling distributions</strong><small>Could use a return</small></button>
      <button class="island" data-topic="Inference for proportions" style="left:10%;top:70%;width:225px;height:105px"><strong>Inference</strong><small>Not explored</small></button>
      <button class="island steady" data-topic="Cell structure" style="left:58%;top:22%;width:205px;height:120px"><strong>Cell structure</strong><small>Feeling steady</small></button>
      <button class="island current revisit" data-topic="Cell membrane transport" style="left:72%;top:49%;width:245px;height:145px"><strong>Cell transport</strong><small>Could use a return</small></button>
      <button class="island" data-topic="Heredity" style="left:57%;top:73%;width:210px;height:100px"><strong>Heredity</strong><small>Not explored</small></button>
    </div>`;
    placeFrame('The Study Archipelago','Bring one island forward or open the whole chart. The horizon holds the rest without hiding it.',terrain,recommend('A gentle next move','Cell membrane transport','One diagram and one written explanation.','Set this card down'),'o2');
  }

  function lanternPlace() {
    const terrain = `<div class="terrain atlas" aria-label="Curriculum atlas">
      <div class="subject-label" style="left:5%;top:5%">AP Statistics · upper fold</div><div class="subject-label" style="left:55%;top:88%">AP Biology · lower fold</div>
      <button class="region steady" data-topic="Exploring data" style="left:4%;top:17%;width:225px;height:130px"><strong>Exploring data</strong><small>Continuous binding · steady</small></button>
      <button class="region revisit current" data-topic="Sampling distributions" style="left:28%;top:27%;width:250px;height:150px"><strong>Sampling distributions</strong><small>Loose binding · revisit</small></button>
      <button class="region" data-topic="Statistical inference" style="left:18%;top:62%;width:230px;height:120px"><strong>Inference</strong><small>Not opened yet</small></button>
      <button class="region steady" data-topic="Cell structure" style="left:57%;top:15%;width:215px;height:125px"><strong>Cell structure</strong><small>Holding together</small></button>
      <button class="region revisit" data-topic="Heredity and gene expression" style="left:72%;top:42%;width:250px;height:145px"><strong>Heredity</strong><small>Revisit suggested</small></button>
      <button class="region" data-topic="Ecology" style="left:56%;top:68%;width:225px;height:112px"><strong>Ecology</strong><small>Not opened yet</small></button>
    </div>`;
    placeFrame('The Curriculum Atlas','A stable foldout with sewn regions, indexed edges, and a reliable place for every topic.',terrain,recommend('Open here next','Sampling distributions','One visual model and one explanation.','Open this fold'),'o4');
  }

  function brightPlace() {
    const terrain = `<div class="terrain poster-map" aria-label="Learning districts map">
      <div class="subject-label" style="left:3%;top:4%;font-family:Impact;font-size:26px">AP STATISTICS</div><div class="subject-label" style="left:67%;top:4%;font-family:Impact;font-size:26px">AP BIOLOGY</div>
      <button class="district steady" data-topic="Exploring data" style="left:3%;top:17%;width:240px;height:135px"><strong>Exploring<br>data</strong><small>Steady for now</small></button>
      <button class="district revisit" data-topic="Sampling distributions" style="left:24%;top:45%;width:260px;height:150px"><strong>Sampling<br>distributions</strong><small>Come back to this</small></button>
      <button class="district" data-topic="Inference" style="left:6%;top:72%;width:220px;height:110px"><strong>Inference</strong><small>Not started</small></button>
      <button class="district steady" data-topic="Cell structure" style="left:58%;top:18%;width:220px;height:130px"><strong>Cell<br>structure</strong><small>Steady for now</small></button>
      <button class="district revisit current" data-topic="Experimental controls" style="left:73%;top:43%;width:245px;height:155px"><strong>Experimental<br>controls</strong><small>Come back to this</small></button>
      <button class="district" data-topic="Natural selection" style="left:57%;top:72%;width:245px;height:110px"><strong>Natural<br>selection</strong><small>Not started</small></button>
    </div>`;
    placeFrame('The Learning Districts','A bounded poster-map with clear neighborhoods, strong routes, and room to pause.',terrain,recommend('Go here next','Experimental controls','One sample. One response. One useful revision.','Enter this topic'),'o5');
  }

  function drawDoorWork() {
    root.className='mock-shell o1';
    root.innerHTML=`${chrome('Influence Lab','AP Statistics · Two-variable data')}<main class="work-layout"><div class="work-head"><div><div class="crumb">Open Hand · Sample before attempt</div><h1 class="screen-title">Touch the model, then say what changed.</h1></div><button class="ghost">Back to Living Route</button></div>
      <div class="lab"><section class="panel chart-wrap"><div class="question"><div class="label">Face-up prompt</div><h2>Explain how the highlighted observation affects the least-squares regression model.</h2></div><div class="chart" aria-label="Practice time and free-response score scatterplot"><div class="regression"></div>${[[10,82],[18,70],[27,72],[35,58],[43,54],[51,45],[59,47],[67,33],[75,29],[82,22],[24,61],[47,38]].map(([x,y])=>`<span class="dot" style="left:${x}%;top:${y}%"></span>`).join('')}<span class="dot outlier" id="outlier" style="left:83%;top:72%"></span></div><div class="small" style="display:flex;justify-content:space-between;margin-top:8px"><span>Targeted practice time (hours/week) →</span><span>FRQ score (points) ↑</span></div></section>
      <aside class="panel lab-readout"><div class="label">Outlier height</div><input id="outlierRange" type="range" min="20" max="82" value="72" aria-label="Outlier height"><div class="label">Live consequence</div><div class="metric">b = <span id="slope">1.42</span></div><p class="small">With the point here, the fitted slope is <strong><span id="sentenceSlope">1.42</span> points per hour</strong> and r = <strong id="corr">0.71</strong>.</p><div class="anchor-list"><div class="anchor score-good"><strong>1 · Explain influence</strong><br>State what changes and why the observation has leverage.</div><div class="anchor score-good"><strong>2 · Interpret</strong><br>Name both variables and their units.</div><div class="anchor score-risk"><strong>Common loss</strong><br>A number alone is not an interpretation.</div></div><button class="primary" style="width:100%;margin-top:14px">Check my reasoning</button></aside></div></main>`;
    const range=root.querySelector('#outlierRange');
    range.addEventListener('input',()=>{ const v=+range.value; root.querySelector('#outlier').style.top=v+'%'; const b=(2.05-v*.0087).toFixed(2); root.querySelector('#slope').textContent=b; root.querySelector('#sentenceSlope').textContent=b; root.querySelector('#corr').textContent=(.92-v*.0029).toFixed(2); root.querySelector('.regression').style.transform=`rotate(${-15-v*.13}deg)`; });
  }

  function softWork() {
    root.className='mock-shell o2';
    root.innerHTML=`${chrome('Soft Landing','AP Biology · Cell transport')}<main class="work-layout"><div class="work-head"><div><div class="crumb">Move 1 of 3 · Open Hand</div><h1 class="screen-title">One useful move is enough.</h1></div><button class="ghost">Back to Study Archipelago</button></div><div class="stack-stage"><section class="panel study-card"><div class="label">Sample question · osmoregulation</div><h2 style="font:600 26px var(--reading);line-height:1.25">A cell is transferred to a solution with a lower water potential. Predict the net movement of water and explain the mechanism.</h2><div class="bio-figure"><div class="cell"></div><div><div class="anchor score-good"><strong>Point available</strong><br>Predict net movement using relative water potential.</div><div class="anchor score-risk" style="margin-top:12px"><strong>Common loss</strong><br>Naming osmosis without connecting it to the gradient.</div></div></div><p id="soft-detail">The scoring mechanics are held face-up. Your attempt arrives on this same stage.</p><div class="action-row"><button class="primary" id="turnHand">Turn the hand</button><button class="ghost">One hint</button><button class="ghost">See the whole hand</button></div></section></div></main>`;
    root.querySelector('#turnHand').addEventListener('click',()=>{root.querySelector('#soft-detail').innerHTML='<strong>Your move:</strong> write one claim first. Build the full response only when you need it.'; root.querySelector('#turnHand').textContent='Try one like it';});
  }

  function pocketWork() {
    root.className='mock-shell o3';
    root.innerHTML=`${chrome('Pocket Universe','AP Biology · Cellular energetics')}<main class="work-layout"><div class="work-head"><div><div class="crumb">Open Hand · Manipulate before you explain</div><h1 class="screen-title">Change one variable. Watch the system answer back.</h1></div><button class="ghost">Reset field</button></div><div class="universe"><section class="system-field" aria-label="Cellular respiration model"><div class="mito"></div><span class="particle" style="left:25%;top:34%"></span><span class="particle" style="left:42%;top:61%"></span><span class="particle" style="left:69%;top:29%"></span><span class="lens" style="left:66%;top:58%">1</span></section><aside class="panel sim-panel"><div class="label">Oxygen availability</div><div class="metric" style="font-size:30px;font-weight:900"><span id="oxygen">62</span>%</div><input id="oxygenRange" type="range" min="10" max="100" value="62"><p class="small">Predict how ATP output changes before you move the control.</p><div class="label">Relative ATP output</div><div class="bar"><span id="atpBar" style="width:62%"></span></div><div class="label">Lactate accumulation</div><div class="bar"><span id="lacBar" style="width:38%;background:#ff5d73"></span></div><div class="anchor score-good"><strong>Hex lens · evidence for credit</strong><br>Describe the observed change, then explain the mechanism.</div><div class="anchor score-risk" style="margin-top:12px"><strong>Severed bridge · common loss</strong><br>Do not jump from condition to conclusion.</div><button class="primary" style="width:100%;margin-top:16px">Open response dock</button></aside></div></main>`;
    const range=root.querySelector('#oxygenRange');range.addEventListener('input',()=>{const v=+range.value;root.querySelector('#oxygen').textContent=v;root.querySelector('#atpBar').style.width=v+'%';root.querySelector('#lacBar').style.width=(100-v)+'%';});
  }

  function lanternWork() {
    root.className='mock-shell o4';
    root.innerHTML=`${chrome('Lantern Fold','AP Statistics · Residuals')}<main class="work-layout"><div class="work-head"><div><div class="crumb">Open Hand · Four connected leaves</div><h1 class="screen-title" style="font-family:var(--reading)">Unfold one thought at a time.</h1></div><button class="ghost">Back to Curriculum Atlas</button></div><div class="folio">${['Sample','How it scores','Your move','Revise'].map((name,i)=>`<section class="leaf ${i===1?'active':''}" data-leaf="${i}"><div class="label">Leaf ${i+1}</div><h2>${name}</h2>${i===0?'<p>A residual plot shows a curved pattern. Describe what it suggests about the linear model.</p><div style="height:180px;border-left:2px solid #20283a;border-bottom:2px solid #20283a;position:relative;margin-top:25px"><span style="position:absolute;left:12%;top:65%;width:12px;height:12px;background:#e96845;border-radius:50%"></span><span style="position:absolute;left:42%;top:20%;width:12px;height:12px;background:#e96845;border-radius:50%"></span><span style="position:absolute;left:75%;top:68%;width:12px;height:12px;background:#e96845;border-radius:50%"></span></div>':i===1?'<span class="dogear"></span><span class="seal">1</span><p><strong>Earn:</strong> identify the non-random pattern and connect it to model fit.</p><p><strong>Common loss:</strong> merely saying “curved” without the implication.</p>':i===2?'<p>A new residual plot waits here. State whether a linear model is appropriate and why.</p><textarea style="width:100%;height:185px;background:#fff7e6;border:2px solid #20283a;padding:12px" aria-label="Response"></textarea>':'<p>Add one sentence that connects the pattern to the model assumption.</p><button class="primary">Check my revision</button>'}</section>`).join('')}</div></main>`;
    root.querySelectorAll('.leaf').forEach(l=>l.addEventListener('click',()=>{root.querySelectorAll('.leaf').forEach(x=>x.classList.remove('active'));l.classList.add('active');}));
  }

  function brightWork() {
    root.className='mock-shell o5';
    root.innerHTML=`${chrome('Say It Bright','AP Biology · Experimental design')}<main class="work-layout"><div class="working-scenes"><nav class="scene-index panel" aria-label="Scenes">${['The question','What scores','Where it slips','Your move','Make it stronger'].map((s,i)=>`<button data-scene="${i}" class="${i===1?'active':''}">${i+1}. ${s}</button>`).join('')}</nav><section class="scene-stage"><div class="scene-number">02</div><h1 class="scene-title">WHAT THE SCORER CAN SEE</h1><p>A student tests how pH affects catalase activity. Identify an appropriate negative control and explain how it supports a valid conclusion.</p><div class="experiment"><div class="tube"></div><div class="tube" style="background:linear-gradient(to top,#ffe66d 0 35%,transparent 36%)"></div><div class="tube" style="background:linear-gradient(to top,#bceccb 0 70%,transparent 71%)"></div></div><p><span class="double-underline">Use catalase-free peroxide at each pH</span> so any oxygen measured can be attributed to catalase activity rather than a non-enzymatic reaction.</p><p><span class="strike-gap">Use a control.</span> <strong>What alternative cause does it rule out?</strong></p></section><aside class="feedback-rail"><div class="eyebrow">Scoring truth</div><h2 style="font:900 29px Impact;text-transform:uppercase">NAME WHAT THE CONTROL RULES OUT.</h2><p>Then connect that to the variable you are testing.</p><div style="height:24px;background:#fffdf8;margin:22px 0"></div><div class="eyebrow">Your follow-through</div><p><strong>Your move:</strong> make that link in one sentence.</p><button class="primary">Go to your move</button></aside></div></main>`;
    root.querySelectorAll('[data-scene]').forEach(b=>b.addEventListener('click',()=>{root.querySelectorAll('[data-scene]').forEach(x=>x.classList.remove('active'));b.classList.add('active');root.querySelector('.scene-number').textContent=String(+b.dataset.scene+1).padStart(2,'0');}));
  }

  function guidesWork() {
    root.className='mock-shell o6';
    const base='../../guide-concepts/concepts/';
    const guides=[['GC-001','Fizzbit','Buoyant · curious instigator',base+'GC-001-fizzbit/contact-sheet.png'],['GC-002','Moxie Quill','Brisk · candid near-peer',base+'GC-002-moxie-quill/contact-sheet.png'],['GC-003','Bramblekin','Grounded · quiet companion',base+'GC-003-bramblekin/contact-sheet.png']];
    root.innerHTML=`${chrome('Say It Bright · Guide Register Probe','AP Biology · Same scene, same job')}<main class="compare"><div class="suspension">PROBE ONLY · David suspended the no-character constraint for Option 6 only. Advisory, not approved.</div><div class="work-head"><div><div class="crumb">Scene 2 · What the scorer can see</div><h1 class="screen-title">Which emotional register helps without taking over?</h1></div><button class="ghost">Hide guide</button></div><section class="guide-grid">${guides.map(([id,name,meta,src])=>`<article class="guide-card"><div class="label">${id}</div><h2>${name}</h2><div class="guide-art"><img src="${src}" alt="Original concept art for ${name}"></div><div class="guide-line">“Name what the control rules out. Then connect that to the variable you're testing.”</div><div class="guide-meta"><span>${meta}</span><strong>Your move: make that link in one sentence.</strong></div></article>`).join('')}</section></main>`;
  }

  const routes = {
    '1-overview': drawDoorPlace, '1-working': drawDoorWork,
    '2-overview': softPlace, '2-working': softWork,
    '3-working': pocketWork,
    '4-overview': lanternPlace, '4-working': lanternWork,
    '5-overview': brightPlace, '5-working': brightWork,
    '6-working': guidesWork
  };
  const render = routes[`${option}-${view}`];
  if (render) render(); else root.textContent='Mock not found.';
})();
