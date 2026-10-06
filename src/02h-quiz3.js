/* ================================================================ Quiz #3 — Chapters 9 and 10 (Wed Oct 7)
   Only what is on the last three slides of the professor's Chapter 10 deck, which he said to
   give special attention to: one fill-in, two true/false, the advantages / disadvantages and
   use / do-not-use lists, and thirteen terms. Nothing else from the chapters is on this tab.
   Team terms are worded as on his slides; the Chapter 9 terms follow the textbook (Williams,
   MGMT 13e), since no Chapter 9 slides were provided.
   This tab stands apart from the Exam 2 guide: its questions never enter the practice exam
   or The 50, and they carry no Quizlet tier.                                                 */
var Q3_SECTIONS = [
 {id:"g-q3-hints", t:"Quiz 3: the last three slides"}
];
var Q3_TERMS = [   /* the thirteen terms on the last slide, in its order */
 ["Teams","A small number of people with complementary skills who are mutually accountable for a common purpose, performance goals and improving interdependency","g-q3-hints"],
 ["Social loafing","Team members withhold their efforts and fail to perform their share of the work","g-q3-hints"],
 ["Reengineering","The fundamental rethinking and radical redesign of business processes for dramatic gains in cost, quality, service and speed","g-q3-hints"],
 ["Centralization","Most authority is located at the upper levels of the organization","g-q3-hints"],
 ["Groupthink","Members of a highly cohesive team feel pressure not to disagree, so few alternatives are considered","g-q3-hints"],
 ["Empowerment","Permanently passing decision-making authority and responsibility from managers to workers, with the information and resources they need","g-q3-hints"],
 ["Unity of command","Workers should report to just one boss","g-q3-hints"],
 ["Autonomy","The degree to which workers have the discretion, freedom and independence to decide how and when to do their jobs","g-q3-hints"],
 ["Chain of command","The vertical line of authority that clarifies who reports to whom","g-q3-hints"],
 ["Member domination","One or two people dominate the team’s discussions","g-q3-hints"],
 ["Organizational structure","The vertical and horizontal configuration of departments, authority and jobs within a company","g-q3-hints"],
 ["Departmentalization","Subdividing work and workers into separate units responsible for particular tasks","g-q3-hints"],
 ["Organizational processes","The collection of activities that transform inputs into outputs that customers value","g-q3-hints"]
];

CH.q3 = {n:0, title:"Quiz 3", short:"Quiz 3",
 notes:[
  {id:"q3-hints", h:"Quiz 3: the last three slides", body:
   '<div class="point"><b>The point</b><p>Three questions, two lists and thirteen terms. That is everything on the last three slides.</p><p class="able"><b>Be able to</b> answer the three questions, give both lists, and define the thirteen terms.</p></div>'+
   '<h3 class="sub" id="q3-three">1 &middot; The three questions</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>On the slide</th><th>Answer</th></tr></thead><tbody>'+
   '<tr><td class="sm">One of the disadvantages associated with <b>product departmentalization</b> is costly ____.</td><td class="head">Duplication</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> Social loafing is defined as a team member failing to perform because of laziness and lack of desire.</td><td class="head">False</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> If standardization is important, the organization may want to stay centralized. If not, decentralization may be considered.</td><td class="head">True</td></tr>'+
   '</tbody></table></div>'+
   '<div class="exam-tip"><b>Why the social loafing one is false</b>Social loafing is <strong>withholding effort and not doing your share of the work</strong>. It is <strong>not always laziness</strong>.</div>'+
   '<h3 class="sub" id="q3-lists">2 &middot; The two lists</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Advantages of teams</th><th>Disadvantages of teams</th></tr></thead><tbody>'+
   '<tr><td class="sm">Customer satisfaction<br>Product and service quality<br>Speed and efficiency in product development<br>Job satisfaction (cross training)<br>Better decisions (multiple perspectives)</td>'+
   '<td class="sm">Initial high turnover<br><b>Social loafing</b><br><b>Groupthink</b><br><b>Member domination</b></td></tr></tbody></table></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Use teams when</th><th>Do not use teams when</th></tr></thead><tbody>'+
   '<tr><td class="sm">There is a clear, engaging reason or purpose</td><td class="sm">There is no clear, engaging reason or purpose</td></tr>'+
   '<tr><td class="sm">The job cannot be done unless people work together</td><td class="sm">The job can be done by people working independently</td></tr>'+
   '<tr><td class="sm">Rewards can be provided for teamwork and team performance</td><td class="sm">Rewards are provided for individual performance and effort</td></tr>'+
   '<tr><td class="sm">Ample resources are available</td><td class="sm">The necessary resources are not available</td></tr></tbody></table></div>'+
   '<h3 class="sub" id="q3-terms">3 &middot; The thirteen terms</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>'+
   Q3_TERMS.map(function(t){ return '<tr><td class="head">'+t[0]+'</td><td class="sm">'+t[1]+'.</td></tr>'; }).join("")+
   '</tbody></table></div>'}
 ],
 decks:[
  {id:"thirteen", label:"The 13 terms", cards:Q3_TERMS},
  {id:"lists", label:"Questions & lists", match:false, cards:[
   ["Product departmentalization: a disadvantage is costly…","Duplication","g-q3-hints"],
   ["True or false: social loafing is defined as failing to perform because of laziness and lack of desire","False — it is withholding effort and not doing your share; not always laziness","g-q3-hints"],
   ["True or false: if standardization is important, stay centralized; if not, consider decentralization","True","g-q3-hints"],
   ["Advantages of teams","Customer satisfaction · quality · speed in product development · job satisfaction · better decisions","g-q3-hints"],
   ["Disadvantages of teams","Initial high turnover · social loafing · groupthink · member domination","g-q3-hints"],
   ["Use teams when…","Clear, engaging purpose · the job needs people working together · rewards for teamwork · ample resources","g-q3-hints"],
   ["Do not use teams when…","No clear purpose · people can work independently · rewards are individual · resources are not available","g-q3-hints"]]}
 ]
};

