export const gradeCategories = [
  {
    id: "class-1-8",
    title: "Class 1 – 8",
    subtitle: "Primary & Middle School Foundation",
    badge: "Grades 1 – 8",
    tagline: "Concept Clarity & Strong Study Habits",
    description: "Interactive subject coaching designed to clear fundamentals, build daily problem-solving confidence, and prepare young learners for school tests.",
    curricula: "CBSE • ICSE • State Boards • Cambridge"
  },
  {
    id: "class-9-10",
    title: "Class 9 – 10",
    subtitle: "Secondary & Board Exam Preparation",
    badge: "Grades 9 & 10",
    tagline: "Board Exam Mastery & Rigorous Practice",
    description: "Comprehensive preparation covering Mathematics, Sciences, and English with step-by-step theorem proofs, numericals, and past 10-year board paper practice.",
    curricula: "CBSE Board • ICSE Board • State Board"
  },
  {
    id: "class-11-12",
    title: "Class 11 – 12",
    subtitle: "Senior Secondary & Career Readiness",
    badge: "Grades 11 & 12",
    tagline: "Advanced Subject Rigor & Entrance Foundation",
    description: "Specialized coaching in Physics, Chemistry, Mathematics, and Commerce streams focusing on deep derivations, numericals, and board scoring techniques.",
    curricula: "CBSE • ISC • State Boards • Entrance Oriented"
  },
  {
    id: "skills",
    title: "Skill Programs",
    subtitle: "Foundational Literacy & Brain Agility",
    badge: "Ages 4 – 14",
    tagline: "Phonics, Spatial Logic, Spelling & Writing",
    description: "Engaging milestone programs designed to build early reading fluency, 3D Rubik's cube logic, rule-based spelling, and creative written expression.",
    curricula: "Early Childhood • Logic & Creativity"
  }
];

