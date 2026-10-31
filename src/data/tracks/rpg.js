import { trackLinks } from "../links.js";
import { r, stage } from "./helpers.js";

// ==========================================
  // تكرير / غاز / بتروكيماويات (rpg)
  // ==========================================
export const rpgTrack = {
    id: "rpg",
    title: "Process Engineer (تكرير / غاز / بتروكيماويات)",
    desc: "مهندس العمليات الصناعية بمصافي التكرير، مجمعات معالجة وإسالة الغاز، ومصانع البتروكيماويات والأسمدة.",
    coverage: "ok",
    about: {
      study: [
        "Refining Units: التقطير الجوي والتفريغي، Hydrocracking، Reforming، و Hydrotreating.",
        "Gas Processing: تحلية الغاز Sweetening، Dehydration، استخلاص NGL، وتسييل LNG.",
        "Petrochemicals: بلمرة الإيثيلين والبروبيلين، وتصنيع الميثانول والأمونيا واليوريا.",
        "حسابات الفواقد الهيدروكربونية وموازين الكتلة والطاقة للمجمع الصناعي."
      ],
      work: [
        "العمل كـ Process Engineer ومراقبة كفاءة وحدات الإنتاج الصناعية.",
        "متابعة نشاط العوامل الحفازة Catalysts ومعدلات تدهورها واستبدالها.",
        "إجراء دراسات التعديلات الهندسية Plant Modifications لتحسين الإنتاجية.",
        "التأكد من مطابقة المنتجات البترولية والبتروكيماوية للمواصفات العالمية."
      ],
      workplaces: "معامل التكرير (Midor, ANRPC, ERC, APRC, CORC)، مجمعات الغاز (GASCO, Egyptian LNG, SEGAS, UGDC)، وشركات البتروكيماويات والأسمدة (MOPCO, ETHYDCO, SIDPEC, Methanex, Abu Qir).",
    },
    stages: [
      stage("التكرير", [
        r(
          "Refining Processes & Crude Distillation (Eng. Sarah Zidan)",
          "كورس",
          "b",
          54,
          ["قائمة عمليات التكرير (19 فيديو)", trackLinks.rpg.stageOne.refiningSarah],
          ["مسار التقطير: الفرن إلى البرج", trackLinks.rpg.stageOne.crudeDistillationPathSarah],
          {
            bookNote: "سلسلة متكاملة (19 فيديو) في عمليات تكرير البترول للمهندسة سارة زيدان، تشرح بالتفصيل وحدات التقطير الجوي والتفريغي، التكسير الهيدروجيني والحفزي، إصلاح النافثا، وإزالة الكبريت؛ ملحق بها فيديو توضيحي لمسار الزيت الخام من الفرن (Furnace) وحتى منطقة الوميض (Flash Zone) في برج التقطير الجوي.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Gasoline - الجازولين",
                  "2. Refining Products (1) - منتجات عملية التكرير الجزء الأول",
                  "3. Refining Process Introduction - مقدمة عن عمليات التكرير",
                  "4. Crude Distillation: Furnace to Fractionation Column (مسار الخام للبرج)"
                ]
              }
            ]
          }
        ),
        r(
          "أفضل مراجع تكرير البترول (م. أحمد يحيى)",
          "فيديو",
          "b",
          54,
          trackLinks.rpg.stageOne.refiningVideo,
          {
            bookNote: "فيديو م. أحمد يحيى يستعرض أهم وأفضل الكتب والمراجع المعتمدة في هندسة تكرير البترول وتصميم وحدات التقطير والتكسير والألكلة بالمصافي للمهندس الكيميائي."
          }
        ),
        r(
          "Energy Management (Eng. Emad Darwish)",
          "محاضرة",
          "i",
          54,
          ["سلايدز المحاضرة (PDF)", trackLinks.rpg.stageOne.energyManagementDarwishPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.rpg.stageOne.energyManagementDarwishVideo],
          ["مشاهدة (YouTube)", trackLinks.rpg.stageOne.energyManagementDarwishYouTube],
          {
            bookNote: "محاضرة للمهندس عماد درويش تستعرض التطبيق العملي لنظم إدارة الطاقة (EnMS - ISO 50001) في معامل تكرير البترول، وطرق رفع كفاءة الأفران والغلايات، وتقليل الفواقد في شبكات البخار ومصايد البخار، ومراقبة مؤشرات استهلاك الطاقة (EnPIs).",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "مبادئ ومعايير مواصفة أيزو 50001 لإدارة الطاقة في قطاع البترول.",
                  "رفع كفاءة أفران التقطير وضبط نسب الهواء الزائد (Excess Air) وعوازل الحرارة.",
                  "إدارة شبكات البخار وفحص مصايد البخار (Steam Traps) واسترجاع المكثفات.",
                  "مؤشرات الأداء الطاقي (Energy Performance Indicators - EnPIs) وخفض الانبعاثات."
                ]
              }
            ],
            tips: "الطاقة تمثل أكثر من 60% من تكلفة تشغيل مصفاة التكرير، وأي وفر طفيف في كفاءة الأفران يحقق ملايين الدولارات سنوياً."
          }
        ),
        r(
          "Fundamentals of Petroleum Refining (Eng. Mohamed Ayman)",
          "محاضرة",
          "b",
          54,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageOne.fundamentalsRefiningAyman],
          {
            bookNote: "محاضرة للمهندس محمد أيمن تقدم مدخلاً شاملاً لأساسيات تكرير البترول، وخواص النفط الخام، ومخطط مصفاة التكرير، ووحدات التقطير الجوي والتفريغي والتكسير والمعالجات الكيميائية."
          }
        ),
        r(
          "Catalytic Reactors in Refinery (Parts 1 & 2 - Eng. Mohamed Ayman)",
          "محاضرة",
          "i",
          54,
          ["الجزء الأول (YouTube)", trackLinks.rpg.stageOne.catalyticReactorsPart1Ayman],
          ["الجزء الثاني (YouTube)", trackLinks.rpg.stageOne.catalyticReactorsPart2Ayman],
          {
            bookNote: "سلسلة تفصيلية من جزأين للمهندس محمد أيمن تشرح المفاعلات الحفزية في مصافي التكرير (Hydroprocessing Reactors)، وخصائص العوامل المساعدة، ومراقبة الأداء وتشخيص الأعطال التشغيلية."
          }
        ),
        r(
          "Sulfer Recovery Unit (م. محمد أيمن)",
          "محاضرة",
          "b",
          54,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageOne.sruAyman],
          {
            bookNote: "محاضرة تأسيسية من تدريبات SPE Suez يقدمها م. محمد أيمن، تستعرض وحدات استرجاع الكبريت (Sulfur Recovery Unit - SRU / Claus Unit)، وكيمياء تفاعل كلاوس لتحويل غاز H2S السام إلى كبريت منصهر عالي النقاوة، ومعدات الوحدة وتشغيلها."
          }
        ),
        r(
          "مقدمة Hydrocracking (م. حمدي نقيرة)",
          "محاضرة",
          "i",
          54,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageOne.hydrocrackingNokira],
          {
            bookNote: "محاضرة تطبيقية مكثفة للمهندس حمدي نقيرة تشرح عملية التكسير الهيدروجيني (Hydrocracking) في مصافي التكرير؛ إحدى أهم وأعقد العمليات التحويلية لتحويل المقطرات الثقيلة والمازوت تحت ضغوط هيدروجين فائقة وعوامل مساعدة إلى وقود نفاث وسولار عالي الجودة.",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "أهمية وحدة الـ Hydrocracking ودورها في تعظيم ربحية مصفاة التكرير.",
                  "كيمياء التفاعل: التكسير الحفزي (Cracking) والإشباع بالهيدروجين (Hydrogenation).",
                  "العوامل المساعدة ثنائية الوظيفة (Bifunctional Catalysts).",
                  "الظروف التشغيلية الحاكمة (الضغط العالي حتى 150-200 بار وحرارة التفاعل).",
                  "الفرق بين التكسير الهيدروجيني (Hydrocracking) والمعالجة الهيدروجينية (Hydrotreating)."
                ]
              }
            ],
            tips: "تأكد من فهم ميكانيزم استهلاك الهيدروجين ودوره في منع ترسب الفحم (Coke) على أسطح العامل المساعد."
          }
        ),
        r(
          "مقدمة Acid Gas Treatment (د. أحمد سليم)",
          "محاضرة",
          "i",
          54,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageOne.acidGasTreatmentSalim],
          {
            bookNote: "محاضرة تخصصية للدكتور أحمد سليم تتناول معالجة الغازات الحامضية في معامل تكرير البترول (Acid Gases Treatment at Petroleum Refineries)، وشرح وحدات معالجة الأمين (Amine Treating Units) لإزالة غاز كبريتيد الهيدروجين (H2S) وثاني أكسيد الكربون من غازات الوقود وغاز البترول المسال (LPG) قبل إرسالها لوحدات استرجاع الكبريت (SRU).",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "مصادر الغازات الحامضية داخل مصافي البترول ووحدات التكسير والهدرجة.",
                  "كيمياء امتصاص H2S و CO2 باستخدام محاليل الأمينات (MEA, DEA, MDEA).",
                  "مخطط سريان وحدة معالجة الأمين (برج الامتصاص، برج التجديد، والمبادلات).",
                  "المشاكل التشغيلية الشائعة: الرغوة (Foaming)، التآكل (Corrosion)، وتحلل المذيب.",
                  "التكامل والربط مع وحدات استرجاع الكبريت (SRU / Claus Unit)."
                ]
              }
            ],
            tips: "معالجة الغازات الحامضية خطوة بيئية وتشغيلية حاسمة لحماية المعدات من التآكل ومنع انبعاثات الكبريت السامة."
          }
        ),
        r(
          "Lab Analysis in Oil and Gas (Eng. Mohamed Ayman)",
          "محاضرة",
          "b",
          54,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageOne.labAnalysisAyman],
          {
            bookNote: "محاضرة للمهندس محمد أيمن تستعرض أهم التحاليل والاختبارات المعملية لعينات البترول والغاز (الكثافة، اللزوجة، نقطة الوميض، التقطير المعملي ASTM) لمراقبة جودة المنتجات البترولية."
          }
        ),
        r(
          "Lube Oil Manufacturing Process (Eng. Mohamed Ayman)",
          "محاضرة",
          "i",
          54,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageOne.lubeOilAyman],
          {
            bookNote: "محاضرة للمهندس محمد أيمن تشرح مراحل تصنيع زيوت التزييت الأساسية (Lube Base Oils)، والاستخلاص بالمذيبات، وإزالة الشمع (Dewaxing)، والتحسين بالهيدروجين."
          }
        ),
        r(
          "HCs Losses in Refining and Mass Balance (Eng. Mohamed Ayman)",
          "محاضرة",
          "i",
          54,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageOne.hcsLossesMassBalanceAyman],
          {
            bookNote: "محاضرة هامة تشرح أسباب وطرق حساب الفواقد الهيدروكربونية في مصافي التكرير (Hydrocarbon Losses) وتطبيق موازين المادة الشاملة لضبط كفاءة التشغيل وخفض الفاقد."
          }
        ),
      ]),
      stage("الغاز والزيت", [
        r(
          "Natural Gas Processing (Eng. Sarah Zidan)",
          "كورس",
          "b",
          55,
          ["مشاهدة القائمة", trackLinks.rpg.stageTwo.naturalGasSarah],
          {
            bookNote: "دورة شاملة وضخمة (25 فيديو) في هندسة ومعالجة الغاز الطبيعي للمهندسة سارة زيدان، تغطي مراحل نزع الماء (Dehydration)، إزالة الغازات الحامضية (Sweetening)، استخلاص المتكثفات وسوائل الغاز (NGL Recovery)، والإسالة (LNG).",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس",
                points: [
                  "1. Natural Gas Liquids Fractionation",
                  "2. Natural Gas Liquids Recovery - Refrigeration Cycle",
                  "3. Dehydration by Adsorption using Solid Bed",
                  "4. Dehydration by Glycol Absorption",
                  "5. Glycol Injection Flow Diagram for Hydrate Inhibition",
                  "6. Natural Gas Dehydration Methods",
                  "7. Natural Gas Dehydration introduction",
                  "8. Sweetening of Natural Gas by Solid Beds",
                  "9. Physical Absorption Flow Diagram",
                  "10. Physical Absorption of Natural Gas Sweetening",
                  "11. Chemical Absorption for NG sweetening flow diagram",
                  "12. Chemical Absorption for Natural Gas Sweetening",
                  "13. Natural Gas Sweetening - Treating",
                  "14. Condensate Treating - Mercaptans removal from condensate",
                  "15. Distillation separation for condensate stabilization",
                  "16. Cascade Flash Separation",
                  "17. Condensate Production",
                  "18. Vertical and Horizontal Separators - الفاصل الأفقي والفاصل الرأسي",
                  "19. Natural Gas Separators - الفصل في الغاز الطبيعي",
                  "20. Natural Gas Processing Configuration - معالجة الغاز الطبيعي",
                  "21. Natural Gas Pipeline Specification - خواص الغاز في خطوط الأنابيب",
                  "22. Natural Gas Properties - خواص الغاز الطبيعي",
                  "23. Natural Gas phase behavior - منحنى أطوار الغاز الطبيعي",
                  "24. Natural Gas classification - تصنيف الغاز الطبيعي",
                  "25. Natural Gas: fundamentals, origin and composition - أساسيات الغاز الطبيعي"
                ]
              }
            ]
          }
        ),
        r(
          "Natural Gas Processing (م. شادي عثمان)",
          "كورس",
          "b",
          55,
          ["مشاهدة القائمة", trackLinks.rpg.stageTwo.shadyOG],
          {
            bookNote: "دورة تطبيقية متكاملة للمهندس شادي عثمان (19 فيديو) في هندسة ومعالجة الغاز الطبيعي (Natural Gas Processing) من واقع التشغيل الميداني بالمحطات؛ تشرح سلوك أطوار الغاز ومشاكل الهيدرات، تقنيات التبريد (J-T Valve والتربو إكسباندر)، تثبيت المتكثفات، تجزئة سوائل الغاز (NGL)، غلايات الأبراج، وتجفيف الغاز بالجلايكول.",
            sections: [
              {
                title: "فيديوهات ومحاور الكورس (19 فيديو)",
                points: [
                  "1. Hydrate prediction and prevention - توقع الهيدرات وطرق منع تكونها في خطوط الغاز",
                  "2. Natural gas properties and phase behavior - خواص الغاز الطبيعي وسلوك الأطوار ومنحنى الطور",
                  "3. Low temperature separation (LTS) - الفصل عند درجات الحرارة المنخفضة",
                  "4. Mechanical refrigeration - دورات التبريد الميكانيكية بالبروبان والفريون",
                  "5. Refrigerated J-T (Joule-Thomson) valve - التبريد الذاتي بصمام جول-طومسون",
                  "6. Turbo expander process - دورة التربو إكسباندر وتوليد البرودة الفائقة لاستخلاص الـ NGL",
                  "7. Condensate stabilization (part 1) - مدخل تثبيت المتكثفات البترولية وفصل الغازات الخفيفة",
                  "8. Condensate stabilization (part 2) - أبراج التثبيت (Stabilizers) وضبط ضغط البخار RVP",
                  "9. Condensate stabilization (part 3) - منظومات التثبيت المتكاملة ومواصفات المكثفات",
                  "10. Fractionation (part 1) - مبادئ تجزئة سوائل الغاز الطبيعي (NGL Fractionation)",
                  "11. Fractionation (part 2) - برج نزع الميثان والإيثان (Deethanizer)",
                  "12. Fractionation (part 3) - برج نزع البروبان (Depropanizer) ونزع البيوتان (Debutanizer)",
                  "13. Fractionation (part 4: packing) - الحشوات (Packing) مقابل الصواني في أبراج التجزئة",
                  "14. Fractionation (part 5) - كفاءة الفصل ونقاء المنتجات وضبط نسبة الراجع",
                  "15. Reboiler types - أنواع الغلايات المستخدمة في أبراج التجزئة (Kettle, Thermosiphon)",
                  "16. Reboiler types (part 2) - مقارنة تشغيلية بين أنواع الغلايات ومحددات السريان",
                  "17. Dehydration (part 1) - مدخل نزع بخار الماء وتجفيف الغاز الطبيعي",
                  "18. Dehydration (part 2) - دورة التجفيف بامتصاص الجلايكول (TEG Dehydration Unit)",
                  "19. Gas dehydration (part 3) - تجديد الجلايكول (Regeneration) وضبط نقطة الندى (Dew Point)"
                ]
              }
            ],
            tips: "احرص على دراسة منحنى طور الغاز (Phase Envelope) وتحديد منطقة تكون الهيدرات (Hydrate Formation Zone) لحماية الخطوط والمعدات من الانسداد قبل اختيار طريقة التجفيف المناسبة."
          }
        ),
        r(
          "كورسات غاز طبيعي إضافية",
          "كورس",
          "b",
          55,
          ["SPE (د. محمد عبدالرؤوف)", trackLinks.rpg.stageTwo.spe],
          {
            bookNote: "كورسات هندسة الغاز الطبيعي الإضافية الموصى بها.. كورس SPE للدكتور محمد عبدالرؤوف وشروحات م. السيد عامر.. تغطي معالجة الغاز من فوهة البئر ووحدات نزع الأحماض والتجفيف واستخلاص الـ LPG."
          }
        ),
        r(
          "Crude Oil Treatment",
          "فيديو",
          "i",
          57,
          ["فيديو م. سامي عمارة (بوست)", trackLinks.rpg.stageTwo.crudePostSami],
          ["م. خالد أبوزيد", trackLinks.rpg.stageTwo.khaledCrude],
          ["كتاب بالعربي (بوست)", trackLinks.rpg.stageTwo.crudeBookPost],
          {
            bookNote: "معالجة الزيت الخام الرطب.. فيديوهات م. سامي عمارة وم. خالد أبوزيد وكتاب عربي مميز في معالجة وفصل الأملاح والمياه من النفط الخام ووحدات الـ Desalters الكهروستاتيكية."
          }
        ),
        r(
          "Gas Processing & LNG (Eng. Mohamed Mahdy)",
          "محاضرة",
          "b",
          55,
          ["سلايدز المحاضرة (PDF)", trackLinks.rpg.stageTwo.gasProcessingMahdyPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.rpg.stageTwo.gasProcessingMahdyVideo],
          ["مشاهدة (YouTube)", trackLinks.rpg.stageTwo.gasProcessingMahdyYouTube],
          {
            bookNote: "نظرة شاملة متكاملة للمهندس محمد مهدي تستعرض سلسلة معالجة الغاز الطبيعي من رأس البئر وحتى التصدير والإسالة (LNG)، تشمل وحدات التحلية بالأمين، التجفيف بالجلايكول، إزالة الزئبق، واستخلاص سوائل الغاز الطبيعي (NGL) ودورات التبريد والإسالة.",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "سلسلة معالجة الغاز الطبيعي: فصل السوائل والشوائب من رأس البئر.",
                  "تحلية الغاز وإزالة H2S و CO2 باستخدام محاليل الأمين (Gas Sweetening).",
                  "تجفيف الغاز من بخار الماء بواسطة الجلايكول والـ Molecular Sieves.",
                  "استخلاص سوائل الغاز (NGL Recovery) بواسطة التربو إكسباندر وتجزئة الـ LPG.",
                  "دورات إسالة الغاز الطبيعي (Cryogenic Liquefaction Trains & LNG Storage)."
                ]
              }
            ],
            tips: "تعتبر هذه المحاضرة ملخصاً صناعياً ممتازاً يربط كافة وحدات معالجة الغاز الطبيعي في صورة تدفق واحدة متناسقة."
          }
        ),
        r(
          "Introduction to natural gas and separation (م. عبد الله نبيل)",
          "محاضرة",
          "b",
          55,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageTwo.gasIntroAbdullah],
          {
            bookNote: "جلسة افتتاحية من تدريبات SPE Suez يقدمها م. عبد الله نبيل، تتناول طبيعة الغاز الطبيعي وتركيبه، وأنواع العوازل والفواصل (Separators ثنائية وثلاثية الأطوار)، وآليات فصل السوائل والشوائب عند رأس البئر."
          }
        ),
        r(
          "Gas Sweetening Process (م. محمد أيمن)",
          "محاضرة",
          "b",
          55,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageTwo.gasSweeteningAyman],
          {
            bookNote: "محاضرة تخصصية من تدريبات SPE Suez يقدمها م. محمد أيمن، تشرح عمليات إزالة الغازات الحامضية (H2S و CO2) بواسطة محاليل الأمينات، وتصميم أبراج الامتصاص والتجديد وحل المشاكل التشغيلية والرغوة."
          }
        ),
        r(
          "Gas Dehydration Unit (م. أحمد عطية)",
          "محاضرة",
          "b",
          55,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageTwo.gasDehydrationAttia],
          {
            bookNote: "محاضرة تفصيلية من تدريبات SPE Suez يقدمها م. أحمد عطية، تستعرض وحدات تجفيف الغاز الطبيعي ونزع بخار الماء باستخدام الجلايكول (TEG Dehydration Unit) والمناخل الجزيئية لمنع تكون الهيدرات وتآكل الخطوط."
          }
        ),
        r(
          "NGL Recovery (م. سيد عمار)",
          "محاضرة",
          "b",
          55,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageTwo.nglRecoveryAmmar],
          {
            bookNote: "محاضرة من تدريبات SPE Suez يقدمها م. سيد عمار، تشرح استخلاص سوائل الغاز الطبيعي (NGL Recovery) بواسطة التبريد العميق (Cryogenic Processes) والتربو إكسباندر (Turbo-expander) لفصل الإيثان والبروبان والبيوتان."
          }
        ),
        r(
          "LNG Production (م. محمد مهدي)",
          "محاضرة",
          "b",
          55,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageTwo.lngProductionMahdy],
          {
            bookNote: "محاضرة متكاملة من تدريبات SPE Suez يقدمها م. محمد مهدي، تتناول تكنولوجيا تسييل الغاز الطبيعي (LNG Production)، دورات التبريد المتتالية (Cascade & Mixed Refrigerant)، وتخزين وشحن الغاز المسال للأسواق العالمية."
          }
        ),
      ]),
      stage("بتروكيماويات وأسمدة", [
        r(
          "Green Hydrogen Podcast (Eng. Sarah Zidan)",
          "فيديو",
          "b",
          56,
          ["مشاهدة القائمة", trackLinks.rpg.stageThree.greenHydrogenSarah],
          {
            bookNote: "بودكاست ونقاش تخصصي للمهندسة سارة زيدان حول الهيدروجين الأخضر (Green Hydrogen)، وتقنيات التحليل الكهربائي للماء، ودوره كمصدر طاقة المستقبل ولقيم للصناعات البتروكيماوية والأمونيا الخضراء.",
            sections: [
              {
                title: "فيديوهات ومحاور البودكاست",
                points: [
                  "1. Water risk for hydrogen production - حل لمشكلة عدم وجود الماء النقي الكافي",
                  "2. The uncertainty and Green Hydrogen - عدم اليقين حول الهيدروجين الأخضر",
                  "3. Hydrogen Value Chain, Brown and Pink Hydrogen - سلسلة قيمة الهيدروجين",
                  "4. Green hydrogen, Clean energy, Net Zero, Gray hydrogen - الهيدروجين الأخضر"
                ]
              }
            ]
          }
        ),
        r(
          "Handbook of Petrochemicals Production Processes",
          "كتاب",
          "i",
          56,
          ["تحميل", trackLinks.rpg.stageThree.petrochemicalsHandbook],
          {
            bookNote: "مرجع شامل لعمليات إنتاج البتروكيماويات والبوليمرات.. يوضح الفلوشيت والظروف التشغيلية لإنتاج الإيثيلين والميثانول والأمونيا والأسمدة النيتروجينية والفوسفاتية."
          }
        ),
        r(
          "مقدمة للبتروكيماويات (د. رحاب المغربي)",
          "محاضرة",
          "b",
          56,
          ["مشاهدة (YouTube)", trackLinks.rpg.stageThree.petrochemRehab],
          {
            bookNote: "محاضرة شاملة للدكتورة رحاب معتصم المغربي (أستاذ الهندسة الكيميائية) تقدم مدخلاً متكاملاً لصناعة البتروكيماويات (Petrochemicals in Egypt)، وتوضح الخريطة العامة للصناعة والمنتجات الأساسية والوسيطة والنهائية، ودور القيمة المضافة للبترول والغاز الطبيعي.",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "نظرة عامة على قطاع البتروكيماويات وسلسلة القيمة (Petrochemical Value Chain).",
                  "اللقيم الأساسي (Feedstock): النافثا، الإيثان، والغاز الطبيعي وتحويلها لمنتجات بتروكيماوية.",
                  "المنتجات البتروكيماوية الأساسية (Basic Petrochemicals): الإيثيلين، البروبيلين، والعطريات.",
                  "الصناعات التحويلية والبوليمرات وتطبيقاتها في السوق المصري والعالمي."
                ]
              }
            ],
            tips: "تعد هذه المحاضرة مقدمة تأسيسية ممتازة قبل التعمق في تفاصيل أفران التكسير وتفاعلات البلمرة."
          }
        ),
        r(
          "Petrochemical Industry Masterclass: Feedstocks & Polymers (Eng. Ahmed Shoman & Eng. Amira Elsobky)",
          "محاضرة",
          "b",
          56,
          ["سلايدز الدورة الكاملة (PDF)", trackLinks.rpg.stageThree.petrochemShomanPdf],
          ["الجزء 1: المواد الخام والتكسير (YouTube)", trackLinks.rpg.stageThree.petrochemShomanYouTube],
          ["الجزء 2: البوليمرات والمفاعلات (YouTube)", trackLinks.rpg.stageThree.petrochemSobkyYouTube],
          ["تحميل الجزء 1 (MP4)", trackLinks.rpg.stageThree.petrochemShomanVideo],
          ["تحميل الجزء 2 (MP4)", trackLinks.rpg.stageThree.petrochemSobkyVideo],
          {
            bookNote: "دورة بتروكيماويات متكاملة من جزأين؛ الجزء الأول للمهندس أحمد شومان يغطي المواد الخام (النافثا، الإيثان)، وأفران التكسير بالبخار، وإنتاج الأوليفينات (الإيثيلين والبروبيلين) والمركبات العطرية (BTX). والجزء الثاني للمهندسة أميرة السبكي يغطي البتروكيماويات التحويلية وصناعة البوليمرات (HDPE, LDPE, LLDPE, PP, PVC) وتكنولوجيا مفاعلات البلمرة الصناعية.",
            sections: [
              {
                title: "المحاور الرئيسية للجزء الأول (م. أحمد شومان)",
                points: [
                  "المواد الخام البترولية والغازية المغذية للصناعات البتروكيماوية.",
                  "أفران التكسير بالبخار (Steam Cracking) وظروف التفاعل والضغط والحرارة.",
                  "إنتاج الأوليفينات الأساسية: الإيثيلين، البروبيلين، البيوتادايين.",
                  "استخلاص المركبات العطرية (Benzene, Toluene, Xylenes - BTX)."
                ]
              },
              {
                title: "المحاور الرئيسية للجزء الثاني (م. أميرة السبكي)",
                points: [
                  "تصنيف البوليمرات الحرارية والمطاطية وخصائصها الفيزيائية والميكانيكية.",
                  "عمليات بلمرة الإيثيلين لإنتاج HDPE و LDPE و LLDPE والفرق في التفرعات الجزيئية.",
                  "صناعة البولي بروبيلين (PP) والـ PVC وتطبيقاتهما في الأنابيب والعبوات والمنسوجات.",
                  "أنواع مفاعلات البلمرة الصناعية (Gas Phase, Slurry Loop, Autoclave)."
                ]
              }
            ],
            tips: "الأوليفينات والعطريات هي حجر الأساس الذي تُبنى عليه كافة الصناعات الكيميائية، بينما فهم التركيب الجزيئي للبوليمر وكثافته ومعدل انسياب المنصهر (MFR) هو مفتاح التحكم في جودة المنتجات البلاستيكية."
          }
        ),
        r(
          "Ammonia Production (Eng. Mahmoud Ramzy)",
          "محاضرة",
          "i",
          56,
          ["سلايدز المحاضرة (PDF)", trackLinks.rpg.stageThree.ammoniaRamzyPdf],
          ["تسجيل المحاضرة (MP4)", trackLinks.rpg.stageThree.ammoniaRamzyVideo],
          ["مشاهدة (YouTube)", trackLinks.rpg.stageThree.ammoniaRamzyYouTube],
          {
            bookNote: "محاضرة متخصصة للمهندس محمود رمزي تشرح تفصيلياً خطوات إنتاج غاز الأمونيا اللامائية وتطبيقاتها في مصانع الأسمدة، بدءاً من إعادة التشكيل بالبخار للغاز الطبيعي، وأفران التحويل، وإزالة ثاني أكسيد الكربون، وحتى حلقة تخليق الأمونيا (Ammonia Synthesis Loop) وصناعة سماد اليوريا.",
            sections: [
              {
                title: "أهم محاور المحاضرة",
                points: [
                  "نزع الكبريت من الغاز الطبيعي (Desulfurization).",
                  "إعادة التشكيل بالبخار (Primary & Secondary Steam Reforming) لتوليد غاز التصنيع.",
                  "تحويل أول أكسيد الكربون عبر محولات الـ Shift Converters (HTS & LTS).",
                  "فصل ثاني أكسيد الكربون (CO2 Removal) لتغذية مصانع سماد اليوريا.",
                  "تفاعل الميثنة وتخليق الأمونيا عند ضغوط عالية (Haber-Bosch Process)."
                ]
              }
            ],
            tips: "صناعة الأسمدة والأمونيا هي المستهلك الأكبر للهيدروجين والغاز الطبيعي في الصناعة الكيميائية، وتعتبر من أهم وجهات التوظيف لمهندسي الكيمياء."
          }
        ),
      ]),
    ],
  };
