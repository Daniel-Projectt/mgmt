const fs = require('fs');
const vm = require('vm');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

let fails = 0, checks = 0;
function ok(cond, label, detail) { checks++; if (!cond) { fails++; console.log('  FAIL  ' + label + (detail !== undefined ? '  -> ' + detail : '')); } }
function head(t) { console.log('\n== ' + t + ' =='); }

// ---------- load ----------
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log('NO SCRIPT'); process.exit(1); }
const src = m[1];
try { new vm.Script(src); } catch (e) { console.log('JS PARSE ERROR: ' + e.message); process.exit(1); }
const sandbox = { module: { exports: {} }, console };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
const A = sandbox.module.exports;
console.log('script parsed and loaded, exports: ' + Object.keys(A).length);
const tps = ['plan', 'decide', 'strategy', 'organize', 'people'];
const PREFIX = { plan: 'plan-', decide: 'dec-', strategy: 'str-', organize: 'org-', people: 'ppl-' };
const body = tp => A.CH[tp].notes.map(n => n.body).join(' ');
const allBodies = tps.map(body).join(' ');
const anchorExists = id => tps.some(tp => A.CH[tp].notes.some(n => n.id === id)) || allBodies.includes('id="' + id + '"');

// ---------- 1. the outline ----------
head('the outline');
ok(A.COURSE.code === 'Principles of Management' && A.COURSE.term === 'Exam 2' && /ten Quizlet sets/.test(A.COURSE.exam), 'course, exam and where the outline comes from');
ok(/638 cards/.test(A.COURSE.scope) && /five or more/.test(A.COURSE.scope), 'scope line names the ten sets and the tiers');
ok(A.COURSE.rules.length === 4 && /Tier 1/.test(A.COURSE.rules[0]) && /order/.test(A.COURSE.rules[1]) && /disagree/.test(A.COURSE.rules[2]) && /People tab/.test(A.COURSE.rules[3]), 'the four instructions');
const HEADS = ['Planning & Goals', 'Decision Making', 'Strategic Management', 'Organizing', 'People & Change'];
ok(A.GUIDE.sections.length === 5 && A.GUIDE.sections.every((s, i) => s.tp === tps[i] && s.h === HEADS[i]), 'five topics, in order', A.GUIDE.sections.map(s => s.h).join(' | '));
const OUTLINE = {
  plan: ['Planning and the Four Functions', 'Mission, Vision and Values', 'Levels of Goals and Plans', 'Standing and Single-Use Plans', 'SMART Goals, MBO and Stretch Goals', 'Contingency, Scenario and Crisis Planning'],
  decide: ['The Rational Decision-Making Process', 'Bounded Rationality, Satisficing and Intuition', 'Programmed vs Nonprogrammed, and How Much You Know', 'Decision Styles and Biases', 'Group Decision Making and Groupthink'],
  strategy: ['The Strategic Management Process and Competitive Advantage', 'SWOT and Environmental Scanning', 'Porter’s Five Forces and Competitive Strategies', 'The BCG Matrix and Grand Strategies'],
  organize: ['Organizational Structure and the Org Chart', 'Types of Organizational Structure', 'Authority, Responsibility and Delegation', 'Organizational Culture'],
  people: ['Managing Change', 'Motivation', 'Human Resources', 'Groups, Communication and Leadership', 'Global Business and Culture'] };
A.GUIDE.sections.forEach(s => {
  ok(JSON.stringify(s.items.map(i => i.t)) === JSON.stringify(OUTLINE[s.tp]), 'sections match the outline for ' + s.tp, s.items.map(i => i.t).join(' | '));
  s.items.forEach(it => {
    ok(it.short && it.short.length > 60, 'item has a one-breath answer: ' + it.t);
    ok(A.CH[s.tp].notes.some(n => n.id === it.a), 'item points at a note section: ' + it.t, it.a);
    ok(it.subs.length >= 1 && it.subs.every(sb => sb[0] && anchorExists(sb[1])), 'every subsection anchor exists: ' + it.t, it.subs.map(sb => sb[1]).join(','));
  });
});
const items = A.GUIDE.sections.flatMap(s => s.items);
ok(items.length === 24 && new Set(items.map(i => i.id)).size === 24, 'twenty-four sections, unique ids');

