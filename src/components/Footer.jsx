import { NavLink } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* العمود 1: هوية المنصة ورسالتها */}
          <div className="footer-col-brand">
            <NavLink to="/" className="footer-brand-title">
              <span className="footer-brand-icon">🧪</span>
              <span>مسارات الهندسة الكيميائية</span>
            </NavLink>
            <p className="footer-brand-desc">
              منصة تفاعلية متكاملة لمهندسي الكيمياء والعمليات وتكرير البترول؛ تجمع المقررات التأسيسية، مسارات التصميم والتشغيل، محاكاة Aspen و HYSYS، والتحضير للمقابلات وسوق العمل الصناعي.
            </p>
            <div className="footer-stats-chips">
              <span className="footer-stat-chip">📚 4 مسارات تخصصية</span>
              <span className="footer-stat-chip">🏭 88+ شركة بترول وتصميم</span>
              <span className="footer-stat-chip">🎓 دليل المنح والمقابلات</span>
            </div>
          </div>

          {/* العمود 2: روابط الوصول السريع */}
          <div className="footer-col-links">
            <h4 className="footer-col-title">
              <span>🧭 روابط سريعة</span>
            </h4>
            <ul className="footer-links-list">
              <li>
                <NavLink to="/">🏠 الصفحة الرئيسية</NavLink>
              </li>
              <li>
                <NavLink to="/tracks">🛤️ المسارات الهندسية</NavLink>
              </li>
              <li>
                <NavLink to="/tips">💡 الخلاصة والمقابلات</NavLink>
              </li>
              <li>
                <NavLink to="/companies">🏭 دليل الشركات</NavLink>
              </li>
              <li>
                <NavLink to="/scholarships">🎓 المنح والدراسات العليا</NavLink>
              </li>
              <li>
                <NavLink to="/curriculum">📖 مواد الكلية</NavLink>
              </li>
              <li>
                <NavLink to="/channels">📺 قنوات ومحاضرات يوتيوب</NavLink>
              </li>
            </ul>
          </div>

          {/* العمود 3: شكر وتقدير لمصادر المواد العلمية */}
          <div className="footer-col-source">
            <h4 className="footer-col-title">
              <span>🤝 الاعتمادات والمصادر</span>
            </h4>
            <div className="footer-guide-note">
              المصادر والمراجع العلمية مجمعة ومصنفة وفق دليل <strong>«Free Courses, and Books for Engineers»</strong> إعداد المهندس <strong>أحمد جمال متولي</strong>، بالإضافة لجهود ومحاضرات نخبة من مهندسي شركات البترول والتكرير والجامعات المصرية والعالمية.
            </div>
          </div>
        </div>

        {/* الشريط السفلي: توقيع الصانع والحقوق */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            جميع الحقوق محفوظة © {currentYear} • منصة مسارات الهندسة الكيميائية
          </p>

          {/* توقيع المهندس محمود فتحي */}
          <div className="footer-creator-card" title="Designed & Developed by Mahmoud Fathy - Class of 2026">
            <span className="creator-avatar">👨‍💻</span>
            <div className="creator-text">
              <span>Created with <span style={{ color: "#ef4444" }}>♥</span> by</span>
              <span className="creator-name">Mahmoud Fathy</span>
              <span className="creator-badge">Class of 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
