/* ================================================================ Quiz #3 — Chapters 9 and 10 (Wed Oct 7)
   Williams, MGMT 13e. Chapter 10 (Managing Teams) is from the professor's slides, including
   the three review slides at the end that he said to give special attention to. Chapter 9
   (Designing Adaptive Organizations) had no slides here, so it follows the textbook's own
   definitions for the terms his review slide lists.
   This tab stands apart from the Exam 2 guide: its questions never enter the practice exam
   or The 50, and they carry no Quizlet tier.                                                 */
var Q3_SECTIONS = [
 {id:"g-q3-hints",   t:"Start here: the last three slides"},
 {id:"g-q3-struct",  t:"Chapter 9: structure and departmentalization"},
 {id:"g-q3-auth",    t:"Chapter 9: authority, centralization and job design"},
 {id:"g-q3-process", t:"Chapter 9: processes, reengineering and empowerment"},
 {id:"g-q3-teams",   t:"Chapter 10: what teams are, and when to use them"},
 {id:"g-q3-kinds",   t:"Chapter 10: kinds of teams"},
 {id:"g-q3-char",    t:"Chapter 10: norms, cohesiveness, size, conflict and stages"},
 {id:"g-q3-effect",  t:"Chapter 10: making teams effective"}
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
  {id:"q3-hints", h:"Start here: the last three slides", body:
   '<div class="point"><b>The point</b><p>The professor said to give <b>special attention to the last three slides</b> of Chapter 10. They are the quiz in miniature: one fill-in, two true/false, two compare-the-lists prompts, and thirteen terms from Chapters 9 and 10.</p><p class="able"><b>Be able to</b> answer the three questions below without looking, list the advantages and disadvantages of teams and when to use them, and define all thirteen terms.</p></div>'+
   '<h3 class="sub" id="q3-three">The three questions he showed</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>On the slide</th><th>Answer</th></tr></thead><tbody>'+
   '<tr><td class="sm">One of the disadvantages associated with <b>product departmentalization</b> is costly ____.</td><td class="head">Duplication</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> Social loafing is defined as a team member failing to perform because of laziness and lack of desire.</td><td class="head">False</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> If standardization is important, the organization may want to stay centralized. If not, decentralization may be considered.</td><td class="head">True</td></tr>'+
   '</tbody></table></div>'+
   '<div class="exam-tip"><b>Why the social loafing one is false</b>Social loafing is team members <strong>withholding their efforts and failing to perform their share of the work</strong>. The slide adds: <strong>not always laziness</strong>. The definition says what they do, not why.</div>'+
   '<h3 class="sub" id="q3-lists">The two lists he pointed at</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Advantages of teams</th><th>Disadvantages of teams</th></tr></thead><tbody>'+
   '<tr><td class="sm">Customer satisfaction (focus on specific customers)<br>Product and service quality<br>Speed and efficiency in product development<br>Job satisfaction (cross training)<br>Better decisions (multiple perspectives)</td>'+
   '<td class="sm">Initial high turnover<br><b>Social loafing</b><br><b>Groupthink</b><br><b>Member domination</b></td></tr></tbody></table></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Use teams when</th><th>Do not use teams when</th></tr></thead><tbody>'+
   '<tr><td class="sm">There is a clear, engaging reason or purpose</td><td class="sm">There is no clear, engaging reason or purpose</td></tr>'+
   '<tr><td class="sm">The job cannot be done unless people work together</td><td class="sm">The job can be done by people working independently</td></tr>'+
   '<tr><td class="sm">Rewards can be provided for teamwork and team performance</td><td class="sm">Rewards are provided for individual performance and effort</td></tr>'+
   '<tr><td class="sm">Ample resources are available</td><td class="sm">The necessary resources are not available</td></tr></tbody></table></div>'+
   '<h3 class="sub" id="q3-terms">The thirteen terms</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>'+
   Q3_TERMS.map(function(t){ return '<tr><td class="head">'+t[0]+'</td><td class="sm">'+t[1]+'.</td></tr>'; }).join("")+
   '</tbody></table></div>'},

  {id:"q3-struct", h:"Chapter 9: structure and departmentalization", body:
   '<div class="point"><b>The point</b><p><b>Organizational structure</b> is the vertical and horizontal configuration of departments, authority and jobs. <b>Departmentalization</b> is how the work and workers are subdivided into units. There are five ways to do it, and each has a price &mdash; for product departmentalization, <b>costly duplication</b>.</p><p class="able"><b>Be able to</b> name the five kinds of departmentalization, and give one advantage and one disadvantage of each.</p></div>'+
   '<p class="knowline"><span class="know">From the textbook &mdash; no Chapter 9 slides were provided. Where your class notes differ, follow your notes.</span></p>'+
   '<h3 class="sub" id="q3-dept">The five kinds of departmentalization</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Kind</th><th>Advantage</th><th>Disadvantage</th></tr></thead><tbody>'+
   '<tr><td class="sm"><b>Functional</b><br>by business function or expertise</td><td class="sm">Work done by specialists; less duplication, lower cost</td><td class="sm">Hard to coordinate across departments; slower decisions</td></tr>'+
   '<tr><td class="sm"><b>Product</b><br>by product or service</td><td class="sm">Broader experience; easier to judge a unit&rsquo;s performance; faster decisions</td><td class="sm"><b>Duplication</b> (costly); hard to coordinate across product departments</td></tr>'+
   '<tr><td class="sm"><b>Customer</b><br>by kind of customer</td><td class="sm">Focus on customer needs</td><td class="sm">Duplication; may please customers but hurt the business</td></tr>'+
   '<tr><td class="sm"><b>Geographic</b><br>by geographic area</td><td class="sm">Responds to different markets; resources closer to customers</td><td class="sm">Duplication; hard to coordinate across regions</td></tr>'+
   '<tr><td class="sm"><b>Matrix</b><br>two or more forms at once, most often product and functional</td><td class="sm">Handles large, complex tasks; shares a pool of skills</td><td class="sm">Heavy coordination; conflict between bosses</td></tr>'+
   '</tbody></table></div>'+
   '<div class="exam-tip"><b>The matrix and unity of command</b>In a matrix most employees report to <strong>two bosses</strong> &mdash; so it breaks <strong>unity of command</strong>.</div>'},

  {id:"q3-auth", h:"Chapter 9: authority, centralization and job design", body:
   '<div class="point"><b>The point</b><p><b>Authority</b> is the right to give commands, take action and make decisions. The <b>chain of command</b> says who reports to whom; <b>unity of command</b> says each worker reports to one boss. Where the authority sits is <b>centralization</b> or <b>decentralization</b> &mdash; and the choice turns on <b>standardization</b>.</p><p class="able"><b>Be able to</b> define chain of command, unity of command, line and staff authority, delegation, centralization and standardization, and tell the job-design terms apart.</p></div>'+
   '<p class="knowline"><span class="know">From the textbook &mdash; no Chapter 9 slides were provided.</span></p>'+
   '<h3 class="sub" id="q3-authority">Authority</h3>'+
   '<ul><li><b>Chain of command</b>: the vertical line of authority that clarifies who reports to whom throughout the organization.</li>'+
   '<li><b>Unity of command</b>: workers should report to just one boss.</li>'+
   '<li><b>Line authority</b>: the right to command immediate subordinates. <b>Staff authority</b>: the right to advise, but not command, others who are not your subordinates.</li>'+
   '<li><b>Delegation of authority</b>: assigning direct authority and responsibility to a subordinate to complete tasks the manager is normally responsible for. Three things pass down: <b>responsibility, authority, accountability</b>.</li></ul>'+
   '<h3 class="sub" id="q3-central">Centralization and standardization</h3>'+
   '<ul><li><b>Centralization of authority</b>: most authority sits at the <b>upper levels</b>.</li>'+
   '<li><b>Decentralization</b>: a significant amount of authority sits at the <b>lower levels</b>.</li>'+
   '<li><b>Standardization</b>: solving problems by consistently applying the same rules, procedures and processes.</li></ul>'+
   '<div class="exam-tip"><b>The review-slide rule</b>If <strong>standardization is important</strong>, stay <strong>centralized</strong>. If it is not, <strong>decentralization</strong> may be considered.</div>'+
   '<h3 class="sub" id="q3-jobs">Job design</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>'+
   '<tr><td class="head">Job specialization</td><td class="sm">A job is a small part of a larger task: simple, easy to learn, low variety, high repetition. Economical, but boring.</td></tr>'+
   '<tr><td class="head">Job rotation</td><td class="sm">Periodically moving workers from one specialized job to another.</td></tr>'+
   '<tr><td class="head">Job enlargement</td><td class="sm">Increasing the <b>number of different tasks</b> in a job.</td></tr>'+
   '<tr><td class="head">Job enrichment</td><td class="sm">More tasks <b>and</b> the authority and control to make meaningful decisions about the work.</td></tr>'+
   '<tr><td class="head">Job characteristics model</td><td class="sm">Jobs redesigned for internal motivation through five core characteristics: skill variety, task identity, task significance, autonomy, feedback.</td></tr>'+
   '</tbody></table></div>'+
   '<h3 class="sub" id="q3-mech">Mechanistic and organic</h3>'+
   '<ul><li><b>Mechanistic</b>: specialized jobs, precisely defined roles, a rigid chain of command, <b>centralized</b> authority, vertical communication. Fits <b>stable</b> environments.</li>'+
   '<li><b>Organic</b>: broadly defined jobs, loosely defined roles, <b>decentralized</b> authority, horizontal communication. Fits <b>changing</b> environments.</li></ul>'},

  {id:"q3-process", h:"Chapter 9: processes, reengineering and empowerment", body:
   '<div class="point"><b>The point</b><p>Structure is the boxes and lines; an <b>organizational process</b> is the collection of activities that turn inputs into outputs customers value. Two ways to redesign processes inside a company are <b>reengineering</b> and <b>empowerment</b>.</p><p class="able"><b>Be able to</b> define organizational process, reengineering and empowerment, and tell pooled, sequential and reciprocal interdependence apart.</p></div>'+
   '<p class="knowline"><span class="know">From the textbook &mdash; no Chapter 9 slides were provided.</span></p>'+
   '<h3 class="sub" id="q3-reeng">Reengineering</h3>'+
   '<ul><li>The <b>fundamental rethinking and radical redesign</b> of business processes to achieve <b>dramatic</b> improvements in cost, quality, service and speed.</li>'+
   '<li>It works by changing <b>task interdependence</b> &mdash; how much collective action a job needs:</li></ul>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Interdependence</th><th>How the jobs connect</th></tr></thead><tbody>'+
   '<tr><td class="head">Pooled</td><td class="sm">Each job is done independently; the outputs are simply pooled together.</td></tr>'+
   '<tr><td class="head">Sequential</td><td class="sm">Jobs are done in succession; one job&rsquo;s output is the next job&rsquo;s input.</td></tr>'+
   '<tr><td class="head">Reciprocal</td><td class="sm">Different jobs or groups work together, back and forth, to complete the process.</td></tr>'+
   '</tbody></table></div>'+
   '<h3 class="sub" id="q3-empower">Empowerment</h3>'+
   '<ul><li><b>Empowering workers</b>: <b>permanently</b> passing decision-making authority and responsibility from managers to workers, by giving them the information and resources they need to make and carry out good decisions.</li>'+
   '<li><b>Empowerment</b> is also the feeling that results: workers see their work as having meaning and impact, and themselves as competent and self-determining.</li></ul>'+
   '<h3 class="sub" id="q3-inter">Between companies</h3>'+
   '<ul><li><b>Modular organization</b>: outsources noncore activities to outside companies, suppliers or specialists.</li>'+
   '<li><b>Virtual organization</b>: one of a network of companies that share skills, costs and capabilities.</li></ul>'},

  {id:"q3-teams", h:"Chapter 10: what teams are, and when to use them", body:
   '<div class="point"><b>The point</b><p>A <b>work team</b> is a small number of people with complementary skills who are <b>mutually accountable</b>. Teams are not always the answer: they bring real advantages, and three named problems &mdash; <b>social loafing</b>, <b>groupthink</b> and <b>member domination</b>.</p><p class="able"><b>Be able to</b> give the definition with its three parts, the four use / do-not-use conditions, and the advantages and disadvantages.</p></div>'+
   '<h3 class="sub" id="q3-def">Work teams, defined</h3>'+
   '<p>A small number of people with <b>complementary skills</b> who are <b>mutually accountable</b> for:</p>'+
   '<ul><li>Pursuing a <b>common purpose</b></li><li>Achieving <b>performance goals</b></li><li>Improving <b>interdependency</b></li></ul>'+
   '<p>Teams help firms respond to specific problems and challenges.</p>'+
   '<h3 class="sub" id="q3-use">Exhibit 10.1 &mdash; use teams, or not</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Use teams when</th><th>Do not use teams when</th></tr></thead><tbody>'+
   '<tr><td class="sm">There is a <b>clear, engaging reason or purpose</b></td><td class="sm">There is not</td></tr>'+
   '<tr><td class="sm">The job <b>cannot be done unless people work together</b></td><td class="sm">People can do it working independently</td></tr>'+
   '<tr><td class="sm"><b>Rewards</b> can be given for teamwork and team performance</td><td class="sm">Rewards are for individual performance and effort</td></tr>'+
   '<tr><td class="sm"><b>Ample resources</b> are available</td><td class="sm">The necessary resources are not available</td></tr></tbody></table></div>'+
   '<h3 class="sub" id="q3-adv">Advantages</h3>'+
   '<ul><li>Focus on specific customers can increase <b>customer satisfaction</b>.</li>'+
   '<li>Improve <b>product and service quality</b>.</li>'+
   '<li>Increase <b>speed and efficiency in product development</b>.</li>'+
   '<li>Increase <b>job satisfaction</b> &mdash; cross training.</li>'+
   '<li><b>Group decision making</b> &mdash; multiple perspectives. Teams do a much better job than individuals at two steps of the decision process: <b>defining the problem</b> and <b>generating alternative solutions</b>.</li></ul>'+
   '<h3 class="sub" id="q3-dis">Disadvantages</h3>'+
   '<ul><li><b>Initial high turnover</b>.</li>'+
   '<li><b>Social loafing</b>: team members withhold their efforts and fail to perform their share of the work; they disengage from the team. <b>Not always laziness.</b></li>'+
   '<li><b>Groupthink</b>: members of highly cohesive teams feel pressure not to disagree with each other, leading to a limited number of alternatives.</li>'+
   '<li><b>Member domination</b>: one or two people dominate team discussions.</li></ul>'},

  {id:"q3-kinds", h:"Chapter 10: kinds of teams", body:
   '<div class="point"><b>The point</b><p>The key difference among work teams is <b>autonomy</b>: the degree to which workers have the discretion, freedom and independence to decide how and when to do their jobs. Five kinds of teams run from less autonomy to more. Three special kinds sit beside them.</p><p class="able"><b>Be able to</b> put the five kinds in order of autonomy, say what each one controls, and define cross-functional, virtual and project teams.</p></div>'+
   '<h3 class="sub" id="q3-autonomy">Autonomy</h3>'+
   '<ul><li>The level of being <b>self-governing</b>.</li><li>The <b>key difference</b> among work teams.</li></ul>'+
   '<h3 class="sub" id="q3-five">Five kinds, from less autonomy to more</h3>'+
   '<div class="flow">'+
   '<div class="step"><b>1 &middot; Traditional work groups</b><span>Two or more people work together to achieve a goal.</span></div>'+
   '<div class="step"><b>2 &middot; Employee involvement teams</b><span>Provide <b>advice</b> to management about specific issues.</span></div>'+
   '<div class="step"><b>3 &middot; Semi-autonomous work groups</b><span>Have authority to make decisions and solve problems related to <b>certain (major) tasks</b> of producing a product.</span></div>'+
   '<div class="step"><b>4 &middot; Self-managing teams</b><span>Manage and control <b>all the crucial tasks</b> of producing a product or service.</span></div>'+
   '<div class="step"><b>5 &middot; Self-designing teams</b><span>Control <b>team design, work tasks and team membership</b>.</span></div></div>'+
   '<h3 class="sub" id="q3-special">Special kinds of teams</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Team</th><th>What it is</th></tr></thead><tbody>'+
   '<tr><td class="head">Cross-functional</td><td class="sm">Composed of employees from <b>different functional areas</b> of the organization.</td></tr>'+
   '<tr><td class="head">Virtual</td><td class="sm"><b>Geographically or organizationally dispersed</b> coworkers who use telecommunication and information technology to accomplish a task.</td></tr>'+
   '<tr><td class="head">Project</td><td class="sm">Created to complete <b>one-time projects within a limited time</b>.</td></tr>'+
   '</tbody></table></div>'},

  {id:"q3-char", h:"Chapter 10: norms, cohesiveness, size, conflict and stages", body:
   '<div class="point"><b>The point</b><p>Four characteristics shape how a team works: <b>norms</b>, <b>cohesiveness</b>, <b>size</b> and <b>conflict</b>. Teams also develop in stages &mdash; and, without effective management, can slide back down them.</p><p class="able"><b>Be able to</b> define each characteristic, give the team-size numbers, tell c-type from a-type conflict, and name the stages in both directions.</p></div>'+
   '<h3 class="sub" id="q3-norms">Norms</h3>'+
   '<ul><li><b>Informally agreed-on standards</b> that regulate team behavior to enable effective functioning.</li>'+
   '<li>Often develop from <b>watching others</b>.</li>'+
   '<li>Can be <b>positive</b> (trust, commitment) or <b>negative</b> (griping).</li>'+
   '<li>Develop around quality and timeliness of job performance, absenteeism, safety, and honest expression of ideas and opinions.</li></ul>'+
   '<h3 class="sub" id="q3-cohesion">Cohesiveness</h3>'+
   '<ul><li>The extent to which members are <b>attracted to a team and motivated to remain in it</b>.</li>'+
   '<li>Promoted by making sure all team members are <b>present and engaged</b>; bonding outside of meetings &mdash; rearranged schedules, a common workspace.</li></ul>'+
   '<h3 class="sub" id="q3-size">Size</h3>'+
   '<ul><li>A larger team makes it hard for members to get to know one another: it raises the risk of <b>domination</b> and of <b>social loafing</b>.</li></ul>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>For</th><th>Team size</th></tr></thead><tbody>'+
   '<tr><td class="sm">Generally</td><td class="head">6&ndash;9</td></tr>'+
   '<tr><td class="sm">Analyzing causes of problems</td><td class="head">4&ndash;6</td></tr>'+
   '<tr><td class="sm">Making decisions</td><td class="head">4&ndash;7</td></tr></tbody></table></div>'+
   '<p><b>Small enough</b> for members to get to know each other and feel comfortable contributing; <b>large enough</b> to take advantage of members&rsquo; diverse skills and knowledge.</p>'+
   '<h3 class="sub" id="q3-conflict">Conflict</h3>'+
   '<p>Arises from disagreement over team <b>goals and priorities</b>. Conflict is not always bad:</p>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Type</th><th>What it is</th><th>Effect</th></tr></thead><tbody>'+
   '<tr><td class="head">Cognitive (c-type)</td><td class="sm">Focuses on <b>problem-related differences of opinion</b></td><td class="sm">Functional, constructive</td></tr>'+
   '<tr><td class="head">Affective (a-type)</td><td class="sm"><b>Emotional reactions</b> from personal disagreements</td><td class="sm">Dysfunctional, destructive</td></tr></tbody></table></div>'+
   '<h3 class="sub" id="q3-stages">Stages of team development</h3>'+
   '<div class="flow">'+
   '<div class="step"><b>Forming</b><span>Members meet, form initial impressions, and begin to establish team norms.</span></div>'+
   '<div class="step"><b>Storming</b><span>Members disagree over what the team should do and how it should do it.</span></div>'+
   '<div class="step"><b>Norming</b><span>Members settle into their roles, cohesion grows, and positive norms develop.</span></div>'+
   '<div class="step"><b>Performing</b><span>The team is mature and fully functioning. (In the textbook; not on the slide.)</span></div></div>'+
   '<p>Without effective management, performance may begin to decline, running the stages in reverse:</p>'+
   '<div class="flow">'+
   '<div class="step"><b>De-norming</b><span>Performance begins to decline as the <b>size, scope, goal or members</b> of the team change.</span></div>'+
   '<div class="step"><b>De-storming</b><span>The team&rsquo;s comfort level decreases, <b>cohesion weakens</b>, and angry emotions and conflict may flare.</span></div>'+
   '<div class="step"><b>De-forming</b><span>Members position themselves to control pieces of the team, <b>avoid each other</b>, and isolate themselves from team leaders.</span></div></div>'},

  {id:"q3-effect", h:"Chapter 10: making teams effective", body:
   '<div class="point"><b>The point</b><p>Four things make work teams more effective: <b>setting team goals and priorities</b>, <b>selecting people for teamwork</b>, <b>team training</b>, and <b>recognition and compensation</b>.</p><p class="able"><b>Be able to</b> list the four, define S.M.A.R.T. and stretch goals, the three selection factors, the four training areas, and skill-based pay and gainsharing.</p></div>'+
   '<h3 class="sub" id="q3-goals">Goals and priorities</h3>'+
   '<ul><li><b>S.M.A.R.T.</b> goals: specific, measurable, <b>attainable</b>, realistic and timely.</li>'+
   '<li><b>Stretch goals</b>: extremely ambitious goals that employees <b>don&rsquo;t know how to reach</b>.</li></ul>'+
   '<h3 class="sub" id="q3-select">Selecting people for teamwork</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Factor</th><th>Meaning</th></tr></thead><tbody>'+
   '<tr><td class="head">Individualism&ndash;collectivism</td><td class="sm">The degree to which a person believes people should be self-sufficient, and that loyalty to oneself matters more than loyalty to the team or company.</td></tr>'+
   '<tr><td class="head">Team level</td><td class="sm">The <b>average</b> level of ability, experience, personality or other factors on a team.</td></tr>'+
   '<tr><td class="head">Team diversity</td><td class="sm">The <b>variances</b> in ability, experience, personality or other factors on a team.</td></tr></tbody></table></div>'+
   '<h3 class="sub" id="q3-train">Team training, after selection</h3>'+
   '<ul><li><b>Interpersonal skills</b>: listening, communicating, questioning and providing feedback &mdash; building relationships.</li>'+
   '<li><b>Decision-making and problem-solving</b> skills.</li>'+
   '<li><b>Conflict resolution</b> skills.</li>'+
   '<li><b>Technical</b> training.</li></ul>'+
   '<h3 class="sub" id="q3-pay">Recognition and compensation</h3>'+
   '<ul><li><b>Skill-based pay</b>: paid for learning additional skills or knowledge.</li>'+
   '<li><b>Gainsharing</b>: companies share the financial value of performance gains with their workers.</li>'+
   '<li><b>Nonfinancial rewards</b>.</li></ul>'}
 ],
 decks:[
  {id:"thirteen", label:"The 13 terms", cards:Q3_TERMS},
  {id:"terms", label:"Chapters 9 & 10", cards:[
   ["Functional departmentalization","Units built around business functions or areas of expertise","g-q3-struct"],
   ["Product departmentalization","Units built around particular products or services; its cost is duplication","g-q3-struct"],
   ["Customer departmentalization","Units built around particular kinds of customers","g-q3-struct"],
   ["Geographic departmentalization","Units built around particular geographic areas","g-q3-struct"],
   ["Matrix departmentalization","Two or more forms used together; most employees report to two bosses","g-q3-struct"],
   ["Line authority","The right to command immediate subordinates in the chain of command","g-q3-auth"],
   ["Staff authority","The right to advise, but not command, people who are not your subordinates","g-q3-auth"],
   ["Delegation of authority","Assigning authority and responsibility to a subordinate for tasks the manager normally does","g-q3-auth"],
   ["Decentralization","A significant amount of authority is located at the lower levels","g-q3-auth"],
   ["Standardization","Solving problems by consistently applying the same rules, procedures and processes","g-q3-auth"],
   ["Job specialization","A job that is a small part of a larger task: simple, repetitive, easy to learn","g-q3-auth"],
   ["Job rotation","Periodically moving workers from one specialized job to another","g-q3-auth"],
   ["Job enlargement","Increasing the number of different tasks a worker performs","g-q3-auth"],
   ["Job enrichment","More tasks plus the authority to make meaningful decisions about the work","g-q3-auth"],
   ["Mechanistic organization","Specialized jobs, rigid chain of command, centralized authority; fits stable environments","g-q3-auth"],
   ["Organic organization","Broad jobs, loose roles, decentralized authority; fits changing environments","g-q3-auth"],
   ["Pooled interdependence","Jobs are done independently and their outputs are simply combined","g-q3-process"],
   ["Sequential interdependence","Jobs are done in succession; one job’s output is the next one’s input","g-q3-process"],
   ["Reciprocal interdependence","Different jobs or groups work together back and forth","g-q3-process"],
   ["Modular organization","Outsources noncore activities to outside companies or specialists","g-q3-process"],
   ["Virtual organization","Part of a network of companies sharing skills, costs and capabilities","g-q3-process"],
   ["Two decision steps teams do better","Defining the problem and generating alternative solutions","g-q3-teams"],
   ["When to use teams","Clear purpose, work that needs cooperation, team rewards, ample resources","g-q3-teams"],
   ["Traditional work group","Two or more people work together to achieve a goal","g-q3-kinds"],
   ["Employee involvement team","Provides advice to management about specific issues","g-q3-kinds"],
   ["Semi-autonomous work group","Has authority over certain major tasks of producing a product","g-q3-kinds"],
   ["Self-managing team","Manages and controls all the crucial tasks of producing a product or service","g-q3-kinds"],
   ["Self-designing team","Controls team design, work tasks and team membership","g-q3-kinds"],
   ["Cross-functional team","Employees from different functional areas of the organization","g-q3-kinds"],
   ["Virtual team","Dispersed coworkers who work together through telecommunication and information technology","g-q3-kinds"],
   ["Project team","Created to complete a one-time project within a limited time","g-q3-kinds"],
   ["Norms","Informally agreed-on standards that regulate team behavior","g-q3-char"],
   ["Cohesiveness","The extent to which members are attracted to a team and motivated to remain in it","g-q3-char"],
   ["Cognitive (c-type) conflict","Problem-related differences of opinion; constructive","g-q3-char"],
   ["Affective (a-type) conflict","Emotional reactions to personal disagreements; destructive","g-q3-char"],
   ["Forming","Members meet, form first impressions and begin to set norms","g-q3-char"],
   ["Storming","Members disagree over what the team should do and how","g-q3-char"],
   ["Norming","Members settle into roles, cohesion grows, positive norms develop","g-q3-char"],
   ["De-norming","Performance starts to decline as the team’s size, scope, goal or members change","g-q3-char"],
   ["De-storming","Comfort drops, cohesion weakens, anger and conflict may flare","g-q3-char"],
   ["De-forming","Members grab pieces of the team, avoid each other and isolate from leaders","g-q3-char"],
   ["Stretch goals","Extremely ambitious goals that employees don’t know how to reach","g-q3-effect"],
   ["Individualism–collectivism","How far a person puts self-sufficiency and loyalty to self above the team","g-q3-effect"],
   ["Team level","The average level of ability, experience or personality on a team","g-q3-effect"],
   ["Team diversity","The variances in ability, experience or personality on a team","g-q3-effect"],
   ["Skill-based pay","Pay for learning additional skills or knowledge","g-q3-effect"],
   ["Gainsharing","The company shares the financial value of performance gains with workers","g-q3-effect"]]}
 ]
};

