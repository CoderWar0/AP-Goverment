// ===== CHEAT SHEET DATA =====
const cheatData = [
  {
    title: "Unit 1 — Foundations of American Democracy",
    color: "#1a3a5c",
    rows: [
      ["Enlightenment Ideas", "Locke (natural rights), Montesquieu (separation of powers), Rousseau (social contract)"],
      ["Articles of Confederation", "Weak central govt, no executive/judiciary, no taxing power, unanimous amendment"],
      ["Great Compromise", "Bicameral legislature: Senate (equal) + House (proportional)"],
      ["Separation of Powers", "Legislative (makes law), Executive (enforces law), Judicial (interprets law)"],
      ["Checks & Balances", "Veto, override, judicial review, confirmation, impeachment"],
      ["Federalism", "Enumerated (federal), reserved (state), concurrent (shared) powers"],
      ["Elastic Clause", "Necessary & Proper — gives Congress implied powers"],
      ["Commerce Clause", "Congress regulates interstate commerce — expanded federal power"],
      ["Supremacy Clause", "Federal law > state law (Article VI)"],
      ["10th Amendment", "Reserved powers to the states"],
      ["Federalist No. 10", "Large republic controls factions — Madison"],
      ["Federalist No. 51", "Separation of powers prevents tyranny — Madison"],
      ["Federalist No. 70", "Unitary executive is energetic & accountable — Hamilton"],
      ["Federalist No. 78", "Judiciary is 'least dangerous branch,' needs independence — Hamilton"],
      ["Brutus No. 1", "Anti-Fed: large republic = tyranny, need Bill of Rights"]
    ]
  },
  {
    title: "Unit 2 — Branches of Government",
    color: "#264e78",
    rows: [
      ["House", "435 members, 2-yr terms, initiates revenue bills, impeaches, Speaker leads"],
      ["Senate", "100 members, 6-yr terms, confirms appointments, ratifies treaties, filibuster/cloture"],
      ["Legislative Process", "Bill → committee → floor → conference → president signs/vetoes"],
      ["Presidential Formal Powers", "Veto, commander-in-chief, appointments, treaties, pardons, State of Union"],
      ["Presidential Informal Powers", "Exec. orders, exec. agreements, signing statements, bully pulpit"],
      ["Bureaucracy", "Cabinet depts, independent agencies, regulatory commissions, govt corporations"],
      ["Iron Triangle", "Congressional committee + bureaucratic agency + interest group"],
      ["Federal Courts", "District → Circuit Courts of Appeals → Supreme Court"],
      ["Judicial Review", "Marbury v. Madison (1803) — courts can strike unconstitutional laws"],
      ["Activism vs. Restraint", "Activism = broad interpretation; Restraint = defer to elected branches"],
      ["Impeachment", "House impeaches (majority), Senate convicts & removes (2/3 vote)"]
    ]
  },
  {
    title: "Unit 3 — Civil Liberties & Civil Rights",
    color: "#457b9d",
    rows: [
      ["Selective Incorporation", "14th Amend. Due Process applies Bill of Rights to states"],
      ["Establishment Clause", "No state religion — Engel v. Vitale (school prayer banned)"],
      ["Free Exercise Clause", "Right to practice religion — Wisconsin v. Yoder (Amish exemption)"],
      ["Free Speech", "Schenck (clear & present danger), Tinker (student speech protected)"],
      ["Free Press", "NYT v. U.S. (no prior restraint — Pentagon Papers)"],
      ["4th Amendment", "No unreasonable searches — Mapp v. Ohio (exclusionary rule)"],
      ["5th Amendment", "Self-incrimination, due process — Miranda v. Arizona (Miranda rights)"],
      ["6th Amendment", "Right to counsel — Gideon v. Wainwright (lawyer for felony cases)"],
      ["Right to Privacy", "Griswold v. CT (contraception), Roe v. Wade (overturned by Dobbs 2022)"],
      ["Equal Protection", "14th Amend. — Brown v. Board (desegregation), strict/intermediate/rational basis"],
      ["Civil Rights Act 1964", "Banned discrimination by race, color, religion, sex, national origin"],
      ["Voting Rights Act 1965", "Eliminated literacy tests and discriminatory voting practices"],
      ["2nd Amendment", "McDonald v. Chicago — incorporated right to bear arms to states"],
      ["Shaw v. Reno", "Racial gerrymandering may violate Equal Protection"]
    ]
  },
  {
    title: "Unit 4 — Ideologies & Beliefs",
    color: "#2a9d8f",
    rows: [
      ["Political Socialization", "Family (strongest), schools, peers, media, religion shape beliefs"],
      ["Liberal", "Govt intervention in economy, less in social matters, progressive taxation"],
      ["Conservative", "Limited govt in economy, traditional values, strong defense, free market"],
      ["Libertarian", "Minimal govt in both economic and social issues"],
      ["Scientific Polling", "Random sampling, ~1,000+ sample, margin of error, careful wording"],
      ["Trustee Model", "Reps use own judgment for public good"],
      ["Delegate Model", "Reps vote according to constituents' wishes"],
      ["Sampling Error", "Margin of error — ±3% means true value within 3 pts of reported number"]
    ]
  },
  {
    title: "Unit 5 — Political Participation",
    color: "#e63946",
    rows: [
      ["Voter Turnout", "Education = strongest predictor; presidential > midterm turnout"],
      ["Voting Barriers (Historical)", "Poll taxes, literacy tests — eliminated by 15th, 19th, 24th, 26th Amends."],
      ["Two-Party System", "Winner-take-all (Duverger's Law) → Democrats & Republicans dominate"],
      ["Party Functions", "Recruit candidates, mobilize voters, organize govt, accountability"],
      ["Interest Group Tactics", "Lobbying, litigation (amicus briefs), grassroots, PAC funding"],
      ["PACs", "Donate directly to candidates, $5,000 limit per election"],
      ["Super PACs", "Unlimited independent spending, no coordination, must disclose donors"],
      ["Citizens United (2010)", "Corps & unions can make unlimited independent expenditures"],
      ["Buckley v. Valeo (1976)", "Spending = speech; contribution limits OK, expenditure limits struck down"],
      ["Media Functions", "Agenda setting, framing, priming, gatekeeping, watchdog"],
      ["Gerrymandering", "Manipulating district boundaries to favor one party"],
      ["Baker v. Carr (1962)", "Redistricting is a justiciable issue — 'one person, one vote'"]
    ]
  },
  {
    title: "15 Required SCOTUS Cases",
    color: "#9b2226",
    rows: [
      ["Marbury v. Madison (1803)", "Established judicial review — courts can declare laws unconstitutional"],
      ["McCulloch v. Maryland (1819)", "Federal supremacy, implied powers (Necessary & Proper Clause), states can't tax federal govt"],
      ["Schenck v. U.S. (1919)", "Clear and present danger test — speech can be limited in wartime"],
      ["Brown v. Board (1954)", "Overturned 'separate but equal' — segregated schools violate Equal Protection"],
      ["Baker v. Carr (1962)", "Redistricting is justiciable — led to 'one person, one vote'"],
      ["Engel v. Vitale (1962)", "State-sponsored school prayer violates Establishment Clause"],
      ["Gideon v. Wainwright (1963)", "Right to court-appointed attorney in felony cases (6th Amend.)"],
      ["Tinker v. Des Moines (1969)", "Students have free speech rights in school (symbolic speech protected)"],
      ["NYT v. U.S. (1971)", "Prior restraint unconstitutional — Pentagon Papers published"],
      ["Wisconsin v. Yoder (1972)", "Amish exempt from compulsory schooling (Free Exercise Clause)"],
      ["Roe v. Wade (1973)", "Right to privacy includes abortion (overturned by Dobbs 2022)"],
      ["Shaw v. Reno (1993)", "Racial gerrymandering subject to strict scrutiny"],
      ["U.S. v. Lopez (1995)", "Commerce Clause has limits — gun-free school zones not interstate commerce"],
      ["McDonald v. Chicago (2010)", "2nd Amendment incorporated to states via 14th Amendment"],
      ["Citizens United v. FEC (2010)", "Corporate/union independent expenditures = protected speech"]
    ]
  },
  {
    title: "9 Required Foundational Documents",
    color: "#6a040f",
    rows: [
      ["Declaration of Independence", "Natural rights, consent of the governed, right to revolution — Jefferson"],
      ["Articles of Confederation", "First govt structure; weak central govt exposed need for Constitution"],
      ["U.S. Constitution", "Framework of govt; separation of powers, federalism, amendment process"],
      ["Federalist No. 10", "Large republic controls factions, prevents tyranny of majority — Madison"],
      ["Federalist No. 51", "Separation of powers + checks & balances prevent tyranny — Madison"],
      ["Federalist No. 70", "Unitary executive is energetic, decisive, accountable — Hamilton"],
      ["Federalist No. 78", "Independent judiciary is 'least dangerous branch'; judicial review — Hamilton"],
      ["Brutus No. 1", "Anti-Fed warning: large republic → tyranny; demanded Bill of Rights"],
      ["Letter from Birmingham Jail", "MLK: moral obligation to disobey unjust laws; direct action justified"]
    ]
  }
];

