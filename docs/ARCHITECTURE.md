# 🏛️ دليل المعمارية البرمجية للمشروع (Project Architecture Guide)

تم تنظيم وهيكلة كود المنصة باتباع مبادئ **Clean Modular Architecture** لضمان أعلى درجات المرونة، الأداء، وسهولة التعديل والإضافة لاحقاً دون التسبب في أخطاء برمجية أو التأثير على بقية أجزاء المشروع.

---

## 📂 خريطة الهيكل التنظيمي (Folder Structure)

```text
chem-tracks/
├── src/
│   ├── components/            # مكونات واجهة المستخدم (UI Components)
│   │   ├── index.js           # مصدّر مركزي (Barrel) لجميع المكونات
│   │   ├── TrackCard.jsx      # بطاقة عرض المسار
│   │   ├── ResourceItem.jsx   # عنصر المصدر/الكورس داخل المرحلة
│   │   ├── ResourceModal.jsx  # نافذة الشرح والتفاصيل
│   │   └── ...
│   │
│   ├── pages/                 # صفحات التطبيق الرئيسية (Routed Pages)
│   │   ├── index.js           # مصدّر مركزي (Barrel) لجميع الصفحات
│   │   ├── Home.jsx           # الصفحة الرئيسية
│   │   ├── TracksPage.jsx     # صفحة قائمة المسارات
│   │   ├── TrackDetail.jsx    # صفحة تفاصيل المسار والمراحل
│   │   ├── CompaniesPage.jsx  # صفحة دليل الشركات
│   │   └── ...
│   │
│   ├── data/                  # طبقة البيانات ومحتوى المسارات (Data Layer)
│   │   ├── index.js           # مصدّر مركزي (Barrel) لجميع البيانات
│   │   ├── tracks.js          # وكيل توافقي (Proxy) يعيد تصدير المسارات المعيارية
│   │   │
│   │   ├── tracks/            # 🚀 المسارات المعيارية المقسمة (Modular Tracks)
│   │   │   ├── helpers.js     # دوال بناء المسار: r() و stage() ومستويات LEVELS
│   │   │   ├── constants.js   # ثوابت وأيقونات المسارات TRACK_ICONS و TRACK_NAMES_AR
│   │   │   ├── index.js       # مجمّع المسارات الـ 16 ومصفوفة tracks
│   │   │   ├── found.js       # مسار الأساسيات المشتركة
│   │   │   ├── design.js      # مسار تصميم العمليات
│   │   │   ├── equip.js       # مسار مهندس المعدات
│   │   │   ├── sim.js         # مسار المحاكاة
│   │   │   ├── ops.js         # مسار مهندس التشغيل
│   │   │   ├── safety.js      # مسار سلامة العمليات
│   │   │   ├── rpg.js         # مسار تكرير / غاز / بتروكيماويات
│   │   │   ├── corr.js        # مسار التآكل والتفتيش
│   │   │   ├── planning.js    # مسار تخطيط الإنتاج
│   │   │   ├── env.js         # مسار الهندسة البيئية
│   │   │   ├── sustainability.js # مسار كفاءة الطاقة والاستدامة
│   │   │   ├── sales.js       # مسار المبيعات الفنية
│   │   │   ├── commissioning.js  # مسار التشغيل التجريبي
│   │   │   ├── mud.js         # مسار سوائل الحفر
│   │   │   ├── qc.js          # مسار مراقبة الجودة والمعامل
│   │   │   └── rnd.js         # مسار البحث والتطوير
│   │   │
│   │   ├── companies.js       # دليل الشركات (73 شركة)
│   │   ├── jobTemplates.js    # قوالب التقديم (Email & Cover Letter Templates)
│   │   ├── scholarships.js    # دليل المنح الدراسية الدولية
│   │   ├── trackEngineeringData.js # مصفوفات الأولويات وحزم البرمجيات
│   │   ├── collegeCourses.js  # مواد ومقررات الكلية وربطها بالمسارات
│   │   └── channels.js        # قنوات ومصادر اليوتيوب
│   │
│   ├── hooks/                 # Custom React Hooks (useProgress, useBookmarks)
│   ├── context/               # AuthContext وسياق إدارة الحسابات
│   ├── utils/                 # محرك المستشار الذكي aiAdvisorEngine ونطاقات الشركات
│   └── styles/                # ملفات التنسيق المنظمة لكل قسم
```

---

## 🛠️ كيف تعدل أو تضيف على المشروع بسهولة؟

### 1. تعديل مسار موجود (مثلاً: `mud` أو `design` أو `qc`)

- بدلاً من البحث في ملف عملاق يتجاوز 3500 سطر، افتح مباشرة الملف الخاص بالمسار:
  `src/data/tracks/mud.js`
- عدّل المراحل أو أضف موارد جديدة بحرية تامة دون أي خوف من كسر مسارات أخرى.

### 2. إضافة مسار جديد (New Track)

خطوات إضافة مسار جديد تتم خلال دقيقتين فقط:

1. أنشئ ملفاً جديداً في `src/data/tracks/` مثل `src/data/tracks/piping.js`:

   ```javascript
   import { trackLinks } from "../links.js";
   import { r, stage } from "./helpers.js";

   export const pipingTrack = {
     id: "piping",
     title: "Piping Engineer",
     desc: "وصف المسار...",
     coverage: "ok",
     about: { study: [...], work: [...], workplaces: "..." },
     stages: [
       stage("اسم المرحلة", [
         r("اسم الكورس", "كورس", "b", 1, "رابط-الكورس", { bookNote: "ملاحظات..." }),
       ])
     ]
   };
   ```

2. في `src/data/tracks/index.js`:
   - استورد المسار: `import { pipingTrack } from "./piping.js";`
   - أضفه داخل مصفوفة `tracks = [..., pipingTrack]`.
3. في `src/data/tracks/constants.js`:
   - أضف أيقونة المسار في `TRACK_ICONS`: `piping: "📐"`

---

## 🎯 مميزات المعمارية الجديدة (Architectural Benefits)

1. **العزل التام (Fault Isolation):** أي خطأ كتابي في أحد المسارات يقتصر على ملفه فقط ولا يوقف بقية المسارات.
2. **أداء وسرعة التطوير (Fast HMR & DX):** محرك Vite يقوم بتحديث الملف المعدل في أجزاء من الثانية دون إعادة معالجة آلاف الأسطر.
3. **التوافق التام بنسبة 100% (Zero Breaking Changes):** ملف `src/data/tracks.js` يعمل كوكيل، وجميع استيرادات المشروع القديمة تعمل دون أي تعديل.
4. **المصدّرات المركزية (Barrels):** تتيح استيراد المكونات والبيانات بسهولة فائقة:
   ```javascript
   import { tracks, companies } from "../data";
   import { TrackCard, ResourceModal } from "../components";
   ```
