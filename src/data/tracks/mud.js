import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Mud Engineer - Drilling Fluids (mud)
  // ==========================================
export const mudTrack = {
    id: "mud",
    title: "Mud Engineer (Drilling Fluids)",
    desc: "مهندس سوائل الحفر، الخواص الريولوجية، ثبات جدار البئر، ومشاكل الآبار.",
    coverage: "ok",
    about: {
      study: [
        "Water-Based (WBM), Oil-Based (OBM), and Synthetic (SBM) Drilling Fluids.",
        "Rheology وفق API 13B: الكثافة، لزوجة مارش، PV, YP, و Gel Strength.",
        "معدات فصل المواد الصلبة: Shale Shakers, Desanders, Desilters, Centrifuges.",
        "تشخيص مشاكل الحفر: Lost Circulation واستعصاء الأنابيب وتصدع الشيل."
      ],
      work: [
        "Mud Engineer والتواجد بمواقع منصات الحفر Rig Site برياً وبحرياً.",
        "الفحص الدوري المستمر لخواص سائل الحفر وضبط الإضافات الكيميائية والباريت.",
        "تأمين استقرار جدار البئر ومنع الانفجار Blowout Prevention.",
        "معالجة مشاكل Lost Circulation والتفاعل السريع مع التغيرات الجيولوجية."
      ],
      workplaces: "شركات خدمات حفر الآبار العالمية (Schlumberger M-I SWACO, Halliburton Baroid, Baker Hughes, Weatherford) وشركات الحفر الوطنية (EDC).",
    },
    stages: [
      stage("أساسيات الحفر والسوائل", [
        r("Drilling Engineering Fundamentals & Well Construction", "موضوع", "b", null),
        r("Rheology & Non-Newtonian Flow", "موضوع", "b", null),
        r("Colloid & Surface Chemistry for Drilling Fluids", "موضوع", "i", null),
        r(
          "Drilling Fluids Engineering & Mud Technology",
          "كورس",
          "b",
          1,
          {
            bookNote: "دورة هندسة سوائل الحفر الشاملة؛ وظائف سائل الحفر في تبريد الدقاق ونقل الفتات الصخري والتحكم في ضغط الطبقات، مقارنة سوائل الحفر المائية (WBM) والزيتية (OBM) والاصطناعية (SBM)، والمواد المضافة لضبط الوزن واللزوجة (Barite, Bentonite, Polymers)."
          }
        ),
      ]),
      stage("اختبارات الطين والتحكم", [
        r("Water-Based Mud Testing (API RP 13B-1)", "معيار", "b", null),
        r("Oil-Based Mud Testing (API RP 13B-2)", "معيار", "i", null),
        r("Solids Control Equipment & Management (API RP 13C)", "معيار", "i", null),
        r("Daily Mud Reports & Product Inventory", "موضوع", "b", null),
      ]),
      stage("الهيدروليكا والمشاكل المتقدمة", [
        r("Drilling Hydraulics: Annular Pressure Loss, ECD & Hole Cleaning", "موضوع", "i", null),
        r("Wellbore Stability & Shale Inhibition", "موضوع", "a", null),
        r("Lost Circulation & Contamination Treatment", "موضوع", "a", null),
        r("Well Control Fundamentals", "موضوع", "i", null),
        r("HPHT Fluids, MPD & Completion Fluids", "موضوع", "a", null),
        r(
          "Drilling Fluids Handbook & Wellbore Stability Guide",
          "كتاب",
          "a",
          1,
          {
            bookNote: "مرجع هندسة سوائل الحفر المعتمد (Halliburton Baroid / Schlumberger M-I SWACO)؛ تشخيص وعلاج مشاكل الحفر الميدانية مثل تهريب سائل الحفر (Lost Circulation)، استعصاء مواسير الحفر (Stuck Pipe)، وتصدع وانتفاخ طبقات الشيل (Shale Instability)."
          }
        ),
      ]),
    ],
  };
