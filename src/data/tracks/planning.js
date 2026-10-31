import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Production Planning Engineer (planning)
  // ==========================================
export const planningTrack = {
    id: "planning",
    title: "Production Planning Engineer",
    desc: "مهندس تخطيط الإنتاج، موازين المادة، الجدولة، ونماذج البرمجة الخطية (LP / PIMS).",
    coverage: "ok",
    about: {
      study: [
        "موازين المواد والكتلة الشاملة وتطبيقات Linear Programming (LP).",
        "برمجيات محاكاة اقتصاديات المصافي ونظم PIMS Models.",
        "أساليب التنبؤ بالطلب والجدولة الزمنية لوحدات التشغيل Batch & Continuous.",
        "تحليل البيانات وبناء لوحات القياس التفاعلية Production Dashboards."
      ],
      work: [
        "العمل كـ Production Planning Engineer ووضع خطط الإنتاج الشهرية والسنوية.",
        "تحديد كميات اللقيم والخلط الأمثل Crude & Product Blending لتعظيم الأرباح.",
        "التنسيق المباشر بين إدارات العمليات وسلاسل الإمداد والتسويق.",
        "مراقبة مستويات المخزون لتفادي أي عجز أو تكدس في المستودعات."
      ],
      workplaces: "إدارات التخطيط والمتابعة بمصافي التكرير الكبرى، مجمعات البتروكيماويات والأسمدة، ومصانع الكيماويات والدهانات والأدوية.",
    },
    stages: [
      stage("أساسيات تخطيط الإنتاج وجدولة العمليات", [
        r(
          "Production Planning & Control in Process Industries (NPTEL)",
          "كورس",
          "i",
          1,
          ["رابط الكورس (NPTEL)", trackLinks.planning.stageOne.planningNptel],
          {
            bookNote: "دورة تخصصية متقدمة في تخطيط ومراقبة الإنتاج بالصناعات التحويلية؛ تشمل التنبؤ بالطلب (Demand Forecasting)، موازين المواد الإجمالية، تحديد الاختناقات التشغيلية (Bottlenecks)، والجدولة الزمنية لوحدات التشغيل المستمر والدفعات (Batch & Continuous Scheduling)."
          }
        ),
        r(
          "Advanced Excel & Data Analytics for Planners",
          "كورس",
          "i",
          1,
          ["قائمة كورس الإكسيل المتقدم", trackLinks.planning.stageOne.excelPlanning],
          {
            bookNote: "أهم أداة لمهندس تخطيط الإنتاج؛ دوال تحليل البيانات المتقدمة، نماذج Solver للتحسين، بناء لوحات القياس التفاعلية (Production Dashboards)، وجداول الـ Pivot Tables لتتبع مخزون الخامات والمنتجات النهائية."
          }
        ),
        r(
          "Refinery LP & PIMS Modeling Guide (Drive)",
          "ملف",
          "a",
          1,
          ["تحميل الدليل والماتيريال", trackLinks.planning.stageOne.pimsRefineryGuide],
          {
            bookNote: "دليل تطبيقي ونماذج حقيقية لنظام PIMS (Process Industry Modeling System) المستخدم في مصافي البترول العالمية لربط أسعار الخام في الأسواق العالمية بتشغيل وحدات المصفاة وخطة الإنتاج الشهرية والسنوية."
          }
        ),
        r(
          "Petroleum & Chemical Engineering Economics: اقتصاديات البترول وحساب التكاليف والإهلاك (د. مصطفى نوفل)",
          "كورس",
          "i",
          1,
          ["مشاهدة القائمة (YouTube)", trackLinks.planning.stageOne.petroleumEconomicsNofal],
          {
            bookNote: "سلسلة محاضرات مكثفة في اقتصاديات هندسة البترول والعمليات يقدمها د. مصطفى نوفل (أستاذ هندسة تكرير البترول بجامعة السويس) عبر قناة Process Safety بالعربي؛ تغطي تقدير التكاليف، نماذج الإهلاك، عقود البترول والغاز، وكفاءة واستدامة المعدات الدوارة.",
            sections: [
              {
                title: "محاور ومحتويات السلسلة الاقتصادية",
                points: [
                  "1. كفاءة المعدات الدوارة (محاضرات الاتحاد الأوروبي للاستدامة وكفاءة الطاقة).",
                  "2. مقدمة في اقتصاديات البترول والعمليات (Petroleum Economics Overview).",
                  "3. طرق حساب إهلاك المعدات والأصول الرأسمالية اقتصادياً (Depreciation Methods).",
                  "4. عقود شراء واتفاقيات البترول والغاز (أنواعها ومزايا وشروط كل عقد).",
                  "5. تقدير التكاليف الرأسمالية والتشغيلية في المشاريع (Cost Estimation: CAPEX & OPEX)."
                ]
              }
            ],
            tips: "فهم حسابات الإهلاك (Depreciation) وعقود النفط والـ CAPEX/OPEX ركيزة أساسية لأي مهندس تخطيط إنتاج وربطها بنماذج الـ LP لتعظيم أرباح المصنع."
          }
        ),
      ]),
    ],
  };