// ---------- 2. topics ----------
head('topics');
const noteIds = [];
tps.forEach(tp => {
  const c = A.CH[tp];
  ok(c.title && c.short, 'topic header: ' + tp);
  ok(c.notes.length === OUTLINE[tp].length && c.notes.every(n => n.id && n.h && n.body && n.body.length > 400), 'one note section per outline item, each with substance: ' + tp, c.notes.length);
  ok(c.notes.map(n => n.h).join('|') === OUTLINE[tp].join('|'), 'the note sections carry the outline headings: ' + tp, c.notes.map(n => n.h).join(' | '));
  c.notes.forEach(n => { ok(n.id.indexOf(PREFIX[tp]) === 0, 'note id prefixed: ' + n.id); noteIds.push(n.id); });
  ok(c.decks.length === 2 && c.decks.every(d => d.id && d.label && d.match !== false && d.cards.length >= 10), 'two decks with 10+ cards, all in play: ' + tp, c.decks.map(d => d.cards.length).join(','));
  c.decks.forEach(d => {
    ok(d.cards.every(x => x.length >= 3 && x[0] && x[1] && x[2]), 'cards have front, back and section: ' + tp + '/' + d.id);
    ok(new Set(d.cards.map(x => x[0])).size === d.cards.length, 'card fronts unique: ' + tp + '/' + d.id);
  });
  ok(A.PAIRSETS[tp].pairs.length >= 25, 'enough pairs to match: ' + tp, A.PAIRSETS[tp].pairs.length);
  ok(new Set(A.PAIRSETS[tp].pairs.map(p => p[1])).size === A.PAIRSETS[tp].pairs.length, 'pair meanings unique: ' + tp);
});
ok(new Set(noteIds).size === noteIds.length, 'note ids unique across topics');
const subIds = [...new Set((allBodies.match(/ id="([a-z0-9-]+)"/g) || []).map(s => s.slice(5, -1)))];
ok(new Set(subIds.concat(noteIds)).size === subIds.length + noteIds.length, 'subsection ids do not collide with section ids');
// the lists and frameworks the sets test, on the page
['Planning', 'Organizing', 'Leading', 'Controlling'].forEach(v => ok(body('plan').includes('<h4>' + v + '</h4>'), 'planning: function box ' + v));
['Strategic', 'Tactical', 'Operational'].forEach(v => ok(body('plan').includes('<td class="head">' + v + '</td>'), 'planning: level ' + v));
['1 to 5 years', '6 to 24 months', '1 to 52 weeks'].forEach(v => ok(body('plan').includes(v), 'planning: time frame ' + v));
['Policy', 'Procedure', 'Rule'].forEach(v => ok(body('plan').includes('<b>' + v + '</b>'), 'planning: standing plan ' + v));
['Version A', 'Version E', 'Version H'].forEach(v => ok(body('plan').includes('<th>' + v + '</th>'), 'planning: SMART ' + v));
['Jointly set objectives', 'Develop action plans', 'Review periodically', 'Appraise and reward'].forEach((v, i) => ok(body('plan').includes((i + 1) + ' · ' + v), 'planning: MBO step ' + (i + 1)));
['Identify the problem or opportunity', 'Generate alternatives', 'Evaluate the alternatives and select one', 'Implement the decision', 'Evaluate the result'].forEach((v, i) => ok(body('decide').includes((i + 1) + ' · ' + v), 'decisions: step ' + (i + 1)));
['Programmed', 'Nonprogrammed'].forEach(v => ok(body('decide').includes('<th>' + v + '</th>'), 'decisions: column ' + v));
['Certainty', 'Risk', 'Uncertainty', 'Ambiguity'].forEach(v => ok(body('decide').includes('<b>' + v + '</b>'), 'decisions: condition ' + v));
['Directive', 'Analytical', 'Conceptual', 'Behavioral'].forEach(v => ok(body('decide').includes('<td class="head">' + v + '</td>'), 'decisions: style ' + v));
['Establish the mission and vision', 'Assess the current reality', 'Formulate the grand strategy', 'Implement the strategy', 'Maintain strategic control'].forEach((v, i) => ok(body('strategy').includes((i + 1) + ' · ' + v), 'strategy: step ' + (i + 1)));
['Strengths', 'Weaknesses', 'Opportunities', 'Threats'].forEach(v => ok(body('strategy').includes('<h4>' + v + '</h4>'), 'strategy: SWOT ' + v));
['Threat of new entrants', 'Threat of substitutes', 'Bargaining power of suppliers', 'Bargaining power of buyers', 'Rivalry among existing competitors'].forEach(v => ok(body('strategy').includes('<td class="head">' + v + '</td>'), 'strategy: force ' + v));
['Cost leadership', 'Differentiation', 'Cost focus', 'Focused differentiation'].forEach(v => ok(body('strategy').includes('<h4>' + v + '</h4>'), 'strategy: Porter cell ' + v));
['Stars', 'Cash cows', 'Question marks', 'Dogs'].forEach(v => ok(body('strategy').includes('<h4>' + v + '</h4>'), 'strategy: BCG cell ' + v));
['Growth', 'Stability', 'Defensive (renewal, retrenchment)'].forEach(v => ok(body('strategy').includes('<b>' + v + '</b>'), 'strategy: grand strategy ' + v));
ok((body('strategy').match(/class="matrix"/g) || []).length === 3 && !/class="vp"/.test(body('strategy')), 'strategy: three 2x2 grids, no 3x3');
['Simple', 'Functional', 'Divisional', 'Matrix', 'Team-based', 'Network (virtual)'].forEach(v => ok(body('organize').includes('<td class="head">' + v + '</td>'), 'organizing: structure ' + v));
['Mechanistic', 'Organic'].forEach(v => ok(body('organize').includes('<h4>' + v + '</h4>'), 'organizing: box ' + v));
['Authority', 'Responsibility', 'Accountability', 'Delegation'].forEach(v => ok(body('organize').includes('<div class="lv"><b>' + v + '</b>'), 'organizing: term ' + v));
['Clan', 'Adhocracy', 'Market', 'Hierarchy'].forEach(v => ok(body('organize').includes('<td class="head">' + v + '</td>'), 'organizing: culture type ' + v));
['Unfreezing', 'Changing', 'Refreezing'].forEach((v, i) => ok(body('people').includes((i + 1) + ' &middot; ' + v), 'people: Lewin stage ' + (i + 1)));
['Legitimate', 'Reward', 'Coercive', 'Expert', 'Referent'].forEach(v => ok(body('people').includes('<td class="head">' + v + '</td>'), 'people: power ' + v));
['Global outsourcing', 'Exporting / importing', 'Licensing', 'Franchising', 'Joint venture', 'Wholly owned subsidiary'].forEach(v => ok(body('people').includes('<div class="lv"><b>' + v + '</b>'), 'people: entry mode ' + v));
['Individualism vs collectivism', 'Power distance', 'Uncertainty avoidance', 'Masculinity vs femininity', 'Long-term vs short-term orientation'].forEach(v => ok(body('people').includes('<td class="head">' + v + '</td>'), 'people: Hofstede ' + v));