// ===== KEY TERMS =====
const allTerms = [
  {t:"Federalism",d:"System dividing power between national and state governments.",u:1},
  {t:"Separation of Powers",d:"Division of government into legislative, executive, and judicial branches.",u:1},
  {t:"Checks and Balances",d:"Mechanisms allowing each branch to limit the power of other branches.",u:1},
  {t:"Popular Sovereignty",d:"Government authority derives from the consent of the people.",u:1},
  {t:"Republicanism",d:"System where elected representatives govern on behalf of the people.",u:1},
  {t:"Enumerated Powers",d:"Powers explicitly granted to Congress in Article I, Section 8.",u:1},
  {t:"Implied Powers",d:"Powers not stated but authorized through the Necessary and Proper Clause.",u:1},
  {t:"Reserved Powers",d:"Powers kept by the states under the 10th Amendment.",u:1},
  {t:"Concurrent Powers",d:"Powers shared by both federal and state governments (e.g., taxation).",u:1},
  {t:"Commerce Clause",d:"Congress's power to regulate interstate commerce (Art. I, Sec. 8).",u:1},
  {t:"Supremacy Clause",d:"Federal law is the supreme law of the land (Article VI).",u:1},
  {t:"Elastic (Necessary & Proper) Clause",d:"Gives Congress implied powers beyond those enumerated.",u:1},
  {t:"Social Contract",d:"Theory that government is an agreement between rulers and the people.",u:1},
  {t:"Natural Rights",d:"Locke's concept: life, liberty, and property — inherent human rights.",u:1},
  {t:"Block Grant",d:"Federal money to states with broad spending flexibility.",u:1},
  {t:"Categorical Grant",d:"Federal money for a specific, narrowly defined purpose.",u:1},
  {t:"Mandate",d:"Federal requirement states must follow, often tied to funding.",u:1},
  {t:"Judicial Review",d:"Power of courts to declare laws unconstitutional (Marbury v. Madison).",u:2},
  {t:"Filibuster",d:"Senate tactic to delay a vote by extending debate; 60 votes for cloture.",u:2},
  {t:"Cloture",d:"Senate procedure requiring 60 votes to end a filibuster.",u:2},
  {t:"Veto",d:"President's power to reject a bill; Congress can override with 2/3 vote.",u:2},
  {t:"Executive Order",d:"Presidential directive that manages federal operations (informal power).",u:2},
  {t:"Bully Pulpit",d:"President's ability to use office prestige to shape public opinion.",u:2},
  {t:"Iron Triangle",d:"Policy relationship: congressional committee + agency + interest group.",u:2},
  {t:"Issue Network",d:"Broad, fluid coalition of actors that influence policy on a specific issue.",u:2},
  {t:"Writ of Certiorari",d:"Supreme Court order to lower court to send case for review (Rule of Four).",u:2},
  {t:"Amicus Curiae Brief",d:"'Friend of the court' brief from interest groups offering perspective on a case.",u:2},
  {t:"Divided Government",d:"One party controls presidency, other controls one/both chambers of Congress.",u:2},
  {t:"Incumbency Advantage",d:"Sitting officeholders' advantages: name recognition, fundraising, franking.",u:2},
  {t:"Selective Incorporation",d:"Applying Bill of Rights to states via 14th Amendment Due Process Clause.",u:3},
  {t:"Due Process",d:"Government can't deprive life, liberty, property without fair procedures (5th/14th).",u:3},
  {t:"Equal Protection Clause",d:"14th Amendment: states must treat all people equally under the law.",u:3},
  {t:"Establishment Clause",d:"Government cannot establish or endorse a religion (1st Amendment).",u:3},
  {t:"Free Exercise Clause",d:"Right to practice religion without government interference (1st Amendment).",u:3},
  {t:"Exclusionary Rule",d:"Illegally obtained evidence inadmissible in court (Mapp v. Ohio).",u:3},
  {t:"Strict Scrutiny",d:"Highest judicial review standard — govt must show compelling interest (race, religion).",u:3},
  {t:"Intermediate Scrutiny",d:"Mid-level review for gender classifications — important government interest required.",u:3},
  {t:"Rational Basis Test",d:"Lowest review — law must be rationally related to legitimate interest (age, disability).",u:3},
  {t:"Political Socialization",d:"Lifelong process of developing political attitudes; family is strongest influence.",u:4},
  {t:"Linkage Institution",d:"Channel connecting people to government: parties, interest groups, elections, media.",u:4},
  {t:"Public Opinion",d:"Collective attitudes of citizens about political issues, leaders, and institutions.",u:4},
  {t:"Sampling Error",d:"Margin of error in polls — ±3% means true value within 3 points of reported.",u:4},
  {t:"Trustee Model",d:"Representatives use own judgment to serve public good.",u:4},
  {t:"Delegate Model",d:"Representatives vote according to constituents' preferences.",u:4},
  {t:"Gerrymandering",d:"Manipulating district boundaries to favor one political party.",u:5},
  {t:"PAC (Political Action Committee)",d:"Donates directly to candidates with contribution limits ($5,000/election).",u:5},
  {t:"Super PAC",d:"Unlimited independent expenditures; cannot coordinate with campaigns.",u:5},
  {t:"501(c)(4) Dark Money",d:"Social welfare orgs that engage in politics without disclosing donors.",u:5},
  {t:"Duverger's Law",d:"Winner-take-all elections tend to produce two-party systems.",u:5},
  {t:"Realignment",d:"Major shift in party coalitions, often triggered by a critical election.",u:5},
  {t:"Dealignment",d:"Weakening of party ties — rise of independents and split-ticket voting.",u:5},
  {t:"Agenda Setting",d:"Media's power to influence which issues the public thinks about.",u:5},
  {t:"Framing",d:"How media presents an issue influences how the public interprets it.",u:5}
];

