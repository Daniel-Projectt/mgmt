/* ================================================================ Exam #3 — Chapters 9 to 12 (Wed Oct 21)
   Only what the professor's eight "Exam #3" review slides point to, at the end of his Chapter 12
   deck: his sample questions (fill-in, true/false, terms), the sixteen terms on his list,
   the advantages / disadvantages and use / do-not-use lists for teams, Exhibit 11.1 (the HR
   process), the two types of diversity and the four diversity training practices. Every
   definition is worded as on his Chapter 9, 10, 11 and 12 slides.
   Like Quiz 3 it stands apart from the Exam 2 guide: no practice exam, no The 50, no tier.     */
var X3_SECTIONS = [
 {id:"g-x3-review", t:"His review questions, answered"},
 {id:"g-x3-terms",  t:"The sixteen terms"},
 {id:"g-x3-teams",  t:"Teams: the lists and the two conflicts"},
 {id:"g-x3-hr",     t:"Exhibit 11.1: the HR process"},
 {id:"g-x3-div",    t:"Diversity: two types, four practices"}
];
var X3_TERMS = [   /* the sixteen terms on the review slide, in its order */
 ["Teams","A small number of people with complementary skills who are mutually accountable for a common purpose, performance goals and improving interdependency","g-x3-terms"],
 ["Social loafing","Team members withhold their efforts and fail to perform their share of the work — not always laziness","g-x3-terms"],
 ["Reengineering","The fundamental rethinking and radical redesign of business processes to achieve dramatic improvements","g-x3-terms"],
 ["Centralization","Most authority is located at the upper levels; managers make most decisions, even small ones","g-x3-terms"],
 ["Groupthink","Members of a highly cohesive team feel pressure not to disagree, so few alternatives are considered","g-x3-terms"],
 ["Empowerment","Passing decision-making authority and responsibility from managers to workers, with the information and resources they need","g-x3-terms"],
 ["Unity of command","Workers should report to just one boss (does not usually apply to matrix organizations)","g-x3-terms"],
 ["Autonomy","The degree to which workers have the discretion, freedom and independence to decide how and when to do their jobs","g-x3-terms"],
 ["Chain of command","The vertical line of authority that clarifies the reporting structure","g-x3-terms"],
 ["Member domination","One or two people dominate the team’s discussions","g-x3-terms"],
 ["Organizational structure","The vertical and horizontal configuration of departments, authority and jobs within a company","g-x3-terms"],
 ["Departmentalization","Subdividing work and workers into separate units that take responsibility for particular tasks","g-x3-terms"],
 ["Organizational processes","The collection of activities that transform inputs into outputs valued by customers","g-x3-terms"],
 ["Diversity","The variety of demographic, cultural and personal differences among an organization’s employees and customers","g-x3-terms"],
 ["Affirmative action","Purposeful steps taken by an organization to create employment opportunities for minorities and women","g-x3-terms"],
 ["Big Five personality dimensions","Extraversion, emotional stability, agreeableness, conscientiousness and openness to experience","g-x3-terms"]
];