// ---------- 2a. the sets' wrong and conflicting answers are called out, not copied ----------
head('the sets’ wrong answers are flagged, not copied');
ok(/A set gets this wrong<\/b>One Quizlet answers &ldquo;choosing the first acceptable alternative&rdquo; with <i>groupthink<\/i>/.test(body('decide')), 'F15: groupthink for satisficing');
ok(/with <i>polychronic<\/i>\. The United States is <b>monochronic<\/b>/.test(body('people')), 'F35: polychronic for monochronic');
ok(/with <i>transnational strategy<\/i>\. That is <b>licensing<\/b>/.test(body('people')), 'F27: transnational for licensing');
ok(/with <i>goals<\/i>\. The usual answer is the <b>mission<\/b>/.test(body('plan')), 'F9: goals for mission');
ok(/with <i>Authoritarian<\/i>\. The word is <b>delegation<\/b>/.test(body('organize')), 'B87: authoritarian for delegation');
ok(/go with intuition/.test(body('decide')) && /<i>programmed/.test(body('decide')), 'D11: programmed for intuition');
ok(/three different expansions|with three different/.test(body('plan')) && /your textbook/.test(body('plan')), 'SMART: three versions, use the textbook’s');
ok(/<i>execute the plan<\/i>/.test(body('plan')) && /<i>performance management<\/i>/.test(body('plan')), 'step 4: execute the plan vs performance management');
// and the page never gives those wrong answers as right
const wrongPairs = [[/first acceptable alternative|good enough/i, /^groupthink$/i], [/one agenda|scheduled/i, /^polychronic/i], [/rights? to make or sell|make or sell its product/i, /transnational/i], [/foundation/i, /^goals$/i], [/delegat/i, /authoritarian/i], [/past experience|gut feeling/i, /^programmed$/i]];
A.QB.filter(q => q.t === 'mc').forEach((q, i) => wrongPairs.forEach(([stem, bad]) => ok(!(stem.test(q.q) && bad.test(String(q.a))), 'question #' + i + ' does not repeat a set’s wrong answer', q.q + ' -> ' + q.a)));

// ---------- 3. the page teaches; it does not quiz the Quizlets ----------
head('the page teaches the concepts, not the sets');
tps.forEach(tp => A.CH[tp].notes.forEach(n => {
  ok(n.body.indexOf('<div class="point"><b>The point</b>') === 0, 'section opens with “The point”: ' + n.h);
  ok(/<p class="able"><b>Be able to<\/b>/.test(n.body), 'section says what to be able to do: ' + n.h);
  ok(/<span class="know">/.test(n.body), 'section says how many sets cover it: ' + n.h);
}));
const META = /quizlet|the ten sets|the sets\b|one set\b|which set|according to the (set|report)|this page/i;
A.QB.forEach((q, i) => ok(!META.test(q.q), 'question #' + i + ' asks about management, not about the Quizlet sets', q.q));
const SLANG = /\bbruh\b|\bcheeks\b|\bGOAT\b|no cap|\bbro\b|\bnah\b|\bdawg\b|lock in|\bcooked\b/i;
const everyText = allBodies + ' ' + A.QB.map(q => [q.q, q.a, q.e].concat(q.w || []).join(' ')).join(' ') + ' ' + tps.map(tp => A.CH[tp].decks.map(d => d.cards.map(c => c[0] + ' ' + c[1]).join(' ')).join(' ')).join(' ');
ok(!SLANG.test(everyText), 'no slang anywhere', (everyText.match(SLANG) || []).join(' | '));
A.QB.filter(q => q.t === 'tf').forEach((q, i) => {
  const rest = String(q.e).replace(/^(True|False)\s*[—-]\s*/, '');
  const stem = new Set(q.q.toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter(x => x.length > 4));
  const said = rest.toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter(x => x.length > 4);
  const echo = said.length ? said.filter(x => stem.has(x)).length / said.length : 0;
  ok(echo < 0.75, 'true/false #' + i + ' is not answered by its own wording', q.q + ' || ' + q.e);
});
Object.keys(A.SEC_CHAPTER).forEach(id => {
  const mine = A.QB.filter(q => q.sec === id);
  ok(mine.length >= 7, 'at least seven written questions for “' + A.SEC_TITLES[id] + '”', mine.length);
  ok(mine.filter(q => q.ap).length >= 1, 'at least one application question for “' + A.SEC_TITLES[id] + '”', mine.filter(q => q.ap).length);
  ok(mine.filter(q => q.t === 'tf').length >= 1, 'at least one true/false for “' + A.SEC_TITLES[id] + '”');
});

