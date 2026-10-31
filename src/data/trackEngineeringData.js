// ========================================================
// بيانات الهندسة الاحترافية للمسارات المهنية (14 مساراً)
// مستخرجة ومطابقة لمعايير خارطة المسارات المهنية لصناعة البترول والتكرير والغاز
// تشمل: 1. مصفوفة أولويات التعلم (Priority Matrix)
//       2. حزمة البرمجيات الهندسية المعتمدة (Software Stack)
// ========================================================

export const trackPriorityMatrix = {
  // 1. الأساسيات المشتركة
  found: {
    must: [
      "Material & Energy Balances",
      "Thermodynamics & Phase Equilibria (VLE)",
      "Fluid Mechanics & Hydraulics",
      "Heat Transfer & Exchanger Principles",
      "Mass Transfer & Distillation Fundamentals",
      "Chemical Reaction Engineering",
      "P&ID & PFD Engineering Drawing Reading",
    ],
    should: [
      "Process Control (Control Loops & Instrumentation)",
      "Excel / Python for Engineering Calculations",
      "Organic & Physical Chemistry Basics",
    ],
    deferred: [
      "Equations of State (EOS) Advanced Modeling",
      "Process Dynamics & Unsteady-State Analysis",
      "Engineering Economics & Plant Feasibility",
    ],
  },

  // 2. مهندس تصميم عمليات (Process Design / EPC)
  design: {
    must: [
      "Process Design (Conceptual & Basic Engineering)",
      "Separation Processes & Distillation Column Sizing",
      "Heat Transfer & Exchanger Rating (TEMA)",
      "Fluid Mechanics (Two-Phase Flow & Line Sizing)",
      "Chemical Engineering Thermodynamics",
      "API 520 / 521 / 526 (PSV Relief & Flare Systems)",
      "Aspen HYSYS / Aspen Plus Simulation",
      "Engineering Calculation Spreadsheets (Excel)",
    ],
    should: [
      "Equipment Sizing & Datasheet Preparation",
      "Pinch Analysis & Thermal Process Integration",
      "Process Safety Fundamentals (HAZOP Participation)",
      "Aspen EDR / HTRI Heat Exchanger Modeling",
      "Hydraulic & Flare Network Software (PIPENET)",
      "Process Equipment Cost Estimation",
    ],
    deferred: [
      "Dynamic Process Simulation (Aspen Dynamics)",
      "Layer of Protection Analysis (LOPA)",
      "Refinery / Plant Optimization",
      "Aspen Capital Cost Estimator (ACCE)",
    ],
  },

  // 3. مهندس معدات العمليات (Equipment Engineer)
  equip: {
    must: [
      "Process Equipment Design (Static & Rotating)",
      "Fluid Machinery (Pumps & Compressors Performance)",
      "Heat Exchanger Thermal & Hydraulic Design",
      "Fluid Mechanics & NPSH Calculations",
      "Equipment Technical Datasheets Preparation",
      "API 610 (Centrifugal Pumps for Petroleum)",
      "API 660 & TEMA (Shell & Tube Heat Exchangers)",
      "ASME Section VIII Div. 1/2 (Pressure Vessels)",
    ],
    should: [
      "Materials Science & Industrial Corrosion Basics",
      "Piping Engineering Fundamentals",
      "PV Elite / COMPRESS Pressure Vessel Software",
      "HTRI / Aspen EDR Exchanger Rating",
      "Equipment Reliability & Maintenance Fundamentals",
    ],
    deferred: [
      "Machinery Vibration & Dynamic Analysis",
      "Compressor Surge Analysis & Anti-Surge Control",
      "Fired Heater Detailed Design (API 560)",
      "Fitness-For-Service Assessment (API 579 / FFS)",
      "ANSYS (FEA / Computational Fluid Dynamics CFD)",
    ],
  },

  // 4. مهندس عمليات الموقع (Refinery / Gas / Petrochemical Plant)
  rpg: {
    must: [
      "Material & Energy Balances across Units",
      "Fractionation & Distillation Column Troubleshooting",
      "Chemical Reaction Engineering in Reactors",
      "Unit Process Technology (CDU, VDU, Reforming, Hydrotreating)",
      "Process Control & Instrumentation (Field & DCS)",
      "Aspen HYSYS / Aspen Plus Modeling for Plants",
      "Process Historian Systems (AVEVA PI / IP21)",
      "Excel for Monitoring Key Performance Indicators (KPIs)",
    ],
    should: [
      "Crude Assay Analysis & Characterization (ASTM D86/D1160)",
      "Catalysis & Catalyst Management (Regeneration/Loading)",
      "Process Safety & OSHA PSM (MOC, PSSR)",
      "API 520 / 521 Relief Device Verification",
      "Plant Data Statistics & Trend Diagnostics",
      "Python for Plant Data Analysis",
    ],
    deferred: [
      "Advanced Process Control (APC / Multivariable Control)",
      "Refinery Linear Programming (LP - Aspen PIMS)",
      "Unit Debottlenecking & Revamp Design",
      "Catalyst Deactivation Modeling",
    ],
  },

  // 5. مهندس نمذجة ومحاكاة العمليات (Modeling & Simulation)
  sim: {
    must: [
      "Chemical Thermodynamics & Property Packages",
      "Phase Equilibria (VLE / VLLE / Flash Calculations)",
      "Rigorous Separation & Reaction Kinetics Modeling",
      "Numerical Methods & Algebraic/Differential Equations",
      "Aspen HYSYS Steady-State Simulation",
      "Aspen Plus Flowsheet Building",
      "Python / MATLAB for Mathematical Modeling",
    ],
    should: [
      "Process Dynamics & Control Loop Modeling",
      "Model Parameter Regression from Plant Data",
      "Flowsheet Optimization & Sensitivity Analysis",
      "UniSim Design / PRO/II Alternative Simulators",
    ],
    deferred: [
      "Dynamic Process Simulation (Aspen HYSYS Dynamics)",
      "Electrolyte Thermodynamics (Acid Gas Sweetening)",
      "Plant Data Reconciliation & Gross Error Detection",
      "Real-Time Optimization (RTO)",
      "Machine Learning for Process Surrogate Models",
    ],
  },

  // 6. مهندس سلامة العمليات ومنع الخسائر (Loss Prevention / PSM)
  safety: {
    must: [
      "Chemical Process Safety Principles (CCPS)",
      "Loss Prevention in Petrochemical & Gas Plants",
      "Fire & Explosion Hazards (BLEVE, VCE, Flash Fire)",
      "Risk Assessment Techniques (Qualitative & Semi-quantitative)",
      "HAZOP & HAZID Study Participation and Scribing",
      "API 520 / 521 / 526 (Overpressure Protection & Flare)",
      "OSHA PSM Standard (29 CFR 1910.119)",
    ],
    should: [
      "Relief & Flare Header System Design",
      "Chemical Reaction Hazards (Runaway Reactions)",
      "Reliability Engineering (Weibull, MTBF, Failure Rates)",
      "Safety Instrumented Systems (SIS / SIF Basics - IEC 61511)",
      "PHA Management Software (PHA-Pro / PHAWorks)",
    ],
    deferred: [
      "Quantitative Risk Assessment (QRA & Risk Contours)",
      "Consequence Modeling (DNV Phast, ALOHA, Safeti)",
      "Layer of Protection Analysis (LOPA Facilitation)",
      "Safety Integrity Level (SIL Determination & Verification)",
      "Dust Explosion & Toxic Dispersion Analysis",
    ],
  },

  // 7. مهندس تشغيل وإنتاج (Operation Engineer / DCS)
  ops: {
    must: [
      "DCS Control Room Operations & Alarm Handling",
      "Unit Process Technology & Reaction Flowcharts",
      "Equipment Field Operation (Pumps, Compressors, Heaters)",
      "Standard Operating Procedures (SOPs Execution)",
      "Permit-to-Work (PTW) & Lockout/Tagout (LOTO)",
      "Field Process Safety & Incident Reporting",
      "Shift Handover Protocols & Logbook Management",
    ],
    should: [
      "Plant Utilities Management (Steam, Fuel Gas, Cooling Water)",
      "Reaction Engineering & Kinetic Disturbances",
      "Process Historian Monitoring (AVEVA PI Trends)",
      "CMMS Systems (SAP Plant Maintenance / Maximo)",
      "Excel Shift & Yield Reporting",
    ],
    deferred: [
      "Advanced Process Control (APC / DMC3 Operations)",
      "Unit Energy & Yield Optimization",
      "Operational Excellence & Root Cause Analysis (RCA)",
      "Plant Process Big Data Analytics",
    ],
  },

  // 8. مهندس تخطيط الإنتاج وجدولة العمليات (Production Planning / LP)
  planning: {
    must: [
      "Refinery & Plant Material Balances",
      "Petroleum Refining Processes & Product Slates",
      "Crude Oil Characterization & Crude Assays",
      "Linear Programming (LP) Fundamentals & Economics",
      "Refinery Margin & Netback Economic Calculations",
      "Microsoft Excel (Advanced Formulas & Solver)",
      "Aspen PIMS / Honeywell RPMS LP Modeling",
      "Commercial Fuel Specifications (EN 228 / EN 590 / ASTM)",
    ],
    should: [
      "Product Blending Calculations (Octane, Flash, Pour Point)",
      "Process Unit Yield Correlation Modeling",
      "Petroleum Supply Chain & Inventory Logistics",
      "Python / SQL for Planning & Commercial Data",
      "Power BI for Management Planning Dashboards",
      "Refinery Tank Farm & Berth Scheduling Basics",
    ],
    deferred: [
      "Mixed-Integer Programming (MIP Scheduling Optimization)",
      "Stochastic & Scenario Risk Optimization",
      "Crude Oil Trading & Arbitrage Economics",
      "Enterprise Supply Chain Integration",
    ],
  },

  // 9. مهندس التآكل والتفتيش الهندسي (Corrosion & Inspection)
  corr: {
    must: [
      "Corrosion Engineering Fundamentals & Mechanisms",
      "Materials Science & Refinery Metallurgy",
      "Electrochemistry of Corrosion Reactions",
      "Non-Destructive Testing (NDT - UT, PT, MT, RT)",
      "Mechanical Integrity of Piping & Static Equipment",
      "API 570 (Piping Inspection Code)",
      "API 510 (Pressure Vessel Inspection Code)",
      "API 653 (Storage Tank Inspection Code)",
      "API 571 (Damage Mechanisms in Refining Industry)",
      "Remaining-Life & Corrosion Rate Calculations",
    ],
    should: [
      "Welding Metallurgy & Procedure Qualification (ASME IX)",
      "Protective Industrial Coatings & Linings",
      "Cathodic Protection (Impressed Current & Sacrificial)",
      "Plant Asset Management Systems (GE Digital APM / SAP PM)",
      "PV Elite Minimum Wall Thickness Verification",
    ],
    deferred: [
      "Risk-Based Inspection (RBI - API 580 / API 581)",
      "Fitness-For-Service Assessment (FFS - API 579 / ASME FFS-1)",
      "Sour Service & Hydrogen Embrittlement (NACE MR0175)",
      "Metallurgical Failure Analysis & Root Cause",
      "Specialized Corrosion Modeling Software",
    ],
  },

  // 10. مهندس البيئة والسلامة المهنية (Environmental Engineer / QHSE)
  env: {
    must: [
      "Environmental Engineering Principles in Oil & Gas",
      "Industrial Wastewater Treatment (API Separators, DAF, Bio)",
      "Air Pollution Control (Scrubbers, Baghouses, Thermal Oxidizers)",
      "Solid & Hazardous Waste Handling and Disposal",
      "Environmental Impact Assessment (EIA Studies)",
      "Occupational Health & Safety (OH&S)",
      "ISO 14001 (Environmental) & ISO 45001 (OH&S) Standards",
    ],
    should: [
      "Process Safety Fundamentals & Chemical Hazards",
      "Biochemical Water Treatment Engineering",
      "National Environmental Legislation & Compliance (e.g. Law 4/1994)",
      "Quality Management Systems (ISO 9001)",
      "Geographic Information Systems (GIS) Mapping",
      "Environmental Monitoring Statistics",
    ],
    deferred: [
      "Air Dispersion Modeling (AERMOD / CALPUFF)",
      "Life Cycle Assessment (LCA - SimaPro / GaBi)",
      "Carbon Accounting & Corporate GHG Inventories (ISO 14064)",
      "Contaminated Soil & Groundwater Remediation",
      "Flare & Vent Hydrocarbon Emissions Minimization",
    ],
  },

  // 11. مهندس الاستدامة وكفاءة الطاقة (Sustainability & Energy)
  sustainability: {
    must: [
      "Thermodynamics & Heat Transfer Fundamentals",
      "Process Integration & Pinch Analysis (Composite Curves)",
      "Energy Efficiency in Refineries & Chemical Plants",
      "Plant Utilities Optimization (Boilers, Steam Traps, Cooling)",
      "Energy Economics, Payback Period & ROI Calculations",
      "Aspen Energy Analyzer Software",
      "ISO 50001 (Energy Management System Certification)",
    ],
    should: [
      "Combustion Efficiency & Excess Air Control",
      "Renewable Energy Integration in Industrial Sites",
      "Life Cycle Assessment (LCA) Environmental Footprint",
      "Energy Optimization Algorithms",
      "Carbon Footprint & Scope 1, 2, 3 GHG Accounting",
      "Python for Industrial Energy Data Analytics",
    ],
    deferred: [
      "Carbon Capture, Utilization & Storage (CCUS Technologies)",
      "Green & Blue Hydrogen Production (SMR & Electrolysis)",
      "Exergy Analysis & Heat Exchanger Network (HEN) Synthesis",
      "Mathematical Programming for Utilities (GAMS / LINGO)",
    ],
  },

  // 12. مهندس المبيعات الفنية وتطوير الأعمال (Technical Sales Engineer)
  sales: {
    must: [
      "Chemical Engineering Process Fundamentals",
      "Product-Line Technology (Catalysts, Specialty Chemicals, Pumps)",
      "Process Equipment Sizing & Product Selection",
      "Engineering Economics, Quotations & Profit Margins",
      "Technical Communication & Client Pitch Presentations",
      "Microsoft Excel for Costing & CRM Platforms",
      "Commercial Terms & Logistics (Incoterms 2020)",
    ],
    should: [
      "Tender & Contract Management (Technical Clarifications)",
      "Detailed Equipment Cost Estimation",
      "Commercial & Technical B2B Negotiation Strategies",
      "Project Management Fundamentals",
    ],
    deferred: [
      "Strategic Key Account Management (KAM)",
      "Value Engineering & Total Cost of Ownership (TCO)",
      "Petrochemical Market Analysis & Pricing Trends",
      "Technical Product Management & Roadmapping",
    ],
  },

  // 13. مهندس تجارب التشغيل والبدء (Commissioning & Start-up)
  commissioning: {
    must: [
      "Process Equipment Field Operations & Walkdowns",
      "Control Loops, Valves & Field Instrumentation Checks",
      "Plant Process Technology & Normal Operating Envelopes",
      "Process Safety Fundamentals in Live Plants",
      "P&ID Redline Markup & System Flushing/Blowing",
      "Pre-commissioning Checks (Hydrotest, Leak Test, Motor Solo)",
      "Pre-Startup Safety Review (PSSR Requirements)",
    ],
    should: [
      "Piping Test Packs & Flange Torque Verification",
      "Plant Utilities Readiness & Chemical Cleaning",
      "Mechanical Equipment Alignment & Run-In Inspection",
      "Project Management & Handover Coordination",
      "Primavera P6 Commissioning Scheduling",
      "Completions Management Software Systems",
    ],
    deferred: [
      "Catalyst Loading, Drying & Sulfiding/Activation",
      "Unsteady-State Start-up Dynamics & Pressurization",
      "Performance Guarantee Test Run (PGTR) Design",
      "Operator Training Simulator (OTS) / Digital Twin Validation",
    ],
  },

  // 14. مهندس سوائل الحفر (Mud Engineer - Drilling Fluids)
  mud: {
    must: [
      "Drilling Fluids Technology (Water-Based & Oil-Based Mud)",
      "Fluid Rheology & Non-Newtonian Flow (Yield Point, Gel Strength)",
      "Colloid & Surface Chemistry in Drilling",
      "Drilling Engineering & Rig Operations Basics",
      "Well Control Fundamentals & Hydrostatic Pressure",
      "API RP 13B-1/2 (Standard Field Mud Testing Procedures)",
      "Daily Mud Testing (Density, Viscosity, Retort, Sand, Filtrate, pH)",
    ],
    should: [
      "Drilling Hydraulics & Equivalent Circulating Density (ECD)",
      "Wellbore Stability & Reactive Shale Management",
      "Solids Control Equipment Efficiency (Shakers, Centrifuges)",
      "Microsoft Excel Drilling Hydraulics Sheets",
      "Vendor Mud-Reporting Software Packages",
    ],
    deferred: [
      "High-Pressure High-Temperature (HPHT) Drilling Fluids",
      "Managed Pressure Drilling (MPD) Rheology",
      "Formation Damage Mitigation & Reservoir Drill-in Fluids",
      "Completion & Workover Clear Brines",
      "Drillbench Dynamic Multiphase Well Hydraulics",
    ],
  },

  // 15. مراقبة جودة المعامل والمنتجات (QC / Lab Engineer)
  qc: {
    must: [
      "ASTM D86 & D1160 Distillation & Boiling Curves",
      "Flash Point Testing (ASTM D93 Pensky-Martens / D56 Tag)",
      "Density & API Gravity Measurement (ASTM D4052 / D1298)",
      "Reid Vapor Pressure (RVP - ASTM D323 / D5191)",
      "Sulfur Content Determination (ASTM D4294 XRF)",
      "ISO/IEC 17025 Quality Management Principles",
      "Laboratory Safety & Hazardous Chemical Handling (SDS)",
    ],
    should: [
      "Gas Chromatography (GC-FID / TCD / MS) Operation",
      "Statistical Process Control (SPC) & Control Charts",
      "Measurement Uncertainty (GUM) & Method Validation",
      "Octane Rating (RON/MON) & Cetane Index Testing",
      "Total Acid Number (TAN) & Karl Fischer Moisture (ASTM D6304)",
      "Laboratory Information Management Systems (LIMS)",
    ],
    deferred: [
      "Spectroscopy (ICP-OES / AAS / FTIR) for Trace Metals",
      "High-Performance Liquid Chromatography (HPLC / GPC)",
      "Laboratory Accreditation & ISO 17025 Auditing",
      "LIMS Database Administration & Customization",
    ],
  },

  // 16. مهندس البحث والتطوير (R&D Engineer)
  rnd: {
    must: [
      "Design of Experiments (DOE) & Factorial Analysis",
      "Polymer Science & Advanced Material Formulation",
      "Heterogeneous Catalysis & Reaction Kinetics Basics",
      "Patent Search & Intellectual Property (IP) Fundamentals",
      "Statistical Data Analysis (Minitab / Excel / Python)",
      "Laboratory-Scale Rig Safety & Reactive Chemistry",
    ],
    should: [
      "Response Surface Methodology (RSM) Optimization",
      "Materials Characterization (BET Porosimetry, XRD, SEM, TGA/DSC)",
      "Pilot Plant Design & Experimental Rig Operation",
      "Process Scale-up Rules & Dimensional Analysis",
      "Techno-Economic Analysis (TEA) for New Formulations",
    ],
    deferred: [
      "Computational Chemistry / Molecular Dynamics (Gaussian/COSMO-RS)",
      "Advanced Patent Drafting & Claims Strategy",
      "Life Cycle Assessment (LCA - SimaPro / openLCA)",
      "Commercialization & Technology Transfer Management",
    ],
  },
};

