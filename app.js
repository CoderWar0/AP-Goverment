// ===== NAVIGATION =====
function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

function showTab(sectionPrefix, tabId, btn) {
  const parent = btn.closest('.section') || btn.closest('div');
  let scope = btn.parentElement;
  scope.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  let allTabs = scope.parentElement.querySelectorAll('.tab-content');
  allTabs.forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// ===== CHEAT SHEET =====
function renderCheatSheet() {
  const grid = document.getElementById('cheatGrid');
  grid.innerHTML = '';
  cheatData.forEach((sec, i) => {
    const box = document.createElement('div');
    box.className = 'cheat-box' + (i < 2 ? ' open' : '');
    let tableRows = sec.rows.map(r => `<tr><td style="width:35%;font-weight:600;color:${sec.color}">${r[0]}</td><td>${r[1]}</td></tr>`).join('');
    box.innerHTML = `<div class="cheat-title" style="background:${sec.color}" onclick="this.parentElement.classList.toggle('open')">
      <span>${sec.title}</span><span class="cheat-arrow">▼</span>
    </div><div class="cheat-body"><table>${tableRows}</table></div>`;
    grid.appendChild(box);
  });
}
renderCheatSheet();

// ===== KEY TERMS =====
function renderTerms() {
  const grid = document.getElementById('termsGrid');
  grid.innerHTML = '';
  const query = (document.getElementById('termSearch').value || '').toLowerCase();
  const filtered = allTerms.filter(t => !query || t.t.toLowerCase().includes(query) || t.d.toLowerCase().includes(query));
  filtered.sort((a,b) => a.t.localeCompare(b.t));
  filtered.forEach(t => {
    const card = document.createElement('div');
    card.className = 'term-card';
    card.innerHTML = `<div class="term-word">${t.t}</div><div class="tap-hint">Click to reveal</div><div class="term-def">${t.d}</div>`;
    card.addEventListener('click', () => card.classList.toggle('open'));
    grid.appendChild(card);
  });
  if (filtered.length === 0) grid.innerHTML = '<p style="color:#adb5bd;padding:1rem;">No matching terms found.</p>';
}
function filterTerms() { renderTerms(); }
renderTerms();

// ===== MCQ =====
let mcqScore = 0, mcqAnswered = 0;

function renderMCQ() {
  mcqScore = 0; mcqAnswered = 0; updateMCQScore();
  const containers = {all:'mcqContainerAll',1:'mcqContainerU1',2:'mcqContainerU2',3:'mcqContainerU3',45:'mcqContainerU45'};
  Object.values(containers).forEach(id => document.getElementById(id).innerHTML = '');

  mcqData.forEach((q, i) => {
    const box = document.createElement('div');
    box.className = 'quiz-box';
    box.id = 'mcq_' + i;
    const unitLabel = q.unit === 45 ? 'Units 4–5' : 'Unit ' + q.unit;
    let optsHtml = q.opts.map((opt, j) =>
      `<label id="mcq_${i}_${j}" onclick="checkMCQ(${i},${j})">${String.fromCharCode(65+j)}) ${opt}</label>`
    ).join('');
    box.innerHTML = `<span class="q-label">${unitLabel}</span><div class="q-text">${i+1}. ${q.q}</div><div class="options">${optsHtml}</div><div class="explanation" id="mcqexp_${i}">${q.exp}</div>`;
    document.getElementById(containers.all).appendChild(box.cloneNode(true));
    const allBox = document.getElementById(containers.all).lastChild;
    allBox.querySelectorAll('.options label').forEach((l, j) => {
      l.id = 'mcqA_' + i + '_' + j;
      l.onclick = () => checkMCQin(allBox, i, j, 'A');
    });
    allBox.querySelector('.explanation').id = 'mcqexpA_' + i;

    const unitKey = q.unit;
    if (containers[unitKey]) {
      const unitBox = box.cloneNode(true);
      unitBox.querySelectorAll('.options label').forEach((l, j) => {
        l.id = 'mcqU_' + i + '_' + j;
        l.onclick = () => checkMCQin(unitBox, i, j, 'U');
      });
      unitBox.querySelector('.explanation').id = 'mcqexpU_' + i;
      document.getElementById(containers[unitKey]).appendChild(unitBox);
    }
  });
}

function checkMCQin(boxEl, qi, oi, prefix) {
  const q = mcqData[qi];
  const labels = boxEl.querySelectorAll('.options label');
  if (labels[0].classList.contains('disabled')) return;
  mcqAnswered++;
  labels.forEach((l, j) => {
    l.classList.add('disabled');
    if (j === q.ans) l.classList.add('correct');
    if (j === oi && j !== q.ans) l.classList.add('wrong');
  });
  if (oi === q.ans) mcqScore++;
  boxEl.querySelector('.explanation').classList.add('show');
  updateMCQScore();
}

function checkMCQ(qi, oi) {
  const box = document.getElementById('mcq_' + qi);
  if (box) checkMCQin(box, qi, oi, '');
}

function updateMCQScore() {
  document.getElementById('mcqScoreText').textContent = `Score: ${mcqScore} / ${mcqAnswered}`;
  const pct = mcqData.length > 0 ? (mcqAnswered / mcqData.length) * 100 : 0;
  document.getElementById('mcqProgress').style.width = pct + '%';
}

function resetMCQ() { renderMCQ(); window.scrollTo({top:0,behavior:'smooth'}); }
renderMCQ();