// ---------- 3b. every question and card belongs to a section ----------
head('every question and card belongs to a section of the outline');
const SEC = A.SEC_CHAPTER;
ok(Object.keys(SEC).length === 25 && Object.keys(A.SEC_TITLES).length === 25, 'twenty-four exam sections plus the one of Quiz 3 known to the engine');
for (let i = 0; i < A.QB.length; i++) ok(A.QB[i] && typeof A.QB[i] === 'object', 'no empty slot in the question list (a stray double comma) at #' + i);
A.QB.forEach((q, i) => ok(q.sec && SEC[q.sec] === q.tp, 'question #' + i + ' is tagged with a section of its own topic', q.sec + ' / ' + q.q.slice(0, 60)));
tps.forEach(tp => A.CH[tp].decks.forEach(d => d.cards.forEach(c => ok(c[2] && SEC[c[2]] === tp, 'card is tagged with a section of its topic: ' + c[0], c[2]))));
Object.keys(SEC).forEach(id => ok(A.CH[SEC[id]].decks.some(d => d.cards.some(c => c[2] === id)), 'at least one flashcard for “' + A.SEC_TITLES[id] + '”'));
console.log('  questions per section: ' + Object.keys(SEC).map(id => id.replace(/^g-/, '') + '=' + A.QB.filter(q => q.sec === id).length).join(' '));

// ---------- 3c. the Quizlet tiers ----------
head('the Quizlet tiers');
ok(A.CONFIRMED.length >= 35, 'the concept map covers the ten sets', A.CONFIRMED.length);
const qText = q => [q.q, q.a === true ? 'true' : q.a === false ? 'false' : q.a, q.e].join(' ');   // what hotOf() searches
A.CONFIRMED.forEach((c, i) => {
  ok(A.SEC_CHAPTER[c.sec], 'concept #' + i + ' names a real section', c.sec);
  ok([1, 2, 3].includes(c.w), 'concept #' + i + ' is weighted 1, 2 or 3', c.w);
  ok(c.k && typeof c.k.test === 'function' && c.k.source, 'concept #' + i + ' carries a matcher');
  ok(A.QB.some(q => q.sec === c.sec && c.k.test(qText(q))), 'concept #' + i + ' actually matches a question', c.sec + ' ' + c.k);
});
ok(A.TIERS.length === 4 && A.TIERS.map(t => t.w).join() === '3,2,1,0', 'four tiers, strongest first');
ok(A.TIERS.every(t => /sets|three/.test(t.t)), 'tier labels say how many sets');
A.QB.forEach((q, i) => ok(q.hot === A.hotOf(q.sec, qText(q)), 'question #' + i + ' carries the tier its text earns'));
const byTier = {}; [0, 1, 2, 3].forEach(t => { byTier[t] = A.QB.filter(q => (q.hot || 0) === t); });
ok(byTier[3].length >= 60 && byTier[2].length >= 45 && byTier[1].length >= 45 && byTier[0].length >= 12, 'every tier has enough questions to draw on', [3, 2, 1, 0].map(t => t + ':' + byTier[t].length).join(' '));
ok(A.QB.every(q => [0, 1, 2, 3].includes(q.hot || 0)), 'every question carries a tier');
// the tiers follow the report
ok(A.QB.filter(q => q.sec === 'g-plan-levels').every(q => q.hot === 3), 'levels of goals and plans are Tier 1 throughout');
ok(A.QB.filter(q => q.sec === 'g-plan-mission').every(q => q.hot === 3), 'mission and vision are Tier 1 throughout');
ok(A.QB.filter(q => q.sec === 'g-dec-process').every(q => q.hot === 3), 'the decision process is Tier 1 throughout');
ok(A.QB.filter(q => q.sec === 'g-org-types').every(q => q.hot === 3), 'the structure types are Tier 1 throughout');
ok(A.QB.filter(q => q.sec === 'g-str-porter').every(q => q.hot === 2), 'Porter is Tier 2 throughout');
ok(A.QB.filter(q => q.sec === 'g-str-bcg').every(q => q.hot === 2), 'BCG and the grand strategies are Tier 2 throughout');
ok(A.QB.filter(q => q.sec === 'g-org-culture').every(q => (q.hot || 0) === 0), 'organizational culture is in fewer than three sets — every question stays in the last tier');
ok(A.QB.filter(q => /^g-ppl-/.test(q.sec)).every(q => (q.hot || 0) <= 1), 'nothing in the People tab is above Tier 3');
ok(A.QB.filter(q => q.sec === 'g-dec-nonrational' && /satisfic/i.test(q.a + ' ' + q.q)).every(q => q.hot === 3), 'satisficing is Tier 1');
ok(A.QB.filter(q => q.sec === 'g-dec-nonrational' && /^intuitive$/i.test(String(q.a))).every(q => q.hot === 1), 'intuition is Tier 3, below satisficing');
ok(A.QB.filter(q => q.sec === 'g-dec-group' && /groupthink/i.test(String(q.a))).every(q => q.hot === 3), 'groupthink is Tier 1');
// the exam's tier filter
const wantTopics = {}; [0, 1, 2, 3].forEach(t => { wantTopics[t] = tps.filter(tp => byTier[t].filter(q => q.tp === tp).length >= 4); });
const seenTiers = new Set();
for (let r = 0; r < 60; r++) {
  const n = [15, 25, 40][r % 3];
  const all = A.mockQuestions({ n: n, types: 'all', focus: 'all' });
  ok(all.length === n, 'the exam still returns the asked-for length', all.length + ' vs ' + n);
  ok(new Set(all.map(q => q.key)).size === all.length, 'no repeats inside one exam');
  all.forEach(q => seenTiers.add(q.hot || 0));
  if (n >= 40) ok(new Set(all.map(q => q.hot || 0)).size >= 3, 'a full-length unfiltered exam reaches at least three of the four tiers');
  [['t1', 3], ['t2', 2], ['t3', 1], ['rest', 0]].forEach(([f, want]) => {
    const got = A.mockQuestions({ n: n, types: 'all', focus: f });
    if (n <= 15 || want > 0) ok(got.length === n, 'focus ' + f + ' fills the exam (the last tier is small by design)', got.length + '/' + n);
    ok(got.every(q => (q.hot || 0) === want), 'focus ' + f + ' draws only that tier');
    ok(got.every(q => q.sec && A.SEC_CHAPTER[q.sec] === q.tp), 'focus ' + f + ' questions name their section');
    if (n >= 25) ok(wantTopics[want].every(tp => got.some(q => q.tp === tp)), 'focus ' + f + ' spreads across every topic that has that tier', wantTopics[want].join(',') + ' vs ' + [...new Set(got.map(q => q.tp))].join(','));
  });
  ok(A.mockQuestions({ n: n, types: 'ap', focus: 't1' }).every(q => q.ap && q.hot === 3), 'the filters combine: application questions from the top tier');
  ok(A.mockQuestions({ n: n, types: 'tf', focus: 't2' }).every(q => q.kind === 'tf' && q.hot === 2), 'the filters combine: true/false from the second tier');
}
ok(seenTiers.size === 4, 'unfiltered exams draw on all four tiers', [...seenTiers].join(','));
// the one-button fifty
const allSecs = A.GUIDE.sections.flatMap(s => s.items.map(i => i.id));
for (let r = 0; r < 40; r++) {
  const f = A.finalFifty(50);
  ok(f.length === 50, 'the fifty is fifty questions', f.length);
  ok(new Set(f.map(q => q.key)).size === 50, 'no repeated question in the fifty');
  const covered = new Set(f.map(q => q.sec));
  ok(covered.size === 24 && allSecs.every(s => covered.has(s)), 'the fifty covers every section of the outline', covered.size);
  allSecs.forEach(s => ok(f.filter(q => q.sec === s).length >= 2, 'at least two questions on ' + A.SEC_TITLES[s], f.filter(q => q.sec === s).length));
  ok(new Set(f.map(q => q.tp)).size === 5, 'the fifty spans all five topics');
  ok(f.every(q => q.text && q.explain && q.opts.some(o => o.ok)), 'every question in the fifty is answerable and explained');
  ok(f.filter(q => q.hot === 3).length >= 14, 'the fifty leans on the top tier', f.filter(q => q.hot === 3).length);
  const means = f.map(q => A.meaningOf(q));
  let clash = 0;
  for (let x = 0; x < means.length; x++) for (let y = x + 1; y < means.length; y++) if (A.sameThing(means[x], means[y])) clash++;
  ok(clash === 0, 'no two questions in the fifty ask the same thing', clash);
}
for (let r = 0; r < 40; r++) {
  const list = r % 2 ? A.mockQuestions({ n: 40, types: 'all', focus: 'all' }) : A.topicQuestions(tps[r % 5], null, 10);
  const mn = list.map(q => A.meaningOf(q));
  let clash = 0;
  for (let x = 0; x < mn.length; x++) for (let y = x + 1; y < mn.length; y++) if (A.sameThing(mn[x], mn[y])) clash++;
  ok(clash === 0, 'no duplicate meanings in a generated quiz', clash);
}
console.log('  tiers: five+=' + byTier[3].length + ' four=' + byTier[2].length + ' three=' + byTier[1].length + ' fewer=' + byTier[0].length);

