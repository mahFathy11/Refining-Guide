import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Technical Sales Engineer (sales)
  // ==========================================
export const salesTrack = {
    id: "sales",
    title: "Technical Sales Engineer",
    desc: "المبيعات الفنية للكيماويات المتخصصة، معدات العمليات، العطاءات، وإدارة حسابات العملاء.",
    coverage: "ok",
    about: {
      study: [
        "B2B Technical Sales الموجه للشركات والمصانع الكبرى.",
        "Tenders & Bidding ودراسة المواصفات الفنية والمالية.",
        "الكيماويات المتخصصة: Scale & Corrosion Inhibitors, Demulsifiers.",
        "حسابات الجدوى و ROI للعملاء، والمعدات الهندسية وصمامات التحكم."
      ],
      work: [
        "Technical Sales / Application Engineer لتمثيل الشركة وتقديم الدعم الفني.",
        "دراسة المشاكل الفنية والتشغيلية بمصانع العملاء واقتراح الحلول الهندسية.",
        "إجراء Jar Test و Bottle Test معملياً وميدانياً أمام العميل.",
        "إعداد العروض الفنية والمالية والتفاوض لإتمام عقود التوريد والصيانة."
      ],
      workplaces: "شركات الكيماويات المتخصصة العالمية (Baker Hughes, SLB, Nalco Water, ChampionX)، وموردي المعدات الصناعية ومحطات المعالجة وصمامات التحكم وأجهزة القياس.",
    },
    stages: [
      stage("المبيعات الفنية والتسويق الهندسي B2B", [
        r(
          "Process & Water Treatment Specialty Chemicals Sales (Nalco/Suez)",
          "كورس",
          "i",
          1,
          {
            bookNote: "تطبيقات مبيعات الكيماويات المتخصصة؛ كيماويات معالجة مياه الغلايات وأبراج التبريد، موانع التآكل والترسب (Corrosion & Scale Inhibitors)، كواسر المستحلبات (Demulsifiers) بحقول النفط، وكيفية إجراء الاختبارات الميدانية (Jar Test / Bottle Test) أمام العميل."
          }
        ),
        r(
          "Engineering Proposals, Tender Preparation & Contracting",
          "محاضرة",
          "i",
          1,
          {
            bookNote: "خطوات دراسة كراسات الشروط والمواصفات (Tender Documents)، إعداد العطاء الفني والمالي، مطابقة المواصفات القياسية، وإدارة أوامر التوريد (Purchase Orders) والتسليم بالموقع."
          }
        ),
      ]),
    ],
  };
