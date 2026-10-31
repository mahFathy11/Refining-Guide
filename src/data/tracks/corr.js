import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Corrosion / Inspection (corr)
  // ==========================================
export const corrTrack = {
    id: "corr",
    title: "Corrosion / Inspection",
    desc: "هندسة التآكل والتفتيش في البترول والبتروكيماويات.",
    coverage: "ok",
    about: {
      study: [
        "آليات التآكل الصناعي: Pitting, Stress Corrosion Cracking (SCC), و HTHA.",
        "منظومات الحماية الكاثودية Cathodic Protection واختيار سبائك الصلب المقاومة.",
        "طرق الفحص الهندسي غير الهدام: NDT (Ultrasonic, Radiography, Magnetic).",
        "معدلات حقن موانع التآكل Corrosion Inhibitors ومعايير كود NACE & API."
      ],
      work: [
        "العمل كـ Corrosion & Asset Integrity Engineer وقياس سماكة جدران الأنابيب والمعدات.",
        "مراقبة فاعلية أنظمة الحماية الكاثودية ومنع التسريبات الكارثية بالموقع.",
        "إصدار تقارير التفتيش الفني وتحديد العمر التشغيلي المتبقي للأصول.",
        "متابعة برامج الفحص الدوري أثناء التوقفات المجدولة والعمرات."
      ],
      workplaces: "شركات إنتاج الزيت والغاز (خالدة، بتروبل، جابكو، بدر الدين)، شركات خطوط الأنابيب والمستودعات (سوميد، أنابيب البترول)، ومصافي التكرير.",
    },
    stages: [
      stage("المصادر الموجودة", [
        r(
          "Corrosion in the petrochemical industry",
          "كتاب",
          "i",
          65,
          ["تحميل", trackLinks.corr.stageOne.corrosionPetrochem],
          {
            bookNote: "مرجع ASM العالمي في التآكل في صناعة البتروكيماويات وتكرير البترول.. يشرح ميكانيزمات التآكل وتأثير المركبات الكبريتية والأحماض وطرق الحماية الكاثودية وموانع التآكل (Inhibitors)."
          }
        ),
        r("بوست عن التآكل", "منشور", "b", 65, trackLinks.corr.stageOne.corrosionPost),
        r(
          "مسار Corrosion & Inspection (م. أحمد دراز)",
          "منشور",
          "b",
          65,
          trackLinks.corr.stageOne.corrosionPath,
          {
            bookNote: "خارطة طريق ومسار متكامل لتعلم هندسة التآكل والتفتيش الهندسي واختبارات الـ NDT كتبه م. أحمد دراز لتوضيح الشهادات المهنية (API 510, API 570, NACE)."
          }
        ),
      ]),
    ],
  };