// ---------- 4. question bank ----------
head('question bank');
tps.forEach(tp => {
  const mine = A.QB.filter(q => q.tp === tp && !q.off);
  ok(mine.length >= 35, 'at least 35 questions on ' + tp, mine.length);
  ok(mine.filter(q => q.t === 'tf').length >= 5, 'true/false on ' + tp, mine.filter(q => q.t === 'tf').length);
  ok(mine.filter(q => q.ap).length >= 5, 'application questions on ' + tp, mine.filter(q => q.ap).length);
});
ok(A.QB.filter(q => q.off).length === 0, 'no question is switched off');
A.QB.forEach((q, i) => {
  ok(tps.includes(q.tp) || q.tp === 'q3', 'known topic #' + i);
  ok(q.q && q.e, 'question and explanation #' + i);
  if (q.t === 'mc') {
    ok(q.w.length === 3, 'three wrong answers #' + i, q.q);
    ok(!q.w.includes(q.a), 'right answer not among the wrong #' + i, q.q);
    ok(new Set([q.a].concat(q.w)).size === 4, 'four distinct options #' + i, q.q);
  } else ok(q.t === 'tf' && typeof q.a === 'boolean', 'true/false has a boolean answer #' + i);
});
ok(new Set(A.QB.map(q => q.q)).size === A.QB.length, 'no duplicate questions');

// ---------- option length must not give the answer away ----------
head('option length is not a tell');
const mcq = A.QB.filter(q => q.t === 'mc');
const olen = s => String(s).replace(/<[^>]+>/g, '').length;
const longestShare = mcq.filter(q => olen(q.a) > Math.max(...q.w.map(olen))).length / mcq.length;
const lenRatio = mcq.reduce((t, q) => t + olen(q.a) / (q.w.reduce((u, x) => u + olen(x), 0) / q.w.length), 0) / mcq.length;
ok(longestShare <= 0.42, 'the right answer is not almost always the longest option', (longestShare * 100).toFixed(1) + '% (chance 25%, target <35%)');
ok(lenRatio <= 1.20, 'the right answer is not far wordier than the wrong ones', lenRatio.toFixed(2) + ' (target 1.00)');
console.log('  right answer longest: ' + (longestShare * 100).toFixed(1) + '%   length ratio: ' + lenRatio.toFixed(2));
mcq.forEach((q, i) => ok(!(olen(q.a) > 60 && q.w.some(x => olen(x) < 20)), 'question #' + i + ' has no throwaway distractor beside a long answer', q.q));
console.log('  questions: ' + A.QB.length);

