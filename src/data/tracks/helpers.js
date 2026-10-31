// دالات ومساعدات تعريف المسارات والمراحل
// كل مصدر: r(العنوان, النوع, المستوى, صفحة الملف, ...لينكات أو تفاصيل)
// اللينك: إما نص URL، أو [اسم يظهر على الزرار, URL]
// المستوى: b مبتدئ | i متوسط | a متقدم
// التفاصيل: كائن يحتوي على { bookNote, sections, comparison, tips } تظهر في النافذة المنبثقة
export const r = (title, type, level, page, ...args) => {
  let details = null;
  const links = [];
  for (const arg of args) {
    if (!arg) continue;
    if (
      typeof arg === "object" &&
      !Array.isArray(arg) &&
      (arg.summary || arg.sections || arg.comparison || arg.tips || arg.text || arg.bookNote || arg.explanation)
    ) {
      details = arg;
    } else if (Array.isArray(arg)) {
      links.push({ label: arg[0], url: arg[1] || "#" });
    } else if (typeof arg === "string") {
      links.push({ label: "فتح", url: arg || "#" });
    }
  }
  return { title, type, level, page, links, details };
};

export const stage = (name, resources) => ({ name, resources });

export const LEVELS = { b: "مبتدئ", i: "متوسط", a: "متقدم" };