QB = QB.concat([
 /* Every wrong choice is a near neighbour: another of the thirteen terms, or an item from the
    opposite list. True/false statements are false the way the professor's own is false —
    one definition carrying another term's meaning, or one word changed.                     */

 /* ---- the three questions on the slides ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"One of the disadvantages associated with product departmentalization is costly:",a:"duplication",w:["centralization","member domination","social loafing"],e:"Straight from the review slide: each product unit repeats the same functions."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Social loafing is defined as a team member failing to perform because of laziness and lack of desire.",a:false,e:"False — it is withholding effort and not doing one’s share of the work; the slide adds that it is not always laziness."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"If standardization is important, an organization may want to stay centralized; if not, decentralization may be considered.",a:true,e:"True — this is the rule on the professor’s last review slide."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"If standardization is important, an organization should decentralize so each unit can set its own procedures.",a:false,e:"False — the slide says the reverse: important standardization points to staying centralized."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Costly duplication is a disadvantage of which of these?",a:"Product departmentalization",w:["Centralization","Unity of command","Reengineering"],e:"Each product unit needs its own copy of the same functions."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A firm has one division for trucks and another for motorcycles, and each runs its own marketing and finance staff. Which disadvantage is it paying for?",a:"Duplication",w:["Groupthink","Social loafing","Member domination"],e:"Product departmentalization — the other three are disadvantages of teams, not of this structure."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A restaurant chain needs every location to prepare each menu item exactly the same way. By the review slide, what should it do?",a:"Stay centralized",w:["Decentralize to each store","Empower each shift","Reengineer every recipe"],e:"When standardization is important, the organization may want to stay centralized."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A teammate stops contributing because she believes her ideas will be ignored, not because she is lazy. Is this still social loafing?",a:"Yes — she withholds effort; the cause need not be laziness",w:["No — social loafing is defined by laziness and lack of desire","No — withholding ideas is the definition of groupthink","Yes — but only if the rest of the team is highly cohesive"],e:"Social loafing is withholding effort and not doing one’s share; it is not always laziness."},

 /* ---- advantages and disadvantages ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is NOT one of the disadvantages of teams on the slide?",a:"Costly duplication",w:["Initial high turnover","Social loafing","Member domination"],e:"Duplication is the disadvantage of product departmentalization. The team list: turnover, social loafing, groupthink, member domination."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is an advantage of teams, not a disadvantage?",a:"Group decision making",w:["Groupthink","Member domination","Initial high turnover"],e:"Group decision making brings multiple perspectives; groupthink is what goes wrong with it."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which pair holds one advantage and one disadvantage of teams?",a:"Job satisfaction; social loafing",w:["Groupthink; member domination","Customer satisfaction; product quality","Initial high turnover; groupthink"],e:"Job satisfaction is an advantage; social loafing is a disadvantage. The other pairs sit on one side only."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"On the slide, cross training is tied to which advantage of teams?",a:"Job satisfaction",w:["Customer satisfaction","Product and service quality","Group decision making"],e:"“Increase job satisfaction — cross training.”"},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"On the slide, multiple perspectives are tied to which advantage of teams?",a:"Group decision making",w:["Job satisfaction","Customer satisfaction","Speed in product development"],e:"“Group decision making — multiple perspectives.”"},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Teams do a much better job than individuals at which two steps of decision making?",a:"Defining the problem; generating alternatives",w:["Choosing a solution; carrying it out","Generating alternatives; choosing a solution","Defining the problem; evaluating the result"],e:"The slide names exactly these two steps."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Turnover tends to be high when a company first moves to teams.",a:true,e:"True — initial high turnover is the first disadvantage listed."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Teams outperform individuals mainly at choosing the final solution.",a:false,e:"False — their edge is in defining the problem and generating alternative solutions."},

 /* ---- use / do not use ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is a reason NOT to use teams?",a:"Rewards are given for individual performance",w:["Rewards can be given for team performance","The job cannot be done without cooperation","There is a clear, engaging purpose"],e:"Exhibit 10.1 — the other three are reasons to use teams."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is a reason to use teams?",a:"The job cannot be done unless people work together",w:["The job can be done by people working independently","Rewards are provided for individual effort","The necessary resources are not available"],e:"Exhibit 10.1 — plus a clear purpose, team rewards and ample resources."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Exhibit 10.1 gives four tests for using teams: purpose, whether the job needs people working together, rewards, and:",a:"resources",w:["autonomy","team size","cohesiveness"],e:"Use teams when ample resources are available; do not when the necessary resources are missing."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Teams are a good choice when the job can be done by people working independently.",a:false,e:"False — that is a do-not-use condition; use teams when the job cannot be done unless people work together."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"One condition for using teams is that rewards can be provided for teamwork and team performance.",a:true,e:"True — when rewards go to individual performance and effort, do not use teams."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A sales office pays each rep only on personal commission, and reps never need each other to close a sale. Which two conditions say not to use a team here?",a:"Individual rewards; independent work",w:["No clear purpose; no resources","Individual rewards; no resources","Independent work; no clear purpose"],e:"Rewards are individual and the job can be done independently. Nothing is said about purpose or resources."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A manager has a clear, engaging goal that takes five people working together, and bonuses for the group’s result — but no budget, tools or time for it. What should she do?",a:"Not use a team: the necessary resources are missing",w:["Use a team: three of the four conditions are enough","Use a team: a clear purpose outweighs the rest","Not use a team: the rewards are individual"],e:"Exhibit 10.1 — do not use teams when the necessary resources are not available."},

 /* ---- the thirteen terms ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"In the definition of a work team, the members have complementary skills and are:",a:"mutually accountable",w:["individually accountable","independent of one another","highly cohesive"],e:"Mutually accountable for a common purpose, performance goals and improving interdependency."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Team members are mutually accountable for pursuing a common purpose, achieving performance goals, and improving:",a:"interdependency",w:["autonomy","cohesiveness","standardization"],e:"The third part of the slide’s definition of a work team."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Members of a highly cohesive team feel pressure not to disagree with each other. Which term is this?",a:"Groupthink",w:["Member domination","Social loafing","Unity of command"],e:"It leads to a limited number of alternatives."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Groupthink and member domination both hurt team discussion. What sets groupthink apart?",a:"Everyone feels pressure to agree",w:["One or two people do the talking","Some members withhold their effort","Each member reports to two bosses"],e:"Member domination is one or two people dominating; social loafing is withheld effort."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Groupthink is when one or two people dominate a team’s discussions.",a:false,e:"False — that is member domination; groupthink is pressure not to disagree in a highly cohesive team."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Groupthink tends to happen in teams that are highly cohesive.",a:true,e:"True — the closer the team, the stronger the pressure not to disagree."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A close-knit team quickly settles on the first idea raised. Two members have doubts but say nothing, to keep the peace. Which problem is this?",a:"Groupthink",w:["Member domination","Social loafing","Centralization"],e:"Pressure not to disagree, so few alternatives get considered. Nobody is dominating, and nobody is skipping work."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"In every meeting two outspoken people do nearly all the talking, and the team adopts whatever they propose. Which problem is this?",a:"Member domination",w:["Groupthink","Social loafing","Chain of command"],e:"One or two people dominate team discussions."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which term means workers should report to just one boss?",a:"Unity of command",w:["Chain of command","Centralization","Organizational structure"],e:"Chain of command is the vertical line showing who reports to whom."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which term is the vertical line of authority that clarifies who reports to whom?",a:"Chain of command",w:["Unity of command","Organizational structure","Departmentalization"],e:"Unity of command is the one-boss principle."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Unity of command is the vertical line of authority that shows who reports to whom throughout the organization.",a:false,e:"False — that describes the chain of command; unity of command means one boss per worker."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"An engineer answers to both a project manager and a department head, and the two give her conflicting deadlines. Which principle is being broken?",a:"Unity of command",w:["Chain of command","Autonomy","Centralization"],e:"Workers should report to just one boss."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which term describes most authority being located at the upper levels of the organization?",a:"Centralization",w:["Empowerment","Chain of command","Departmentalization"],e:"Empowerment moves authority the other way, down to workers."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Centralization and empowerment both answer one question. Which?",a:"Where decision-making authority sits",w:["How work is divided into units","How many bosses a worker has","How processes are redesigned"],e:"Centralization keeps it at the top; empowerment passes it to workers."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Autonomy and empowerment are easy to mix up. Which one is autonomy?",a:"Freedom to decide how and when to do your job",w:["Authority permanently passed down from managers","Most authority kept at the upper levels","Reporting to only one boss"],e:"Autonomy is discretion, freedom and independence; empowerment is the permanent passing of authority and responsibility."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Empowerment means managers lend workers decision-making authority for a task and take it back afterwards.",a:false,e:"False — the passing of authority and responsibility is permanent, with the information and resources to use it."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A hotel permanently lets front-desk clerks issue refunds on their own judgment and gives them the booking data to decide. Which term is this?",a:"Empowerment",w:["Centralization","Reengineering","Departmentalization"],e:"Decision authority and responsibility passed permanently to workers, with information and resources."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which term is the vertical and horizontal configuration of departments, authority and jobs?",a:"Organizational structure",w:["Organizational processes","Departmentalization","Chain of command"],e:"Processes are the activities that turn inputs into outputs customers value."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which term is the collection of activities that transform inputs into outputs customers value?",a:"Organizational processes",w:["Organizational structure","Reengineering","Departmentalization"],e:"Reengineering is the radical redesign of those processes."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Organizational structure is the collection of activities that transform inputs into outputs that customers value.",a:false,e:"False — that is an organizational process; structure is the configuration of departments, authority and jobs."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which term is subdividing work and workers into separate units responsible for particular tasks?",a:"Departmentalization",w:["Organizational structure","Reengineering","Centralization"],e:"Product departmentalization is one way to do it — at the cost of duplication."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"What does reengineering redesign?",a:"Business processes",w:["The chain of command","Team membership","Departments"],e:"The fundamental rethinking and radical redesign of business processes."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which words belong in the definition of reengineering?",a:"Fundamental rethinking and radical redesign",w:["Gradual, continuous improvement","Permanent passing of authority","Subdividing work into units"],e:"For dramatic gains in cost, quality, service and speed."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"An insurer scraps its seven-step claims procedure and rebuilds it from nothing, cutting payout time from weeks to hours. Which term is this?",a:"Reengineering",w:["Empowerment","Departmentalization","Centralization"],e:"A radical redesign of a business process for a dramatic gain in speed."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Autonomy is the degree to which workers have the discretion, freedom and independence to decide how and when to accomplish their jobs.",a:true,e:"True — the level of being self-governing, and the key difference among work teams."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Member domination is when one or two people dominate a team’s discussions.",a:true,e:"True — groupthink, by contrast, is shared pressure not to disagree."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Reengineering aims at dramatic gains through radical redesign, not at small step-by-step improvement.",a:true,e:"True — fundamental rethinking of business processes, for cost, quality, service and speed."}
]);