head('question generators (100 runs)');
for (let run = 0; run < 100; run++) {
  tps.forEach(tp => {
    const qs = A.topicQuestions(tp, null, 10);
    ok(qs.length === 10, tp + ': ten questions', qs.length);
    ok(new Set(qs.map(q => q.key.replace(/r$/, ''))).size === qs.length, tp + ': no repeated question', qs.map(q => q.key).join(','));
    ok(qs.every(q => q.sec && SEC[q.sec] === tp), tp + ': every quiz question, generated ones included, names its section', qs.map(q => q.sec).join(','));
    qs.forEach(q => {
      ok(q.opts.filter(o => o.ok).length === 1, tp + ': exactly one right answer', q.text);
      ok(new Set(q.opts.map(o => o.html)).size === q.opts.length, tp + ': options distinct', q.opts.map(o => o.html).join(' | '));
      ok(q.opts.length === (q.kind === 'tf' ? 2 : 4), tp + ': option count', q.kind + ' ' + q.opts.length);
      ok(q.tp === tp && q.explain && q.miss, tp + ': question complete');
    });
    ok(qs.filter(q => q.kind === 'id').length <= 3, tp + ': identification at most a third');
  });
  [15, 25, 40, 60].forEach(n => {
    const mx = A.mockQuestions({ n, types: 'all', topics: [] });
    ok(mx.length === n, 'practice exam fills to ' + n, mx.length);
    tps.forEach(tp => ok(mx.some(q => q.tp === tp), 'practice exam of ' + n + ' covers ' + tp));
    ok(new Set(mx.map(q => q.key)).size === mx.length, 'practice exam has no repeats');
    ok(mx.every(q => q.sec && SEC[q.sec] === q.tp), 'every practice-exam question names its section');
  });
  ok(A.mockQuestions({ n: 25, types: 'tf', topics: [] }).every(q => q.kind === 'tf'), 'true/false-only exam');
  ok(A.mockQuestions({ n: 25, types: 'ap', topics: [] }).every(q => q.ap), 'application-only exam');
  ok(A.mockQuestions({ n: 15, types: 'all', topics: ['strategy'] }).every(q => q.tp === 'strategy'), 'single-topic exam');
}
const sampleKeys = A.topicQuestions('decide', null, 10).map(q => q.key);
const back = A.questionsByKeys(sampleKeys);
ok(back.length === sampleKeys.length && back.every((q, i) => q.key === sampleKeys[i]), 'practice-the-misses rebuilds the same questions');
ok(A.questionsByKeys(['nonsense:99', 'plan:999999', 'c9:1']).length === 0, 'bad keys are ignored');

// ---------- 5. decks, match, verdicts ----------
head('decks, match and verdicts');
tps.forEach(tp => {
  A.CH[tp].decks.forEach(d => ok(A.deckFor(tp, d.id).length === d.cards.length, 'deck loads: ' + tp + '/' + d.id));
  ok(A.deckFor(tp, A.CH[tp].decks[0].id).every(c => /Section · /.test(c.back)), 'card backs name their section: ' + tp);
  for (let run = 0; run < 30; run++) {
    const r = A.matchRound(tp, 6);
    ok(r.items.length === 6 && new Set(r.items.map(x => x.right)).size === 6 && new Set(r.items.map(x => x.left)).size === 6, tp + ' match round: six unique pairs');
  }
});
const lines = A.VERDICTS.flatMap(v => v.t.concat([v.a])).join(' | ');
ok(!/cheeks|goat|bruh|cooked|twin|\bbro\b|\bchat\b|aura|npc|crack a|\bnah\b|ain.t|dawg|\bW\b|no cap|lock in|\bhim\b|\bL\b|mid\.|headlock|trenches/i.test(lines), 'no slang anywhere in the verdicts', lines);
ok(A.VERDICTS.length === 5 && A.VERDICTS.every(v => v.t.length >= 3 && v.a.length > 20), 'five verdict bands, each with several gracious lines and advice');
ok(/<b>Correct\.<\/b>/.test(src) && /<b>Not this one\.<\/b>/.test(src), 'answer feedback is plain');
[100, 90, 75, 55, 10].forEach(p => ok(!!A.verdictFor(p).t, 'verdict for ' + p));

