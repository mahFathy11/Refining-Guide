// دليل القنوات والمحاضرين المستخدمين والمعتمدين في مشروع مسارات الهندسة الكيميائية
export const channelCategories = [
  { id: "all", label: "جميع القنوات والمحاضرين" },
  { id: "process", label: "هندسة العمليات والتصميم" },
  { id: "refining-gas", label: "التكرير والغاز والبتروكيماويات" },
  { id: "equipment", label: "المعدات والآلات الدوارة" },
  { id: "control", label: "التحكم والأجهزة الدقيقة (DCS)" },
  { id: "safety", label: "السلامة الصناعية (PSM)" },
  { id: "syndicate-intl", label: "نقابات ومؤسسات وجمعيات" },
];

export const channels = [
  {
    id: "sarah-zidan",
    name: "Eng. Sarah Zidan",
    arabicName: "المهندسة سارة زيدان",
    category: "process",
    badge: "شروحات تغطي مسارات متعددة",
    avatarIcon: "👩‍🏫",
    featuredBadge: "13+ سلسلة في المشروع",
    channelUrl: "https://www.youtube.com/@SarahZidan",
    coursesCount: 13,
    topics: [
      "Engineering Fundamentals",
      "Mass Transfer",
      "P&ID Course",
      "Valves Course",
      "Pumps Course",
      "Distillation Course",
      "Natural Gas Processing",
      "Refining Processes",
      "Process Control & Instrumentation",
      "Green Hydrogen Podcast",
      "Aspen HYSYS Expert User Certificate",
      "Interview Questions & Answers",
      "FE Chemical Exam Preparation"
    ],
    primaryLinkText: "قناة م. سارة زيدان على يوتيوب"
  },
  {
    id: "mohamed-ayman",
    name: "Eng. Mohamed Ayman",
    arabicName: "المهندس محمد أيمن",
    category: "refining-gas",
    badge: "محاضرات تكرير وغاز وتصميم",
    avatarIcon: "👨‍🏫",
    featuredBadge: "15+ محاضرة تطبيقية",
    channelUrl: "https://www.youtube.com/results?search_query=Mohamed+Ayman+Chemical+Engineering",
    coursesCount: 15,
    topics: [
      "Process Calculations",
      "Heat Transfer",
      "PFD & P&ID Drawings",
      "Rotating Equipment & Pumps",
      "Control Valves",
      "Steam Boilers",
      "Fundamentals of Petroleum Refining",
      "Catalytic Reactors in Refinery",
      "Sulfur Recovery Unit (SRU)",
      "Petroleum Lab Analysis",
      "Lube Oil Manufacturing",
      "Hydrocarbon Losses & Mass Balance",
      "Gas Sweetening Process",
      "Process Control Fundamentals",
      "Safety Awareness in Oil and Gas"
    ],
    primaryLinkText: "محاضرات م. محمد أيمن على يوتيوب"
  },
  {
    id: "shady-othman",
    name: "Eng. Shady Othman",
    arabicName: "المهندس شادي عثمان",
    category: "refining-gas",
    badge: "معالجة الغاز الطبيعي و P&ID",
    avatarIcon: "⚡",
    featuredBadge: "دورة الغاز الطبيعي (19 فيديو)",
    channelUrl: "https://www.youtube.com/playlist?list=PLWizASkkbIXiqO9L6PEGSRc0r_tK0p2rJ",
    coursesCount: 2,
    topics: [
      "Natural Gas Processing Course",
      "P&ID - AIChE SUSC Friday Discussion"
    ],
    primaryLinkText: "قائمة كورس الغاز الطبيعي لم. شادي"
  },
  {
    id: "ahmed-yehia",
    name: "ChemProcess (Eng. Ahmed Yehia)",
    arabicName: "المهندس أحمد يحيى (ChemProcess)",
    category: "equipment",
    badge: "معدات التكرير والمضخات",
    avatarIcon: "🏭",
    featuredBadge: "مضخات وأبراج تقطير",
    channelUrl: "https://www.youtube.com/channel/UCG0Qp4CqYqX0a1y7J6d7f0g",
    coursesCount: 4,
    topics: [
      "Petroleum Refining References & Books",
      "Distillation Theory & Operation",
      "Centrifugal Pumps Series",
      "Career Advice for Fresh Graduates"
    ],
    primaryLinkText: "قناة م. أحمد يحيى على يوتيوب"
  },
  {
    id: "el-ashtoukhy",
    name: "Dr. El-Sayed El-Ashtoukhy",
    arabicName: "الدكتور السيد الأشتوخي (جامعة الإسكندرية)",
    category: "process",
    badge: "موازين المادة والطاقة",
    avatarIcon: "📐",
    featuredBadge: "جامعة الإسكندرية",
    channelUrl: "https://www.youtube.com/playlist?list=PLx5Lfrzxi7Al43qB8I9oNEF_1tVPJQ6LU",
    coursesCount: 2,
    topics: [
      "Material Balance",
      "Energy Balance"
    ],
    primaryLinkText: "قائمة موازين المادة والطاقة"
  },
  {
    id: "aiche-susc",
    name: "AIChE SUSC",
    arabicName: "الجمعية الأمريكية للمهندسين الكيميائيين (جامعة السويس)",
    category: "syndicate-intl",
    badge: "ندوات ومحاضرات طلابية",
    avatarIcon: "🌐",
    featuredBadge: "Friday Discussion",
    channelUrl: "https://www.youtube.com/@AIChESUSC",
    coursesCount: 4,
    topics: [
      "#01 Process Diagram (P&ID) - Eng. Shady Othman",
      "#02 Valves Basics - Eng. El-Sayed Amer",
      "#03 Process Control Fundamentals - Eng. Ehab Abdo",
      "Process Integration & Pinch Analysis (AIChE)"
    ],
    primaryLinkText: "قناة AIChE SUSC على يوتيوب"
  },
  {
    id: "mohamed-fathy",
    name: "تسجيلات نقابة المهندسين المصرية",
    arabicName: "محاضرات شعبة البترول والكيمياء (نقابة المهندسين)",
    category: "syndicate-intl",
    badge: "محاضرات نقابية متخصصة",
    avatarIcon: "🏛️",
    featuredBadge: "شعبة كيمياء وبترول",
    channelUrl: "https://www.youtube.com/@mohamedfathy",
    coursesCount: 9,
    topics: [
      "Petrochemicals in Egypt - Dr. Rehab El-Maghraby",
      "Hydrocracking Unit in Refineries - Eng. Hamdy Nokeira",
      "Acid Gases Treatment - Dr. Ahmed Selim",
      "Process Control in Oil & Gas - Eng. Mohamed Abdelhamid",
      "Refineries from Commissioning to Operations - Eng. Ahmed Elsisi",
      "P&ID Drawing and ISA Standards - Eng. Karim Gabr",
      "Petrochemicals Industry 1 & 2 - Eng. Ahmed Chouman & Amira Elsobky",
      "Ammonia & Fertilizer Industry - Dr. Mahmoud Ramzy",
      "Energy Management System (ISO 50001) - Eng. Emad Darwish"
    ],
    primaryLinkText: "تسجيلات نقابة المهندسين على يوتيوب"
  },
  {
    id: "elsayed-amer",
    name: "Eng. El-Sayed Amer",
    arabicName: "المهندس السيد عامر",
    category: "equipment",
    badge: "المحابس وخطوط الأنابيب",
    avatarIcon: "🔧",
    featuredBadge: "Piping & Valves",
    channelUrl: "https://youtu.be/dAZRiJOGIhI",
    coursesCount: 3,
    topics: [
      "Piping System Components",
      "Valves Basics",
      "Natural Gas Processing & Plants"
    ],
    primaryLinkText: "شروحات م. السيد عامر"
  },
  {
    id: "ahmed-shafik",
    name: "Eng. Ahmed Shafik",
    arabicName: "المهندس أحمد شفيق",
    category: "refining-gas",
    badge: "التشغيل والإنتاج",
    avatarIcon: "🛢️",
    featuredBadge: "فهم مصانع النفط والغاز",
    channelUrl: "https://www.youtube.com/playlist?list=PLJX-3-8cbm2V8gOnWza0VqgANvIr1suHM",
    coursesCount: 2,
    topics: [
      "Process and Operation Course",
      "Chemical Engineering in Oil & Gas Diploma"
    ],
    primaryLinkText: "كورس العمليات والتشغيل"
  },
  {
    id: "ahmed-ismail",
    name: "Dr. Ahmed Ismail",
    arabicName: "الدكتور أحمد إسماعيل",
    category: "control",
    badge: "التحكم في العمليات",
    avatarIcon: "🎛️",
    featuredBadge: "Process Control",
    channelUrl: "https://www.youtube.com/playlist?list=PLBajgtqPAZzC2j33poh8wY2UWXbAwQX2W",
    coursesCount: 2,
    topics: [
      "Process Control - Part 1 (Modeling & Transfer Functions)",
      "Process Control - Part 2 (Stability & PID Tuning)"
    ],
    primaryLinkText: "قائمة كورس التحكم في العمليات"
  },
  {
    id: "spe-suez",
    name: "SPE Suez & Petrocamp",
    arabicName: "جمعية مهندسي البترول (SPE Suez)",
    category: "refining-gas",
    badge: "تدريبات الغاز ووحدات الكبريت",
    avatarIcon: "⛽",
    featuredBadge: "SPE Training Sessions",
    channelUrl: "https://www.youtube.com/playlist?list=PLEGBFk6Q1JYUvDmQUB4YV1jv73KMvi5_O",
    coursesCount: 8,
    topics: [
      "Natural Gas Processing - Dr. Mohamed Abdelraouf",
      "Introduction to Natural Gas & Separation - Eng. Abdullah Nabil",
      "Gas Sweetening Process - Eng. Mohamed Ayman",
      "Sulfur Recovery Unit (SRU) - Eng. Mohamed Ayman",
      "Gas Dehydration Unit - Eng. Ahmed Attia",
      "NGL Recovery - Eng. Sayed Ammar",
      "Introduction to Process Safety - Eng. Sayed Ammar",
      "LNG Production - Eng. Mohamed Mahdy"
    ],
    primaryLinkText: "قوائم دورات SPE على يوتيوب"
  },
  {
    id: "khaled-abouzeid",
    name: "Eng. Khaled Abouzeid",
    arabicName: "المهندس خالد أبوزيد",
    category: "refining-gas",
    badge: "معالجة الزيت الخام",
    avatarIcon: "🛢️",
    featuredBadge: "Crude Treatment",
    channelUrl: "https://www.youtube.com/playlist?list=PLUXankhnFypG5NiigijfUIfzv6pPKdlN2",
    coursesCount: 1,
    topics: [
      "Crude Oil Treatment & Desalting Facilities"
    ],
    primaryLinkText: "سلسلة معالجة النفط الخام"
  },
  {
    id: "ahmed-mokhtar",
    name: "Eng. Ahmed Mokhtar",
    arabicName: "المهندس أحمد مختار",
    category: "process",
    badge: "محاكاة التقطير على HYSYS",
    avatarIcon: "💻",
    featuredBadge: "Aspen HYSYS",
    channelUrl: "https://www.youtube.com/playlist?list=PLGFJoiBHrw9fkqt0hQUXQKf3IPmgfnZdm",
    coursesCount: 2,
    topics: [
      "Distillation Column Simulation on Aspen HYSYS",
      "Trays & Reflux Ratio Optimization"
    ],
    primaryLinkText: "محاكاة التقطير لم. أحمد مختار"
  },
  {
    id: "uscsb",
    name: "US Chemical Safety Board (USCSB)",
    arabicName: "المجلس الأمريكي لسلامة الكيماويات (USCSB)",
    category: "safety",
    badge: "تحقيقات السلامة الصناعية",
    avatarIcon: "🔥",
    featuredBadge: "أنيميشن الحوادث الكبرى",
    channelUrl: "https://www.youtube.com/@USCSB",
    coursesCount: 5,
    topics: [
      "BP Texas City Refinery Explosion (2005)",
      "Piper Alpha Offshore Disaster (1988)",
      "Bhopal Toxic Gas Leak (1984)",
      "Flixborough Reactor Explosion (1974)",
      "BP Deepwater Horizon / Macondo (2010)"
    ],
    primaryLinkText: "قناة USCSB الرسمية على يوتيوب"
  },
  {
    id: "cheme-practice",
    name: "Chemical Engineering Practice",
    arabicName: "Chemical Engineering Practice",
    category: "control",
    badge: "تطبيقات التحكم العملي",
    avatarIcon: "🎯",
    featuredBadge: "Process Control Practice",
    channelUrl: "https://www.youtube.com/playlist?list=PLfGAySG9GXHMWApafYj5wb-hD6Jczh-LO",
    coursesCount: 1,
    topics: [
      "Process Control Design and Practice Video Series"
    ],
    primaryLinkText: "سلسلة فيديوهات ممارسة التحكم"
  },
  {
    id: "4mech-engineer",
    name: "4MechEngineer",
    arabicName: "قناة 4MechEngineer (هندسة القوى والمحطات)",
    category: "equipment",
    badge: "محطات القوى البخارية والتوليد",
    avatarIcon: "⚙️",
    featuredBadge: "Steam Power & Turbines",
    channelUrl: "https://www.youtube.com/@4mechengineer655",
    coursesCount: 1,
    topics: [
      "Steam Power and Co-Generation",
      "Industrial Boilers & Steam Generation Systems",
      "Steam Turbines & Mechanical Drives",
      "Generators and Electric Power Generation"
    ],
    primaryLinkText: "قناة 4MechEngineer على يوتيوب"
  },
  {
    id: "ahmed-fathy-mechanism",
    name: "Eng. Ahmed Fathy (Mechanism)",
    arabicName: "المهندس أحمد فتحي (قناة ميكانزم)",
    category: "equipment",
    badge: "شروحات الأنابيب والمضخات ومحركات القدرة",
    avatarIcon: "⚙️",
    featuredBadge: "4 سلاسل هندسية متخصصة",
    channelUrl: "https://www.youtube.com/channel/UCLAqRN9gSIUVdaVKqGaZ6Xw",
    coursesCount: 4,
    topics: [
      "Piping and Pipeline Course",
      "Centrifugal Pump Course (Cavitation, Curves & Troubleshooting)",
      "Internal Combustion Engine Course",
      "Automotive Systems & Mechanical Control"
    ],
    primaryLinkText: "قناة ميكانزم على يوتيوب"
  },
  {
    id: "mohammed-mohammed",
    name: "Dr. Mohammed Mohammed",
    arabicName: "د. محمد محمد (MGMohammed)",
    category: "process",
    badge: "كورس محاكاة Aspen Plus المتكامل",
    avatarIcon: "💻",
    featuredBadge: "سلسلة Aspen Plus كاملة",
    channelUrl: "https://www.youtube.com/@MGMohammed",
    coursesCount: 2,
    topics: [
      "Aspen Plus Simulation Tutorials",
      "Thermodynamic Models & Property Methods",
      "Distillation Columns Simulation & Convergence",
      "Chemical Reactors Modeling",
      "Solids Handling & Separation Units",
      "Design Specs & Sensitivity Analysis"
    ],
    primaryLinkText: "قناة د. محمد محمد على يوتيوب"
  },
  {
    id: "meta-engineering",
    name: "Meta Engineering",
    arabicName: "ما وراء الهندسة",
    category: "process",
    badge: "كورس Mastering Aspen Plus",
    avatarIcon: "⚙️",
    featuredBadge: "سلسلة محاكاة العمليات",
    channelUrl: "https://www.youtube.com/@meta_engineering",
    coursesCount: 1,
    topics: [
      "Mastering Aspen Plus in Chemical Engineering",
      "Flowsheet Simulation & Convergence",
      "Unit Operations Modeling",
      "Material & Energy Balances Simulation"
    ],
    primaryLinkText: "قناة ما وراء الهندسة على يوتيوب"
  },
  {
    id: "china-in-arabic",
    name: "China بالعربي",
    arabicName: "قناة China بالعربي (دليل المنح الحكومية)",
    category: "syndicate-intl",
    badge: "دليل المنح الحكومية الممولة بالكامل",
    avatarIcon: "🌏",
    featuredBadge: "أفضل المنح الحكومية 2027",
    channelUrl: "https://www.youtube.com/@ChinainArabic.",
    coursesCount: 1,
    topics: [
      "Top 8 Fully-Funded Government Scholarships 2027",
      "Chinese Government Scholarship (CSC) & Silk Road Programs",
      "Admission Procedures, Medical Exam & Recommendation Letters"
    ],
    primaryLinkText: "قناة China بالعربي على يوتيوب"
  },
  {
    id: "mohamed-abdelfttah",
    name: "Dr. Mohmed AbdelFattah",
    arabicName: "د. محمد عبد الفتاح (Abdalfttah Academy)",
    category: "syndicate-intl",
    badge: "منحة وبوتكامب آفاق والإرشاد الأكاديمي الدولي",
    avatarIcon: "🎓",
    featuredBadge: "Bootcamp & Scholarships",
    channelUrl: "https://www.youtube.com/@MoAbdalfttah",
    coursesCount: 1,
    topics: [
      "Afaaq Scholarship & Research Bootcamp",
      "Cold-Emailing Strategies for Professors",
      "Academic CV & Statement of Purpose (SOP)",
      "International Fellowships & Summer Internships"
    ],
    primaryLinkText: "قناة د. محمد عبد الفتاح على يوتيوب"
  }
];

