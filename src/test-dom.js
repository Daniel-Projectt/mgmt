/* Clicks through the real page in a simulated browser (jsdom).
   Usage: node test-dom.js <path-to-node_modules-containing-jsdom>             */
const path = require('path');
const fs = require('fs');
const NM = process.argv[2];
const { JSDOM, VirtualConsole } = require(path.join(NM, 'jsdom'));
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

let fails = 0, checks = 0; const errors = [];
function ok(c, label, d) { checks++; if (!c) { fails++; console.log('  FAIL  ' + label + (d !== undefined ? '  -> ' + d : '')); } }
function head(t) { console.log('\n== ' + t + ' =='); }

const vc = new VirtualConsole();
vc.on('jsdomError', e => errors.push(e.message + (e.detail ? ' | ' + e.detail : '')));
vc.on('error', e => errors.push(String(e)));
const dom = new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://example.test/', virtualConsole: vc,
  beforeParse(w) {
    w.scrollTo = () => {}; w.print = () => { w.__printed = (w.__printed || 0) + 1; };
    w.Element.prototype.scrollIntoView = function () { w.__scrolledTo = this.id; };
    w.addEventListener('error', e => errors.push('window.onerror: ' + e.message));
  } });
const w = dom.window, d = w.document;
const $ = s => d.querySelector(s), $$ = s => Array.from(d.querySelectorAll(s));
const visible = el => { for (let n = el; n && n !== d; n = n.parentNode) if (n.hidden) return false; return true; };
const click = el => el.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const key = k => d.dispatchEvent(new w.KeyboardEvent('keydown', { key: k, bubbles: true }));
const topic = t => click($('.topic-btn[data-topic="' + t + '"]'));
const mode = (t, m) => click($('.seg[data-modes="' + t + '"] button[data-mode="' + m + '"]'));
const panel = p => $('[data-panel="' + p + '"]');
const tps = ['plan', 'decide', 'strategy', 'organize', 'people'];

function answerQuiz(root, label) {
  let guard = 0;
  while (guard++ < 80) {
    const opts = Array.from(root.querySelectorAll('.qbody .opt'));
    if (!opts.length) break;
    click(opts[Math.floor(Math.random() * opts.length)]);
    ok(root.querySelectorAll('.qbody .opt.correct').length === 1, label + ': the right answer is revealed');
    ok(root.querySelector('.qbody .feedback').textContent.length > 10, label + ': feedback explains');
    const nb = root.querySelector('.qbody .next'); ok(nb && !nb.hidden, label + ': next appears');
    click(nb);
  }
  return root.querySelector('.qbody .result');
}

head('landing');
ok(errors.length === 0, 'no errors while loading', errors.join(' || '));
ok(visible($('#topic-guide')) && !visible($('#topic-plan')), 'opens on the Guide');
const items = $$('#guideRoot .gitem');
ok(items.length === 24, 'guide shows the 24 sections of the outline', items.length);
ok(/0 of 24/.test($('#gCount').textContent), 'progress starts at 0 of 24', $('#gCount').textContent);
ok(!!$('#guideRoot .handout') && $$('#guideRoot .handout .hrules li').length === 4 && /ten Quizlet sets/.test($('#guideRoot .handout h2').textContent), 'the header card with its four instructions');
ok($$('#guideRoot .gsub .btn').length >= 40, 'subsection buttons');