// ---------- 6. markup ----------
head('markup');
const ids = [...new Set((src.match(/\$\("#([A-Za-z0-9_-]+)"/g) || []).map(s => s.slice(4, -1)))];
const dynamic = ['gCount', 'gBar', 'gPrint', 'mxN', 'mxT', 'mxP', 'mxF', 'mxStart', 'mxFifty'];
const missing = ids.filter(id => !html.includes('id="' + id + '"') && !dynamic.includes(id));
ok(missing.length === 0, 'every element referenced by id exists', missing.join(', '));
tps.forEach(tp => ['Notes', 'Cards', 'Match', 'Quiz'].forEach(s => ok(html.includes('id="' + tp + s + '"'), 'topic root exists: ' + tp + s)));
const panels = [...new Set((html.match(/data-panel="([^"]+)"/g) || []).map(s => s.slice(12, -1)))];
console.log('  panels: ' + panels.join(', '));
panels.forEach(pn => {
  const [t, mo] = pn.split('/');
  if (pn === 'more/notes') return;   // notes only: nothing to switch
  ok(html.includes('data-modes="' + t + '"'), 'panel ' + pn + ' has a mode switch');
  ok(new RegExp('data-modes="' + t + '"[\\s\\S]*?data-mode="' + mo + '"').test(html), 'panel ' + pn + ' has its mode button');
});
['guide'].concat(tps, ['exam']).forEach(t => ok(html.includes('data-topic="' + t + '"') && html.includes('id="topic-' + t + '"'), 'topic ' + t + ' has a tab and a section'));
ok((html.match(/class="topic-btn"/g) || []).length === 9, 'nine tabs: Quiz 3, and eight under Everything else');
ok(/<nav class="topics" role="tablist"[^>]*>\s*<button class="topic-btn" role="tab" data-topic="q3" aria-selected="true">Quiz 3<\/button>\s*<button class="group-btn"[^>]*>Everything else<\/button>\s*<\/nav>/.test(html), 'the main bar holds only Quiz 3 and Everything else');
ok((html.split('id="elseNav"')[1].split('</nav>')[0].match(/class="topic-btn"/g) || []).length === 8, 'the other eight tabs sit under Everything else');
ok(/\.topics\[hidden\]\{display:none\}/.test(html), 'the hidden second row of tabs really is hidden');
ok(A.CH.more.notes.length === 7 && A.CH.more.notes.every(n => /^more-/.test(n.id) && /^Chapter (9|10): /.test(n.h)) && !A.CH.more.decks, 'the rest of Chapters 9 and 10 is back as notes only');
ok(!A.STUDY.includes('more') && A.QB.every(q => q.tp !== 'more'), 'the extra notes carry no questions and no flashcards');
const moreIds = (A.CH.more.notes.map(n => n.body).join(' ').match(/ id="([a-z0-9-]+)"/g) || []);
ok(moreIds.length > 15 && moreIds.every(x => /id="more-/.test(x)), 'the extra notes use their own anchors', moreIds.length);

// ---------- Quiz 3 (Chapters 9 and 10) ----------
head('quiz 3');
const q3 = A.QB.filter(q => q.tp === 'q3'), q3strip = s => String(s).replace(/<[^>]+>/g, '');
const q3html = A.CH.q3.notes.map(n => n.body).join(' '), q3body = q3strip(q3html);
ok(A.Q3_SECTIONS.length === 1 && A.CH.q3.notes.length === 1 && 'g-' + A.CH.q3.notes[0].id === A.Q3_SECTIONS[0].id, 'one section only: the last three slides');
ok(A.CH.q3.notes[0].body.indexOf('<div class="point"><b>The point</b>') === 0 && q3body.length < 3200, 'the notes are short', q3body.length);
ok(A.Q3_TERMS.map(t => t[0]).join('|') === 'Teams|Social loafing|Reengineering|Centralization|Groupthink|Empowerment|Unity of command|Autonomy|Chain of command|Member domination|Organizational structure|Departmentalization|Organizational processes', 'the thirteen terms, in the order on the slide');
const find = re => q3.find(q => re.test(q.q));
ok(find(/product departmentalization is costly/).a === 'duplication', 'review slide 1: duplication');
ok(find(/laziness and lack of desire/).a === false, 'review slide 2: social loafing is not defined as laziness');
ok(find(/standardization is important, an organization may want to stay centralized/).a === true, 'review slide 3: standardization means centralized');
['Duplication', 'not always laziness', 'Initial high turnover', 'Social loafing', 'Groupthink', 'Member domination', 'Customer satisfaction', 'cross training', 'multiple perspectives',
 'clear, engaging reason or purpose', 'cannot be done unless people work together', 'Rewards can be provided for teamwork', 'Ample resources', 'complementary skills', 'mutually accountable', 'just one boss', 'Permanently'].forEach(v => ok(q3body.includes(v), 'quiz 3 notes include: ' + v));
ok(!/Mechanistic|Job enrichment|Self-designing|De-norming|Gainsharing|Matrix|Pooled/.test(q3html + JSON.stringify(q3) + JSON.stringify(A.CH.q3.decks)), 'nothing beyond the last three slides is on the tab');
ok((q3html.match(/<h3 class="sub"/g) || []).length === 3, 'three parts: the questions, the lists, the terms');
A.Q3_SECTIONS.forEach(s => {
  const mine = q3.filter(q => q.sec === s.id);
  ok(mine.length >= 8, 'at least eight questions for ' + s.t, mine.length);
  ok(mine.some(q => q.t === 'tf') && mine.some(q => q.ap), 'true/false and application for ' + s.t);
  ok(A.CH.q3.decks.some(d => d.cards.some(c => c[2] === s.id)), 'flashcards for ' + s.t);
});
ok(A.CH.q3.decks.length === 2 && A.CH.q3.decks[0].cards.length === 13 && A.CH.q3.decks[1].cards.length === 7 && A.CH.q3.decks[1].match === false, 'two decks: the 13 terms, then the questions and lists', A.CH.q3.decks.map(d => d.cards.length).join(','));
A.CH.q3.decks.forEach(d => ok(new Set(d.cards.map(c => c[0])).size === d.cards.length && d.cards.every(c => c.length === 3 && A.SEC_CHAPTER[c[2]] === 'q3'), 'cards unique, each in a quiz 3 section: ' + d.id));
const allCards = A.CH.q3.decks.flatMap(d => d.cards);
ok(new Set(allCards.map(c => c[0])).size === allCards.length && new Set(allCards.map(c => c[1])).size === allCards.length, 'no term or meaning repeats across the two decks');
for (let r = 0; r < 60; r++) {
  const qs = A.topicQuestions('q3', null, 10);
  ok(qs.length === 10 && new Set(qs.map(q => q.key)).size === 10 && qs.every(q => q.tp === 'q3' && q.opts.filter(o => o.ok).length === 1), 'quiz 3: ten distinct questions, one right answer each');
  ok(A.mockQuestions({ n: 40, types: 'all' }).every(q => q.tp !== 'q3'), 'quiz 3 never enters the practice exam');
  const m = A.matchRound('q3', 6); ok(m.items.length === 6, 'quiz 3: match round of six');
}
for (let r = 0; r < 10; r++) ok(A.finalFifty(50).every(q => q.tp !== 'q3'), 'quiz 3 never enters The 50');
ok(q3.length === 50, 'fifty quiz 3 questions', q3.length);
for (let r = 0; r < 20; r++) { const all = A.quiz3All(); ok(all.length === 50 && new Set(all.map(q => q.key)).size === 50 && all.every(q => q.tp === 'q3' && q.opts.filter(o => o.ok).length === 1), 'the quiz 3 quiz is all fifty, each once'); }
// no question that answers itself: every wrong choice must come from the same three slides
const Q3VOCAB = /duplication|centraliz|decentraliz|member domination|social loafing|groupthink|unity of command|chain of command|reengineer|empower|autonomy|departmentaliz|organizational|structure|process|turnover|satisfaction|quality|decision|perspectives|product development|reward|purpose|resources|independent|work together|cooperation|accountable|cohesive|interdependency|standardization|team size|alternatives|solution|problem|result|talking|effort|bosses|boss|authority|units|redesign|improvement|membership|departments|laziness|use a team|conditions|one or two|pressure/i;
q3.filter(q => q.t === 'mc').forEach(q => q.w.forEach(w => ok(Q3VOCAB.test(w), 'quiz 3 wrong choice is a near neighbour, not a throwaway', q.q + ' :: ' + w)));
ok(!/payroll|very large|base pay|shorter hours|fewer meetings|every kind of work|small, gradual|is one of the disadvantages of teams/i.test(JSON.stringify(q3)), 'the giveaway questions are gone');
ok(q3.filter(q => q.ap).length >= 10 && q3.filter(q => q.t === 'tf').length >= 10, 'ten or more scenarios and ten or more true/false', q3.filter(q => q.ap).length + '/' + q3.filter(q => q.t === 'tf').length);
const q3tf = q3.filter(q => q.t === 'tf');
ok(Math.abs(q3tf.filter(q => q.a).length - q3tf.filter(q => !q.a).length) <= 3, 'true and false are balanced', q3tf.filter(q => q.a).length + ' true / ' + q3tf.filter(q => !q.a).length + ' false');
A.Q3_TERMS.forEach(t => ok(q3.some(q => new RegExp(t[0].replace(/^Organizational /, '').replace(/e?s$/, ''), 'i').test(q.q + ' ' + q.a)), 'a question on the term: ' + t[0]));
ok(A.PAIRSETS.q3.pairs.length === 13, 'match and identification use only the 13 terms');
ok(/data-topic="q3" aria-selected="true"/.test(html) && /id="topic-guide" hidden/.test(html), 'Quiz 3 is the first, default tab');
ok((html.match(/<script>/g) || []).length === 1, 'a single script block');
['div', 'section', 'button', 'nav', 'main', 'header', 'footer', 'svg', 'symbol', 'table', 'g', 'ol', 'ul', 'h3', 'h4', 'thead', 'tbody', 'tr', 'span'].forEach(t => {
  const open = (html.match(new RegExp('<' + t + '[\\s>]', 'g')) || []).length;
  const close = (html.match(new RegExp('</' + t + '>', 'g')) || []).length;
  ok(open === close, t + ' tags balanced', open + ' vs ' + close);
});
ok(html.includes('id="flourish"') && html.includes('id="emblem"') && html.includes('class="rail left"') && html.includes('class="emblem"'), 'ornaments, emblem and side rails present');
ok(/M60 20v80M20 60h80/.test(html), 'the emblem is the quartered circle, not the marketing one');
ok(html.includes('rel="manifest"') && html.includes('sw.js') && fs.existsSync(path.join(ROOT, 'sw.js')) && fs.existsSync(path.join(ROOT, 'manifest.webmanifest')), 'PWA pieces: manifest and service worker');
ok(/"mgmt-v6"/.test(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8')) && /Principles of Management/.test(fs.readFileSync(path.join(ROOT, 'manifest.webmanifest'), 'utf8')), 'service worker and manifest are this page’s own');
ok(html.includes('og:image') && html.includes('/mgmt/preview.png'), 'link preview metadata');
ok(!/Kotler|Ch\. 5|"pom\.|["\[]c[5-8]["\]]/.test(src.replace(/\/\*[\s\S]*?\*\//g, '')), 'nothing left over from the marketing page in the code');
ok(!/�/.test(html), 'no broken characters');
console.log('  file size: ' + (fs.statSync(path.join(ROOT, 'index.html')).size / 1024).toFixed(1) + ' KB');

console.log('\n' + (fails === 0 ? 'ALL ' + checks + ' CHECKS PASSED' : fails + ' FAILURES out of ' + checks + ' checks'));
process.exit(fails ? 1 : 0);
