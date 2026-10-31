import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // Process Simulation (sim)
  // ==========================================
export const simTrack = {
    id: "sim",
    title: "Process Modeling & Simulation Engineer",
    desc: "محاكاة ونمذجة العمليات بـ HYSYS و Aspen Plus وشهادات Aspentech ونماذج الامتحانات.",
    coverage: "ok",
    about: {
      study: [
        "Aspen HYSYS & Aspen Plus لمحاكاة ونمذجة العمليات الكيميائية ومحطات التكرير والغاز.",
        "Fluid Packages: اختيار Equations of State (EOS) أو Activity Coefficient Models.",
        "Steady State & Dynamic Simulation للأبراج والمفاعلات ومحطات التبريد.",
        "توصيف مقطرات الزيت الخام Petroleum Assays وحسابات الفقد في الضغط."
      ],
      work: [
        "العمل كـ Process Simulation Specialist وبناء Digital Twin للمنشآت والمصانع.",
        "دراسات Debottlenecking وإزالة الاختناقات لرفع الطاقة الإنتاجية للوحدات.",
        "تحسين كفاءة استهلاك الطاقة واسترجاع الحرارة المفقودة في المصافي.",
        "اختبار سيناريوهات الطوارئ والتعديلات الهندسية قبل التنفيذ الميداني."
      ],
      workplaces: "مكاتب التصميم والاستشارات الهندسية (Enppi, Petrojet, Onspec)، مراكز البحث والتطوير، مصافي التكرير، ومجمعات الغاز والبتروكيماويات.",
    },
    stages: [
      stage("المدخل", [
        r(
          "مقارنة Aspen HYSYS مقابل Aspen Plus والفروق التطبيقية",
          "مقارنة",
          "b",
          43,
          {
            bookNote: "مقارنة حاسمة توضح الفرق بين عملاقي المحاكاة؛ HYSYS المخصص للنفط والغاز والتكرير والنمذجة الديناميكية بمعادلات الحالة (EOS)، مقابل Aspen Plus المتخصص في الكيماويات والبوليمرات والمواد الصلبة بنماذج النشاط (Activity Coefficient).",
            comparison: {
              title: "أوجه الاختلاف والتمايز بين البرنامجين",
              items: [
                {
                  name: "Aspen HYSYS",
                  tagline: "عملاق النفط والغاز والتكرير",
                  desc: "الأداة الأولى عالمياً في قطاع البترول والغاز الطبيعي ومحطات المعالجة.",
                  points: [
                    "الصناعات المستهدفة: Upstream, Midstream, Refining, Gas Processing, LNG.",
                    "نقاط القوة: سرعة الحسابات الفائقة، دعم قوي للنمذجة الديناميكية (Dynamic Simulation)، وتوصيف الزيت الخام ومقطرات البترول (Petroleum Assays).",
                    "الحزم الثرموديناميكية: معادلات الحالة (Equations of State) مثل Peng-Robinson و SRK، لأن الهيدروكربونات مركبات غير قطبية (Non-polar)."
                  ]
                },
                {
                  name: "Aspen Plus",
                  tagline: "عملاق الكيماويات والبوليمرات والعمليات المعقدة",
                  desc: "الأداة الأقوى في الصناعات الكيميائية التخصصية والدقيقة وتفاعلات التوازن المعقدة.",
                  points: [
                    "الصناعات المستهدفة: Petrochemicals, Bulk Chemicals, Pharmaceuticals, Polymers, Electrolytes.",
                    "نقاط القوة: التعامل مع المواد الصلبة (Solids handling, Crystallization, Filtration)، التفاعلات المعقدة وتوازن الأطوار المتعددة (VLLE).",
                    "الحزم الثرموديناميكية: نماذج معامل الفعالية (Activity Coefficient) مثل NRTL, UNIQUAC, Wilson, و Electrolyte-NRTL للمحاليل المائية والقطبية العالية."
                  ]
                }
              ]
            },
            tips: "كقاعدة ذهبية: إذا كانت العملية تتضمن هيدروكربونات وزيت وغاز وتكرير ⬅️ استخدم HYSYS. إذا كانت العملية تتضمن محاليل كيميائية، إلكترولايتات، أملاح، بوليمرات، أو أدوية ⬅️ استخدم Aspen Plus."
          }
        ),
        r(
          "كورس HYSYS — م. أحمد مختار",
          "كورس",
          "b",
          48,
          trackLinks.sim.stageOne.hysysMokhtar,
          {
            bookNote: "كورس HYSYS الشامل لـ م. أحمد مختار.. أشهر وأقوى كورس عربي لتعلم المحاكاة من الصفر وحتى بناء نماذج متكاملة للمحطات والمعدات وحل مشاكل الـ Convergence."
          }
        ),
        r(
          "Aspen HYSYS Software (Eng. Sarah Zidan)",
          "كورس",
          "b",
          48,
          ["مشاهدة القائمة", trackLinks.sim.stageOne.hysysSoftwareSarah],
          {
            bookNote: "مقدمة عملية لبرنامج Aspen HYSYS للمهندسة سارة زيدان، تشرح واجهة البرنامج، اختيار الحزم الثرموديناميكية (Fluid Packages)، وإدخال وتوصيف التيارات والمعدات.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Aspen HYSYS introduction and Component list",
                  "2. Hypothetical Components",
                  "3. Simulation Environment at Aspen HYSYS",
                  "4. Material Stream - composition and conditions",
                  "5. Unit of measurement",
                  "6. Physical Properties and Stream Analysis",
                  "7. Phase envelop, Critical point, Cricondentherm, Cricondenbar",
                  "8. Hydrate formation analysis, Hydrate definition by Aspen HYSYS",
                  "9. Property table in Aspen HYSYS - Stream Analysis",
                  "10. Mixer - steady state design and parameters in Aspen HYSYS",
                  "11. Mixer - Rating and Worksheet",
                  "12. P/F dynamic Pressure and Flow Spec in the mixer",
                  "13. Refrigeration Cycle components and function",
                  "14. Valve (J-T) and Heater (Chiller) simulation in Aspen HYSYS",
                  "15. Compressor (Adiabatic& Polytropic efficiency), simulation using Aspen HYSYS",
                  "16. Cooler simulation and Workbook in Aspen HYSYS",
                  "17. Customize the HYSYS Workbook & Save data to Excel",
                  "18. Create and Save Template by Aspen HYSYS",
                  "19. Two-Phase Separator and Heat Exchanger",
                  "20. Heat Exchanger and Cooler",
                  "21. Balance - Logical Operation",
                  "22. Adjust unit operation - how to meet a target/ Spec in Aspen HYSYS",
                  "23. Insert Template in Aspen HYSYS case",
                  "24. Petroleum Assay - Manually added",
                  "25. Petroleum Assay Characterization and Conventional Results",
                  "26. Attach Petroleum Assay to a material stream"
                ]
              }
            ]
          }
        ),
        r(
          "Learn Engineering through Simulation (Eng. Sarah Zidan)",
          "كورس",
          "b",
          48,
          ["مشاهدة القائمة", trackLinks.sim.stageOne.learnSimulationSarah],
          {
            bookNote: "سلسلة تعلم المفاهيم الهندسية من خلال المحاكاة للمهندسة سارة زيدان، لربط النظريات الهندسية بتطبيقات ونماذج HYSYS العملية وفهم سلوك العمليات.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Property Table - (temperature, pressure, mass density & thermal conductivity)",
                  "2. Stream analysis, phase envelop, critical point (T,P), cricondentherm and cricondenbar",
                  "3. Hydrocarbon feed stream - composition, fluid package & customized unit of measurement",
                  "4. Flow rate ( Molar, Mass, Volume), Std. Ideal Liq. Vol. Flow & Liq. Volume Flow @ Std. condition",
                  "5. Temperature, Pressure, Vapor Fraction, Enthalpy, and Entropy",
                  "6. Flash Calculations, Dalton & Raoult's Law",
                  "7. Fluid Package and Property package",
                  "8. Stokes' Law and Terminal velocity (قانون ستوك لتحديد العلاقة بين السرعة واللزوجة)",
                  "9. Kinematic and Dynamic Viscosity (اللزوجة)",
                  "10. Hypothetical Components, base and vapor pressure method, Antoine Equation",
                  "11. Base and critical properties of components, phase envelope",
                  "12. Introduction to Engineering and Simulation Course (مقدمة عن كورس الهندسة والمحاكاة)"
                ]
              }
            ]
          }
        ),
        r(
          "Aspen Simulation Workbook: Draw PFD in Excel (Eng. Sarah Zidan)",
          "فيديو",
          "b",
          48,
          ["مشاهدة الفيديو", trackLinks.sim.stageOne.aspenWorkbookSarah],
          {
            bookNote: "فيديو تطبيقي يشرح أداة Aspen Simulation Workbook وربط نماذج محاكاة Aspen ببرنامج Excel، مع كيفية رسم وتحديث الـ PFD وتصدير واستيراد بيانات التيارات والعمليات مباشرة."
          }
        ),
      ]),
      stage("التعمق والتطبيقات المتقدمة", [
        r(
          "Upstream Simulation (Eng. Sarah Zidan)",
          "كورس",
          "i",
          46,
          ["مشاهدة القائمة", trackLinks.sim.stageTwo.upstreamSimulationSarah],
          {
            bookNote: "سلسلة متكاملة وشاملة (24 فيديو) في محاكاة قطاع الزيت والغاز (Upstream Simulation) للمهندسة سارة زيدان، تشمل محاكاة الآبار والفواصل ثلاثية الطور وشبكات الأنابيب والتجميع.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Insulation in pipeline, Heat loss and Pressure drop in Aspen HYSYS using Pipe segment",
                  "2. Desalting separator, Pre-flash Separator and Furnace simulation using Aspen HYSYS",
                  "3. Pre-heat Train simulation using Aspen HYSYS",
                  "4. Flow Assurance in Pipeline: Hydrate, Erosion, Slug, Wax formation and CO2 Corrosion",
                  "5. Gas Well Streams gathering and simulation",
                  "6. Pipeline branches, Junction, Estimate HTC, Mixer",
                  "7. Upstream simulation using Aspen HYSYS - Pipe segment, Schedule, Nominal Diameter"
                ]
              }
            ]
          }
        ),
        r(
          "Aspen HYSYS column: From Beginner to Expert (Eng. Sarah Zidan)",
          "كورس",
          "i",
          46,
          ["مشاهدة القائمة", trackLinks.sim.stageTwo.hysysColumnSarah],
          {
            bookNote: "دورة تخصصية في محاكاة أعمدة وأبراج التقطير على Aspen HYSYS للمهندسة سارة زيدان، من ضبط مواصفات البرج والـ Degrees of Freedom وحتى حل مشاكل الـ Convergence.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Controlling the quality of Distillation Column Products by Aspen HYSYS, Cut point",
                  "2. Column operating conditions at Aspen HYSYS",
                  "3. Aspen HYSYS simulation of Reboiled Side Stripper and Pump around of Kerosene",
                  "4. Diesel Steam Side Stripper and Pump around simulation by Aspen HYSYS",
                  "5. Pump around and Side stripper for side products in Aspen HYSYS",
                  "6. Refluxed Absorber Column Template",
                  "7. De-ethanizer Distillation column degree of freedom",
                  "8. Distillation column in Aspen HYSYS - fully defined",
                  "9. Columns in Aspen HYSYS, Reboiled Absorber"
                ]
              }
            ]
          }
        ),
        r(
          "Advanced Process Modeling by ASPEN HYSYS (Eng. Sarah Zidan)",
          "كورس",
          "a",
          46,
          ["مشاهدة القائمة", trackLinks.sim.stageTwo.advancedModelingSarah],
          {
            bookNote: "تطبيقات ونمذجة متقدمة للعمليات الكيميائية المعقدة على برنامج Aspen HYSYS للمهندسة سارة زيدان، تغطي العمليات الدائرية (Recycle Loops)، والمعدات المركبة، وحسابات التحسين.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Material stream, component list, fluid package by HYSYS - باستخدام الهايسيس"
                ]
              }
            ]
          }
        ),
        r(
          "كورس محاكاة العمليات Aspen Plus (د. محمد محمد - MGMohammed)",
          "كورس",
          "a",
          52,
          ["مشاهدة الكورس (YouTube Playlist)", trackLinks.sim.stageTwo.aspenPlusMohammedMohammed],
          ["قناة د. محمد محمد على يوتيوب", "https://www.youtube.com/@MGMohammed"],
          {
            bookNote: "سلسلة شاملة ومفصلة لتعلم واحتراف برنامج Aspen Plus من إعداد د. محمد محمد. تبدأ من واجهة البرنامج وإدخال المركبات وتحديد النماذج الثرموديناميكية المناسبة (Property Methods)، وصولاً لمحاكاة المبادلات وأبراج التقطير والمفاعلات، مع معالجة المواد الصلبة وحل مشاكل التقارب.",
            sections: [
              {
                title: "محاور وموضوعات كورس Aspen Plus",
                points: [
                  "1. واجهة البرنامج واستراتيجيات المحاكاة وتحديد المكونات (Components Definition).",
                  "2. اختيار النماذج الديناميكية الحرارية (Thermodynamic & Property Models: NRTL, UNIQUAC, Peng-Robinson).",
                  "3. محاكاة معدات انتقال الحرارة وتوصيف التيارات والمضخات والصمامات.",
                  "4. نمذجة أعمدة التقطير (Distillation Columns) وتحليل أداء الصواني (Tray Rating).",
                  "5. محاكاة المفاعلات الكيميائية وتفاعلات الاتزان والمفاعلات الحركية (Kinetic Reactors).",
                  "6. التعامل مع المواد الصلبة ووحدات الفصل (Solids Handling & Splitters).",
                  "7. استخدام مواصفات التصميم والتحسين (Design Specs & Optimization)."
                ]
              }
            ]
          }
        ),
        r(
          "Mastering Aspen Plus In Chemical Engineering (ما وراء الهندسة - Meta Engineering)",
          "كورس",
          "a",
          52,
          ["مشاهدة الكورس (YouTube Playlist)", trackLinks.sim.stageTwo.aspenPlusMetaEngineering],
          ["قناة ما وراء الهندسة على يوتيوب", "https://www.youtube.com/@meta_engineering"],
          {
            bookNote: "كورس تطبيقي عربي متميز من قناة «ما وراء الهندسة» (Meta Engineering) لإتقان برنامج Aspen Plus في الهندسة الكيميائية من الأساسيات حتى تصميم المحاكاة الكاملة وحل المشكلات الهندسية الواقعية.",
            sections: [
              {
                title: "أهم موضوعات كورس Mastering Aspen Plus",
                points: [
                  "1. مبادئ المحاكاة الهندسية ودور Aspen Plus في هندسة العمليات والتصميم.",
                  "2. إنشاء وتوصيف مخططات السريان (Flowsheet Simulation) والتحكم في خواص التيارات.",
                  "3. نمذجة وحدات العمليات: المبادلات، الأعمدة، الخزانات، والمفاعلات.",
                  "4. حل أخطاء عدم التقارب (Convergence Issues) واستخراج موازين المادة والطاقة (H&MB)."
                ]
              }
            ]
          }
        ),
        r(
          "حزمة كورسات Aspen Plus الشاملة (Downloadly.ir)",
          "كورس",
          "i",
          52,
          ["Getting Started", trackLinks.sim.stageTwo.aspenDownloadlyStarted],
          ["Intermediate Modeling", trackLinks.sim.stageTwo.aspenDownloadlyInter],
          {
            bookNote: "سلسلة كورسات تدريبية شاملة لبرنامج Aspen Plus من الصفر وحتى النمذجة الاحترافية المتقدمة مرفوعة بروابط مباشرة لتغطية المفاعلات وأعمدة التقطير متعددة المكونات."
          }
        ),
        r(
          "Bootcamp: Aspen Plus with Industrial Case Studies",
          "كورس",
          "i",
          52,
          ["تحميل الـ Bootcamp", trackLinks.sim.stageTwo.aspenDownloadlyBootcamp],
          ["مقدمة الفيديو", trackLinks.sim.stageTwo.aspenPlusIntro],
          {
            bookNote: "معسكر تدريبي مكثف يركز على دراسة الحالات الصناعية الواقعية خطوة بخطوة باستخدام برنامج Aspen Plus ونمذجة مصانع متكاملة مع ملفات العمل."
          }
        ),
        r(
          "تحسين ومفاضلة العمليات الصناعية (Process Optimization using Aspen Plus)",
          "ملف",
          "a",
          52,
          ["تحميل الملف (Drive)", trackLinks.sim.stageTwo.aspenOptDrive],
          {
            bookNote: "مرجع تطبيقي متخصص يشرح أدوات التحسين الهندسي والـ Optimization والـ Sensitivity Analysis داخل Aspen Plus لخفض التكاليف التشغيلية واستهلاك الطاقة وزيادة الأرباح."
          }
        ),
        r(
          "Aspentech: 5 فئات (Chemical, Gas, Refinery, Advanced, Dynamic)",
          "كورس",
          "i",
          46,
          ["Chemical", trackLinks.sim.stageTwo.aspenChem],
          ["Gas", trackLinks.sim.stageTwo.aspenGas],
          ["Refinery", trackLinks.sim.stageTwo.aspenRefinery],
          ["Advanced", trackLinks.sim.stageTwo.aspenAdvanced],
          ["Dynamic", trackLinks.sim.stageTwo.aspenDynamic],
          {
            bookNote: "المجلدات التدريبية الخمسة الرسمية من شركة Aspentech، تغطي تخصصات المحاكاة الصناعية الخمسة الأساسية لخبراء ومطوري برامج المحاكاة الأصليين."
          }
        ),
        r("Aspen Plus: Aspentech training course", "كورس", "i", 51, ["مقدمة", trackLinks.sim.stageTwo.aspenTrainIntro], ["Material & Energy", trackLinks.sim.stageTwo.aspenTrainMB], ["Thermo", trackLinks.sim.stageTwo.aspenTrainThermo]),
      ]),
      stage("الشهادات ونماذج الامتحانات", [
        r(
          "Aspen HYSYS Expert User Certificate (Eng. Sarah Zidan)",
          "شهادة",
          "a",
          49,
          ["مشاهدة القائمة", trackLinks.sim.stageThree.expertCertificateSarah],
          {
            bookNote: "سلسلة تدريبية وإرشادية للتحضير لامتحان شهادة خبير Aspen HYSYS المعتمد دولياً للمهندسة سارة زيدان، تشرح متطلبات الامتحان، وطريقة حل المسائل المعقدة، والتركيز على مفاتيح النجاح.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. (1) Aspen HYSYS Expert User Certification - Exam Preparation Course - Introduction",
                  "2. (2) Acid gas, sweet and sour gas, rich and lean solvent",
                  "3. (3) Process Flow Diagram (PFD) of Acid Gas Processing",
                  "4. (4) Acid Gas Packages at Aspen HYSYS, Pipeline Specs of H2S and CO2",
                  "5. (5) Simulation of Acid gas - topic one at ACE exam",
                  "6. (6) Case Study - Effect of Chemical Solvent Mixture on Acid Gases Removal",
                  "7. (7) Dehydration Fundamentals - hydrate, inhibitor and glycols",
                  "8. (8) Process Flow Diagram and Aspen HYSYS simulation of Dehydration Process",
                  "9. (9) Stream Saturator, Absorber, Valve and Heat Exchanger at Aspen HYSYS",
                  "10. (10) Aspen HYSYS Distillation Column, Condenser and Reboiler",
                  "11. (11) Aspen HYSYS Recycle, Pump, Mixer and Heat Exchanger",
                  "12. (12) Aspen HYSYS Component Splitter and Water Dew Point",
                  "13. (12) Sulfur recovery unit (SRU) fundamentals",
                  "14. (13) Sulfur recovery unit fluid package, reaction furnace and waste heat exchanger",
                  "15. (14) Aspen HYSYS SRU Catalytic Section: Heater, Converter, Condenser",
                  "16. (15) Aspen HYSYS SRU Performance Summary and Air Demand Analyzer"
                ]
              }
            ]
          }
        ),
        r(
          "بنك أسئلة ونماذج امتحانات شهادات Aspen HYSYS Certified Expert (Mega & Pdfcoffee)",
          "شهادة",
          "a",
          49,
          ["بنك الأسئلة والماتيريال (Mega)", trackLinks.sim.stageThree.examBankMega],
          ["مجلد الامتحانات 2 (Mega)", trackLinks.sim.stageThree.examBankMega2],
          ["نموذج امتحان محلول Upstream (Pdfcoffee)", trackLinks.sim.stageThree.examSampleUpstream],
          {
            bookNote: "تجميعة شاملة للتحضير لاجتياز امتحانات شهادات Aspentech المعتمدة دولياً (ACU و Certified Expert).. تحتوي على بنك أسئلة الامتحانات الحقيقية السابقة ونماذج محلولة كاملة لضمان اجتياز الاختبار بنجاح في تخصصات (Midstream, Columns, Upstream).",
            sections: [
              {
                title: "تفاصيل شهادات Aspentech المعتمدة",
                points: [
                  {
                    label: "1. Aspen Certified User (ACU)",
                    desc: "تختبر إتقان الأساسيات، بناء الـ Flowsheet، محاكاة المعدات البسيطة، إدخال التيارات، واستخراج التقارير والنتائج الأساسية."
                  },
                  {
                    label: "2. Aspen Certified Expert (ACE)",
                    desc: "المستوى الاحترافي الأرفع، يتطلب مهارات متقدمة في حل المشكلات المعقدة والـ Troubleshooting، النمذجة الديناميكية، والأبراج التقطيرية متعددة المراحل."
                  }
                ]
              },
              {
                title: "أقسام وتخصصات الامتحان العملي (Tracks)",
                points: [
                  {
                    label: "Upstream Track",
                    desc: "محاكاة آبار البترول، الفواصل ثنائية وثلاثية الأطوار، خطوط الأنابيب، ومحطات معالجة الزيت الرطب."
                  },
                  {
                    label: "Columns / Distillation Track",
                    desc: "محاكاة وتصميم الأبراج التقطيرية المعقدة، أعمدة التجريد والامتصاص، حسابات الصواني ومواصفات المنتجات الجانبية."
                  },
                  {
                    label: "Midstream / Gas Processing Track",
                    desc: "وحدات نزع الغازات الحامضية، تجفيف الغاز (TEG Dehydration)، والتبريد العميق (Refrigeration Loops)."
                  }
                ]
              }
            ],
            tips: "الاطلاع على بنك أسئلة الـ Mega وحل نموذج Upstream EHY2351 المحلول المرفق يضمن لك اجتياز الامتحان بنسبة نجاح تفوق 90%."
          }
        ),
        r(
          "Aspentech Certified User (ACU)",
          "شهادة",
          "i",
          48,
          ["خطوات التقديم", trackLinks.sim.stageThree.acuSteps],
          ["موقع الامتحان", trackLinks.sim.stageThree.aspentechUni],
          {
            bookNote: "خطوات التسجيل والتقديم على امتحان شهادة المستخدم المعتمد ACU ورابط منصة جامعة Aspentech الرسمية لاعتماد مهاراتك في المحاكاة."
          }
        ),
      ]),
    ],
  };
