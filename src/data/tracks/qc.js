import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // QC المعمل والمنتجات (qc)
  // ==========================================
export const qcTrack = {
    id: "qc",
    title: "QC / Lab Engineer (مراقبة الجودة والمعامل)",
    desc: "التحاليل المعملية للنفط والمنتجات، مطابقة المواصفات القياسية ASTM/IP، إدارة المعامل ISO 17025، وإحصاء الجودة SPC.",
    coverage: "ok",
    underDevelopment: true,
    statusNote: "المسار قيد التطوير: يوضح المفاهيم والمعايير المطلوبة (بدون روابط مباشرة حالياً)",
    about: {
      study: [
        "معايير وتحاليل ASTM القياسية للمنتجات البترولية: D86 (Distillation), D93 (Flash Point), D4052 (Density), D4294 (Sulfur), D323 (RVP), Octane Number (RON/MON).",
        "الأجهزة التحليلية المتقدمة: Gas Chromatography (GC), HPLC, Spectrophotometry (UV-Vis/FTIR), ICP-OES لتحليل المعادن الشائبة.",
        "نظام إدارة جودة المعامل ومواصفة ISO/IEC 17025، المعايرة (Calibration)، وتتبع سلاسل القياس (Traceability).",
        "ضبط الجودة الإحصائي (SPC): Control Charts, Measurement Uncertainty, Repeatability & Reproducibility (R&R).",
        "بروتوكولات السلامة بالمعامل الكيميائية والتعامل مع الكواشف الخطرة (Chemical Hygiene & SDS)."
      ],
      work: [
        "سحب وتحليل عينات الخام والمنتجات (بنزين، سولار، مازوت، كيروسين، وقود طائرات JET A-1، بوليمرات).",
        "مطابقة نتائج التحاليل مع المواصفات القياسية قبل إصدار شهادات الجودة والإفراج (Certificate of Quality - CoQ).",
        "معايرة الأجهزة المعملية بانتظام والمشاركة في اختبارات الكفاءة الدورية بين المختبرات (Round Robin Testing).",
        "إخطار مهندسي التشغيل فوراً بأي انحراف عن المواصفات (Off-spec) لإعادة ضبط معايير الوحدات الإنتاجية.",
        "تسجيل وتوثيق النتائج على نظام إدارة معلومات المختبرات الرقمي (LIMS)."
      ],
      workplaces: "معامل مصافي التكرير وشركات البتروكيماويات (MIDOR, ANRPC, AMOC, ELAB, ETHYDCO, SIDPEC)، شركات فحص وتفتيش الجودة العالمية (SGS, Intertek, Bureau Veritas, Saybolt)، وشركات الكيماويات والدهانات والزيوت.",
    },
    stages: [
      stage("أساسيات تحاليل البترول ومواصفات المنتجات (Petroleum Testing & ASTM Standards)", [
        r("ASTM D86 & D1160: Atmospheric & Vacuum Distillation of Petroleum Products", "معيار", "b", null, {
          bookNote: "تحديد منحنيات التقطير وتوزيع درجات الغليان لتقييم كفاءة أبراج التقطير ومواصفات الجازولين والديزل والوقود النفاث."
        }),
        r("Flash Point Testing (ASTM D93 Pensky-Martens / ASTM D56 Tag Closed Cup)", "معيار", "b", null, {
          bookNote: "قياس نقطة الوميض لتقييم مخاطر الاشتعال ومطابقة مواصفات السلامة لزيوت الوقود والكيروسين والمذيبات."
        }),
        r("Density, API Gravity & Kinematic Viscosity (ASTM D4052, ASTM D1298, ASTM D445)", "معيار", "b", null, {
          bookNote: "قياس الكثافة الرقمية والجاذبية النوعية واللزوجة الكينماتية لحسابات الشحن ونقل الطاقة وكفاءة الضخ."
        }),
        r("Reid Vapor Pressure (RVP - ASTM D323 / ASTM D5191)", "معيار", "i", null, {
          bookNote: "قياس ضغط بخار المنتجات المتطايرة كالجازولين لضمان عدم حدوث Vapor Lock وضبط جودة الوقود الصيفي والشتوي."
        }),
        r("Sulfur Content Determination (ASTM D4294 XRF / ASTM D5453 UVF)", "معيار", "i", null, {
          bookNote: "قياس تركيز الكبريت في الخام والمنتجات لمطابقة التشريعات البيئية الصارمة (Euro 5/Euro 6 وقواعد IMO 2020 البحرية)."
        }),
        r("Octane Rating (RON & MON - ASTM D2699 / D2700) & Cetane Index (ASTM D4737 / D613)", "موضوع", "i", null, {
          bookNote: "تقييم مقاومة الوقود للفرقعة (Knocking) في محركات البنزين ومؤشر السيتان للديزل باستخدام محركات CFR القياسية."
        }),
      ]),
      stage("الأجهزة التحليلية المتقدمة وتقنيات الفصل (Advanced Instrumental Analysis)", [
        r("Gas Chromatography (GC - FID, TCD, MS) in Refinery & Petrochemical Labs", "أداة", "i", null, {
          bookNote: "تحليل وتفريق الغازات الهيدروكربونية ومكونات البتروكيماويات وقياس الشوائب والغازات المصاحبة."
        }),
        r("High-Performance Liquid Chromatography (HPLC) & GPC Polymer Analysis", "أداة", "i", null, {
          bookNote: "تحليل المركبات العضوية الثقيلة، البوليمرات، والمضافات الكيميائية في مجمعات البتروكيماويات واللدائن."
        }),
        r("Spectroscopy: FTIR, UV-Vis, Atomic Absorption (AAS) & ICP-OES for Trace Metals", "أداة", "a", null, {
          bookNote: "تحديد المعادن الثقيلة والسامة (كالنيكل والفاناديوم والزئبق) في النفط والمحفزات، والتعرف على البصمات الجزيئية."
        }),
        r("Total Acid Number (TAN - ASTM D664) & Karl Fischer Moisture (ASTM D6304)", "موضوع", "i", null, {
          bookNote: "قياس حموضة الزيوت لاكتشاف مخاطر التآكل (Naphthenic Acid Corrosion) وقياس نسب الرطوبة الدقيقة بالميكروجرام."
        }),
      ]),
      stage("إدارة جودة المختبرات وإحصاء الجودة (ISO 17025 & Quality Statistics)", [
        r("ISO/IEC 17025: General Requirements for Competence of Testing & Calibration Laboratories", "معيار", "i", null, {
          bookNote: "متطلبات إدارة الكفاءة الفنية والحيادية لنظم المختبرات وضمان ضبط الجودة والتوثيق المعتمد وإجراءات التدقيق."
        }),
        r("Statistical Process Control (SPC) & Control Charts in Testing Labs", "موضوع", "i", null, {
          bookNote: "مخططات شيوهارت (Shewhart Charts) وتحديد حدود التحذير والإجراء (Warning & Action Limits) لمراقبة استقرار دقة القياسات."
        }),
        r("Measurement Uncertainty (GUM), Method Validation & Traceability", "موضوع", "a", null, {
          bookNote: "حساب عدم اليقين في القياس المعملي، والتحقق من صحة الطرق التحليلية قبل اعتمادها وتتبع سلاسل المعايرة القياسية."
        }),
        r("Laboratory Information Management Systems (LIMS)", "أداة", "b", null, {
          bookNote: "أنظمة إدارة عينات المختبرات الرقمية، تسجيل النتائج، تتبع سلاسل العينات (Chain of Custody)، وإصدار شهادات الإفراج."
        }),
      ]),
    ],
  };