head('guide checkboxes and jumps');
const cb = $('#guideRoot input[data-g="g-dec-group"]'); cb.checked = true; cb.dispatchEvent(new w.Event('change', { bubbles: true }));
ok(/1 of 24/.test($('#gCount').textContent), 'checking an item moves the progress', $('#gCount').textContent);
ok(/g-dec-group":true/.test(w.localStorage.getItem('mgmt.guide') || ''), 'the check is saved on the device');
click($('#gPrint')); ok(w.__printed === 1, 'print button prints');
click($('#guideRoot .gitem[data-gi="g-dec-group"] > button[data-go]'));
ok(visible($('#topic-decide')) && visible(panel('decide/notes')) && !!d.getElementById('dec-group'), 'Groupthink: jumps to the decision notes');
topic('guide');
click($('#guideRoot .gitem[data-gi="g-str-bcg"] > button[data-go]'));
ok(visible(panel('strategy/notes')) && !!d.getElementById('str-bcg'), 'BCG: jumps to the strategy notes');
topic('guide');
click($('#guideRoot .gitem[data-gi="g-plan-smart"] .gsub .btn[data-a="plan-mbo"]'));
ok(visible(panel('plan/notes')) && !!d.getElementById('plan-mbo') && d.getElementById('plan-mbo').closest('.note-sec').id === 'plan-smart', 'a subsection button lands inside its section');
topic('guide');
click($('#guideRoot .gitem[data-gi="g-ppl-groups"] .gsub .btn[data-a="ppl-lead"]'));
ok(visible(panel('people/notes')) && d.getElementById('ppl-lead').closest('.note-sec').id === 'ppl-groups', 'leadership lives inside Groups, Communication and Leadership');
topic('guide');
click($('#guideRoot [data-go="exam/mock"]'));
ok(visible(panel('exam/mock')) && !!$('#mxStart'), 'the practice-exam button opens the exam setup');

head('every tab and mode');
const modes = {};
$$('.seg[data-modes]').forEach(s => { modes[s.getAttribute('data-modes')] = Array.from(s.querySelectorAll('button[data-mode]')).map(b => b.getAttribute('data-mode')); });
Object.keys(modes).forEach(t => {
  topic(t);
  ok(visible($('#topic-' + t)), 'tab opens: ' + t);
  ok($$('.topic').filter(visible).length === 1, 'only one section visible: ' + t);
  modes[t].forEach(m => {
    mode(t, m);
    ok(visible(panel(t + '/' + m)), 'mode opens: ' + t + '/' + m);
    ok($$('#topic-' + t + ' .panel').filter(visible).length === 1, 'one panel at a time: ' + t + '/' + m);
    ok(panel(t + '/' + m).textContent.trim().length > 20, 'panel has content: ' + t + '/' + m);
  });
});
ok(errors.length === 0, 'no errors after visiting every mode', errors.join(' || '));

head('notes');
tps.forEach(t => { topic(t); mode(t, 'notes'); ok($$('#' + t + 'Notes .note-sec').length >= 4, t + ': note sections rendered'); ok($$('#' + t + 'Notes .secnav a').length >= 4, t + ': section nav rendered'); ok($$('#' + t + 'Notes h3.sub').length >= 3, t + ': subsection headings rendered'); ok($$('#' + t + 'Notes .know').length >= 4, t + ': every section shows its tier'); });
ok($$('#strategyNotes .mx-c').length === 12, 'the three 2x2 grids rendered (SWOT, Porter, BCG)', $$('#strategyNotes .mx-c').length);
ok($$('#planNotes .flow .step').length >= 9 && $$('#decideNotes .flow .step').length === 5, 'the step flows rendered');

head('flashcards');
tps.forEach(t => {
  topic(t); mode(t, 'cards');
  const p = panel(t + '/cards'), c = p.querySelector('.counter');
  ok(/^1 of \d+$/.test(c.textContent), t + ': counter starts at 1', c.textContent);
  click(p.querySelector('.flip')); ok(p.querySelector('.flash').classList.contains('flipped'), t + ': flips');
  ok(/Section · /.test(p.querySelector('.face.back').textContent), t + ': the card back names its section');
  click(p.querySelector('.next')); ok(/^2 of /.test(c.textContent) && !p.querySelector('.flash').classList.contains('flipped'), t + ': next card, unflipped');
  key('ArrowLeft'); ok(/^1 of /.test(c.textContent), t + ': arrow key goes back');
  const decks = Array.from(p.querySelectorAll('[data-deck]'));
  ok(decks.length === 2, t + ': two decks');
  click(decks[1]); ok(/^1 of \d+$/.test(c.textContent) && decks[1].getAttribute('aria-pressed') === 'true', t + ': second deck loads');
});

head('match');
tps.forEach(t => {
  topic(t); mode(t, 'match');
  const p = panel(t + '/match');
  const L = Array.from(p.querySelectorAll('.L .tile')), R = Array.from(p.querySelectorAll('.R .tile'));
  ok(L.length === 6 && R.length === 6, t + ': six pairs', L.length + '/' + R.length);
  click(L[0]); click(R[R.length - 1]);
  L.filter(l => !l.classList.contains('done')).forEach(l => { for (const r of R) { if (r.classList.contains('done')) continue; click(l); click(r); if (l.classList.contains('done')) break; } });
  ok(p.querySelectorAll('.tile.done').length === 12, t + ': every pair can be matched', p.querySelectorAll('.tile.done').length);
  ok(p.querySelector('.banner') && p.querySelector('.banner').textContent.length > 10, t + ': round-complete banner with a verdict');
  click(p.querySelector('.toolbar .btn')); ok(p.querySelectorAll('.tile.done').length === 0, t + ': new round resets');
});

head('topic quizzes');
tps.forEach(t => {
  topic(t); mode(t, 'quiz');
  const root = $('#' + t + 'Quiz');
  ok(root.querySelectorAll('.dots i').length === 10, t + ': ten dots');
  ok(root.querySelector('.qtag.sec') && root.querySelector('.qtag.sec').textContent.length > 8, t + ': the question card names its section', root.querySelector('.qtag.sec') && root.querySelector('.qtag.sec').textContent);
  const res = answerQuiz(root, t);
  ok(!!res, t + ': results screen');
  ok(res && res.querySelector('h3') && res.querySelector('h3').textContent.length > 3, t + ': verdict line shown');
  ok(res && /\d+\/10/.test(res.querySelector('.big').textContent), t + ': score shown', res && res.querySelector('.big').textContent);
  const missed = res.querySelector('.missed');
  if (missed) {
    const n = res.querySelectorAll('.misslist > div').length;
    click(missed);
    ok(root.querySelectorAll('.dots i').length === n, t + ': practice the misses asks exactly the missed ones', root.querySelectorAll('.dots i').length + ' vs ' + n);
    answerQuiz(root, t + ' (misses)');
  }
  click(root.querySelector('.again')); ok(root.querySelectorAll('.dots i').length === 10, t + ': new quiz has ten');
});
topic('plan'); mode('plan', 'quiz');
key('1'); ok($$('#planQuiz .qbody .opt:disabled').length > 0, 'key 1 answers');
key('Enter'); ok(/Question 2/.test($('#planQuiz .qnum').textContent), 'Enter moves on', $('#planQuiz .qnum').textContent);

head('practice exam');
topic('exam'); mode('exam', 'mock');
ok(!!$('#mxStart'), 'setup screen shows');
ok($$('#mxP button').length === 6 && /All five/.test($('#mxP').textContent), 'the topic row offers all five topics');
click($('#mxN button[data-n="15"]')); click($('#mxT button[data-t="all"]')); click($('#mxP button[data-p="all"]')); click($('#mxF button[data-f="all"]'));
click($('#mxStart'));
ok($$('#mockExam .dots i').length === 15, 'fifteen-question exam', $$('#mockExam .dots i').length);
ok(!!$('#mockExam .qtag.tier') && /sets|three/.test($('#mockExam .qtag.tier').textContent), 'every exam question shows how many sets test it', $('#mockExam .qtag.tier') && $('#mockExam .qtag.tier').textContent);
const mres = answerQuiz($('#mockExam'), 'exam');
const secTbl = mres && mres.querySelectorAll('.tbl')[0], tierTbl = mres && mres.querySelectorAll('.tbl')[1];
ok(secTbl && secTbl.querySelectorAll('tr').length >= 4 && secTbl.querySelectorAll('tr').length <= 24 && secTbl.querySelectorAll('.secch').length === secTbl.querySelectorAll('tr').length, 'results break down by section', secTbl && secTbl.querySelectorAll('tr').length);
ok(tierTbl && tierTbl.querySelectorAll('tr').length >= 1 && tierTbl.querySelectorAll('tr').length <= 4 && /sets/.test(tierTbl.textContent), 'and by how many sets cover it', tierTbl && tierTbl.querySelectorAll('tr').length);
click(mres.querySelector('.setupbtn')); ok(!!$('#mxStart'), 'change settings returns to setup');
click($('#mxT button[data-t="ap"]')); click($('#mxN button[data-n="25"]')); click($('#mxStart'));
ok($$('#mockExam .dots i').length === 25 && $('#mockExam .qtag').textContent === 'Application', 'application-only exam');
ok(/"types":"ap"/.test(w.localStorage.getItem('mgmt.mockcfg') || ''), 'exam settings remembered');

head('remembers where you were');
topic('strategy'); mode('strategy', 'cards');
ok(w.localStorage.getItem('mgmt.topic') === 'strategy' && w.localStorage.getItem('mgmt.mode.strategy') === 'cards', 'topic and mode saved');
ok($$('.topic-btn').length === 8, 'eight tabs');
head('quiz 3');
topic('guide');
ok(!!$('#guideRoot .q3call') && /Oct 7/.test($('#guideRoot .q3call').textContent), 'the guide announces Quiz 3');
click($('#guideRoot .q3call button'));
ok(visible($('#topic-q3')) && visible(panel('q3/notes')) && $$('#q3Notes .note-sec').length === 1, 'the call-out opens the Quiz 3 notes, one short section');
ok(/Duplication/.test($('#q3-hints').textContent) && $$('#q3-terms + .tblwrap tbody tr').length === 13, 'the three slide answers and the thirteen terms come first');
mode('q3', 'cards');
ok($$('.seg[data-decks="q3"] button').length === 2 && /13 terms/.test($('.seg[data-decks="q3"] button').textContent) && !!$('#q3Cards .flash'), 'flashcards open on the 13 terms');
mode('q3', 'match'); ok($$('#q3Match .L .tile').length === 6, 'match round');
mode('q3', 'quiz'); answerQuiz($('#q3Quiz'), 'quiz 3');
ok(!$('#q3Quiz .qtag.tier'), 'no Quizlet tier label on Quiz 3 questions');

head('the exam’s tier filter');
topic('exam');
if (!$('#mxStart')) {
  const fin = answerQuiz($('#mockExam'), 'exam in progress');
  ok(!!(fin && fin.querySelector('.setupbtn')), 'an exam in progress can be finished and reset');
  click(fin.querySelector('.setupbtn'));
}
ok(!!$('#mxF') && $$('#mxF button').length === 5, 'the exam setup has a five-way tier row');
ok(/ten Quizlet sets/.test(panel('exam/mock').textContent), 'the setup explains where the tiers come from');
click($('#mxN button[data-n="15"]')); click($('#mxT button[data-t="all"]'));
click($('#mxP button[data-p="all"]')); click($('#mxF button[data-f="rest"]')); click($('#mxStart'));
const rest = $('#mockExam');
ok(rest.querySelectorAll('.dots i').length === 15, 'fifteen questions from the last tier', rest.querySelectorAll('.dots i').length);
ok(Array.from(rest.querySelectorAll('.qtag.tier')).every(t => /fewer/i.test(t.textContent)), 'the last-tier draw shows only last-tier questions', rest.querySelector('.qtag.tier') && rest.querySelector('.qtag.tier').textContent);
ok(/"focus":"rest"/.test(w.localStorage.getItem('mgmt.mockcfg') || ''), 'the tier focus is remembered');
const restRes = answerQuiz(rest, 'last tier');
ok(!!restRes, 'the filtered exam reaches results');
ok(restRes.querySelectorAll('.tbl').length === 2, 'results break down by section and by tier', restRes.querySelectorAll('.tbl').length);
ok(/In fewer than three/.test(restRes.textContent), 'the tier breakdown names the tier drawn');
click(restRes.querySelector('.setupbtn')); click($('#mxF button[data-f="t1"]')); click($('#mxStart'));
ok(Array.from($('#mockExam').querySelectorAll('.qtag.tier')).every(t => /five or more/i.test(t.textContent)), 'switching the focus switches the draw');

head('the 50 for the exam');
const topRes = answerQuiz($('#mockExam'), 'top-tier draw');
click(topRes.querySelector('.setupbtn'));
ok(!!$('#mxFifty'), 'the setup offers the one-button fifty');
click($('#mxFifty'));
const fifty = $('#mockExam');
ok(fifty.querySelectorAll('.dots i').length === 50, 'fifty questions', fifty.querySelectorAll('.dots i').length);
const fRes = answerQuiz(fifty, 'the fifty');
ok(!!fRes, 'the fifty reaches results');
const fSec = fRes.querySelectorAll('.tbl')[0];
ok(fSec && fSec.querySelectorAll('tr').length === 24, 'the results list all twenty-four sections', fSec && fSec.querySelectorAll('tr').length);
ok(Array.from(fSec.querySelectorAll('.num')).every(td => parseInt(td.textContent.split('/')[1], 10) >= 2), 'every section got at least two questions');

head('errors');
ok(errors.length === 0, 'no runtime errors anywhere', errors.join(' || '));
console.log('\n' + (fails === 0 ? 'ALL ' + checks + ' DOM CHECKS PASSED' : fails + ' FAILURES out of ' + checks + ' DOM checks'));
w.close();
process.exit(fails ? 1 : 0);
