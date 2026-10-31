import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Commissioning & Start-up Engineer (commissioning)
  // ==========================================
export const commissioningTrack = {
    id: "commissioning",
    title: "Commissioning & Start-up Engineer",
    desc: "التشغيل التجريبي، فحص الاكتمال الميكانيكي، الغسيل، النفخ، وبدء إدخال اللقيم.",
    coverage: "ok",
    about: {
      study: [
        "Pre-commissioning وتسلسل الفحص وإغلاق Punch Lists (Category A, B, C).",
        "Chemical Cleaning & Degreasing والنفخ بالبخار Steam Blowing.",
        "N2/He Leak Testing واختبارات العزل وكشف التسريب بالأبراج والخطوط.",
        "Feed Introduction & Startup وبروتوكولات بدء إدخال اللقيم والتشغيل."
      ],
      work: [
        "Commissioning & Start-up Engineer بالمشروعات والمنشآت الحديثة.",
        "استلام الخطوط والمعدات من مقاول الإنشاءات وفحص Mechanical Completion.",
        "اختبار وتجربة دوائر وحلقات التحكم مع مهندسي Instrumentation.",
        "قيادة عمليات التشغيل التجريبي حتى الوصول للتشغيل المستقر وتسليم المصنع."
      ],
      workplaces: "شركات المقاولات العامة ومقاولو الـ EPC (Enppi, Petrojet, Technip, Saipem)، شركات التشغيل والصيانة (Eprom)، ومصممو التراخيص التكنولوجية والوحدات الإنتاجية.",
    },
    stages: [
      stage("ما قبل التشغيل", [
        r("Commissioning Phases & Systemization (Mechanical Completion to Handover)", "موضوع", "b", null),
        r("System Walkdowns, Punch Lists & Loop Checks", "موضوع", "b", null),
        r("Flushing, Hydrotest & Leak Testing (ASME B31.3 Test Requirements)", "موضوع", "i", null),
        r("Nitrogen Purging & Inerting (NFPA 56)", "موضوع", "i", null),
        r(
          "Nitrogen Purging & Helium Leak Testing in Oil & Gas",
          "محاضرة",
          "i",
          1,
          {
            bookNote: "إجراءات إخلاء الهواء والأكسجين من الخطوط والأبراج باستخدام النيتروجين (Inerting & Purging) لمنع تكوين مخاليط انفجارية قبل إدخال الهيدروكربونات، واختبارات كشف التسريب الدقيقة بغاز النيتروجين والهيليوم (N2/He Leak Testing)."
          }
        ),
      ]),
      stage("التشغيل التجريبي والبدء", [
        r("Steam Blowing, Air Blowing & Chemical Cleaning", "موضوع", "a", null),
        r(
          "Steam Blowing, Air Blowing & Chemical Cleaning Sequences",
          "محاضرة",
          "a",
          1,
          {
            bookNote: "تنظيف خطوط البخار والمعدات قبل التشغيل؛ تقنيات النفخ بالبخار (Steam Blowing) لإزالة القشور المعدنية لحماية ريش التوربينات، الغسيل الكيميائي وإزالة الشحوم (Degreasing & Pickling)، وتجفيف الوحدات."
          }
        ),
        r("Catalyst & Chemical Loading and Activation", "موضوع", "a", null),
        r("First Start-up Sequence & Operating Procedures", "موضوع", "i", null),
        r("Pre-Startup Safety Review (PSSR)", "معيار", "i", null),
      ]),
      stage("الاختبار والتسليم", [
        r("Performance Test Design & Execution", "موضوع", "a", null),
        r("Completions Management Systems & Handover Documentation", "أداة", "i", null),
        r("Start-up Troubleshooting", "موضوع", "a", null),
      ]),
    ],
  };