export const courses = [
  /* ---------------------------------------------------------
     CLASS 1 - 8 (PRIMARY & MIDDLE SCHOOL SUBJECTS)
     --------------------------------------------------------- */
  {
    id: "math-1-8",
    gradeGroup: "class-1-8",
    title: "Mathematics",
    iconName: "Calculator",
    badgeEmoji: "🔢",
    description: "Build crystal-clear number sense, mental math tricks, and foundational word-problem reasoning.",
    benefit: "Concept Clarity & Speed",
    ctaText: "Explore Course",
    age: "Class 1 to 8",
    duration: "Structured Weekly Classes",
    sessionLength: "50 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Visual number models", "Vedic & mental math speed", "School syllabus alignment"],
    accentColor: "blue",
    curriculum: [
      { title: "Number Systems & Operations", desc: "Master whole numbers, fractions, decimals, and basic integers through visual representations." },
      { title: "Mental Math & Speed Calculation", desc: "Learn Vedic mental arithmetic shortcuts to calculate 2x faster without pen and paper." },
      { title: "Geometry & Measurement", desc: "Understand perimeter, area, 2D/3D shapes, angles, and spatial measurement intuitively." },
      { title: "Word Problem Mastery & Pre-Algebra", desc: "Break complex word problems into clear mathematical equations with logical step-by-step reasoning." }
    ],
    skills: ["Calculation Speed", "Logical Reasoning", "School Exam Confidence"],
    whatYouGet: [
      { title: "Live Interactive Lessons", desc: "Mentor-led sessions customized to your child's school board syllabus." },
      { title: "Visual Problem Worksheets", desc: "Graded practice sheets designed to reinforce concepts without rote memorization." },
      { title: "Mental Arithmetic Drill Kit", desc: "Daily 5-minute calculation exercises to boost speed and numerical confidence." },
      { title: "Doubt Clearing Sessions", desc: "Dedicated time every week to clear school homework and textbook doubts." },
      { title: "Monthly Chapter Tests", desc: "Regular benchmark evaluations tracking concept retention and school readiness." },
      { title: "Parent Progress Reports", desc: "Detailed breakdown of chapter-by-chapter mastery and areas for improvement." }
    ]
  },
  {
    id: "science-1-8",
    gradeGroup: "class-1-8",
    title: "Science & Discovery",
    iconName: "Atom",
    badgeEmoji: "🔬",
    description: "Explore the laws of nature, physical science, and living organisms through interactive demonstrations.",
    benefit: "Inquiry & Scientific Thinking",
    ctaText: "Explore Course",
    age: "Class 1 to 8",
    duration: "Structured Weekly Classes",
    sessionLength: "50 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Interactive experiments", "Living world & biology basics", "Physics & chemistry concepts"],
    accentColor: "teal",
    curriculum: [
      { title: "Living World & Plants", desc: "Understand plant physiology, animal habitats, ecosystems, and environmental balance." },
      { title: "Matter & Physical World", desc: "Explore states of matter, basic chemical changes, solutions, and separation techniques." },
      { title: "Forces, Motion & Energy", desc: "Discover gravity, friction, light, sound, magnetism, and simple machines." },
      { title: "Human Body & Health", desc: "Learn digestive, circulatory, and respiratory systems with interactive 3D diagrams." }
    ],
    skills: ["Scientific Curiosity", "Analytical Observation", "Diagram & Concept Mastery"],
    whatYouGet: [
      { title: "Demonstration-Based Classes", desc: "Science brought to life using everyday household items and visual simulations." },
      { title: "Illustrated Concept Guides", desc: "Diagram-rich summary sheets for quick revision before school exams." },
      { title: "School Textbook Alignment", desc: "Full coverage of CBSE, ICSE, and State Board science chapters." },
      { title: "Hands-on Activity Challenges", desc: "Fun weekly mini-projects that encourage curiosity and real-world observation." },
      { title: "Term Assessment Prep", desc: "Focused preparation for mid-term and annual school science examinations." },
      { title: "Young Scientist Certificate", desc: "Recognizing curious inquiry and dedicated scientific understanding." }
    ]
  },
  {
    id: "english-1-8",
    gradeGroup: "class-1-8",
    title: "English & Communication",
    iconName: "BookOpen",
    badgeEmoji: "📖",
    description: "Develop strong reading comprehension, grammar foundations, vocabulary, and confident writing.",
    benefit: "Grammar & Expression",
    ctaText: "Explore Course",
    age: "Class 1 to 8",
    duration: "Structured Weekly Classes",
    sessionLength: "50 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Parts of speech & tenses", "Reading comprehension", "Paragraph & essay writing"],
    accentColor: "indigo",
    curriculum: [
      { title: "Grammar & Sentence Architecture", desc: "Master parts of speech, tenses, subject-verb agreement, and active/passive voice." },
      { title: "Reading Comprehension & Critical Thinking", desc: "Extract themes, infer meanings, and answer unseen passages accurately." },
      { title: "Vocabulary Enrichment", desc: "Learn contextual synonyms, antonyms, prefixes, suffixes, and idiomatic phrases." },
      { title: "Creative & Formal Writing", desc: "Craft letters, diary entries, descriptive essays, and imaginative stories." }
    ],
    skills: ["Grammar Accuracy", "Reading Comprehension", "Confident Writing"],
    whatYouGet: [
      { title: "Interactive Language Classes", desc: "Grammar taught through relatable examples rather than boring rules." },
      { title: "Reading Passages & Questions", desc: "Graded comprehension exercises improving inferential and factual accuracy." },
      { title: "Writing Formats Workbook", desc: "Step-by-step guides for essays, formal/informal letters, and notices." },
      { title: "Vocabulary Builder Deck", desc: "Weekly flashcards boosting spoken and written English fluency." },
      { title: "Speech & Pronunciation Practice", desc: "Encouraging verbal expression and public speaking confidence." },
      { title: "Language Excellence Award", desc: "Celebrating grammatical precision and expressive written communication." }
    ]
  },

  /* ---------------------------------------------------------
     CLASS 9 - 10 (SECONDARY & BOARD EXAM PREPARATION)
     --------------------------------------------------------- */
  {
    id: "math-9-10",
    gradeGroup: "class-9-10",
    title: "Mathematics (Board Prep)",
    iconName: "Calculator",
    badgeEmoji: "📐",
    description: "Rigorous preparation for Board examinations with theorem proofs, formula derivations, and past papers.",
    benefit: "Board Exam Mastery",
    ctaText: "Explore Course",
    age: "Class 9 & 10",
    duration: "Targeted Board Modules",
    sessionLength: "60 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Theorem derivations & proofs", "NCERT Exemplar problems", "10-year board paper drills"],
    accentColor: "blue",
    curriculum: [
      { title: "Algebra & Quadratic Equations", desc: "Linear equations in two variables, quadratic equations, and arithmetic progressions." },
      { title: "Trigonometry & Heights/Distances", desc: "Master trigonometric ratios, standard values, identities, and real-life elevation problems." },
      { title: "Geometry, Circles & Triangles", desc: "Theorem proofs, circle tangents, similarity criteria, and coordinate geometry formulas." },
      { title: "Mensuration, Statistics & Probability", desc: "Surface areas and volumes of combinations of solids, mean/median/mode, and probability." }
    ],
    skills: ["Formula Application", "Step-by-Step Proofs", "Speed & Time Management"],
    whatYouGet: [
      { title: "Full Board Syllabus Coverage", desc: "Line-by-line NCERT and Exemplar question breakdowns." },
      { title: "Formula & Theorem Cheat-Sheets", desc: "Crisp formula reference sheets for quick exam-hall revision." },
      { title: "Chapter-Wise Board Question Banks", desc: "Compiled questions from the last 10 years categorized by mark weightage." },
      { title: "Timed Mock Exam Series", desc: "Simulated 3-hour board exam sessions with standard marking schemes." },
      { title: "1-on-1 Doubt Clarification", desc: "Dedicated mentor sessions to resolve complex analytical questions." },
      { title: "Board Readiness Analysis", desc: "In-depth answer paper reviews highlighting presentation and step-marking tips." }
    ]
  },
  {
    id: "science-9-10",
    gradeGroup: "class-9-10",
    title: "Science (Physics & Chemistry)",
    iconName: "Atom",
    badgeEmoji: "⚡",
    description: "Deep numerical problem-solving, chemical reaction balancing, and conceptual physics mastery.",
    benefit: "Numerical & Chemical Depth",
    ctaText: "Explore Course",
    age: "Class 9 & 10",
    duration: "Targeted Board Modules",
    sessionLength: "60 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Ray diagrams & electric circuits", "Chemical equation balancing", "Formula derivations"],
    accentColor: "amber",
    curriculum: [
      { title: "Chemical Reactions & Equations", desc: "Balancing equations, types of reactions, oxidation-reduction, and redox concepts." },
      { title: "Acids, Bases, Metals & Non-Metals", desc: "pH scale, salt preparation, reactivity series, and metallurgy fundamentals." },
      { title: "Light: Reflection & Refraction", desc: "Mirror and lens formula derivations, ray diagrams, and sign convention mastery." },
      { title: "Electricity & Magnetic Effects", desc: "Ohm's law, resistance combinations, Joule's heating, and electromagnetic induction." }
    ],
    skills: ["Circuit & Ray Diagrams", "Chemical Reaction Balancing", "Numerical Problem Solving"],
    whatYouGet: [
      { title: "Concept-First Teaching", desc: "Clear explanations removing the need for blind memorization." },
      { title: "Diagram & Formula Handbooks", desc: "Complete guide to high-scoring board diagrams and physics formula lists." },
      { title: "NCERT In-text & Exercise Solutions", desc: "Comprehensive step-by-step solutions for all textbook and exemplar problems." },
      { title: "Past Board Question Drills", desc: "Focused practice on 1-mark, 2-mark, 3-mark, and 5-mark board questions." },
      { title: "Lab Practical Preparation", desc: "Support for practical exam questions, viva preparation, and experiment concepts." },
      { title: "Scoring Strategy Guidance", desc: "Answer writing formats to secure full step marks in board evaluation." }
    ]
  },
  {
    id: "biology-9-10",
    gradeGroup: "class-9-10",
    title: "Biology & Life Sciences",
    iconName: "Dna",
    badgeEmoji: "🧬",
    description: "Master complex biological diagrams, life processes, genetics, and keyword-rich board answer writing.",
    benefit: "Diagrams & Keyword Mastery",
    ctaText: "Explore Course",
    age: "Class 9 & 10",
    duration: "Targeted Board Modules",
    sessionLength: "60 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["High-scoring diagram drills", "Mendelian genetics & heredity", "Life processes flowcharts"],
    accentColor: "teal",
    curriculum: [
      { title: "Life Processes (Nutrition & Respiration)", desc: "Cellular respiration, human digestive and circulatory systems with detailed flows." },
      { title: "Control & Coordination", desc: "Nervous system, reflex arc, brain anatomy, and plant hormonal responses." },
      { title: "Reproduction & Development", desc: "Sexual and asexual reproduction, plant pollination, and human reproductive health." },
      { title: "Heredity, Evolution & Environment", desc: "Mendel's monohybrid/dihybrid crosses, sex determination, and ecological balance." }
    ],
    skills: ["Scientific Diagram Accuracy", "Biological Terminology Recall", "Keyword-Focused Answers"],
    whatYouGet: [
      { title: "Diagram Drawing Masterclasses", desc: "Step-by-step techniques to draw neat, accurate, and fully labeled board diagrams." },
      { title: "Keyword-Rich Summary Notes", desc: "Crisp chapter notes highlighting examiner keywords that secure maximum marks." },
      { title: "Flowchart & Process Maps", desc: "Visual flow diagrams summarizing complex physiological cycles at a single glance." },
      { title: "Case-Study Question Practice", desc: "Targeted practice for new-pattern assertion-reason and case-based questions." },
      { title: "Chapter Mock Tests", desc: "Frequent assessments simulating board evaluation rubrics." },
      { title: "Life Sciences Achievement Badge", desc: "Recognizing high conceptual proficiency in secondary biology." }
    ]
  },

  /* ---------------------------------------------------------
     CLASS 11 - 12 (SENIOR SECONDARY & CAREER PREPARATION)
     --------------------------------------------------------- */
  {
    id: "physics-11-12",
    gradeGroup: "class-11-12",
    title: "Physics",
    iconName: "Atom",
    badgeEmoji: "⚛️",
    description: "Deep conceptual grounding in mechanics, electrodynamics, optics, and modern physics with derivation rigor.",
    benefit: "Concept Depth & Derivations",
    ctaText: "Explore Course",
    age: "Class 11 & 12",
    duration: "Advanced Comprehensive Course",
    sessionLength: "60 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Core calculus-based derivations", "Complex numerical problem-solving", "Board + entrance orientation"],
    accentColor: "blue",
    curriculum: [
      { title: "Mechanics & Kinematics", desc: "Newton's laws, work-energy theorem, rotational dynamics, gravitation, and SHM." },
      { title: "Electrostatics & Magnetism", desc: "Coulomb's law, Gauss's law, electric potential, Biot-Savart law, and Ampere's circuital law." },
      { title: "Electrodynamics & Alternating Currents", desc: "Faraday's laws, Lenz's law, AC circuits (LCR series), and electromagnetic waves." },
      { title: "Optics & Modern Physics", desc: "Wave optics (interference/diffraction), dual nature of matter, atomic structure, and nuclear physics." }
    ],
    skills: ["Mathematical Modeling", "Calculus-Based Derivations", "Analytical Problem Solving"],
    whatYouGet: [
      { title: "Rigorous Conceptual Lectures", desc: "Understanding the fundamental physics principles behind every single formula." },
      { title: "Complete Derivation Booklet", desc: "All 3-mark and 5-mark board derivations compiled step-by-step." },
      { title: "Multi-Level Numerical Sheets", desc: "Problems graded from standard NCERT levels up to advanced conceptual challenges." },
      { title: "Board Answer Writing Sessions", desc: "Mastering step-wise problem presentation to secure 100% marks in board exams." },
      { title: "Regular Chapter Mock Tests", desc: "Evaluated with strict board marking criteria and constructive personal feedback." },
      { title: "1-on-1 Concept Support", desc: "Personal mentor availability to troubleshoot challenging derivations." }
    ]
  },
  {
    id: "chemistry-11-12",
    gradeGroup: "class-11-12",
    title: "Chemistry",
    iconName: "FlaskConical",
    badgeEmoji: "🧪",
    description: "Organic reaction mechanisms, physical chemistry numericals, and inorganic chemical trends mastered clearly.",
    benefit: "Organic Mechanisms & Numericals",
    ctaText: "Explore Course",
    age: "Class 11 & 12",
    duration: "Advanced Comprehensive Course",
    sessionLength: "60 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Reaction mechanisms explained", "Physical chemistry formula charts", "Named reactions & conversions"],
    accentColor: "teal",
    curriculum: [
      { title: "Physical Chemistry Foundations", desc: "Solutions, electrochemistry, chemical kinetics, thermodynamics, and equilibrium." },
      { title: "Inorganic Chemistry & Coordination Compounds", desc: "Periodic trends, d & f block elements, coordination nomenclature, and bonding theories." },
      { title: "Organic Reactions & Named Mechanisms", desc: "Haloalkanes, alcohols, phenols, ethers, aldehydes, ketones, and carboxylic acids." },
      { title: "Biomolecules & Applied Chemistry", desc: "Carbohydrates, proteins, amino acids, polymers, and green chemical principles." }
    ],
    skills: ["Reaction Mechanism Logic", "Stoichiometric Precision", "Organic Conversions"],
    whatYouGet: [
      { title: "Mechanism-Based Learning", desc: "Understanding electron arrows and intermediate stability instead of cramming." },
      { title: "Named Reactions Handbook", desc: "Complete reference of all named reactions, reagents, and conditions for quick recall." },
      { title: "Roadmap Conversion Drills", desc: "Extensive practice on multi-step organic conversions frequently asked in exams." },
      { title: "Formula & Constant Wallcharts", desc: "All physical chemistry formulas with units and standard constants." },
      { title: "Board Exam Test Series", desc: "Full-syllabus mock tests under actual timed conditions with detailed review." },
      { title: "Chemistry Scholar Award", desc: "Commemorating chemical reasoning excellence and rigorous board preparation." }
    ]
  },
  {
    id: "math-11-12",
    gradeGroup: "class-11-12",
    title: "Mathematics",
    iconName: "Calculator",
    badgeEmoji: "📊",
    description: "Master differential & integral calculus, vectors, 3D geometry, matrices, and probability.",
    benefit: "Calculus & Higher Algebra",
    ctaText: "Explore Course",
    age: "Class 11 & 12",
    duration: "Advanced Comprehensive Course",
    sessionLength: "60 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Differential & integral calculus", "Vectors & 3D coordinate geometry", "Matrices & determinants"],
    accentColor: "indigo",
    curriculum: [
      { title: "Relations, Functions & Matrices", desc: "Types of relations, inverse trigonometric functions, matrix operations, and determinants." },
      { title: "Differential Calculus", desc: "Continuity, differentiability, chain rule, logarithmic differentiation, and application of derivatives." },
      { title: "Integral Calculus & Differential Equations", desc: "Definite and indefinite integrals, area under curves, and first-order differential equations." },
      { title: "Vectors, 3D Geometry & Probability", desc: "Dot/cross products, lines and planes in 3D, conditional probability, and Bayes' theorem." }
    ],
    skills: ["Calculus Rigor", "Spatial 3D Vector Logic", "High-Speed Accuracy"],
    whatYouGet: [
      { title: "Deep Calculus Training", desc: "Intuitive geometric grounding in limits, derivatives, and integrals." },
      { title: "Step-by-Step Proof Library", desc: "Handwritten solution guides for tricky integration and differentiation steps." },
      { title: "Shortcuts & Speed Tricks", desc: "Time-saving verification methods for matrices, determinants, and probability." },
      { title: "10-Year Question Bank", desc: "Every single board question organized by topic and mark value." },
      { title: "Timed Unit Assessments", desc: "Weekly tests keeping problem-solving sharp throughout the academic year." },
      { title: "Senior Math Master Certificate", desc: "Recognizing high analytical competence and mathematical mastery." }
    ]
  },
  {
    id: "commerce-11-12",
    gradeGroup: "class-11-12",
    title: "Commerce & Accountancy",
    iconName: "TrendingUp",
    badgeEmoji: "📈",
    description: "Understand financial statements, partnership accounting, macroeconomics, and modern business principles.",
    benefit: "Financial Precision & Business",
    ctaText: "Explore Course",
    age: "Class 11 & 12",
    duration: "Advanced Comprehensive Course",
    sessionLength: "60 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Partnership & company accounts", "Cash flow & financial ratios", "Micro & macroeconomics"],
    accentColor: "amber",
    curriculum: [
      { title: "Accounting for Partnership Firms", desc: "Admission, retirement, death of partner, goodwill valuation, and dissolution accounting." },
      { title: "Company Accounts & Share Capital", desc: "Issue of shares, debentures, forfeiture, reissue, and financial statements of companies." },
      { title: "Financial Statement Analysis", desc: "Comparative statements, common-size statements, accounting ratios, and cash flow statements." },
      { title: "Macroeconomics & Business Management", desc: "National income accounting, money & banking, government budget, and management principles." }
    ],
    skills: ["Financial Analysis", "Balance Sheet Precision", "Economic Graph Modeling"],
    whatYouGet: [
      { title: "Practical Accounting Lessons", desc: "Ledgers and balance sheets explained with real-world corporate financial examples." },
      { title: "Format & Ledger Templates", desc: "Standard board exam format sheets ensuring zero marks lost in presentation." },
      { title: "Comprehensive Case-Study Practice", desc: "Extensive guidance solving business studies and economics analytical case studies." },
      { title: "Cash Flow & Ratio Drill Sheets", desc: "Dedicated numerical sets ensuring error-free balance sheet reconciliation." },
      { title: "Term Assessment & Board Mocks", desc: "Rigorous timed exam practice evaluated against CBSE/ISC marking schemes." },
      { title: "Commerce Excellence Award", desc: "Honoring financial acumen, accounting rigor, and economic understanding." }
    ]
  },

  /* ---------------------------------------------------------
     FOUNDATIONAL SKILLS (EARLY LITERACY, LOGIC & WRITING)
     --------------------------------------------------------- */
  {
    id: "phonics",
    gradeGroup: "skills",
    title: "Phonics & Early Reading",
    iconName: "Volume2",
    badgeEmoji: "🔤",
    description: "Build strong reading and pronunciation skills through engaging phonics activities.",
    benefit: "Reading & Pronunciation",
    ctaText: "Explore Course",
    age: "Ages 4 – 8",
    duration: "Structured Weekly Sessions",
    sessionLength: "45 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Letter sound recognition", "Blending and decoding", "Guided reading fluency"],
    thematicKey: "phonics",
    accentColor: "blue",
    curriculum: [
      { title: "Sound Awareness", desc: "Recognize fundamental letter sounds and phonetic combinations with multi-sensory activities." },
      { title: "Blending & Segmenting", desc: "Learn to merge sounds into complete words and break complex words into syllables." },
      { title: "Decodable Reading", desc: "Practice reading beginner books with confidence, accuracy, and clear pronunciation." },
      { title: "Independent Fluency", desc: "Build smooth sentence reading rhythm and natural reading comprehension." }
    ],
    skills: ["Phonetic Precision", "Accurate Pronunciation", "Reading Confidence"],
    whatYouGet: [
      { title: "Live Mentored Sessions", desc: "Interactive weekly lessons led by certified early childhood reading coaches." },
      { title: "Printable Phonics Workbook", desc: "Custom illustrated worksheets and multi-sensory phonics practice sheets." },
      { title: "Decodable Reader Kit", desc: "Curated beginner storybook series to encourage independent bedtime reading." },
      { title: "Pronunciation Audio Guides", desc: "Sound reference audio snippets for easy home revision and articulation." },
      { title: "Parent Milestone Check-ins", desc: "Regular updates on decoding speed, accuracy, and next learning goals." },
      { title: "Certificate of Completion", desc: "Official certificate celebrating your child's early reading milestone." }
    ]
  },
  {
    id: "rubiks-cube",
    gradeGroup: "skills",
    title: "Rubik's Cube & Spatial Logic",
    iconName: "Box",
    badgeEmoji: "🧩",
    description: "Develop concentration, logic and problem-solving through fun cube challenges.",
    benefit: "Logic & Problem Solving",
    ctaText: "Explore Course",
    age: "Ages 6 – 14",
    duration: "Step-by-Step Milestones",
    sessionLength: "45 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["3x3 Methodical solving", "Spatial awareness", "Focus & memory building"],
    thematicKey: "rubiks",
    accentColor: "amber",
    curriculum: [
      { title: "Cube Mechanics & Notation", desc: "Understand cube anatomy, face notations, and core algorithms in simple digestible stages." },
      { title: "Layer-by-Layer Strategy", desc: "Master the white cross, corner placements, and middle layer solving techniques." },
      { title: "Orientation & Permutation", desc: "Complete top layer algorithms with muscle memory and pattern recognition." },
      { title: "Speed & Spatial Thinking", desc: "Refine finger tricks, optimize solution steps, and strengthen focus." }
    ],
    skills: ["Spatial Intelligence", "Algorithmic Thinking", "Patience & Memory"],
    whatYouGet: [
      { title: "Guided 3x3 Algorithm Training", desc: "Step-by-step coaching to master complete Rubik's cube solving methodology." },
      { title: "Illustrated Cheat-Sheet Guide", desc: "Color-coded algorithm cards for visual memory reinforcement at home." },
      { title: "Spatial Reasoning Puzzles", desc: "Targeted pattern exercises that elevate focus, geometry, and spatial recall." },
      { title: "1-on-1 Troubleshooting Support", desc: "Dedicated mentor assistance to resolve tricky rotations and parity states." },
      { title: "Speed & Milestone Tracking", desc: "Timer tracking to witness solve times drop from minutes to seconds." },
      { title: "Master Solver Certificate", desc: "Commemorating puzzle-solving dedication and logical competence." }
    ]
  },
  {
    id: "spelling-rules",
    gradeGroup: "skills",
    title: "Spelling Rules & Vocabulary",
    iconName: "PenTool",
    badgeEmoji: "✏️",
    description: "Learn spelling patterns and rules to write with greater confidence.",
    benefit: "Writing Accuracy",
    ctaText: "Explore Course",
    age: "Ages 6 – 12",
    duration: "Rule-Based Framework",
    sessionLength: "45 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Pattern recognition", "Prefixes and suffixes", "Spelling accuracy"],
    thematicKey: "spelling",
    accentColor: "teal",
    curriculum: [
      { title: "Core Phonic Patterns", desc: "Master vowel digraphs, silent letters, and common English spelling conventions." },
      { title: "Prefixes & Suffixes", desc: "Learn root word modifications, plural rules, and word building patterns." },
      { title: "Homophones & Confusing Words", desc: "Eliminate recurring spelling mistakes through contextual clues and memory anchors." },
      { title: "Applied Writing Accuracy", desc: "Practice proofreading strategies for confident school essays and assignments." }
    ],
    skills: ["Pattern Recognition", "Prefix & Suffix Mastery", "Proofreading Precision"],
    whatYouGet: [
      { title: "Rule-Based Interactive Lessons", desc: "Clear principles that eliminate spelling guesswork forever." },
      { title: "Spelling Rules Reference Booklet", desc: "A practical guide to prefixes, suffixes, root words, and silent letters." },
      { title: "Weekly Proofreading Practice", desc: "Fun error-spotting exercises that train natural attention to detail." },
      { title: "Homophone Flashcard Pack", desc: "Visual distinction cards for commonly confused English vocabulary." },
      { title: "School Performance Feedback", desc: "Quarterly reviews tracking spelling accuracy across everyday writing." },
      { title: "Spelling Accuracy Certificate", desc: "Formal achievement award celebrating written precision and confidence." }
    ]
  },
  {
    id: "grammar",
    gradeGroup: "skills",
    title: "Grammar & Sentence Syntax",
    iconName: "BookOpen",
    badgeEmoji: "📚",
    description: "Build strong grammar foundations for confident everyday communication.",
    benefit: "Language Skills",
    ctaText: "Explore Course",
    age: "Ages 7 – 14",
    duration: "Interactive Modules",
    sessionLength: "45 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Parts of speech", "Sentence construction", "Clear communication"],
    thematicKey: "grammar",
    accentColor: "indigo",
    curriculum: [
      { title: "Parts of Speech", desc: "Identify nouns, verbs, adjectives, adverbs, and prepositions through lively examples." },
      { title: "Sentence Architecture", desc: "Understand subject-verb agreement, clauses, conjunctions, and sentence variety." },
      { title: "Punctuation & Syntax", desc: "Master commas, apostrophes, quotations, and structural sentence clarity." },
      { title: "Confident Communication", desc: "Formulate polished paragraphs for both verbal communication and written work." }
    ],
    skills: ["Grammatical Precision", "Sentence Structure", "Effective Communication"],
    whatYouGet: [
      { title: "Active Language Workshops", desc: "Live sentence-building sessions connecting grammar directly to real expression." },
      { title: "Parts of Speech Quick Cards", desc: "Handy visual summary cards covering clauses, tenses, and punctuation." },
      { title: "Interactive Editing Challenges", desc: "Engaging paragraph rewrites and sentence repair exercises." },
      { title: "Vocabulary Booster Toolkit", desc: "Contextual vocabulary lists to enrich everyday spoken and written English." },
      { title: "Parent Progress Evaluations", desc: "Structured progress reports tracking grammatical clarity and structure." },
      { title: "Language Proficiency Award", desc: "Certificate of grammar excellence for school and speech confidence." }
    ]
  },
  {
    id: "creative-writing",
    gradeGroup: "skills",
    title: "Creative Writing & Storytelling",
    iconName: "Sparkles",
    badgeEmoji: "✍️",
    description: "Develop imagination, storytelling and confident written expression.",
    benefit: "Creativity & Expression",
    ctaText: "Explore Course",
    age: "Ages 7 – 14",
    duration: "Creative Workshops",
    sessionLength: "45 mins per session",
    batchSize: "Small batch (max 4-6 learners) or 1-on-1",
    highlights: ["Story plotting", "Descriptive vocabulary", "Creative expression"],
    thematicKey: "writing",
    accentColor: "rose",
    curriculum: [
      { title: "Character & Setting Creation", desc: "Craft memorable characters, vivid worlds, and evocative atmosphere with sensory details." },
      { title: "Plotting & Narrative Arcs", desc: "Structure conflict, rising tension, climax, and satisfying resolutions." },
      { title: "Show, Don't Tell", desc: "Use figurative language, strong action verbs, and dynamic dialogue." },
      { title: "Polished Short Stories", desc: "Draft, edit, and publish engaging original short stories and personal narratives." }
    ],
    skills: ["Imaginative Storytelling", "Vivid Vocabulary", "Voice & Expression"],
    whatYouGet: [
      { title: "Author Mentoring Workshops", desc: "Small-group brainstorming and creative writing coaching with experienced authors." },
      { title: "Story Planning Journal", desc: "Character profiling sheets, plot mountain templates, and story arc planners." },
      { title: "Sensory Word Bank Companion", desc: "Extensive figurative language cards and dynamic description builders." },
      { title: "Personalized Manuscript Feedback", desc: "Encouraging line-by-line guidance celebrating unique voice and creativity." },
      { title: "Published Story Portfolio", desc: "A compiled anthology of your child's polished original creative stories." },
      { title: "Young Author Certificate", desc: "Official recognition honoring imagination, voice, and narrative artistry." }
    ]
  }
];