export const trackSoftwareStack = {
  // 1. الأساسيات المشتركة
  found: {
    core: [
      { name: "Microsoft Excel", role: "حسابات الموازين، تحويل الوحدات، الجداول والمعادلات الرياضية الأساسية" },
      { name: "Python / MATLAB (Basics)", role: "كتابة سكريبتات الحسابات وحل المعادلات الرياضية" },
      { name: "AutoCAD / Visio", role: "قراءة وفهم وتتبع مسارات الـ PFD و P&ID" },
    ],
    helpful: [
      { name: "Aspen HYSYS / Aspen Plus (Intro)", role: "مدخل استكشافي مبكر لبيئات المحاكاة وتكوين الـ Flowsheets" },
      { name: "Mathcad", role: "التوثيق الرياضي والهندسي للمعادلات بالوحدات المترية والإنجليزية" },
    ],
    advanced: [
      { name: "Python Scientific Stack (NumPy, SciPy)", role: "التحليل الرقمي المتقدم وحل مصفوفات المعادلات الكيميائية" },
    ],
  },

  // 2. مهندس تصميم عمليات (Process Design)
  design: {
    core: [
      { name: "Aspen HYSYS / Aspen Plus", role: "المحاكاة الشاملة للعمليات، موازين المادة والحرارة، وتصميم الوحدات" },
      { name: "Microsoft Excel", role: "شيتات الحسابات الهيدروليكية، الداتا شيت، وتحديد أحجام الخطوط والمعدات" },
      { name: "Aspen EDR / HTRI", role: "التصميم الهيدروليكي والحراري الدقيق للمبادلات والمكثفات وإعادة الغلي" },
      { name: "AutoCAD / Smart P&ID (AVEVA)", role: "إعداد ومراجعة مخططات العمليات والأنابيب والأجهزة" },
    ],
    helpful: [
      { name: "Aspen Flare System Analyzer", role: "تقييم وحساب شبكات التنفيس والشعلة وأحجام خطوط تصريف الطوارئ" },
      { name: "PIPENET / AFT Fathom", role: "حسابات هبوط الضغط والشبكات المعقدة وسريان الموائع متعدد الأطوار" },
      { name: "PRO/II / ProMax", role: "محاكاة معالجة الغاز الطبيعي واستخلاص الكبريت وأبراج التقطير" },
      { name: "Aspen Basic Engineering", role: "إدارة وتسليم حزم التصميم المبدئي (FEED Packages)" },
    ],
    advanced: [
      { name: "Aspen HYSYS Dynamics", role: "المحاكاة الديناميكية لحالات الطوارئ والتنفيس وحبس الضغوط (Depressuring)" },
      { name: "Aspen Capital Cost Estimator (ACCE)", role: "التقدير التفصيلي للتكاليف الرأسمالية للمعدات والمشروعات" },
      { name: "Python for Process Design", role: "أتمتة سيناريوهات التصميم وربط البرمجيات الهندسية" },
    ],
  },

  // 3. مهندس معدات العمليات (Equipment Engineer)
  equip: {
    core: [
      { name: "Microsoft Excel", role: "حسابات تحجيم المضخات والمبادلات، حسابات NPSH، وإعداد داتا شيت المعدات" },
      { name: "Aspen HYSYS", role: "استخراج خواص التيارات وظروف التشغيل القصوى لتغذية تصاميم المعدات" },
      { name: "HTRI / Aspen EDR", role: "التقييم الحراري والهيدروليكي التفصيلي (Rating) لعروض الموردين للمبادلات" },
      { name: "Vendor Selection Tools", role: "كتالوجات وأدوات مصنعي المضخات (Flowserve, Sulzer) والمعدات" },
    ],
    helpful: [
      { name: "PV Elite / COMPRESS", role: "التصميم الميكانيكي وسمك الجدران لأوعية الضغط وأبراج التقطير (ASME VIII)" },
      { name: "AutoCAD", role: "قراءة ومراجعة الرسومات الميكانيكية للمعدات وأبعاد الفوهات (Nozzles)" },
      { name: "SAP PM / IBM Maximo", role: "متابعة سجلات تشغيل وصيانة المعدات وتاريخ الأعطال" },
      { name: "Aspen Capital Cost Estimator", role: "مقارنة تكاليف المعدات واختيار البدائل الاقتصادية" },
    ],
    advanced: [
      { name: "ANSYS (FEA / CFD)", role: "تحليل الإجهادات الميكانيكية والديناميكا الحرارية للسريان المعقد في المعدات" },
      { name: "SolidWorks", role: "النمذجة ثلاثية الأبعاد للأجزاء الميكانيكية والمعدات التخصصية" },
      { name: "Machinery Performance Software", role: "برمجيات الموردين لمراقبة أداء الضواغط والتوربينات ومكافحة الـ Surge" },
    ],
  },

  // 4. مهندس عمليات الموقع (Refinery / Gas / Petrochemical Plant)
  rpg: {
    core: [
      { name: "Aspen HYSYS / Aspen Plus", role: "محاكاة الوحدة لمعايرة ظروف التشغيل الفعلية ومقارنتها بالتصميم" },
      { name: "Microsoft Excel", role: "متابعة مؤشرات أداء الوحدة اليومية (KPIs) وتحليل نتائج المعمل" },
      { name: "Process Historian (AVEVA PI / IP21)", role: "استرجاع بيانات الحساسات الحية، رسم الاتجاهات (Trends)، ومراقبة التشغيل" },
      { name: "P&ID Viewers (AutoCAD / Smart P&ID)", role: "تتبع خطوط الموقع، الصمامات، وحلقات التحكم الميدانية" },
    ],
    helpful: [
      { name: "Aspen EDR", role: "تقييم اتساخ المبادلات (Fouling) وجدولة دورات الغسيل الكيميائي" },
      { name: "Aspen Hydraulics", role: "حسابات هبوط الضغط واكتشاف أسباب الاختناقات في خطوط العمليات" },
      { name: "Power BI", role: "لوحات تحكم تفاعلية لإدارات الإنتاج واستهلاك الطاقة" },
      { name: "Python", role: "تحليل سلاسل البيانات الزمنية للمصنع واكتشاف الانحرافات التشغيلية مبكراً" },
    ],
    advanced: [
      { name: "Aspen PIMS", role: "فهم نموذج تخطيط المصفاة والتقيد بمواصفات ونسب الخلط المطلوبة" },
      { name: "Aspen DMC3 (APC)", role: "أنظمة التحكم المتقدم متعدد المتغيرات لتعظيم أرباح الوحدات" },
      { name: "Seeq Analytics", role: "التحليلات التشغيلية الاستباقية لتشخيص أداء المفاعلات والمعدات الحساسة" },
      { name: "Refinery Reactor Models", role: "نماذج محاكاة تفاعلات التكسير الهيدروجيني وتهذيب البنزين" },
    ],
  },

  // 5. مهندس نمذجة ومحاكاة العمليات (Modeling & Simulation)
  sim: {
    core: [
      { name: "Aspen HYSYS", role: "نمذجة عمليات النفط والغاز، مجمعات التبريد، والتقطير متعدد المراحل" },
      { name: "Aspen Plus", role: "نمذجة العمليات الكيماوية والبتروكيماوية المعقدة والمخاليط غير المثالية" },
      { name: "Excel (Aspen Links / VBA)", role: "أتمتة تشغيل سيناريوهات المحاكاة واستيراد النتائج بضغطة زر" },
      { name: "Python / MATLAB", role: "حل المعادلات الرياضية، تركيب منحنيات الخواص، وحسابات التوازن الحراري" },
    ],
    helpful: [
      { name: "UniSim Design", role: "بيئة محاكاة مكافئة وشائعة في مصانع الغاز وأنظمة هانيويل" },
      { name: "PRO/II / ProMax", role: "محاكاة معالجة الغازات الحامضية واستخلاص الكبريت وحسابات الأملاح" },
      { name: "CHEMCAD", role: "محاكاة العمليات الدفعية والكيميائية المتخصصة" },
      { name: "Aspen Custom Modeler (ACM)", role: "بناء بلوكات ومعدات مخصصة بكتابة معادلاتها الرياضية مباشرة" },
    ],
    advanced: [
      { name: "Aspen HYSYS Dynamics", role: "المحاكاة الديناميكية لحالات البدء والإيقاف والاضطرابات الزمنية" },
      { name: "Aspen Plus Dynamics", role: "التحكم الديناميكي في أعمدة التقطير والمفاعلات الكيميائية" },
      { name: "gPROMS", role: "أقوى بيئات النمذجة الرياضية المتقدمة للمفاعلات وعمليات التبلور والبوليمرات" },
      { name: "MATLAB / Simulink", role: "بناء واختبار استراتيجيات التحكم المتقدم ونماذج التنبؤ بالعمليات" },
      { name: "Aspen HYSYS Petroleum Refining", role: "أدوات مخصصة لتكسير وتقييم الخامات النفطية وتوزيع المنتجات" },
    ],
  },

  // 6. مهندس سلامة العمليات ومنع الخسائر (Loss Prevention / PSM)
  safety: {
    core: [
      { name: "Microsoft Excel", role: "حسابات سيناريوهات التنفيس، مصفوفات تقييم المخاطر، وجداول متابعة التوصيات" },
      { name: "PHA-Pro / PHAWorks", role: "توثيق وإدارة دراسات الـ HAZOP و HAZID وسيناريوهات الفشل" },
      { name: "Aspen HYSYS (Relief Loads)", role: "محاكاة حالات فشل التبريد أو انقطاع الكهرباء لحساب كمية الغاز المتصاعد لصمام الأمان" },
      { name: "P&ID Markup Tools", role: "تحديد مواقع أجهزة السلامة وصمامات العزل السريع وعقد الـ HAZOP" },
    ],
    helpful: [
      { name: "Aspen Flare System Analyzer", role: "التحقق من قدرة شبكة الشعلة على استيعاب تصريف الطوارئ دون تجاوز الضغط المسموح" },
      { name: "ALOHA", role: "محاكاة انتشار السحب السامة ونطاقات اللهب الناتجة عن تسرب المواد الهيدروكربونية" },
      { name: "BowTieXP", role: "تصميم مخططات BowTie البصرية لتحليل الحواجز الوقائية والتخفيفية لمنع الحوادث" },
    ],
    advanced: [
      { name: "DNV Phast / Safeti", role: "المعيار العالمي في دراسات تقييم العواقب الشاملة والـ Quantitative Risk Assessment (QRA)" },
      { name: "GexCon FLACS", role: "محاكاة الانفجارات ثلاثية الأبعاد وسريان الغازات حول هياكل المعدات بالمصفاة" },
      { name: "exSILentia", role: "حساب وتوثيق مستويات السلامة المتكاملة (SIL) واختبار كفاءة حلقات الـ SIF" },
    ],
  },

  // 7. مهندس تشغيل وإنتاج (Operation Engineer / DCS)
  ops: {
    core: [
      { name: "DCS HMI (Experion / CENTUM / DeltaV)", role: "واجهة التحكم الميداني ومراقبة درجات الحرارة والضغوط والتحكم بالصمامات" },
    ],
    helpful: [
      { name: "Process Historian (AVEVA PI / IP21)", role: "مراجعة سلوك الوحدات قبل حدوث المشاكل واستخراج بيانات تقارير الورديات" },
      { name: "Microsoft Excel", role: "جداول حسابات إنتاج الوردية، الفواقد، ومعايرة عدادات المنتجات" },
      { name: "CMMS (SAP PM / Maximo)", role: "إصدار أوامر العمل وبلاغات الصيانة لمعدات الموقع" },
      { name: "Aspen HYSYS (Operations)", role: "التحقق السريع من تأثير تغيير ظروف التشغيل على جودة المنتجات" },
      { name: "Power BI", role: "متابعة كفاءة التشغيل ومطابقة المنتجات للمواصفات" },
      { name: "Permit-to-Work Systems", role: "إصدار وتصديق تصاريح العمل الساخنة والباردة والدخول للأماكن المغلقة" },
      { name: "Operator Training Simulator (OTS)", role: "التدريب التفاعلي الافتراضي على تشغيل وإيقاف الوحدات وسيناريوهات الطوارئ" },
    ],
    advanced: [
      { name: "APC (Aspen DMC3)", role: "التشغيل بالتكامل مع خوارزميات التحكم المتقدم لتقليل استهلاك الوقود" },
      { name: "Seeq Operations Analytics", role: "اكتشاف الأنماط غير الطبيعية في سلوك التشغيل قبل انطلاق الإنذارات" },
      { name: "Python for Operations", role: "أتمتة جمع تقارير الوردية ومطابقة أرصدة الخزانات" },
    ],
  },

  // 8. مهندس تخطيط الإنتاج وجدولة العمليات (Production Planning / LP)
  planning: {
    core: [
      { name: "Microsoft Excel (Advanced Solver)", role: "بناء نماذج خطط الإنتاج، حسابات الهوامش الربحية، ونسب الخلط السريعة" },
      { name: "Aspen PIMS / Honeywell RPMS", role: "البرنامج الحاكم لتخطيط المصفاة؛ اختيار الخامات، وتحديد خطط التشغيل الشهرية" },
      { name: "Power BI", role: "لوحات تفاعلية لمقارنة الخطة بالواقع الفعلي (Plan vs Actual) ومعدلات الأرباح" },
    ],
    helpful: [
      { name: "Python for Data Analytics", role: "تحليل أسعار الخامات العالمية ومطابقة الفروق بين الإنتاج والمبيعات" },
      { name: "SQL Database Queries", role: "سحب بيانات حركات الخزانات وشحنات الخام من قواعد بيانات المصفاة" },
      { name: "Aspen Petroleum Scheduler (APS)", role: "جدولة عمليات ضخ الخام، حركات الخزانات، وأرصفة الشحن والتصدير" },
      { name: "Spiral Suite", role: "إدارة وتحديث بيانات تحاليل الخامات النفطية (Crude Assays)" },
    ],
    advanced: [
      { name: "Aspen Refinery Multi-Blend Optimizer", role: "التحسين الآلي الفوري لخلط البنزين والسولار لتقليل الفواقد المالية (Giveaway)" },
      { name: "Gurobi / CPLEX", role: "محركات الحلول الرياضية المتقدمة للبرمجة الخطية المختلطة (MIP)" },
      { name: "Aspen PIMS-AO", role: "التطوير المتقدم لنماذج التخطيط وإدخال معايير الانبعاثات الكربونية" },
    ],
  },

  // 9. مهندس التآكل والتفتيش الهندسي (Corrosion & Inspection)
  corr: {
    core: [
      { name: "Microsoft Excel", role: "حساب معدلات التآكل السنوية، العمر المتبقي للمعدات، ومواعيد التفتيش القادمة" },
      { name: "Inspection Data Systems (GE APM / Meridium)", role: "قاعدة بيانات قياسات السمك وتاريخ تفتيش الأنابيب والمستودعات" },
      { name: "SAP PM", role: "جدولة خطط التفتيش الدوري للصيانة العمومية (Turnarounds)" },
      { name: "AutoCAD", role: "قراءة ومراجعة خرائط مسارات الأنابيب وتحديد نقاط قياس السمك (TMLs)" },
    ],
    helpful: [
      { name: "PV Elite", role: "حساب أقل سمك جدار مسموح به (Tmin) طبقاً لمعايير ASME لأوعية الضغط" },
      { name: "OLI Studio Corrosion Analyzer", role: "التنبؤ الكيميائي بمعدلات التآكل والترسبات في البيئات المائية والأملاح" },
      { name: "Honeywell Predict", role: "حساب معدلات التآكل الناتجة عن غاز ثاني أكسيد الكربون وكبريتيد الهيدروجين" },
    ],
    advanced: [
      { name: "DNV Synergi Plant (RBI)", role: "تطبيق التفتيش المبني على المخاطر (Risk-Based Inspection) طبقاً لـ API 580/581" },
      { name: "ANSYS (FEA)", role: "التحليل الميكانيكي المتقدم للإجهادات حول مناطق التآكل الموضعي والعيوب" },
      { name: "UT / Phased-Array Software", role: "تحليل وتفسير صور الموجات فوق الصوتية المتقدمة لاكتشاف الشروخ الداخلية" },
    ],
  },

  // 10. مهندس البيئة والسلامة المهنية (Environmental Engineer / QHSE)
  env: {
    core: [
      { name: "Microsoft Excel", role: "حساب أحمال الانبعاثات والملوثات في مياه الصرف وجداول الامتثال التشريعي" },
      { name: "CEMS Data Monitoring Systems", role: "أنظمة الرصد المستمر للانبعاثات الغازية من مداخن الأفران والشعلات" },
      { name: "HSE Management Systems (Enablon / Intelex)", role: "إدارة سجلات المخالفات البيئية، الحوادث الوشيكة، ومتابعة تصاريح العمل" },
    ],
    helpful: [
      { name: "ArcGIS", role: "الرسم المكاني لمصادر التلوث والمناطق الحساسة بيئياً المحيطة بالمنشأة الصناعية" },
      { name: "GPS-X / BioWin", role: "محاكاة عمليات المعالجة البيولوجية لمحطات معالجة مياه الصرف الصناعي" },
      { name: "ALOHA", role: "تقييم انتشار الغازات والانبعاثات المفاجئة وتقدير مناطق الخطر البيئي" },
    ],
    advanced: [
      { name: "AERMOD / CALPUFF", role: "النمذجة الرياضية المعتمدة عالمياً لانتشار ملوثات الهواء من المداخن طبقاً لمعايير EPA" },
      { name: "SimaPro / GaBi", role: "تقييم دورة الحياة الكاملة (Life Cycle Assessment) للمنتجات البترولية والبتروكيماوية" },
    ],
  },

  // 11. مهندس الاستدامة وكفاءة الطاقة (Sustainability & Energy)
  sustainability: {
    core: [
      { name: "Microsoft Excel", role: "موازين الطاقة والوقود، مؤشرات استهلاك الطاقة (EII)، وحسابات فترة الاسترداد" },
      { name: "Aspen HYSYS / Aspen Plus", role: "نمذجة الوحدات لاختبار فرص استرجاع الحرارة وتوليد البخار" },
      { name: "Aspen Energy Analyzer", role: "تطبيق تحليل الـ Pinch، رسم المنحنيات المركبة، وتصميم شبكات التبادل الحراري" },
      { name: "Python", role: "تحليل كفاءة المرافق وتتبع مؤشرات خفض الانبعاثات الكربونية" },
    ],
    helpful: [
      { name: "Aspen Utilities Planner", role: "تحسين شبكات البخار وتوليد الكهرباء والمياه في المجمع الصناعي بأقل تكلفة" },
      { name: "LINGO / GAMS", role: "حل مسائل التحسين لشبكات استرجاع الحرارة وتوزيع أحمال الغلايات" },
      { name: "Aspen Plus Carbon-Capture Models", role: "محاكاة وحدات امتصاص واحتجاز الكربون باستخدام المذيبات الكيميائية (Amine CCUS)" },
    ],
    advanced: [
      { name: "GAMS / Pyomo", role: "التحسين غير الخطي لشبكات الهيدروجين وتكامل الطاقة بالمصافي" },
      { name: "Aspen Plus Electrolyte Models", role: "النمذجة الدقيقة للديناميكا الحرارية لأنظمة احتجاز الكربون وإنتاج الهيدروجين الأخضر" },
    ],
  },

  // 12. مهندس المبيعات الفنية وتطوير الأعمال (Technical Sales Engineer)
  sales: {
    core: [
      { name: "Microsoft Excel", role: "حسابات التسعير، تكاليف المنتجات، عروض الأسعار، وتحليل هوامش الربح" },
      { name: "PowerPoint", role: "تصميم العروض الفنية التقديمية للعملاء والشركات الصناعية" },
      { name: "CRM Platforms (Salesforce / HubSpot)", role: "إدارة ومتابعة مراحل الفرص البيعية وسجلات التواصل مع العملاء" },
      { name: "SAP SD Awareness", role: "متابعة دورة المبيعات وتنفيذ أوامر التوريد عبر نظام الـ ERP" },
    ],
    helpful: [
      { name: "Vendor Sizing & Selection Tools", role: "برمجيات اختيار وتحجيم المعدات أو الإضافات الكيميائية طبقاً لمواصفات العميل" },
      { name: "Aspen HYSYS", role: "فهم عملية العميل الصناعية لاقتراح الحلول الكيماوية أو المعدات الأنسب لظروفه" },
      { name: "AutoCAD Viewer", role: "مراجعة مخططات ومساحات موقع العميل للتركيبات الجديدة" },
      { name: "Power BI", role: "لوحات متابعة أداء المبيعات والمستهدفات الربع سنوية" },
    ],
    advanced: [
      { name: "e-Procurement Portals (SAP Ariba)", role: "إدارة العطاءات الرقمية والمناقصات الحكومية والشركات متعددة الجنسيات" },
      { name: "CPQ Systems", role: "أنظمة التكوين والتسعير الآلي للعروض الهندسية المعقدة (Configure, Price, Quote)" },
      { name: "Aspen Capital Cost Estimator", role: "تقديم دراسات جدوى التكلفة الرأسمالية والتشغيلية للعملاء الكبار" },
    ],
  },

  // 13. مهندس تجارب التشغيل والبدء (Commissioning & Start-up)
  commissioning: {
    core: [
      { name: "Microsoft Excel", role: "إعداد قوائم الملاحظات (Punch Lists)، حزم الاختبارات الهيدروستاتيكية، وسجلات التفتيش" },
      { name: "P&ID Viewers (AVEVA / Smart P&ID)", role: "تتبع الخطوط الميدانية والتأكد من مطابقة التنفيذ للتصميم (As-Built)" },
      { name: "Primavera P6", role: "متابعة الجدول الزمني لأنشطة ما قبل التشغيل وبدء الضخ وتسليم الأنظمة" },
      { name: "Completions Systems (GoCompletions / Assai)", role: "إدارة شهادات الإنجاز وحزم التسليم واستلام الأنظمة (Handover Packages)" },
    ],
    helpful: [
      { name: "Aspen HYSYS (Start-up Scenarios)", role: "مراجعة سيناريوهات البدء والتأكد من ضغوط ودرجات حرارة مراحل التسخين والتدوير" },
      { name: "Power BI", role: "متابعة نسب إنجاز الـ Punch Lists وتجهيز الأنظمة للتشغيل التجريبي" },
      { name: "Document Control Systems (EDMS)", role: "إدارة واعتماد وثائق الـ PSSR وإجراءات التشغيل المعتمدة" },
    ],
    advanced: [
      { name: "Dynamic Process Simulation", role: "محاكاة الحالات الانتقائية واختبار حزم التنفيس أثناء حالات البدء الأولي" },
      { name: "Operator Training Simulator (OTS)", role: "تدريب طاقم التشغيل على خطوات ما قبل التشغيل وأول إدخال للخام" },
      { name: "Plant Digital Twin", role: "التوأم الرقمي لمطابقة استجابة الأجهزة الميدانية مع نموذج المحاكاة" },
    ],
  },

  // 14. مهندس سوائل الحفر (Mud Engineer - Drilling Fluids)
  mud: {
    core: [
      { name: "Microsoft Excel", role: "حسابات هيدروليكا البئر، أحجام الخزانات، تراكيز المواد، وتسجيل الفحوصات" },
      { name: "Company Mud-Reporting Software", role: "البرامج الرسمية لشركات الخدمات (Halliburton InSite, SLB M-I SWACO, Baker Hughes ADVANTAGE)" },
    ],
    helpful: [
      { name: "Mud Engineering Calculators", role: "حسابات وزن الطين (Kill Sheet)، زمن الدورة الكاملة، ومعدلات الترشيح" },
      { name: "Drilling Hydraulics Programs (WELLPLAN)", role: "محاكاة تنظيف قاع البئر (Hole Cleaning) وسرعات صعود الفتات الصخري" },
    ],
    advanced: [
      { name: "Drillbench Dynamic Hydraulics", role: "المحاكاة الديناميكية المتقدمة لضغط قاع البئر وسوائل الحفر في الآبار العميقة والـ HPHT" },
      { name: "WITSML / Real-Time Data Tools", role: "استقبال وتحليل بيانات الطين المباشرة من الحفار أثناء الحفر الفعلي" },
    ],
  },

  // 15. مراقبة جودة المعامل والمنتجات (QC / Lab Engineer)
  qc: {
    core: [
      { name: "LIMS (Lab Information Management System)", role: "إدارة وتتبع العينات، تسجيل نتائج التحاليل، وإصدار شهادات المطابقة والإفراج CoQ" },
      { name: "Microsoft Excel", role: "منحنيات المعايرة، الحسابات الإحصائية، وتحويل نتائج أجهزة الاختبار" },
      { name: "Agilent OpenLab / ChemStation / Chromeleon", role: "تشغيل وتحليل وتكامل بيانات أجهزة الكروماتوغرافيا الغازية والسائلة (GC / HPLC)" },
    ],
    helpful: [
      { name: "Minitab / JMP", role: "مخططات ضبط الجودة الإحصائية (SPC Control Charts) ودراسات دقة وتكرارية القياس (Gage R&R)" },
      { name: "OriginLab / PeakFit", role: "تفكيك المنحنيات الطيفية ومعالجة إشارات أجهزة الكروماتوغرافيا المعقدة" },
    ],
    advanced: [
      { name: "FTIR Spectral Libraries & Search Tools", role: "مطابقة البصمات الطيفية للمركبات العضوية والشوائب غير المعروفة" },
      { name: "Quality Management Software (Q-Pulse / MasterControl)", role: "إدارة وثائق الأيزو 17025، المعايرات الدورية، ومتابعة سجلات التدقيق" },
    ],
  },

  // 16. مهندس البحث والتطوير (R&D Engineer)
  rnd: {
    core: [
      { name: "Minitab / Design-Expert / JMP", role: "تصميم التجارب الإحصائية (DOE)، تحليل استجابة السطوح (RSM)، وتحسين الصيغ الكيميائية" },
      { name: "Microsoft Excel / Python (NumPy, SciPy, Pandas)", role: "تحليل وتجهيز البيانات التجريبية، النمذجة الرياضية، وحسابات حركية التفاعل" },
      { name: "Aspen Plus / Aspen HYSYS", role: "نمذجة التفاعلات وحسابات الاتزان الثرموديناميكي وتكبير العمليات (Scale-up)" },
    ],
    helpful: [
      { name: "OriginLab", role: "رسم وتحليل البيانات العلمية عالية الدقة ونمذجة المعادلات الحركية" },
      { name: "ChemDraw / MarvinSketch", role: "رسم التراكيب الجزيئية وميكانيكية التفاعلات الكيميائية ومسارات التخليق" },
      { name: "Google Patents / Lens.org / Espacenet", role: "استكشاف وتحليل قواعد بيانات براءات الاختراع وتتبع الابتكارات السابقة (Prior Art)" },
    ],
    advanced: [
      { name: "TA Instruments TRIOS / Pyris", role: "معالجة وتحليل منحنيات التحلل الحراري والانتقال الزجاجي (TGA / DSC / DMA)" },
      { name: "SimaPro / openLCA", role: "تقييم دورة الحياة (LCA) وحساب البصمة الكربونية للعمليات والمنتجات الجديدة" },
      { name: "Materials Studio / Gaussian", role: "المحاكاة الجزيئية وحسابات كيمياء الكم للمحفزات والسطوح النانوية" },
    ],
  },
};