QB = QB.concat([
 /* ---- the last three slides ---- */
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"One of the disadvantages associated with product departmentalization is costly:",a:"duplication",w:["specialization","centralization","reengineering"],e:"Straight from the review slide: each product unit repeats the same functions."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"Social loafing is defined as a team member failing to perform because of laziness and lack of desire.",a:false,e:"False — it is withholding effort and not doing one’s share of the work; the slide adds that it is not always laziness."},
 {tp:"q3",sec:"g-q3-hints",t:"tf",q:"If standardization is important, an organization may want to stay centralized; if not, decentralization may be considered.",a:true,e:"True — this is the rule on the professor’s last review slide."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is a disadvantage of using teams?",a:"Member domination",w:["Cross training","Multiple perspectives","Faster product development"],e:"The disadvantages: initial high turnover, social loafing, groupthink, member domination."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Which of these is an advantage of using teams?",a:"Higher customer satisfaction",w:["Initial high turnover","Pressure to agree","Withheld effort"],e:"Also quality, speed in product development, job satisfaction and better decisions."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Teams should NOT be used when:",a:"rewards go to individual performance",w:["there is a clear, engaging purpose","the work requires cooperation","ample resources are available"],e:"Exhibit 10.1 — the other three are reasons to use teams."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Workers should report to just one boss. Which term is this?",a:"Unity of command",w:["Chain of command","Centralization","Autonomy"],e:"Chain of command is the vertical line of who reports to whom."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"The vertical line of authority that clarifies who reports to whom is the:",a:"chain of command",w:["unity of command","organizational process","span of autonomy"],e:"Unity of command is the one-boss principle."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"The collection of activities that transform inputs into outputs customers value is an organizational:",a:"process",w:["structure","department","norm"],e:"Structure is the configuration of departments, authority and jobs."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"The vertical and horizontal configuration of departments, authority and jobs is the organizational:",a:"structure",w:["process","culture","strategy"],e:"A process is the activities that turn inputs into valued outputs."},
 {tp:"q3",sec:"g-q3-hints",t:"mc",q:"Members of a highly cohesive team feel pressure not to disagree. This is:",a:"groupthink",w:["social loafing","member domination","de-norming"],e:"It leads to a limited number of alternatives."},
 {tp:"q3",sec:"g-q3-hints",ap:true,t:"mc",q:"In every meeting, two outspoken people do nearly all the talking and the other five stay quiet. Which team problem is this?",a:"Member domination",w:["Groupthink","Social loafing","Affective conflict"],e:"One or two people dominate team discussions."},

 /* ---- chapter 9: structure and departmentalization ---- */
 {tp:"q3",sec:"g-q3-struct",t:"mc",q:"Subdividing work and workers into separate units responsible for particular tasks is:",a:"departmentalization",w:["delegation","standardization","reengineering"],e:"The five kinds: functional, product, customer, geographic and matrix."},
 {tp:"q3",sec:"g-q3-struct",t:"mc",q:"A company with accounting, marketing, production and HR departments is using which departmentalization?",a:"Functional",w:["Product","Customer","Geographic"],e:"Units are built around business functions or areas of expertise."},
 {tp:"q3",sec:"g-q3-struct",t:"mc",q:"Which departmentalization most reduces duplication?",a:"Functional",w:["Product","Customer","Geographic"],e:"Product, customer and geographic units each repeat the same functions."},
 {tp:"q3",sec:"g-q3-struct",t:"mc",q:"A main disadvantage of functional departmentalization is:",a:"hard coordination across departments",w:["costly duplication of resources","reporting to two bosses","too little specialization"],e:"Specialists work well inside a department but coordinate poorly between them."},
 {tp:"q3",sec:"g-q3-struct",t:"mc",q:"A bank with separate units for consumers, small businesses and large corporations is using which departmentalization?",a:"Customer",w:["Product","Functional","Matrix"],e:"Units are built around particular kinds of customers."},
 {tp:"q3",sec:"g-q3-struct",t:"mc",q:"In which form do most employees report to two bosses?",a:"Matrix",w:["Functional","Geographic","Product"],e:"A hybrid of two forms, most often product and functional."},
 {tp:"q3",sec:"g-q3-struct",t:"mc",q:"Which principle does the matrix structure break?",a:"Unity of command",w:["Chain of command","Standardization","Job specialization"],e:"Two bosses instead of one."},
 {tp:"q3",sec:"g-q3-struct",t:"tf",q:"Product, customer and geographic departmentalization all share the same drawback: duplicated resources.",a:true,e:"True — each unit needs its own versions of the same functions."},
 {tp:"q3",sec:"g-q3-struct",t:"tf",q:"Matrix departmentalization needs less coordination than the other forms.",a:false,e:"False — it requires a high level of coordination, and conflict between bosses is common."},
 {tp:"q3",sec:"g-q3-struct",ap:true,t:"mc",q:"A firm has one division for trucks and another for motorcycles, and each division runs its own marketing and finance staff. What is the cost of this design?",a:"Duplication",w:["Slow decisions","Narrow managers","Two bosses"],e:"Product departmentalization — each product unit repeats the same functions."},

 /* ---- chapter 9: authority, centralization, job design ---- */
 {tp:"q3",sec:"g-q3-auth",t:"mc",q:"The right to give commands, take action and make decisions to achieve objectives is:",a:"authority",w:["autonomy","accountability","empowerment"],e:"It flows down the chain of command."},
 {tp:"q3",sec:"g-q3-auth",t:"mc",q:"The right to advise, but not command, people who are not your subordinates is:",a:"staff authority",w:["line authority","delegated authority","centralized authority"],e:"Line authority is the right to command immediate subordinates."},
 {tp:"q3",sec:"g-q3-auth",t:"mc",q:"When most authority sits at the upper levels of the organization, authority is:",a:"centralized",w:["decentralized","delegated","standardized"],e:"Decentralization puts a significant amount at the lower levels."},
 {tp:"q3",sec:"g-q3-auth",t:"mc",q:"Solving problems by consistently applying the same rules, procedures and processes is:",a:"standardization",w:["centralization","specialization","reengineering"],e:"Where it matters, the organization may want to stay centralized."},
 {tp:"q3",sec:"g-q3-auth",t:"mc",q:"What passes to the subordinate when a manager delegates?",a:"Responsibility, authority and accountability",w:["Authority only, with no responsibility","The manager’s title and pay grade","Nothing — the manager keeps it all"],e:"Delegation assigns direct authority and responsibility for tasks the manager normally does."},
 {tp:"q3",sec:"g-q3-auth",t:"mc",q:"Increasing the number of different tasks in a job, without adding authority, is job:",a:"enlargement",w:["enrichment","rotation","specialization"],e:"Enrichment also adds authority and control over the work."},
 {tp:"q3",sec:"g-q3-auth",t:"mc",q:"Adding tasks AND the authority to make meaningful decisions about the work is job:",a:"enrichment",w:["enlargement","rotation","specialization"],e:"Enlargement adds tasks only."},
 {tp:"q3",sec:"g-q3-auth",t:"mc",q:"Which kind of organization fits a stable, unchanging environment?",a:"Mechanistic",w:["Organic","Virtual","Modular"],e:"Specialized jobs, rigid chain of command, centralized authority."},
 {tp:"q3",sec:"g-q3-auth",t:"tf",q:"In a decentralized organization, a significant amount of authority is located at the lower levels.",a:true,e:"True — centralization keeps most authority at the upper levels."},
 {tp:"q3",sec:"g-q3-auth",t:"tf",q:"Job rotation means giving one worker more decision-making authority over the work.",a:false,e:"False — rotation is periodically moving workers between specialized jobs; added authority is enrichment."},
 {tp:"q3",sec:"g-q3-auth",ap:true,t:"mc",q:"A restaurant chain wants every location to make each menu item exactly the same way. Where should decision authority sit?",a:"Centralized, at the top",w:["Decentralized, in each store","With each shift’s cooks","With outside suppliers"],e:"When standardization is important, stay centralized."},

 /* ---- chapter 9: processes ---- */
 {tp:"q3",sec:"g-q3-process",t:"mc",q:"The fundamental rethinking and radical redesign of business processes for dramatic improvement is:",a:"reengineering",w:["empowerment","departmentalization","job enlargement"],e:"The gains sought are in cost, quality, service and speed."},
 {tp:"q3",sec:"g-q3-process",t:"mc",q:"Reengineering aims for dramatic improvements in which measures?",a:"Cost, quality, service and speed",w:["Size, scope, goals and members","Trust, commitment and safety","Skill, level and diversity"],e:"The textbook’s four measures of performance."},
 {tp:"q3",sec:"g-q3-process",t:"mc",q:"Permanently passing decision-making authority and responsibility from managers to workers is:",a:"empowering workers",w:["delegating a task","centralizing authority","rotating jobs"],e:"Workers also get the information and resources to make good decisions."},
 {tp:"q3",sec:"g-q3-process",t:"mc",q:"One job’s output becomes the next job’s input. Which task interdependence is this?",a:"Sequential",w:["Pooled","Reciprocal","Mutual"],e:"Pooled = done independently; reciprocal = back and forth."},
 {tp:"q3",sec:"g-q3-process",t:"mc",q:"Jobs are done independently and the results are simply combined. Which interdependence?",a:"Pooled",w:["Sequential","Reciprocal","Matrix"],e:"The lowest level of task interdependence."},
 {tp:"q3",sec:"g-q3-process",t:"tf",q:"Empowerment is a temporary loan of authority that managers take back once a task is finished.",a:false,e:"False — empowering workers means permanently passing authority and responsibility to them."},
 {tp:"q3",sec:"g-q3-process",t:"tf",q:"Reengineering means making small, gradual adjustments to existing processes.",a:false,e:"False — it is fundamental rethinking and radical redesign aimed at dramatic improvement."},
 {tp:"q3",sec:"g-q3-process",ap:true,t:"mc",q:"A hotel lets front-desk clerks refund a guest on the spot, for good, and gives them the booking data to decide. What is this?",a:"Empowerment",w:["Reengineering","Standardization","Job rotation"],e:"Authority, responsibility, information and resources passed permanently to workers."},

 /* ---- chapter 10: teams ---- */
 {tp:"q3",sec:"g-q3-teams",t:"mc",q:"A work team’s members have complementary skills and are:",a:"mutually accountable",w:["individually rewarded","independently managed","randomly assigned"],e:"For a common purpose, performance goals and improving interdependency."},
 {tp:"q3",sec:"g-q3-teams",t:"mc",q:"Team members are mutually accountable for three things. Which is NOT one of them?",a:"Reducing the company’s payroll",w:["Pursuing a common purpose","Achieving performance goals","Improving interdependency"],e:"The definition names purpose, performance goals and interdependency."},
 {tp:"q3",sec:"g-q3-teams",t:"mc",q:"Teams do a much better job than individuals at which two steps of decision making?",a:"Defining the problem; generating alternatives",w:["Choosing the answer; carrying it out","Setting the budget; assigning the blame","Writing the report; presenting it"],e:"Multiple perspectives help most at these two steps."},
 {tp:"q3",sec:"g-q3-teams",t:"mc",q:"Team members withhold their efforts and fail to do their share of the work. This is:",a:"social loafing",w:["groupthink","member domination","de-forming"],e:"They disengage from the team — and it is not always laziness."},
 {tp:"q3",sec:"g-q3-teams",t:"mc",q:"What does groupthink lead to?",a:"A limited number of alternatives",w:["Too many alternatives to choose from","A higher rate of turnover","Stronger individual rewards"],e:"Members of highly cohesive teams feel pressure not to disagree."},
 {tp:"q3",sec:"g-q3-teams",t:"mc",q:"How do teams raise job satisfaction, by the slide?",a:"Cross training",w:["Higher base pay","Shorter hours","Fewer meetings"],e:"Learning each other’s jobs."},
 {tp:"q3",sec:"g-q3-teams",t:"mc",q:"Which is a condition for using teams?",a:"The job cannot be done unless people work together",w:["The job can be done by people working alone","The rewards go only to top individual performers","The resources the team needs are not available"],e:"Exhibit 10.1 — plus a clear purpose, team rewards and ample resources."},
 {tp:"q3",sec:"g-q3-teams",t:"tf",q:"When teams are first introduced, turnover is often high.",a:true,e:"True — initial high turnover is the first disadvantage on the slide."},
 {tp:"q3",sec:"g-q3-teams",t:"tf",q:"Teams should be used for every kind of work, because they always outperform individuals.",a:false,e:"False — without a clear purpose, real interdependence, team rewards and resources, do not use teams."},
 {tp:"q3",sec:"g-q3-teams",ap:true,t:"mc",q:"A sales office pays each rep only on personal commissions, and reps never need each other to close a sale. Should the manager form a team?",a:"No — individual rewards, independent work",w:["Yes — teams always raise quality","Yes — to raise cohesiveness","No — teams are too small"],e:"Two of the do-not-use conditions in Exhibit 10.1."},

 /* ---- chapter 10: kinds ---- */
 {tp:"q3",sec:"g-q3-kinds",t:"mc",q:"What is the key difference among kinds of work teams?",a:"Autonomy",w:["Size","Cohesiveness","Diversity"],e:"The degree of discretion, freedom and independence over how and when to do the job."},
 {tp:"q3",sec:"g-q3-kinds",t:"mc",q:"Which kind of team has the LEAST autonomy?",a:"Traditional work group",w:["Employee involvement team","Self-managing team","Self-designing team"],e:"Two or more people working together to achieve a goal."},
 {tp:"q3",sec:"g-q3-kinds",t:"mc",q:"Which kind of team has the MOST autonomy?",a:"Self-designing team",w:["Self-managing team","Semi-autonomous work group","Employee involvement team"],e:"It controls team design, work tasks and team membership."},
 {tp:"q3",sec:"g-q3-kinds",t:"mc",q:"Which team only provides advice to management about specific issues?",a:"Employee involvement team",w:["Semi-autonomous work group","Self-managing team","Project team"],e:"It advises; it does not decide."},
 {tp:"q3",sec:"g-q3-kinds",t:"mc",q:"Which team manages and controls all the crucial tasks of producing a product or service?",a:"Self-managing team",w:["Semi-autonomous work group","Employee involvement team","Traditional work group"],e:"A semi-autonomous group has authority over only certain major tasks."},
 {tp:"q3",sec:"g-q3-kinds",t:"mc",q:"A team that also controls its own membership and design is a:",a:"self-designing team",w:["self-managing team","cross-functional team","virtual team"],e:"Team design, work tasks and team membership."},
 {tp:"q3",sec:"g-q3-kinds",t:"mc",q:"A team made of people from marketing, engineering and finance is:",a:"cross-functional",w:["virtual","self-designing","traditional"],e:"Employees from different functional areas of the organization."},
 {tp:"q3",sec:"g-q3-kinds",t:"mc",q:"A team created to finish a one-time job within a limited time is a:",a:"project team",w:["virtual team","self-managing team","traditional work group"],e:"One-time projects, limited time."},
 {tp:"q3",sec:"g-q3-kinds",t:"tf",q:"Autonomy is the degree to which workers can decide how and when to accomplish their jobs.",a:true,e:"True — discretion, freedom and independence; the level of being self-governing."},
 {tp:"q3",sec:"g-q3-kinds",t:"tf",q:"An employee involvement team has more autonomy than a self-managing team.",a:false,e:"False — the order is traditional, employee involvement, semi-autonomous, self-managing, self-designing."},
 {tp:"q3",sec:"g-q3-kinds",ap:true,t:"mc",q:"Designers in three countries build one product together over video calls and shared files. What kind of team is this?",a:"Virtual team",w:["Project team","Traditional work group","Employee involvement team"],e:"Geographically dispersed coworkers using telecommunication and information technology."},

 /* ---- chapter 10: characteristics ---- */
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"Informally agreed-on standards that regulate team behavior are:",a:"norms",w:["rules","goals","policies"],e:"They often develop from watching others, and can be positive or negative."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"The extent to which members are attracted to a team and motivated to remain in it is:",a:"cohesiveness",w:["autonomy","team level","norming"],e:"Promoted when all members are present and engaged."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"In general, what is the right team size?",a:"6–9",w:["2–3","4–6","10–15"],e:"4–6 for analyzing causes of problems; 4–7 for making decisions."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"What team size is best for making decisions?",a:"4–7",w:["6–9","2–3","8–12"],e:"Generally 6–9; analyzing causes of problems 4–6."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"A larger team raises the risk of which two problems?",a:"Domination and social loafing",w:["Groupthink and high turnover","Storming and de-forming","Norms and cohesiveness"],e:"It is harder for members to get to know one another."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"Which conflict focuses on problem-related differences of opinion?",a:"Cognitive (c-type)",w:["Affective (a-type)","Destructive","Personal"],e:"Functional and constructive."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"Affective (a-type) conflict is best described as:",a:"emotional reactions to personal disagreements",w:["problem-related differences of opinion","disagreement about the size of the team","a debate over which alternative is best"],e:"Dysfunctional and destructive."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"In which stage do members disagree over what the team should do and how?",a:"Storming",w:["Forming","Norming","De-forming"],e:"Forming comes first; norming follows as roles settle."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"In which stage do members settle into roles while cohesion grows?",a:"Norming",w:["Forming","Storming","De-norming"],e:"Positive team norms develop."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"Performance begins to decline as the team’s size, scope, goal or members change. Which stage?",a:"De-norming",w:["De-storming","De-forming","Storming"],e:"A reversal of the norming stage."},
 {tp:"q3",sec:"g-q3-char",t:"mc",q:"Members avoid each other and isolate themselves from team leaders. Which stage?",a:"De-forming",w:["De-norming","De-storming","Forming"],e:"They also position themselves to control pieces of the team."},
 {tp:"q3",sec:"g-q3-char",t:"tf",q:"All team conflict is harmful and should be eliminated.",a:false,e:"False — cognitive (c-type) conflict over the problem itself is functional and constructive."},
 {tp:"q3",sec:"g-q3-char",t:"tf",q:"Team norms can be negative as well as positive.",a:true,e:"True — trust and commitment on one side, griping on the other."},
 {tp:"q3",sec:"g-q3-char",ap:true,t:"mc",q:"Two teammates argue hard about which supplier is cheaper, then go to lunch together. What kind of conflict is this?",a:"Cognitive — constructive",w:["Affective — destructive","Groupthink","De-storming"],e:"It is about the problem, not about each other."},

 /* ---- chapter 10: effectiveness ---- */
 {tp:"q3",sec:"g-q3-effect",t:"mc",q:"Which is NOT one of the four ways to enhance work team effectiveness?",a:"Increasing team size",w:["Setting team goals and priorities","Selecting people for teamwork","Recognition and compensation"],e:"The fourth is team training."},
 {tp:"q3",sec:"g-q3-effect",t:"mc",q:"Extremely ambitious goals that employees don’t know how to reach are:",a:"stretch goals",w:["S.M.A.R.T. goals","team norms","performance gains"],e:"S.M.A.R.T. goals are specific, measurable, attainable, realistic and timely."},
 {tp:"q3",sec:"g-q3-effect",t:"mc",q:"What does the A in S.M.A.R.T. stand for, on the slide?",a:"Attainable",w:["Ambitious","Accountable","Autonomous"],e:"Specific, measurable, attainable, realistic and timely."},
 {tp:"q3",sec:"g-q3-effect",t:"mc",q:"The average level of ability, experience or personality on a team is:",a:"team level",w:["team diversity","team cohesiveness","team size"],e:"Team diversity is the variances in those same factors."},
 {tp:"q3",sec:"g-q3-effect",t:"mc",q:"The variances in ability, experience or personality on a team are:",a:"team diversity",w:["team level","team norms","team autonomy"],e:"Team level is the average."},
 {tp:"q3",sec:"g-q3-effect",t:"mc",q:"Listening, communicating, questioning and providing feedback are which kind of skills?",a:"Interpersonal",w:["Technical","Conflict resolution","Decision-making"],e:"They build relationships; the other training areas are decision-making, conflict resolution and technical."},
 {tp:"q3",sec:"g-q3-effect",t:"mc",q:"Paying workers for learning additional skills or knowledge is:",a:"skill-based pay",w:["gainsharing","a stretch goal","a nonfinancial reward"],e:"Gainsharing shares the financial value of performance gains."},
 {tp:"q3",sec:"g-q3-effect",t:"mc",q:"A company shares the financial value of performance gains with its workers. This is:",a:"gainsharing",w:["skill-based pay","cross training","empowerment"],e:"Skill-based pay rewards learning new skills."},
 {tp:"q3",sec:"g-q3-effect",t:"tf",q:"A person who scores high on individualism puts loyalty to self above loyalty to the team.",a:true,e:"True — a factor to weigh when selecting people for teamwork."},
 {tp:"q3",sec:"g-q3-effect",t:"tf",q:"Team training comes before selecting who will be on the team.",a:false,e:"False — the slide calls it team training after selection."},
 {tp:"q3",sec:"g-q3-effect",ap:true,t:"mc",q:"A plant cuts scrap by $200,000 and pays part of the savings out to the crew. What is this?",a:"Gainsharing",w:["Skill-based pay","A stretch goal","Job enrichment"],e:"The financial value of a performance gain, shared with workers."}
]);