export const benefits = [
  {
    id: "child-friendly",
    icon: "HeartHandshake",
    title: "Student-Centered Learning",
    description: "Classes tailored to match each student's current learning level and school requirements."
  },
  {
    id: "strong-foundations",
    icon: "Layers",
    title: "Strong Conceptual Foundations",
    description: "Focus on why things work, step-by-step logic, and deep conceptual clarity."
  },
  {
    id: "creative-thinking",
    icon: "Lightbulb",
    title: "Exam & Practical Problem-Solving",
    description: "Balance board exam rigor with active problem-solving skills and critical thinking."
  },
  {
    id: "personal-attention",
    icon: "UserCheck",
    title: "Small Batches & 1-on-1 Focus",
    description: "Never more than 4 to 6 students per batch, ensuring every single doubt is addressed."
  }
];

export const journeySteps = [
  {
    step: "01",
    title: "Diagnostic Check",
    description: "Evaluate your child's current chapter comprehension, strengths, and target goals."
  },
  {
    step: "02",
    title: "Structured Mentoring",
    description: "Engaging live classes with formula derivations, conceptual exercises, and NCERT practice."
  },
  {
    step: "03",
    title: "Milestone Excellence",
    description: "Weekly drills, chapter tests, and regular parent feedback to ensure peak academic performance."
  }
];

export const parentHighlights = [
  {
    title: "Structured school syllabus alignment",
    description: "CBSE, ICSE, and State Board curriculum covered ahead of school schedule."
  },
  {
    title: "Dedicated, patient subject experts",
    description: "Experienced educators who explain complex theorems and formulas patiently."
  },
  {
    title: "Regular tests & performance analytics",
    description: "Weekly problem sheets, monthly exams, and clear progress reports for parents."
  },
  {
    title: "Doubt-clearing before every school exam",
    description: "Targeted revision sessions before unit tests, mid-terms, and board exams."
  },
  {
    title: "Small batch size of 4 to 6 students",
    description: "Guaranteed personal attention so no student is left behind in any concept."
  }
];

export const reviewSummary = {
  rating: "5.0",
  reviewCount: "49 Reviews",
  tagline: "Loved by Parents & Learners",
  subtitle: "Helping children learn with confidence, conceptual clarity, and academic excellence.",
  badges: [
    "Verified Parent Feedback",
    "Small Batch Mentorship",
    "School & Board Excellence"
  ]
};
