/* ================================================================ the Quizlet tiers
   Ten Quizlet sets for this exam (638 cards) were grouped by concept and ranked
   by how many of the ten sets test each concept. Each entry says: inside THIS
   section, a question about THIS concept is one the sets test — and how many.
     w:3  five or more of the ten sets   — Tier 1, the safest bet on the exam
     w:2  four sets                      — Tier 2
     w:1  three sets                     — Tier 3
   Anything that matches nothing here is w:0 — a concept two sets or fewer
   touch, on the page for completeness. The practice exam can drill any tier. */
var REVIEW_NOTE = "Ten Quizlet sets for this exam \u2014 638 cards \u2014 were grouped by concept and ranked by how many of the ten test each one. Questions here are labelled by that count: five or more sets, four, three, or fewer. The first group is the safest bet; the last is on the page in case.";

var CONFIRMED = [
 /* ---- planning ---- */
 {sec:"g-plan-polc",   w:3, k:/planning|four functions|organizing, leading|most fundamental|planning\/control/i},
 {sec:"g-plan-polc",   w:3, k:/goal|plan\b|future end|means/i},
 {sec:"g-plan-polc",   w:3, k:/mission|foundation|derived/i},

 {sec:"g-plan-mission", w:3, k:/mission|vision|values|reason for existing|wants to become|purpose/i},

 {sec:"g-plan-levels", w:3, k:/strategic|tactical|operational|top management|middle manage|first-line|corporate|business|functional|short-term|long-term|years|months|weeks/i},

 {sec:"g-plan-types",  w:2, k:/standing|single-use|policy|procedure|rule|program|project|budget/i},

 {sec:"g-plan-smart",  w:3, k:/management by objectives|\bMBO\b|Drucker|jointly|management by means|\bMBM\b/i},
 {sec:"g-plan-smart",  w:2, k:/SMART|specific, measurable|measurable|target date|time-bound/i},
 {sec:"g-plan-smart",  w:1, k:/stretch|BHAG|audacious|cascad/i},

 {sec:"g-plan-contingency", w:2, k:/contingency|scenario|alternative course|plausible futures/i},

 /* ---- decision making ---- */
 {sec:"g-dec-process", w:3, k:/step|problem|alternative|rational|classical|implement|evaluat|decision/i},

 {sec:"g-dec-nonrational", w:3, k:/satisfic|bounded|administrative model|good enough|first alternative|acceptable|optimal/i},
 {sec:"g-dec-nonrational", w:1, k:/intuiti|gut|experience|judgment/i},

 {sec:"g-dec-types",   w:2, k:/programmed|routine|recurring|unique|unstructured/i},
 {sec:"g-dec-types",   w:1, k:/certainty|\brisk\b|uncertainty|ambiguity|probabilit/i},

 {sec:"g-dec-styles",  w:2, k:/directive|analytical|conceptual|behavioral|decision-making style|decision style|tolerance for ambiguity|value orientation/i},
 {sec:"g-dec-styles",  w:1, k:/escalation|sunk/i},

 {sec:"g-dec-group",   w:3, k:/groupthink|unanimity|cohesive|pressure to agree|devil/i},
 {sec:"g-dec-group",   w:2, k:/brainstorm|withhold|criticism|brainwriting/i},
 {sec:"g-dec-group",   w:1, k:/advantage|disadvantage|dominat|goal displacement|pool of knowledge|satisfic/i},

 /* ---- strategic management ---- */
 {sec:"g-str-process", w:3, k:/strategic management process|five steps|mission and vision|current reality|grand strategy|strategic control|begins with|ends with|feedback loop|step of the process/i},
 {sec:"g-str-process", w:2, k:/competitive advantage|core competence|strategic positioning|synergy|sets the organization apart|distinctive|target customers/i},

 {sec:"g-str-swot",    w:3, k:/SWOT|strength|weakness|opportunit|threat|internal|external|situational/i},
 {sec:"g-str-swot",    w:2, k:/scanning|PESTEL|macroenvironment|task environment|competitive intelligence|trend analysis|inflation|suppliers|competitors/i},

 {sec:"g-str-porter",  w:2, k:/five forces|substitute|new entrants|supplier|buyer|rivalry|barriers to entry/i},
 {sec:"g-str-porter",  w:2, k:/cost leadership|differentiation|focus|Aldi|Dior|competitive strateg|market scope|uniqueness/i},

 {sec:"g-str-bcg",     w:2, k:/BCG|\bstar|cash cow|question mark|\bdog|market growth|market share/i},
 {sec:"g-str-bcg",     w:2, k:/grand strateg|growth|stability|defensive|retrench|concentration|integration|diversif/i},

 /* ---- organizing ---- */
 {sec:"g-org-structure", w:3, k:/organization chart|org chart|span of control|tall|flat|centraliz|decentraliz|hierarchy|specialization|unity of command|line position|staff position|chain of command|reports? to|levels of management/i},

 {sec:"g-org-types",   w:3, k:/functional|divisional|matrix|two bosses|simple structure|team-based|network|virtual|mechanistic|organic|Ford|FedEx|customer|geograph|product division/i},

 {sec:"g-org-authority", w:1, k:/authority|responsibility|accountab|delegat|unity of command|line authority|staff authority/i},

 /* organizational culture is in fewer than three sets — every question stays w:0 on purpose */

 /* ---- people & change ---- */
 {sec:"g-ppl-change",  w:1, k:/Lewin|unfreez|refreez|change|resist/i},

 {sec:"g-ppl-motivation", w:1, k:/Maslow|hierarchy of needs|expectancy|instrumentality|valence|goal-setting|Herzberg|hygiene|motivat|job enrichment|job enlargement|equity|McClelland/i},

 {sec:"g-ppl-hr",      w:1, k:/job description|job specification|job analysis|EEO|Title VII|behavioral-description|behavioral interview|structured interview|recruit|selection|appraisal|360|Civil Rights/i},

 {sec:"g-ppl-groups",  w:1, k:/\bgroup|\bteam|norm|forming|storming|performing|adjourning|communication|grapevine|media richness|leader|power|legitimate|referent|expert|coercive|transformational|transactional|Fiedler|initiating structure/i},

 {sec:"g-ppl-global",  w:1, k:/tariff|quota|embargo|licens|franchis|joint venture|subsidiary|export|Hofstede|individualis|power distance|uncertainty avoidance|monochronic|polychronic|high-context|low-context|ethnocentric|polycentric|geocentric|culture/i}
];

/* The four labels a question can carry. */
var TIERS = [
 {w:3, t:"In five or more sets", s:"Five to seven of the ten Quizlet sets test this. The safest bet on the exam."},
 {w:2, t:"In four sets",         s:"Four of the ten Quizlet sets test this."},
 {w:1, t:"In three sets",        s:"Three of the ten Quizlet sets test this."},
 {w:0, t:"In fewer than three",  s:"Two sets or fewer touch this \u2014 on the page for completeness, in case the exam goes there."}
];
