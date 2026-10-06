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
 /* ---- the three questions ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"One of the disadvantages associated with product departmentalization is costly:",a:"duplication",w:["specialization","centralization","reengineering"],e:"Straight from the review slide: each product unit repeats the same functions."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Social loafing is defined as a team member failing to perform because of laziness and lack of desire.",a:false,e:"False — it is withholding effort and not doing one’s share of the work; the slide adds that it is not always laziness."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"If standardization is important, an organization may want to stay centralized; if not, decentralization may be considered.",a:true,e:"True — this is the rule on the professor’s last review slide."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A firm has one division for trucks and another for motorcycles, and each division runs its own marketing and finance staff. What is the cost of this design?",a:"Duplication",w:["Slow decisions","Narrow managers","Two bosses"],e:"Product departmentalization — each product unit repeats the same functions."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A restaurant chain wants every location to make each menu item exactly the same way. Where should decision authority sit?",a:"Centralized, at the top",w:["Decentralized, in each store","With each shift’s cooks","With outside suppliers"],e:"When standardization is important, stay centralized."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Standardization is NOT important to a company. By the review slide, what may it consider?",a:"Decentralization",w:["Centralization","Departmentalization","Reengineering"],e:"If standardization is important, stay centralized; if not, decentralization may be considered."},

 /* ---- advantages and disadvantages ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is a disadvantage of using teams?",a:"Member domination",w:["Cross training","Multiple perspectives","Faster product development"],e:"The disadvantages: initial high turnover, social loafing, groupthink, member domination."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is an advantage of using teams?",a:"Higher customer satisfaction",w:["Initial high turnover","Pressure to agree","Withheld effort"],e:"Also quality, speed in product development, job satisfaction and better decisions."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which list holds only disadvantages of teams?",a:"Turnover, social loafing, groupthink, domination",w:["Quality, speed, satisfaction, better decisions","Turnover, quality, groupthink, cross training","Social loafing, speed, domination, satisfaction"],e:"Initial high turnover, social loafing, groupthink and member domination."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"How do teams raise job satisfaction, by the slide?",a:"Cross training",w:["Higher base pay","Shorter hours","Fewer meetings"],e:"Learning each other’s jobs."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Teams do a much better job than individuals at which two steps of decision making?",a:"Defining the problem; generating alternatives",w:["Choosing the answer; carrying it out","Setting the budget; assigning the blame","Writing the report; presenting it"],e:"Multiple perspectives help most at these two steps."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"When teams are first introduced, turnover is often high.",a:true,e:"True — initial high turnover is the first disadvantage on the slide."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Faster product development is one of the disadvantages of teams.",a:false,e:"False — speed and efficiency in product development is an advantage."},

 /* ---- use / do not use ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Teams should NOT be used when:",a:"rewards go to individual performance",w:["there is a clear, engaging purpose","the work requires cooperation","ample resources are available"],e:"Exhibit 10.1 — the other three are reasons to use teams."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which is a condition for using teams?",a:"The job cannot be done unless people work together",w:["The job can be done by people working alone","The rewards go only to top individual performers","The resources the team needs are not available"],e:"Exhibit 10.1 — plus a clear purpose, team rewards and ample resources."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is NOT one of the four conditions for using teams?",a:"The company is very large",w:["A clear, engaging purpose","Rewards for teamwork","Ample resources"],e:"The fourth is that the job cannot be done unless people work together."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Teams should be used for every kind of work, because they always outperform individuals.",a:false,e:"False — without a clear purpose, real interdependence, team rewards and resources, do not use teams."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A sales office pays each rep only on personal commissions, and reps never need each other to close a sale. Should the manager form a team?",a:"No — individual rewards, independent work",w:["Yes — teams always raise quality","Yes — to raise cohesiveness","No — teams are too small"],e:"Two of the do-not-use conditions in Exhibit 10.1."},

 /* ---- the thirteen terms ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"A work team’s members have complementary skills and are:",a:"mutually accountable",w:["individually rewarded","independently managed","randomly assigned"],e:"For a common purpose, performance goals and improving interdependency."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Team members are mutually accountable for three things. Which is NOT one of them?",a:"Reducing the company’s payroll",w:["Pursuing a common purpose","Achieving performance goals","Improving interdependency"],e:"The definition names purpose, performance goals and interdependency."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Team members withhold their efforts and fail to do their share of the work. This is:",a:"social loafing",w:["groupthink","member domination","autonomy"],e:"They disengage from the team — and it is not always laziness."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Members of a highly cohesive team feel pressure not to disagree. This is:",a:"groupthink",w:["social loafing","member domination","empowerment"],e:"It leads to a limited number of alternatives."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"What does groupthink lead to?",a:"A limited number of alternatives",w:["Too many alternatives to choose from","A higher rate of turnover","Stronger individual rewards"],e:"Members of highly cohesive teams feel pressure not to disagree."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"In every meeting, two outspoken people do nearly all the talking and the other five stay quiet. Which team problem is this?",a:"Member domination",w:["Groupthink","Social loafing","Centralization"],e:"One or two people dominate team discussions."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"What is the key difference among kinds of work teams?",a:"Autonomy",w:["Empowerment","Groupthink","Centralization"],e:"The degree of discretion, freedom and independence over how and when to do the job."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Autonomy is the degree to which workers can decide how and when to accomplish their jobs.",a:true,e:"True — discretion, freedom and independence; the level of being self-governing."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Workers should report to just one boss. Which term is this?",a:"Unity of command",w:["Chain of command","Centralization","Autonomy"],e:"Chain of command is the vertical line of who reports to whom."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"The vertical line of authority that clarifies who reports to whom is the:",a:"chain of command",w:["unity of command","organizational process","span of autonomy"],e:"Unity of command is the one-boss principle."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"When most authority sits at the upper levels of the organization, this is:",a:"centralization",w:["empowerment","departmentalization","autonomy"],e:"Stay centralized when standardization is important."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Subdividing work and workers into separate units responsible for particular tasks is:",a:"departmentalization",w:["centralization","reengineering","empowerment"],e:"Product departmentalization is one kind — its cost is duplication."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"The collection of activities that transform inputs into outputs customers value is an organizational:",a:"process",w:["structure","department","team"],e:"Structure is the configuration of departments, authority and jobs."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"The vertical and horizontal configuration of departments, authority and jobs is the organizational:",a:"structure",w:["process","team","command"],e:"A process is the activities that turn inputs into valued outputs."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"The fundamental rethinking and radical redesign of business processes for dramatic improvement is:",a:"reengineering",w:["empowerment","departmentalization","centralization"],e:"The gains sought are in cost, quality, service and speed."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Reengineering means making small, gradual adjustments to existing processes.",a:false,e:"False — it is fundamental rethinking and radical redesign aimed at dramatic improvement."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Permanently passing decision-making authority and responsibility from managers to workers is:",a:"empowerment",w:["centralization","reengineering","unity of command"],e:"Workers also get the information and resources to make good decisions."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Empowerment is a temporary loan of authority that managers take back once a task is finished.",a:false,e:"False — empowering workers means permanently passing authority and responsibility to them."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"A hotel lets front-desk clerks refund a guest on the spot, for good, and gives them the booking data to decide. What is this?",a:"Empowerment",w:["Reengineering","Centralization","Groupthink"],e:"Authority, responsibility, information and resources passed permanently to workers."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"An employee in a project group answers to both a project manager and a department head. Which principle is broken?",a:"Unity of command",w:["Chain of command","Autonomy","Departmentalization"],e:"Unity of command: workers should report to just one boss."}
]);