// ===== MCQ DATA =====
const mcqData = [
  // ===========================
  // UNIT 1 — Foundations (15 questions)
  // ===========================
  {q:"Which of the following best describes the concept of federalism?",opts:["All power resides in the national government","Power is divided between national and state governments","State governments have supreme authority","The judiciary allocates all powers"],ans:1,exp:"Federalism divides power between national and state governments, with enumerated, reserved, and concurrent powers.",unit:1},
  {q:"In Federalist No. 10, Madison argued that a large republic would:",opts:["Eliminate factions entirely","Make it harder for any single faction to dominate","Require direct democracy","Concentrate power in qualified citizens"],ans:1,exp:"Madison argued many competing factions in a large republic prevent any one from gaining majority control.",unit:1},
  {q:"The Necessary and Proper Clause has been used primarily to:",opts:["Create the Bill of Rights","Expand congressional power through implied powers","Grant the president executive order authority","Allow state nullification of federal laws"],ans:1,exp:"The Elastic Clause grants Congress implied powers. McCulloch v. Maryland (1819) affirmed this broad interpretation.",unit:1},
  {q:"The Great Compromise at the Constitutional Convention resolved a dispute about:",opts:["Slavery and the slave trade","Presidential election methods","Representation in the national legislature","The power of judicial review"],ans:2,exp:"The Great Compromise created a bicameral legislature: Senate with equal representation and House with proportional representation.",unit:1},
  {q:"Which foundational document warned that a large republic would lead to tyranny and demanded a Bill of Rights?",opts:["Federalist No. 10","Federalist No. 51","Brutus No. 1","Federalist No. 78"],ans:2,exp:"Brutus No. 1, an Anti-Federalist paper, argued a large republic couldn't represent the people and demanded protections for individual liberty.",unit:1},
  {q:"The Supremacy Clause (Article VI) establishes that:",opts:["State constitutions override federal law","The president's executive orders override all other laws","The Constitution and federal law are the supreme law of the land","The Supreme Court has final authority over all political questions"],ans:2,exp:"The Supremacy Clause establishes that the Constitution and federal law take precedence over state laws.",unit:1},
  {q:"McCulloch v. Maryland (1819) established two important principles:",opts:["Judicial review and separation of powers","Implied powers and federal supremacy over states","Freedom of speech and freedom of the press","State sovereignty and nullification"],ans:1,exp:"McCulloch upheld the Bank of the United States under implied powers (Necessary & Proper Clause) and ruled states cannot tax a federal institution (federal supremacy).",unit:1},
  {q:"Which of the following is a concurrent power shared by both federal and state governments?",opts:["Coining money","Declaring war","Levying taxes","Conducting foreign policy"],ans:2,exp:"Taxation is a concurrent power — both levels of government can levy taxes. Coining money, declaring war, and foreign policy are exclusively federal.",unit:1},
  {q:"The primary purpose of the Bill of Rights was to:",opts:["Establish the three branches of government","Protect individual liberties from the federal government","Grant voting rights to all citizens","Regulate interstate commerce"],ans:1,exp:"The Bill of Rights (first 10 amendments) was added to protect individual liberties from federal government overreach, fulfilling an Anti-Federalist demand.",unit:1},
  {q:"Federalist No. 51 argues that the best way to prevent tyranny is through:",opts:["A strong executive with broad powers","Direct democracy and popular referendums","Separation of powers and checks and balances","A single powerful national legislature"],ans:2,exp:"Madison argued in Federalist No. 51 that dividing power among branches that check each other ('ambition must be made to counteract ambition') prevents tyranny.",unit:1},
  {q:"The Articles of Confederation failed primarily because the national government lacked the power to:",opts:["Conduct foreign affairs","Declare war","Tax and regulate commerce","Amend the Articles"],ans:2,exp:"Under the Articles, Congress couldn't levy taxes or regulate interstate commerce, leaving the government unable to fund itself or manage the economy.",unit:1},
  {q:"Categorical grants differ from block grants in that categorical grants:",opts:["Give states complete freedom in spending","Come with specific conditions on how money must be spent","Are funded entirely by state governments","Cannot be used for education or healthcare"],ans:1,exp:"Categorical grants come with strict federal requirements on how the money must be spent. Block grants give states broader flexibility.",unit:1},
  {q:"Federalist No. 78 argues that the judiciary is the 'least dangerous' branch because it:",opts:["Has the power to enforce its own rulings","Controls the military","Has neither the sword nor the purse","Is elected directly by the people"],ans:2,exp:"Hamilton argued in Federalist No. 78 that the judiciary lacks enforcement power (the sword) and spending power (the purse), making it dependent on the other branches.",unit:1},
  {q:"The concept of popular sovereignty means that:",opts:["The Supreme Court is the final authority","Government power comes from the consent of the people","States have ultimate authority over the federal government","The president rules by divine right"],ans:1,exp:"Popular sovereignty holds that government legitimacy comes from the will and consent of the governed — a core principle of the Declaration of Independence.",unit:1},
  {q:"An unfunded mandate is best described as:",opts:["A federal grant given to states without conditions","A state law requiring local governments to raise taxes","A federal requirement on states without providing funding to implement it","A Supreme Court order that Congress must fund a program"],ans:2,exp:"Unfunded mandates require states to comply with federal regulations without receiving federal money to cover the costs, creating tension in fiscal federalism.",unit:1},

  // ===========================
  // UNIT 2 — Branches of Government (18 questions)
  // ===========================
  {q:"The Supreme Court case Marbury v. Madison (1803) is significant because it established:",opts:["Congressional power to regulate commerce","Presidential authority for executive orders","The principle of judicial review","Federal supremacy over state law"],ans:2,exp:"Marbury v. Madison established judicial review — the power to declare laws unconstitutional.",unit:2},
  {q:"Which of the following is an informal presidential power?",opts:["Vetoing a bill","Nominating a Supreme Court justice","Issuing an executive order","Granting a pardon"],ans:2,exp:"Executive orders are informal powers not explicitly listed in the Constitution. Vetoes, nominations, and pardons are formal powers.",unit:2},
  {q:"A filibuster can be ended through:",opts:["Reconciliation","Cloture","A presidential veto","A conference committee vote"],ans:1,exp:"Cloture requires 60 Senate votes to end a filibuster and proceed to a vote.",unit:2},
  {q:"Which best exemplifies an iron triangle?",opts:["President, Congress, and Supreme Court collaborating","Congressional committee, interest group, and bureaucratic agency cooperating","Federal, state, and local governments sharing power","House, Senate, and conference committee crafting a bill"],ans:1,exp:"An iron triangle is the mutually beneficial relationship among a congressional committee, bureaucratic agency, and interest group.",unit:2},
  {q:"The War Powers Resolution was designed to:",opts:["Give the president unlimited military authority","Limit the president's ability to commit troops without congressional approval","Abolish the president's role as commander-in-chief","Allow Congress to declare war without presidential consent"],ans:1,exp:"The War Powers Resolution (1973) requires the president to notify Congress within 48 hours of committing troops and limits deployments to 60 days without congressional authorization.",unit:2},
  {q:"Which of the following is a check the legislative branch has on the judicial branch?",opts:["Judicial review of laws","Power to impeach and remove federal judges","Presidential pardon power","Issuing executive orders"],ans:1,exp:"Congress can impeach and remove federal judges. Congress can also change court jurisdiction and propose constitutional amendments to override court decisions.",unit:2},
  {q:"Which body has the sole power to impeach a federal official?",opts:["The Senate","The Supreme Court","The House of Representatives","The Electoral College"],ans:2,exp:"The House has the sole power of impeachment (bringing charges). The Senate conducts the trial and can convict/remove with a 2/3 vote.",unit:2},
  {q:"The 'Rule of Four' refers to:",opts:["Four justices needed to grant certiorari","Four votes needed to override a presidential veto","Four amendments in the Bill of Rights related to criminal justice","Four standing committees required to review every bill"],ans:0,exp:"The Rule of Four means at least 4 of 9 Supreme Court justices must agree to hear a case before certiorari is granted.",unit:2},
  {q:"Which of the following is a power exclusive to the Senate?",opts:["Initiating revenue bills","Impeaching federal officials","Ratifying treaties","Determining the rules for debate in the House"],ans:2,exp:"Only the Senate can ratify treaties (requiring a 2/3 vote). The House initiates revenue bills and has sole impeachment power.",unit:2},
  {q:"A conference committee is best described as:",opts:["A permanent committee that handles bills in one policy area","A temporary committee formed to reconcile differences between House and Senate versions of a bill","A committee that investigates executive misconduct","A joint committee that audits government spending"],ans:1,exp:"Conference committees are temporary, bipartisan panels formed when the House and Senate pass different versions of the same bill. They produce a compromise version.",unit:2},
  {q:"The president's State of the Union address is an example of which constitutional provision?",opts:["The Necessary and Proper Clause","The Take Care Clause","Article II requiring the president to report to Congress on the state of the union","The Presentment Clause"],ans:2,exp:"Article II, Section 3 requires the president to 'from time to time give to the Congress Information of the State of the Union.' This has become an annual address to set the legislative agenda.",unit:2},
  {q:"Which of the following best describes judicial activism?",opts:["Judges strictly following the original text of the Constitution","Judges deferring to the decisions of the elected branches","Judges interpreting the Constitution broadly to advance rights or policy goals","Judges refusing to hear cases on political questions"],ans:2,exp:"Judicial activism involves judges interpreting the Constitution broadly, sometimes going beyond the text to protect rights or shape policy. Judicial restraint is its opposite — deferring to elected branches.",unit:2},
  {q:"The Speaker of the House is significant because he or she:",opts:["Presides over the Senate during impeachment trials","Is second in the presidential line of succession","Serves as the chief diplomat for Congress","Is appointed by the president"],ans:1,exp:"The Speaker of the House is elected by House members, presides over debates, influences the legislative agenda, and is second in the presidential line of succession (after the VP).",unit:2},
  {q:"The bureaucracy is sometimes called the 'fourth branch' of government because it:",opts:["Was created by the Fourth Amendment","Has the power to declare laws unconstitutional","Has significant policy-making influence through rulemaking and implementation","Is directly elected by the people"],ans:2,exp:"Federal agencies exercise quasi-legislative (rulemaking) and quasi-judicial (adjudication) powers. Their ability to interpret and implement laws gives them significant policy influence.",unit:2},
  {q:"Discretionary spending differs from mandatory spending in that discretionary spending:",opts:["Is required by existing law and cannot be changed","Must be approved annually through the appropriations process","Includes entitlement programs like Social Security and Medicare","Makes up the majority of the federal budget"],ans:1,exp:"Discretionary spending (defense, education, etc.) must be approved annually through congressional appropriations. Mandatory spending (Social Security, Medicare) is set by existing law.",unit:2},
  {q:"A pocket veto occurs when:",opts:["The president vetoes a bill and sends it back to Congress with objections","Congress overrides a presidential veto with a 2/3 vote","The president takes no action on a bill and Congress adjourns within 10 days","The president signs a bill into law with a signing statement"],ans:2,exp:"A pocket veto occurs when the president does not sign a bill within 10 days and Congress has adjourned. The bill dies without the president formally vetoing it, and Congress cannot override.",unit:2},
  {q:"Which of the following is the best example of Congress exercising its oversight function?",opts:["Passing a new tax bill","A committee holding hearings to investigate an executive agency's actions","Confirming a Supreme Court nominee","Overriding a presidential veto"],ans:1,exp:"Congressional oversight involves monitoring and reviewing executive branch agencies. Committee hearings and investigations are primary tools. Confirmation and veto override are separate checks.",unit:2},
  {q:"The concept of 'logrolling' in Congress refers to:",opts:["A parliamentary procedure to end debate","The practice of legislators trading votes to pass each other's bills","A presidential strategy for getting legislation passed","The process of assigning bills to committees"],ans:1,exp:"Logrolling is the exchange of political favors — legislators agree to vote for each other's preferred bills, helping both parties get legislation passed.",unit:2},

  // ===========================
  // UNIT 3 — Civil Liberties & Rights (16 questions)
  // ===========================
  {q:"The incorporation doctrine is based primarily on which amendment?",opts:["1st Amendment","10th Amendment","14th Amendment","5th Amendment"],ans:2,exp:"Selective incorporation uses the 14th Amendment's Due Process Clause to apply Bill of Rights protections to state governments.",unit:3},
  {q:"In Tinker v. Des Moines, the Court ruled that:",opts:["Schools can ban all forms of student expression","Students retain First Amendment rights in school","Obscene speech is protected for minors","Schools must provide a forum for all political views"],ans:1,exp:"The Court ruled students don't 'shed their constitutional rights at the schoolhouse gate' — symbolic speech (armbands) is protected unless it causes substantial disruption.",unit:3},
  {q:"The exclusionary rule, established in Mapp v. Ohio, means that:",opts:["Defendants have the right to exclude jurors","Evidence obtained through illegal searches cannot be used in court","Certain amendments are excluded from incorporation","Citizens can be excluded from public facilities based on conduct"],ans:1,exp:"The exclusionary rule prevents illegally obtained evidence from being used in criminal trials, protecting 4th Amendment rights.",unit:3},
  {q:"Brown v. Board of Education overturned which earlier precedent?",opts:["Marbury v. Madison","Dred Scott v. Sandford","Plessy v. Ferguson","McCulloch v. Maryland"],ans:2,exp:"Brown overturned Plessy v. Ferguson's 'separate but equal' doctrine, ruling segregated schools inherently violate Equal Protection.",unit:3},
  {q:"The 'clear and present danger' test was established in:",opts:["Tinker v. Des Moines","Schenck v. United States","New York Times v. United States","Engel v. Vitale"],ans:1,exp:"Schenck v. U.S. (1919) established that speech creating a 'clear and present danger' can be restricted.",unit:3},
  {q:"McDonald v. Chicago (2010) is significant because it:",opts:["Established the right to privacy","Incorporated the 2nd Amendment right to bear arms to state governments","Created strict scrutiny for racial classifications","Banned gerrymandering in federal elections"],ans:1,exp:"McDonald v. Chicago incorporated the 2nd Amendment to apply to state and local governments through the 14th Amendment.",unit:3},
  {q:"Engel v. Vitale (1962) ruled that:",opts:["Students can pray silently in school","State-sponsored prayer in public schools violates the Establishment Clause","Public schools must teach all world religions equally","Religious organizations are exempt from all federal laws"],ans:1,exp:"The Court ruled that state-composed prayers in public schools violate the Establishment Clause's prohibition against government endorsement of religion, even if participation is voluntary.",unit:3},
  {q:"Gideon v. Wainwright (1963) established the right to:",opts:["Remain silent during police interrogation","A court-appointed attorney in felony cases","Trial by jury in all criminal cases","Bail in non-capital offenses"],ans:1,exp:"The Court ruled the 6th Amendment right to counsel is fundamental, requiring states to provide a lawyer for defendants who cannot afford one in felony cases.",unit:3},
  {q:"New York Times Co. v. United States (1971) is known as the 'Pentagon Papers' case because it ruled that:",opts:["Newspapers can be sued for libel by public officials","The government cannot exercise prior restraint to prevent publication","Journalists must reveal their confidential sources","Freedom of the press does not extend to classified information"],ans:1,exp:"The Court ruled the government could not use prior restraint to stop the New York Times from publishing classified Vietnam War documents, protecting press freedom.",unit:3},
  {q:"Wisconsin v. Yoder (1972) upheld the right of Amish families to:",opts:["Homeschool their children without any government oversight","Withdraw children from public school after 8th grade based on religious beliefs","Refuse to pay taxes on religious grounds","Establish their own court system within their community"],ans:1,exp:"The Court ruled the Free Exercise Clause protects the Amish right to remove their children from compulsory schooling after 8th grade, as formal education conflicted with their religious practices.",unit:3},
  {q:"Miranda v. Arizona (1966) requires police to:",opts:["Obtain a warrant before any arrest","Inform arrested persons of their rights before custodial interrogation","Allow suspects to contact an attorney within one hour of arrest","Videotape all interrogations"],ans:1,exp:"Miranda requires police to inform suspects of their 5th Amendment right against self-incrimination and 6th Amendment right to counsel before custodial interrogation. Statements obtained without these warnings are inadmissible.",unit:3},
  {q:"Strict scrutiny is the judicial standard applied to laws that classify people by:",opts:["Age or disability","Gender or sex","Race, ethnicity, or religion","Wealth or income level"],ans:2,exp:"Strict scrutiny is the highest level of judicial review, applied to classifications based on race, ethnicity, or religion. The government must demonstrate a compelling interest and that the law is narrowly tailored.",unit:3},
  {q:"The Voting Rights Act of 1965 was primarily aimed at:",opts:["Lowering the voting age to 18","Eliminating discriminatory voting practices like literacy tests","Establishing the Electoral College system","Granting women the right to vote"],ans:1,exp:"The VRA eliminated literacy tests and other practices used to disenfranchise Black voters, especially in the South. It authorized federal oversight of elections in areas with histories of discrimination.",unit:3},
  {q:"Shaw v. Reno (1993) addressed the issue of:",opts:["Campaign finance reform","School prayer in public schools","Racial gerrymandering of congressional districts","Affirmative action in college admissions"],ans:2,exp:"The Court ruled that racial gerrymandering — drawing bizarrely shaped districts primarily based on race — must be subject to strict scrutiny under the Equal Protection Clause.",unit:3},
  {q:"Which of the following is an example of the Free Exercise Clause in action?",opts:["A city banning religious displays in public parks","A court ruling that school prayer is unconstitutional","A law exempting a religious group from a generally applicable law","Congress passing a law declaring an official national religion"],ans:2,exp:"The Free Exercise Clause protects individuals' right to practice their religion. Exemptions from general laws for religious reasons (like in Wisconsin v. Yoder) are Free Exercise protections.",unit:3},
  {q:"The 14th Amendment's Equal Protection Clause has been used to:",opts:["Protect the right to bear arms","Establish the president's term limits","Challenge laws that discriminate against specific groups of people","Give Congress the power to regulate interstate commerce"],ans:2,exp:"The Equal Protection Clause prohibits states from denying any person equal protection of the laws. It has been the constitutional basis for challenging racial segregation, gender discrimination, and other unequal treatment.",unit:3},

  // ===========================
  // UNITS 4-5 — Ideologies & Participation (16 questions)
  // ===========================
  {q:"Which factor is the strongest predictor of voter turnout?",opts:["Race/ethnicity","Education level","Gender","Geographic location"],ans:1,exp:"Education is consistently the strongest predictor — higher education correlates with greater political engagement and voting.",unit:45},
  {q:"Which correctly describes PACs vs. Super PACs?",opts:["Both donate unlimited amounts directly to candidates","Super PACs coordinate with campaigns while PACs cannot","PACs donate directly with limits; Super PACs make unlimited independent expenditures","PACs were ruled unconstitutional by Citizens United"],ans:2,exp:"PACs donate directly with limits. Super PACs make unlimited independent expenditures but cannot coordinate with campaigns.",unit:45},
  {q:"Citizens United v. FEC (2010) ruled that:",opts:["Individual campaign contributions have no limits","Corporate and union independent expenditures are protected speech","Super PACs can coordinate directly with campaigns","All campaign finance regulations are unconstitutional"],ans:1,exp:"Citizens United ruled that corporations and unions can make unlimited independent expenditures as protected speech under the 1st Amendment.",unit:45},
  {q:"The media's ability to influence which issues the public considers important is called:",opts:["Framing","Priming","Agenda setting","Gatekeeping"],ans:2,exp:"Agenda setting is the media's power to influence what issues people think about by choosing what stories to cover prominently.",unit:45},
  {q:"Duverger's Law suggests that single-member district plurality elections tend to produce:",opts:["Multi-party systems","Two-party systems","One-party dominance","Coalition governments"],ans:1,exp:"Winner-take-all elections discourage third parties because votes for losing candidates are 'wasted,' producing two dominant parties.",unit:45},
  {q:"Political socialization is best described as:",opts:["The government's efforts to educate citizens","The process by which individuals develop political attitudes and beliefs","Mandatory civic education in public schools","The media's influence on election outcomes"],ans:1,exp:"Political socialization is the lifelong process of developing political attitudes. Family is the strongest early agent.",unit:45},
  {q:"Which model of representation describes a legislator who votes based on their own judgment of the public good?",opts:["Delegate model","Trustee model","Politico model","Partisan model"],ans:1,exp:"The trustee model says representatives should use their own judgment rather than simply reflecting constituents' opinions.",unit:45},
  {q:"Buckley v. Valeo (1976) established that:",opts:["Campaign donations to candidates can be unlimited","Spending money in elections is a form of protected speech","The FEC has no authority to regulate campaigns","Public financing of elections is unconstitutional"],ans:1,exp:"The Court ruled that spending money to influence elections is protected by the 1st Amendment. It upheld contribution limits but struck down expenditure limits.",unit:45},
  {q:"The 'spoiler effect' in elections refers to:",opts:["When negative campaign ads reduce voter turnout","When a third-party candidate draws votes away from a major-party candidate, changing the outcome","When incumbents use their office for campaign advantages","When media coverage influences election results"],ans:1,exp:"The spoiler effect occurs when a third-party candidate takes enough votes from one major-party candidate to tip the election to the other. This discourages voting for third parties.",unit:45},
  {q:"Which of the following best describes a conservative political ideology?",opts:["Support for expanded social programs and progressive taxation","Preference for limited government in economic matters and traditional social values","Support for government regulation of the economy and personal freedoms","Belief in minimal government involvement in all matters"],ans:1,exp:"Conservatives generally favor free markets, lower taxes, limited regulation, individual responsibility, traditional values, and strong national defense.",unit:45},
  {q:"A scientific public opinion poll requires all of the following EXCEPT:",opts:["A random sample of the population","An appropriately large sample size","Questions designed to produce a specific result","A reported margin of error"],ans:2,exp:"Scientific polls require random sampling, adequate sample size, and margin of error. Questions designed to produce a specific result are characteristic of illegitimate push polls.",unit:45},
  {q:"The 'horse-race' style of media coverage focuses on:",opts:["In-depth policy analysis and candidate platforms","Which candidate is ahead in polls and campaign strategy","Investigative journalism exposing corruption","Local issues affecting individual congressional districts"],ans:1,exp:"Horse-race journalism emphasizes who is winning or losing (poll numbers, campaign strategy, fundraising) rather than substantive policy analysis.",unit:45},
  {q:"Which amendment eliminated poll taxes as a requirement for voting?",opts:["15th Amendment","19th Amendment","24th Amendment","26th Amendment"],ans:2,exp:"The 24th Amendment (1964) banned poll taxes in federal elections. The 15th protects voting regardless of race, 19th grants women's suffrage, and 26th lowered the voting age to 18.",unit:45},
  {q:"Interest groups attempt to influence Supreme Court decisions primarily through:",opts:["Direct lobbying of Supreme Court justices","Filing amicus curiae (friend of the court) briefs","Campaign contributions to judicial candidates","Organizing protests outside the Supreme Court building"],ans:1,exp:"Interest groups submit amicus curiae briefs presenting legal arguments and information to influence the Court's decisions. Direct lobbying of justices is inappropriate and ineffective.",unit:45},
  {q:"The 'gender gap' in American politics refers to:",opts:["The difference in the number of male and female elected officials","The difference in political attitudes and voting behavior between men and women","The pay disparity between male and female government employees","The difference in voter registration rates between men and women"],ans:1,exp:"The gender gap refers to the difference in political opinions and voting patterns between men and women. Women tend to favor Democratic candidates and support social programs at higher rates.",unit:45},
  {q:"Which of the following is a linkage institution?",opts:["The Supreme Court","The Federal Reserve","A political party","The Joint Chiefs of Staff"],ans:2,exp:"Linkage institutions connect citizens to government and include political parties, interest groups, elections, and the media. They translate public preferences into policy and government action.",unit:45}
];