CH.x3 = {n:0, title:"Exam 3", short:"Exam 3",
 notes:[
  {id:"x3-review", h:"His review questions, answered", body:
   '<div class="point"><b>The point</b><p>These are the sample questions on his eight Exam #3 slides. The real exam will ask the same things in other words.</p><p class="able"><b>Be able to</b> answer each one and say why.</p></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>On the slide</th><th>Answer</th></tr></thead><tbody>'+
   '<tr><td class="sm">One of the disadvantages associated with <b>product departmentalization</b> is costly ____.</td><td class="head">Duplication</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> Social loafing is defined as a team member failing to perform because of laziness and lack of desire.</td><td class="head">False</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> If standardization is important, the organization may want to stay centralized. If not, decentralization may be considered.</td><td class="head">True</td></tr>'+
   '<tr><td class="sm">____ is the process of determining how well a selection test or procedure predicts future job performance.</td><td class="head">Validation</td></tr>'+
   '<tr><td class="sm">The method of subdividing work and workers into separate organizational units that take responsibility for particular tasks?</td><td class="head">Departmentalization</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> The organic view of an organization is always very similar to the structural, hierarchical view.</td><td class="head">False</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> Reengineering is the fundamental rethinking and radical redesign of business processes to achieve dramatic improvement.</td><td class="head">True</td></tr>'+
   '<tr><td class="sm">The term for most of the authority being located at the upper levels of an organization?</td><td class="head">Centralization</td></tr>'+
   '<tr><td class="sm"><b>True or false?</b> Background checks can be used to verify the truthfulness and accuracy of information that applicants provide about themselves.</td><td class="head">True</td></tr>'+
   '<tr><td class="sm">Which type of conflict is strongly associated with decreases in team performance?</td><td class="head">Affective (a-type)</td></tr>'+
   '<tr><td class="sm">The two types of diversity in Chapter 12?</td><td class="head">Surface-level and deep-level</td></tr>'+
   '</tbody></table></div>'+
   '<div class="exam-tip"><b>Why the two false ones are false</b>Social loafing is <strong>withholding effort and not doing your share</strong>; it is <strong>not always laziness</strong>. The organic view is the <strong>opposite</strong> of the structural, hierarchical (mechanistic) view: broad jobs, changing roles, decentralized authority and horizontal communication.</div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Mechanistic (structural, hierarchical)</th><th>Organic</th></tr></thead><tbody>'+
   '<tr><td class="sm">Stable, unchanging environments</td><td class="sm">Dynamic, changing environments</td></tr>'+
   '<tr><td class="sm">Specialized jobs and responsibilities</td><td class="sm">Broadly defined jobs and responsibilities</td></tr>'+
   '<tr><td class="sm">Unchanging roles; rigid chain of command</td><td class="sm">Loosely defined, frequently changing roles</td></tr>'+
   '<tr><td class="sm">Centralized authority, vertical communication</td><td class="sm">Decentralized authority, horizontal communication based on task knowledge</td></tr>'+
   '</tbody></table></div>'},

  {id:"x3-terms", h:"The sixteen terms", body:
   '<div class="point"><b>The point</b><p>His list of terms for the exam: the thirteen from Quiz 3 plus <mark>diversity, affirmative action and the Big Five</mark>.</p><p class="able"><b>Be able to</b> define each one and tell it apart from its look-alike.</p></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>'+
   X3_TERMS.map(function(t){ return '<tr><td class="head">'+t[0]+'</td><td class="sm">'+t[1]+'.</td></tr>'; }).join("")+
   '</tbody></table></div>'+
   '<h3 class="sub" id="x3-aa">Affirmative action, in full</h3>'+
   '<ul><li>An <b>executive order (1961)</b>: purposeful steps to create employment opportunities for minorities and women.</li>'+
   '<li>It was required by law for private employers with <b>50 or more employees</b> and federal contracts of <b>$50,000 or more</b>.</li>'+
   '<li>Purpose: a positive work environment where <b>no one was advantaged or disadvantaged</b>.</li>'+
   '<li>A <b>Supreme Court ruling (June 29, 2023)</b> on admissions; then the order was <b>rescinded on January 21, 2025</b>. A person needs to get a job based on <b>merit</b>, and <mark>discrimination is still against the law</mark>.</li></ul>'+
   '<h3 class="sub" id="x3-big5">The Big Five, in full</h3>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Dimension</th><th>Degree to which someone is…</th></tr></thead><tbody>'+
   '<tr><td class="head">Extraversion</td><td class="sm">active, assertive, gregarious, sociable, talkative and energized by others</td></tr>'+
   '<tr><td class="head">Emotional stability</td><td class="sm"><b>not</b> angry, depressed, anxious, emotional, insecure and excitable</td></tr>'+
   '<tr><td class="head">Agreeableness</td><td class="sm">cooperative, polite, flexible, forgiving, good-natured, tolerant and trusting</td></tr>'+
   '<tr><td class="head">Conscientiousness</td><td class="sm">organized, hardworking, responsible, persevering and achievement oriented</td></tr>'+
   '<tr><td class="head">Openness to experience</td><td class="sm">curious, broad-minded and open to new ideas, things and experiences</td></tr>'+
   '</tbody></table></div>'},

  {id:"x3-teams", h:"Teams: the lists and the two conflicts", body:
   '<div class="point"><b>The point</b><p>His slide asks for the advantages and disadvantages of teams and when to use them or not. The conflict question rests on <mark>c-type versus a-type</mark>.</p><p class="able"><b>Be able to</b> give both lists, the four use / do-not-use tests, and the two kinds of conflict.</p></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Advantages of teams</th><th>Disadvantages of teams</th></tr></thead><tbody>'+
   '<tr><td class="sm">Customer satisfaction<br>Product and service quality<br>Speed and efficiency in product development<br>Job satisfaction (cross training)<br>Better decisions (multiple perspectives) &mdash; especially defining the problem and generating alternatives</td>'+
   '<td class="sm">Initial high turnover<br><b>Social loafing</b><br><b>Groupthink</b><br><b>Member domination</b></td></tr></tbody></table></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Use teams when</th><th>Do not use teams when</th></tr></thead><tbody>'+
   '<tr><td class="sm">There is a clear, engaging reason or purpose</td><td class="sm">There is no clear, engaging reason or purpose</td></tr>'+
   '<tr><td class="sm">The job cannot be done unless people work together</td><td class="sm">The job can be done by people working independently</td></tr>'+
   '<tr><td class="sm">Rewards can be provided for teamwork and team performance</td><td class="sm">Rewards are provided for individual performance and effort</td></tr>'+
   '<tr><td class="sm">Ample resources are available</td><td class="sm">The necessary resources are not available</td></tr></tbody></table></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Cognitive (c-type)</th><th>Affective (a-type)</th></tr></thead><tbody>'+
   '<tr><td class="sm">Problem-related differences of opinion</td><td class="sm">Emotional reactions due to personal disagreements</td></tr>'+
   '<tr><td class="sm">Functional / constructive</td><td class="sm"><mark>Dysfunctional / destructive &mdash; strongly associated with decreases in team performance</mark></td></tr>'+
   '</tbody></table></div>'},

  {id:"x3-hr", h:"Exhibit 11.1: the HR process", body:
   '<div class="point"><b>The point</b><p>Human resource management is the process of <mark>finding (attracting), developing and keeping</mark> the right people to form a qualified workforce. Exhibit 11.1 puts six steps under those three headings.</p><p class="able"><b>Be able to</b> put the six steps in order under their headings, and define validation and background checks.</p></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Heading</th><th>Steps, in order</th></tr></thead><tbody>'+
   '<tr><td class="head">Attracting</td><td class="sm"><b>1. Recruiting</b> &mdash; developing a pool of qualified job applicants<br><b>2. Selection</b> &mdash; gathering information about applicants to decide who should be offered a job</td></tr>'+
   '<tr><td class="head">Developing</td><td class="sm"><b>3. Training</b> &mdash; opportunities to develop the skills, experience and knowledge employees need<br><b>4. Performance appraisal</b> &mdash; assessing how well employees are doing their jobs</td></tr>'+
   '<tr><td class="head">Keeping</td><td class="sm"><b>5. Compensation</b> &mdash; financial and nonfinancial rewards given in exchange for work<br><b>6. Employee separation</b> &mdash; the involuntary or voluntary loss of an employee</td></tr>'+
   '</tbody></table></div>'+
   '<p>The arrow runs from <b>employee separation back to recruiting</b>: when someone leaves, the cycle starts again.</p>'+
   '<h3 class="sub" id="x3-select">The two selection terms he asked</h3>'+
   '<ul><li><mark><b>Validation</b>: the process of determining how well a selection test or procedure predicts future job performance.</mark></li>'+
   '<li><mark><b>Background checks</b>: verifying the truthfulness and accuracy of information applicants provide</mark>, and learning job-related background information they did not provide.</li></ul>'},

  {id:"x3-div", h:"Diversity: two types, four practices", body:
   '<div class="point"><b>The point</b><p>His slide asks for the <mark>two types of diversity</mark> and the <mark>four training practices</mark> for managing it.</p><p class="able"><b>Be able to</b> tell surface-level from deep-level with examples, and name and define the four practices.</p></div>'+
   '<div class="tblwrap"><table class="tbl n0 q3t"><thead><tr><th>Surface-level diversity</th><th>Deep-level diversity</th></tr></thead><tbody>'+
   '<tr><td class="sm">Differences that are <b>observable, typically unchangeable and easy to measure</b></td><td class="sm">Differences communicated through verbal and nonverbal behaviors, <b>learned only through extended interaction</b></td></tr>'+
   '<tr><td class="sm">Age, sex/gender, race/ethnicity, physical abilities/disabilities</td><td class="sm">Personality, attitudes, beliefs and values</td></tr>'+
   '<tr><td class="sm">Initial impressions and categorizations can lead to decisions or behaviors that discriminate</td><td class="sm">Getting to know each other reduces prejudice and conflict (95% of studies) &rarr; stronger <b>social integration</b></td></tr>'+
   '</tbody></table></div>'+
   '<p><b>Social integration</b>: the degree to which group members are psychologically attracted to working with each other to accomplish a common objective.</p>'+
   '<h3 class="sub" id="x3-four">The four practices</h3>'+
   '<ol><li><mark><b>Skills-based diversity training</b></mark>: teaches the practical skills for managing a diverse workforce &mdash; flexibility, adaptability, negotiation, problem solving and conflict resolution.</li>'+
   '<li><mark><b>Awareness training</b></mark>: raises awareness of diversity issues and challenges the assumptions or stereotypes employees may have about others.</li>'+
   '<li><mark><b>Diversity audits</b></mark>: formal assessments that measure employee and management attitudes, investigate whether people are advantaged or disadvantaged in hiring and promotions, and review diversity-related policies and procedures.</li>'+
   '<li><mark><b>Diversity pairing</b></mark>: a mentoring program pairing people of different cultural backgrounds, ages, sexes or races/ethnicities, to get to know each other and change stereotypical beliefs and attitudes.</li></ol>'}
 ],
 decks:[
  {id:"sixteen", label:"The 16 terms", cards:X3_TERMS},
  {id:"more", label:"Lists & answers", match:false, cards:[
   ["Product departmentalization: a disadvantage is costly…","Duplication","g-x3-review"],
   ["True or false: social loafing is failing to perform because of laziness and lack of desire","False — withholding effort and not doing your share; not always laziness","g-x3-review"],
   ["True or false: if standardization is important, stay centralized; if not, consider decentralization","True","g-x3-review"],
   ["How well a selection test predicts future job performance","Validation","g-x3-review"],
   ["True or false: the organic view is always very similar to the structural, hierarchical view","False — organic is the opposite: broad jobs, changing roles, decentralized","g-x3-review"],
   ["Conflict strongly associated with decreases in team performance","Affective (a-type) — dysfunctional / destructive","g-x3-teams"],
   ["Advantages of teams","Customer satisfaction · quality · speed in product development · job satisfaction · better decisions","g-x3-teams"],
   ["Disadvantages of teams","Initial high turnover · social loafing · groupthink · member domination","g-x3-teams"],
   ["Use teams when…","Clear, engaging purpose · the job needs people working together · rewards for teamwork · ample resources","g-x3-teams"],
   ["Exhibit 11.1, in order","Recruiting · selection (attracting) → training · performance appraisal (developing) → compensation · separation (keeping)","g-x3-hr"],
   ["Background checks","Verify the truthfulness and accuracy of what applicants say about themselves","g-x3-hr"],
   ["Two types of diversity","Surface-level (observable: age, sex, race, ability) · deep-level (personality, attitudes, beliefs, values)","g-x3-div"],
   ["Four diversity practices","Skills-based training · awareness training · diversity audits · diversity pairing","g-x3-div"]]}
 ]
};

