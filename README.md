# مسارات الهندسة الكيميائية

React + Vite + React Router (HashRouter، يشتغل على أي استضافة ثابتة).

## التشغيل
    npm install
    npm run dev      # تطوير
    npm run build    # بناء للنشر (مجلد dist)

## هيكل المشروع
    src/
      data/        كل المحتوى هنا (عدّل منه بدون لمس المكونات)
        intro.js       مقدمة الصفحة الرئيسية
        tracks.js      المسارات والمراحل والمصادر
        companies.js   الشركات + خطوات التقديم + قالب الإيميل
      pages/       Home, TracksPage, TrackDetail, CompaniesPage
      components/  Layout, TrackCard, ResourceItem, CrudeColumn
      hooks/       useProgress (حفظ التقدم في localStorage)
      styles/      global.css (الألوان في أول الملف)

## إضافة مسار أو مصدر
في tracks.js أضف عنصر جديد بنفس شكل الموجود. المصدر: r(العنوان, النوع, المستوى, الصفحة, لينك).
تقدم المستخدم محفوظ بمفتاح = id المسار + عنوان المصدر، فتغيير العنوان بيصفّر علامة "خلصت" ليه.

## إضافة إيميل شركة
في companies.js املأ email و applyUrl للشركة بعد ما تتأكد منهم من موقعها الرسمي.
