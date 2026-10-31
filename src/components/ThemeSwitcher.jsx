import { useState, useEffect, useRef } from "react";

export const THEMES = [
  {
    id: "navy-amber",
    name: "كحلي ملكي وعنبر ذهبي",
    tagline: "تصميم فاتح ناصع مع أزرق ملكي وعنبر (الموصى به)",
    accent: "#2563eb",
    secondary: "#d97706",
    bgLight: "#ffffff",
  },
  {
    id: "flare-orange",
    name: "لهب الشعلة والبرتقالي",
    tagline: "طابع نفطي ميداني مع برتقالي الشعلة الحيوي",
    accent: "#ea580c",
    secondary: "#0284c7",
    bgLight: "#ffffff",
  },
  {
    id: "cyber-indigo",
    name: "النيلي المستقبلي والسيان",
    tagline: "طابع المنصات التكنولوجية العالمية الحديثة",
    accent: "#4f46e5",
    secondary: "#06b6d4",
    bgLight: "#ffffff",
  },
  {
    id: "emerald-energy",
    name: "الزمردي الهندسي والطاقة الخضراء",
    tagline: "أخضر زمردي ناصع يرمز للاستدامة والتحول الأخضر",
    accent: "#059669",
    secondary: "#0284c7",
    bgLight: "#ffffff",
  },
  {
    id: "petroleum-teal",
    name: "تركواز بترولي أنيق",
    tagline: "درجات التركواز والسيان البترولية الفاتحة",
    accent: "#0d9488",
    secondary: "#b45309",
    bgLight: "#ffffff",
  },
];

const THEME_STORAGE_KEY = "chem_active_theme";

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) || "navy-amber";
    } catch {
      return "navy-amber";
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // تطبيق السمة فور التحميل أو التغيير
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
    } catch (e) {
      console.warn("Could not save theme to localStorage", e);
    }
  }, [activeTheme]);

  // إغلاق القائمة عند النقر بالخارج
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentThemeObj = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <div className="theme-switcher-wrapper" ref={dropdownRef}>
      <button
        type="button"
        className="theme-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="تغيير ألوان وتصميم الموقع"
        aria-label="قائمة ألوان الموقع"
      >
        <span className="theme-color-dots">
          <span style={{ backgroundColor: currentThemeObj.accent }}></span>
          <span style={{ backgroundColor: currentThemeObj.secondary }}></span>
        </span>
        <span className="theme-switcher-label">🎨 ألوان الموقع</span>
      </button>

      {isOpen && (
        <div className="theme-dropdown-menu" role="menu">
          <div className="theme-dropdown-header">
            <span>اختر باليتة ألوان الموقع</span>
          </div>

          <div className="theme-options-list">
            {THEMES.map((theme) => {
              const isSelected = theme.id === activeTheme;
              return (
                <button
                  key={theme.id}
                  type="button"
                  className={`theme-option-item ${isSelected ? "is-selected" : ""}`}
                  onClick={() => {
                    setActiveTheme(theme.id);
                    setIsOpen(false);
                  }}
                  role="menuitem"
                >
                  <div className="theme-preview-swatch">
                    <span
                      className="swatch-bg"
                      style={{ backgroundColor: theme.bgLight || "#ffffff" }}
                    >
                      <span
                        className="swatch-accent"
                        style={{ backgroundColor: theme.accent }}
                      ></span>
                      <span
                        className="swatch-secondary"
                        style={{ backgroundColor: theme.secondary }}
                      ></span>
                    </span>
                  </div>

                  <div className="theme-option-info">
                    <div className="theme-option-name">
                      <span>{theme.name}</span>
                      {isSelected && <span className="theme-check-icon">✓</span>}
                    </div>
                    <small className="theme-option-desc">{theme.tagline}</small>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
