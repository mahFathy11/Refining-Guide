import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Sustainability & Energy Engineer (sustainability)
  // ==========================================
export const sustainabilityTrack = {
    id: "sustainability",
    title: "Sustainability & Energy Engineer",
    desc: "مهندس الاستدامة، ترشيد الطاقة، تكامل الحرارة (Pinch)، واحتجاز الكربون والهيدروجين.",
    coverage: "ok",
    about: {
      study: [
        "Pinch Technology لتكامل المبادلات الحرارية وترشيد استهلاك الوقود.",
        "تقنيات احتجاز وتخزين الكربون Carbon Capture, Utilization & Storage (CCUS).",
        "سلاسل إنتاج وتطبيقات Green Hydrogen & Green Ammonia والتحول الأخضر.",
        "نظم ومعايير إدارة الطاقة الدولية ISO 50001 وقياس البصمة الكربونية."
      ],
      work: [
        "العمل كـ Energy & Sustainability Engineer لتحسين كفاءة استهلاك الوقود والكهرباء.",
        "تقديم حلول هندسية لاسترجاع الحرارة المهدرة وخفض انبعاثات الكربون.",
        "قيادة مبادرات Decarbonization لزيادة التنافسية العالمية للمصنع.",
        "حساب العائد الاستثماري لمشاريع ترشيد الطاقة والتحول النظيف."
      ],
      workplaces: "مصافي التكرير المتطورة، مصانع الأسمدة والحديد والبتروكيماويات، مشروعات الهيدروجين والطاقة النظيفة، وشركات الاستشارات الطاقية والبيئية الدولية.",
    },
    stages: [
      stage("كفاءة الطاقة والتحول الأخضر (Decarbonization)", [
        r(
          "Pinch Technology & Heat Exchanger Network Design (NPTEL)",
          "كورس",
          "a",
          1,
          ["رابط الكورس (NPTEL)", trackLinks.sustainability.stageOne.pinchTechnology],
          {
            bookNote: "الأداة المرجعية الأولى لمهندسي الطاقة والتصميم؛ تكنولوجيا الـ Pinch لحساب الحد الأدنى لاستهلاك المرافق الساخنة والباردة (Utility Targets)، وتصميم وتعديل شبكات المبادلات الحرارية (HEN Retrofit) لتقليل استهلاك الوقود بالمصافي."
          }
        ),
      ]),
    ],
  };
