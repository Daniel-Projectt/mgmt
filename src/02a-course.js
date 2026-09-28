/* ================================================================ the course
   There is no handout for this exam. The guide is what ten Quizlet sets for it
   (638 cards) agree on, grouped by concept and ranked by how many sets test
   each one. That ranking is what "Tier" means everywhere on this page.        */
var COURSE = {
 code:"Principles of Management", term:"Exam 2",
 exam:"What ten Quizlet sets agree on",
 scope:"638 cards from ten sets for this exam, grouped by concept. A concept in <b>five or more</b> sets is the safest bet; in <b>four</b> or <b>three</b>, likely; in <b>fewer</b>, on the page in case",
 rules:[
  "Learn the Tier 1 concepts cold — five to seven of the ten sets test each of them.",
  "Know the order of a process (the decision steps, the strategic management steps), not the number of steps — the sets count them differently.",
  "Where the sets disagree, the page says which answer to give and why; where a set is wrong, the page says that too.",
  "The People tab is the material only a few sets reach — study it last, unless his class went there."],
 about:"Each heading below is a concept group from the ten sets, with the tier it earned. Every question and flashcard on the page is tagged with its section and its tier, so the practice exam can drill by either."
};

var GUIDE = {sections:[
 {h:"Planning & Goals", tp:"plan", items:[
  {id:"g-plan-polc", t:"Planning and the Four Functions", a:"plan-polc",
   short:"Planning, organizing, leading, controlling. Planning is the most fundamental — setting goals and deciding how to achieve them — and it starts from the mission. Goals are future ends; plans are today’s means.",
   subs:[["POLC", "plan-polc"], ["Goals vs plans", "plan-goalsplans"]]},
  {id:"g-plan-mission", t:"Mission, Vision and Values", a:"plan-mission",
   short:"The mission says why the organization exists; the vision says what it wants to become; values say how it behaves. The mission is the foundation the rest of planning comes from.",
   subs:[["The three statements", "plan-mission"]]},
  {id:"g-plan-levels", t:"Levels of Goals and Plans", a:"plan-levels",
   short:"Strategic — top management, the whole organization, long term. Tactical — middle management, departments carrying out the strategy. Operational — first-line management, short-term specific tasks. Also corporate, business and functional levels.",
   subs:[["The three levels", "plan-levels3"], ["Time frames", "plan-time"]]},
  {id:"g-plan-types", t:"Standing and Single-Use Plans", a:"plan-types",
   short:"Standing plans repeat: policy (broad guideline), procedure (steps in order), rule (specific required action). Single-use plans are for one occasion: program, project, budget.",
   subs:[["Standing plans", "plan-standing"], ["Single-use plans", "plan-single"]]},
  {id:"g-plan-smart", t:"SMART Goals, MBO and Stretch Goals", a:"plan-smart",
   short:"SMART goals; management by objectives — jointly set goals, then use them to evaluate — from Drucker; management by means; stretch goals and BHAGs; cascading goals.",
   subs:[["SMART", "plan-smartlist"], ["MBO", "plan-mbo"], ["Stretch goals", "plan-stretch"]]},
  {id:"g-plan-contingency", t:"Contingency, Scenario and Crisis Planning", a:"plan-contingency",
   short:"Contingency plans are the alternatives for when things go wrong; scenario planning imagines several futures; crisis planning covers prevention and preparation.",
   subs:[["The three", "plan-contingency"]]}]},

 {h:"Decision Making", tp:"decide", items:[
  {id:"g-dec-process", t:"The Rational Decision-Making Process", a:"dec-process",
   short:"Identify the problem or opportunity first → generate alternatives → evaluate and choose → implement → evaluate the result. The rational (classical) model is how managers should decide: logical, optimal. Know the order, not the step count.",
   subs:[["The steps", "dec-steps"], ["The rational model", "dec-rational"]]},
  {id:"g-dec-nonrational", t:"Bounded Rationality, Satisficing and Intuition", a:"dec-nonrational",
   short:"Real decisions are bounded by time, information and capacity. Satisficing takes the first good-enough option. Intuition decides from experience. Evidence-based management decides from the best available facts.",
   subs:[["Satisficing", "dec-satisficing"], ["Intuition and evidence", "dec-intuition"]]},
  {id:"g-dec-types", t:"Programmed vs Nonprogrammed, and How Much You Know", a:"dec-types",
   short:"Programmed decisions are routine and recurring, handled by rules; nonprogrammed are unique and unstructured. Decisions are made under certainty, risk, uncertainty or ambiguity — a scale of decreasing information.",
   subs:[["Programmed vs nonprogrammed", "dec-programmed"], ["Certainty to ambiguity", "dec-conditions"]]},
  {id:"g-dec-styles", t:"Decision Styles and Biases", a:"dec-styles",
   short:"Directive, analytical, conceptual and behavioral styles, from value orientation and tolerance for ambiguity. And the traps: escalation of commitment and sunk cost, plus the other common biases.",
   subs:[["The four styles", "dec-styles4"], ["Biases", "dec-biases"]]},
  {id:"g-dec-group", t:"Group Decision Making and Groupthink", a:"dec-group",
   short:"Groups bring more knowledge and perspectives; they also suffer from domination by one person, groupthink, satisficing and goal displacement. Groupthink: the wish for unanimity overrides realistic appraisal. Brainstorming holds criticism.",
   subs:[["Pros and cons", "dec-prosons"], ["Groupthink", "dec-groupthink"], ["Brainstorming", "dec-brainstorm"]]}]},

 {h:"Strategic Management", tp:"strategy", items:[
  {id:"g-str-process", t:"The Strategic Management Process and Competitive Advantage", a:"str-process",
   short:"Establish the mission and vision → assess the current reality → formulate the grand strategy → implement → maintain strategic control. Competitive advantage is what sets the organization apart; strategic positioning preserves what is distinctive.",
   subs:[["The five steps", "str-steps"], ["Competitive advantage", "str-advantage"]]},
  {id:"g-str-swot", t:"SWOT and Environmental Scanning", a:"str-swot",
   short:"Strengths and weaknesses are internal; opportunities and threats are external. Environmental scanning watches the macroenvironment (PESTEL) and the task environment; competitive intelligence watches rivals; trend analysis projects the past forward.",
   subs:[["SWOT", "str-swotgrid"], ["Scanning and PESTEL", "str-scan"]]},
  {id:"g-str-porter", t:"Porter’s Five Forces and Competitive Strategies", a:"str-porter",
   short:"Five forces: new entrants, substitutes, supplier power, buyer power, rivalry. Four competitive strategies: cost leadership, differentiation, cost focus, focused differentiation.",
   subs:[["Five forces", "str-forces"], ["Competitive strategies", "str-generic"]]},
  {id:"g-str-bcg", t:"The BCG Matrix and Grand Strategies", a:"str-bcg",
   short:"Stars (high growth, high share), cash cows (low growth, high share), question marks (high growth, low share), dogs (low, low). Grand strategies: growth, stability, defensive. Diversification and vertical integration.",
   subs:[["BCG", "str-bcggrid"], ["Grand strategies", "str-grand"]]}]},

 {h:"Organizing", tp:"organize", items:[
  {id:"g-org-structure", t:"Organizational Structure and the Org Chart", a:"org-structure",
   short:"The chart shows vertical hierarchy and horizontal specialization. Span of control, tall versus flat, centralized versus decentralized, unity of command, line versus staff.",
   subs:[["The chart", "org-chart"], ["Span, height, centralization", "org-span"]]},
  {id:"g-org-types", t:"Types of Organizational Structure", a:"org-types",
   short:"Simple, functional (by specialty), divisional (product, customer, geographic), matrix (two bosses), team-based, network or virtual. Mechanistic versus organic.",
   subs:[["The types", "org-typeslist"], ["Mechanistic vs organic", "org-organic"]]},
  {id:"g-org-authority", t:"Authority, Responsibility and Delegation", a:"org-authority",
   short:"Authority is the right to make decisions; responsibility the obligation to perform; accountability the duty to report. Delegate authority — responsibility stays with the manager.",
   subs:[["Delegation", "org-authority"]]},
  {id:"g-org-culture", t:"Organizational Culture", a:"org-culture",
   short:"The shared beliefs and values that guide behavior. Three levels — artifacts, espoused values, basic assumptions — and four types from the competing values framework.",
   subs:[["Culture", "org-culture"]]}]},

 {h:"People & Change", tp:"people", items:[
  {id:"g-ppl-change", t:"Managing Change", a:"ppl-change",
   short:"Lewin’s three stages — unfreeze, change, refreeze. Why people resist, and the learning organization.",
   subs:[["Lewin", "ppl-lewin"]]},
  {id:"g-ppl-motivation", t:"Motivation", a:"ppl-motivation",
   short:"Maslow’s hierarchy, expectancy theory (expectancy, instrumentality, valence), goal-setting theory, and job enrichment through autonomy.",
   subs:[["The theories", "ppl-motivation"]]},
  {id:"g-ppl-hr", t:"Human Resources", a:"ppl-hr",
   short:"Job analysis, job description and job specification; EEO and Title VII; structured, unstructured and behavioral interviews.",
   subs:[["HR", "ppl-hr"]]},
  {id:"g-ppl-groups", t:"Groups, Communication and Leadership", a:"ppl-groups",
   short:"Groups versus teams and the stages of development; norms; media richness and the grapevine; the five sources of power and the leadership styles.",
   subs:[["Groups", "ppl-groupsdev"], ["Communication", "ppl-comm"], ["Leadership", "ppl-lead"]]},
  {id:"g-ppl-global", t:"Global Business and Culture", a:"ppl-global",
   short:"Tariffs and quotas; the ways to enter a foreign market from exporting to a wholly owned subsidiary, the most costly; Hofstede’s dimensions; monochronic and polychronic time.",
   subs:[["Entering a market", "ppl-entry"], ["Culture", "ppl-hofstede"]]}]}
]};