QB = QB.concat([
 /* Wrong choices are near neighbours: another term on his list, another step of Exhibit 11.1,
    or the other side of a pair. True/false items are false by one swapped term or word.       */

 /* ---- his review questions ---- */
 {tp:"x3",sec:"g-x3-review",t:"mc",q:"Product departmentalization has a costly disadvantage. Which one?",a:"Duplication",w:["Centralization","Groupthink","Member domination"],e:"Each product unit repeats the same functions — on Ford’s chart every division has its own finance, HR and legal."},
 {tp:"x3",sec:"g-x3-review",t:"tf",q:"By the professor’s definition, social loafing means failing to perform because of laziness and a lack of desire.",a:false,e:"False — it is withholding effort and not doing one’s share of the work, which is not always laziness."},
 {tp:"x3",sec:"g-x3-review",t:"tf",q:"When standardization matters, an organization may want to stay centralized; when it does not, decentralization may be considered.",a:true,e:"True — consistent rules and processes are easier to keep when authority stays at the top."},
 {tp:"x3",sec:"g-x3-review",t:"mc",q:"What is the process of determining how well a selection test or procedure predicts future job performance?",a:"Validation",w:["Background checks","Performance appraisal","Needs assessment"],e:"Background checks verify what applicants say; appraisal rates current employees; needs assessment ranks training needs."},
 {tp:"x3",sec:"g-x3-review",t:"mc",q:"Subdividing work and workers into separate units that take responsibility for particular tasks is called:",a:"departmentalization",w:["organizational structure","organizational processes","chain of command"],e:"Structure is the whole configuration of departments, authority and jobs; departmentalization is how the work is split into units."},
 {tp:"x3",sec:"g-x3-review",t:"tf",q:"The organic view of an organization is always very similar to the structural, hierarchical view.",a:false,e:"False — organic is the opposite of the mechanistic, hierarchical view: broad jobs, changing roles, decentralized authority."},
 {tp:"x3",sec:"g-x3-review",t:"tf",q:"Reengineering is the fundamental rethinking and radical redesign of business processes to achieve dramatic improvement.",a:true,e:"True — word for word from his review slide; the redesign is radical, not gradual."},
 {tp:"x3",sec:"g-x3-review",t:"mc",q:"What is it called when most of the authority sits at the upper levels of an organization?",a:"Centralization",w:["Decentralization","Empowerment","Unity of command"],e:"Managers make most decisions, even relatively small ones."},
 {tp:"x3",sec:"g-x3-review",t:"tf",q:"Background checks can be used to verify the truthfulness and accuracy of information applicants provide about themselves.",a:true,e:"True — and to learn job-related background information the applicant did not provide."},
 {tp:"x3",sec:"g-x3-review",t:"mc",q:"Which type of conflict is strongly associated with decreases in team performance?",a:"Affective (a-type)",w:["Cognitive (c-type)","Functional conflict","Constructive conflict"],e:"A-type is emotional and personal — dysfunctional and destructive. C-type is the functional, constructive kind."},
 {tp:"x3",sec:"g-x3-review",t:"mc",q:"What are the two types of diversity in Chapter 12?",a:"Surface-level and deep-level",w:["Demographic and cultural","Cognitive and affective","Internal and external"],e:"Cognitive and affective are the two kinds of team conflict, from Chapter 10."},
 {tp:"x3",sec:"g-x3-review",t:"mc",q:"Which describes an organic organization?",a:"Changing roles, decentralized authority",w:["Specialized jobs, rigid chain of command","Unchanging roles, vertical communication","Centralized authority, stable environment"],e:"The other three are all marks of a mechanistic organization."},
 {tp:"x3",sec:"g-x3-review",t:"tf",q:"Mechanistic organizations suit stable, unchanging business environments.",a:true,e:"True — organic organizations suit dynamic, changing ones."},
 {tp:"x3",sec:"g-x3-review",ap:true,t:"mc",q:"A company has separate divisions for cars, trucks and financing, and each keeps its own HR and legal staff. Which structure, and which cost?",a:"Product departmentalization; duplication",w:["Functional departmentalization; duplication","Product departmentalization; groupthink","Matrix departmentalization; two bosses"],e:"Units built around products, each repeating the same functions — the Ford chart."},
 {tp:"x3",sec:"g-x3-review",ap:true,t:"mc",q:"A hiring manager compares last year’s test scores with how those hires actually performed on the job. What is she doing?",a:"Validation",w:["A background check","A performance appraisal","Job evaluation"],e:"Checking how well a selection test predicts future job performance."},
 {tp:"x3",sec:"g-x3-review",ap:true,t:"mc",q:"Two teammates disagree sharply about which supplier is cheaper and argue it out with numbers. Which conflict is this?",a:"Cognitive (c-type)",w:["Affective (a-type)","Groupthink","Member domination"],e:"A problem-related difference of opinion — functional and constructive. If it turned personal, it would be a-type."},
 {tp:"x3",sec:"g-x3-review",ap:true,t:"mc",q:"A teammate refuses to work with another because he dislikes her personally, and the team’s results slip. Which conflict is this?",a:"Affective (a-type)",w:["Cognitive (c-type)","Social loafing","Groupthink"],e:"An emotional reaction to a personal disagreement — the type tied to decreases in team performance."},

 {tp:"x3",sec:"g-x3-review",ap:true,t:"mc",q:"A bank needs every branch to approve loans by exactly the same rules. By his review slide, what should it do?",a:"Stay centralized",w:["Decentralize to each branch","Empower each loan officer","Reengineer the approval process"],e:"When standardization is important, the organization may want to stay centralized."},
 {tp:"x3",sec:"g-x3-review",ap:true,t:"mc",q:"A start-up in a fast-changing market gives workers broad jobs, shifting roles and the authority to decide on the spot. Which kind of organization is it?",a:"Organic",w:["Mechanistic","Centralized","Functional"],e:"Broad jobs, changing roles, decentralized authority, horizontal communication — the opposite of the hierarchical view."},
 {tp:"x3",sec:"g-x3-review",ap:true,t:"mc",q:"An airline throws out its whole boarding procedure and rebuilds it from scratch, cutting boarding time in half. Which term is this?",a:"Reengineering",w:["Empowerment","Departmentalization","Decentralization"],e:"A fundamental rethinking and radical redesign of a business process for a dramatic improvement."},

 /* ---- the sixteen terms ---- */
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"The variety of demographic, cultural and personal differences among an organization’s employees and customers is:",a:"diversity",w:["affirmative action","social integration","deep-level diversity"],e:"Deep-level diversity is only the part learned through extended interaction."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Purposeful steps taken by an organization to create employment opportunities for minorities and women are:",a:"affirmative action",w:["diversity audits","diversity pairing","awareness training"],e:"From the 1961 executive order; the other three are diversity practices."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"When did the executive order on affirmative action begin, and when was it rescinded?",a:"1961; January 21, 2025",w:["1964; June 29, 2023","1961; June 29, 2023","1964; January 21, 2025"],e:"June 29, 2023 is the Supreme Court ruling on admissions; 1964 is the Civil Rights Act."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Affirmative action was required for private employers with how many employees and federal contracts of what size?",a:"50 or more; $50,000 or more",w:["15 or more; $50,000 or more","50 or more; $10,000 or more","100 or more; $100,000 or more"],e:"Fifty employees and fifty thousand dollars — both 50."},
 {tp:"x3",sec:"g-x3-terms",t:"tf",q:"Since affirmative action was rescinded in 2025, discrimination in hiring is no longer against the law.",a:false,e:"False — his slide: a person needs to get a job based on merit, and discrimination is still against the law."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Which list gives the Big Five personality dimensions?",a:"Extraversion, emotional stability, agreeableness, conscientiousness, openness",w:["Extraversion, emotional stability, agreeableness, cohesiveness, autonomy","Introversion, empathy, agreeableness, conscientiousness, openness","Extraversion, emotional stability, assertiveness, conscientiousness, loyalty"],e:"Each wrong list swaps in one or two words that look like they belong."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Organized, hardworking, responsible, persevering and achievement oriented describes which dimension?",a:"Conscientiousness",w:["Agreeableness","Emotional stability","Openness to experience"],e:"Agreeableness is cooperative, polite, forgiving and trusting."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Cooperative, polite, flexible, forgiving, good-natured, tolerant and trusting describes which dimension?",a:"Agreeableness",w:["Conscientiousness","Extraversion","Emotional stability"],e:"Conscientiousness is the organized, hardworking one."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Curious, broad-minded and open to new ideas, things and experiences describes which dimension?",a:"Openness to experience",w:["Extraversion","Agreeableness","Conscientiousness"],e:"Extraversion is about being sociable and energized by others, not about new ideas."},
 {tp:"x3",sec:"g-x3-terms",t:"tf",q:"Emotional stability is the degree to which someone is not angry, depressed, anxious, emotional, insecure and excitable.",a:true,e:"True — note the “not”: it is defined by what the person is free of."},
 {tp:"x3",sec:"g-x3-terms",t:"tf",q:"Extraversion is the degree to which someone is organized, hardworking and achievement oriented.",a:false,e:"False — that is conscientiousness; extraversion is active, assertive, sociable, talkative and energized by others."},
 {tp:"x3",sec:"g-x3-terms",ap:true,t:"mc",q:"An interviewer wants someone who will meet every deadline and keep careful records. Which Big Five dimension matters most?",a:"Conscientiousness",w:["Extraversion","Agreeableness","Openness to experience"],e:"Organized, responsible, persevering — his slide asks whether to measure these during the interview."},
 {tp:"x3",sec:"g-x3-terms",ap:true,t:"mc",q:"A sales job calls for someone assertive and talkative who gets energy from meeting people. Which dimension fits?",a:"Extraversion",w:["Agreeableness","Conscientiousness","Emotional stability"],e:"Active, assertive, gregarious, sociable, talkative and energized by others."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Which term is the vertical line of authority that clarifies the reporting structure?",a:"Chain of command",w:["Unity of command","Centralization","Departmentalization"],e:"Unity of command is the separate principle of one boss per worker."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Which principle usually does NOT apply in a matrix organization?",a:"Unity of command",w:["Chain of command","Departmentalization","Autonomy"],e:"In a matrix, employees typically report to two bosses."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Passing decision-making authority and responsibility from managers to workers, with the information and resources they need, is:",a:"empowerment",w:["autonomy","decentralization","reengineering"],e:"Autonomy is the freedom to decide how and when to do the job; empowerment is the handing over of authority."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Which term is the degree to which workers have the discretion, freedom and independence to decide how and when to do their jobs?",a:"Autonomy",w:["Empowerment","Social integration","Decentralization"],e:"The level of being self-governing — the key difference among kinds of work teams."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"Members of a close team keep quiet about their doubts to avoid disagreeing. Which term on his list is this?",a:"Groupthink",w:["Social loafing","Member domination","Social integration"],e:"Pressure not to disagree in a highly cohesive team, so few alternatives are considered."},
 {tp:"x3",sec:"g-x3-terms",t:"tf",q:"Member domination is when one or two people dominate the team’s discussions.",a:true,e:"True — groupthink is shared pressure to agree; domination is one or two voices taking over."},
 {tp:"x3",sec:"g-x3-terms",t:"tf",q:"Organizational processes are the vertical and horizontal configuration of departments, authority and jobs.",a:false,e:"False — that is organizational structure; processes are the activities that transform inputs into outputs customers value."},
 {tp:"x3",sec:"g-x3-terms",t:"mc",q:"In the definition of a work team, members are mutually accountable for a common purpose, performance goals and improving:",a:"interdependency",w:["autonomy","cohesiveness","social integration"],e:"A small number of people with complementary skills."},

 /* ---- teams ---- */
 {tp:"x3",sec:"g-x3-teams",t:"mc",q:"Which is NOT a disadvantage of teams on his slide?",a:"Duplication",w:["Initial high turnover","Social loafing","Groupthink"],e:"Duplication belongs to product departmentalization. Team disadvantages: turnover, social loafing, groupthink, member domination."},
 {tp:"x3",sec:"g-x3-teams",t:"mc",q:"Which is an advantage of teams?",a:"Increased job satisfaction",w:["Initial high turnover","Member domination","Groupthink"],e:"Cross training raises job satisfaction; the other three are disadvantages."},
 {tp:"x3",sec:"g-x3-teams",t:"mc",q:"Teams beat individuals at which two steps of decision making?",a:"Defining the problem; generating alternatives",w:["Choosing a solution; carrying it out","Generating alternatives; choosing a solution","Defining the problem; evaluating results"],e:"His slide names exactly these two steps."},
 {tp:"x3",sec:"g-x3-teams",t:"mc",q:"Which is a reason NOT to use teams?",a:"The job can be done by people working independently",w:["The job cannot be done unless people work together","Rewards can be provided for team performance","There is a clear, engaging reason or purpose"],e:"Exhibit 10.1 — the other three are reasons to use teams."},
 {tp:"x3",sec:"g-x3-teams",t:"mc",q:"Exhibit 10.1 weighs purpose, whether the job needs people working together, rewards, and:",a:"resources",w:["team size","cohesiveness","autonomy"],e:"Use teams when ample resources are available; not when the necessary resources are missing."},
 {tp:"x3",sec:"g-x3-teams",t:"tf",q:"Teams are a good choice when rewards are provided for individual performance and effort.",a:false,e:"False — that is a do-not-use condition; use teams when rewards can go to teamwork and team performance."},
 {tp:"x3",sec:"g-x3-teams",t:"tf",q:"A move to teams usually starts with a period of high turnover.",a:true,e:"True — initial high turnover heads the list of disadvantages."},
 {tp:"x3",sec:"g-x3-teams",t:"tf",q:"Cognitive (c-type) conflict is the dysfunctional, destructive kind.",a:false,e:"False — c-type is problem-related and functional; a-type, the emotional and personal kind, is destructive."},
 {tp:"x3",sec:"g-x3-teams",ap:true,t:"mc",q:"Reps are paid only personal commission and never need each other to close a sale. Which two conditions say not to use a team?",a:"Individual rewards; independent work",w:["No clear purpose; no resources","Individual rewards; no resources","Independent work; no clear purpose"],e:"Nothing is said about purpose or resources — only rewards and whether the job needs people together."},
 {tp:"x3",sec:"g-x3-teams",ap:true,t:"mc",q:"A teammate stops contributing because she thinks her ideas will be ignored, not because she is lazy. Is this social loafing?",a:"Yes — she withholds effort; laziness is not required",w:["No — social loafing requires laziness and lack of desire","No — keeping ideas back is the definition of groupthink","Yes — but only when the team is highly cohesive"],e:"Withholding effort and disengaging is social loafing, whatever the reason."},

 /* ---- Exhibit 11.1 ---- */
 {tp:"x3",sec:"g-x3-hr",t:"mc",q:"Human resource management is the process of finding, developing and ____ the right people to form a qualified workforce.",a:"keeping",w:["training","rewarding","evaluating"],e:"Finding (attracting), developing and keeping — the three headings of Exhibit 11.1."},
 {tp:"x3",sec:"g-x3-hr",t:"mc",q:"Which order follows Exhibit 11.1?",a:"Recruiting, selection, training, appraisal, compensation, separation",w:["Selection, recruiting, training, appraisal, compensation, separation","Recruiting, selection, appraisal, training, compensation, separation","Recruiting, training, selection, appraisal, separation, compensation"],e:"Attracting (recruiting, selection), developing (training, appraisal), keeping (compensation, separation)."},
 {tp:"x3",sec:"g-x3-hr",t:"mc",q:"Under which heading of Exhibit 11.1 do training and performance appraisal fall?",a:"Developing qualified employees",w:["Attracting qualified employees","Keeping qualified employees","Selecting qualified employees"],e:"Attracting = recruiting and selection; keeping = compensation and separation."},
 {tp:"x3",sec:"g-x3-hr",t:"mc",q:"Under which heading do compensation and employee separation fall?",a:"Keeping qualified employees",w:["Developing qualified employees","Attracting qualified employees","Rewarding qualified employees"],e:"The last block of Exhibit 11.1."},
 {tp:"x3",sec:"g-x3-hr",t:"mc",q:"In Exhibit 11.1, the arrow from employee separation leads back to:",a:"recruiting",w:["selection","training","compensation"],e:"When someone leaves, the cycle starts again with recruiting."},
 {tp:"x3",sec:"g-x3-hr",t:"tf",q:"Selection is the process of developing a pool of qualified job applicants.",a:false,e:"False — that is recruiting; selection is gathering information about applicants to decide who should be offered a job."},
 {tp:"x3",sec:"g-x3-hr",t:"tf",q:"Performance appraisal is the process of assessing how well employees are doing their jobs.",a:true,e:"True — it sits with training under developing qualified employees."},
 {tp:"x3",sec:"g-x3-hr",t:"mc",q:"Financial and nonfinancial rewards given to employees in exchange for their work are:",a:"compensation",w:["performance appraisal","job evaluation","gainsharing"],e:"Job evaluation sets the worth of each job; gainsharing is one form of team pay."},
 {tp:"x3",sec:"g-x3-hr",t:"mc",q:"The involuntary or voluntary loss of an employee is:",a:"employee separation",w:["employee turnover","downsizing","termination"],e:"Turnover, downsizing and termination are kinds of separation, not the whole of it."},
 {tp:"x3",sec:"g-x3-hr",ap:true,t:"mc",q:"An employer calls a candidate’s former university to confirm the degree listed on her résumé. What is this?",a:"A background check",w:["Validation","A structured interview","An employment reference"],e:"Verifying the truthfulness and accuracy of what the applicant provided."},
 {tp:"x3",sec:"g-x3-hr",ap:true,t:"mc",q:"A store posts openings on job sites and asks staff for referrals to build a list of applicants. Which step of Exhibit 11.1 is this?",a:"Recruiting",w:["Selection","Training","Performance appraisal"],e:"Developing a pool of qualified applicants. Choosing among them comes next, in selection."},

 /* ---- diversity ---- */
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Differences that are observable, typically unchangeable and easy to measure are:",a:"surface-level diversity",w:["deep-level diversity","social integration","personality"],e:"Age, sex/gender, race/ethnicity and physical abilities or disabilities."},
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Differences learned only through extended interaction with others are:",a:"deep-level diversity",w:["surface-level diversity","awareness training","diversity pairing"],e:"Personality, attitudes, beliefs and values."},
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Which is an example of deep-level diversity?",a:"Values",w:["Age","Race/ethnicity","Physical ability"],e:"The other three are surface-level: observable and easy to measure."},
 {tp:"x3",sec:"g-x3-div",t:"tf",q:"Personality and attitudes are examples of surface-level diversity.",a:false,e:"False — they are deep-level, learned only through extended interaction."},
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Getting to know and understand each other reduces prejudice and conflict, resulting in stronger:",a:"social integration",w:["cohesiveness","groupthink","autonomy"],e:"95% of studies agree — the degree to which members are psychologically attracted to working together."},
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Which list gives the four diversity training practices?",a:"Skills-based training, awareness training, audits, pairing",w:["Skills-based training, awareness training, audits, affirmative action","Awareness training, audits, pairing, structured interviews","Skills-based training, audits, pairing, gainsharing"],e:"Affirmative action, structured interviews and gainsharing come from other parts of the chapters."},
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Which practice teaches flexibility, adaptability, negotiation, problem solving and conflict resolution?",a:"Skills-based diversity training",w:["Awareness training","Diversity audits","Diversity pairing"],e:"Practical skills for managing a diverse workforce."},
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Which practice challenges the assumptions or stereotypes employees may have about others?",a:"Awareness training",w:["Skills-based diversity training","Diversity audits","Diversity pairing"],e:"It raises awareness of diversity issues; skills-based training teaches practical skills instead."},
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Which practice is a formal assessment that measures attitudes and reviews hiring and promotion?",a:"Diversity audits",w:["Awareness training","Diversity pairing","Skills-based diversity training"],e:"It also reviews the company’s diversity-related policies and procedures."},
 {tp:"x3",sec:"g-x3-div",t:"tf",q:"Diversity pairing is a mentoring program that puts together people of different backgrounds, ages, sexes or races.",a:true,e:"True — so they get to know each other and change stereotypical beliefs and attitudes."},
 {tp:"x3",sec:"g-x3-div",t:"tf",q:"Diversity audits teach employees practical skills such as negotiation and conflict resolution.",a:false,e:"False — that is skills-based training; audits are formal assessments of attitudes, hiring, promotions and policies."},
 {tp:"x3",sec:"g-x3-div",ap:true,t:"mc",q:"A firm hires an outside group to check whether women are promoted at lower rates and to review its policies. Which practice?",a:"Diversity audit",w:["Awareness training","Diversity pairing","Skills-based diversity training"],e:"A formal assessment of who is advantaged or disadvantaged in hiring and promotions."},
 {tp:"x3",sec:"g-x3-div",ap:true,t:"mc",q:"A new 23-year-old analyst is matched with a 58-year-old manager from another country to meet weekly. Which practice?",a:"Diversity pairing",w:["Awareness training","Diversity audit","Skills-based diversity training"],e:"Mentoring across age and culture to change stereotypical beliefs."},
 {tp:"x3",sec:"g-x3-div",ap:true,t:"mc",q:"Two coworkers first judge each other by age; after months on a project they find they share the same values. What does this show?",a:"Deep-level ties outweigh surface-level differences",w:["Surface-level differences cannot be overcome","Groupthink has formed in the project team","Affirmative action shaped the team"],e:"Extended interaction reveals deep-level diversity and reduces prejudice — stronger social integration."},
 {tp:"x3",sec:"g-x3-div",t:"mc",q:"Which is NOT one of the business reasons on his slide for a culture that supports diversity?",a:"Fewer laws to follow",w:["Cost savings from less turnover and absenteeism","Attracting and retaining talented workers","Driving business growth"],e:"Cost savings also include avoiding discrimination lawsuits."}
]);
