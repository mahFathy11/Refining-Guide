import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    try {
      localStorage.removeItem("chem_guest_mode");
    } catch {}
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.hash = "#/";
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "var(--bg, #0f1a1e)",
            color: "var(--ink, #e6eef0)",
            fontFamily: "sans-serif",
            direction: "rtl",
          }}
        >
          <div
            style={{
              maxWidth: "540px",
              width: "100%",
              background: "var(--card, #16252b)",
              border: "1px solid var(--line, #2a3d44)",
              borderRadius: "16px",
              padding: "28px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>⚠️</div>
            <h2 style={{ margin: "0 0 10px", fontSize: "1.3rem" }}>
              حدث تنبيه أثناء تحميل الصفحة
            </h2>
            <p style={{ color: "var(--mut, #9db0b6)", fontSize: "0.9rem", margin: "0 0 18px", lineHeight: "1.6" }}>
              لا تقلق، يمكنك العودة للصفحة الرئيسية أو مسح البيانات المؤقتة لتسجيل الدخول بسلاسة.
            </p>

            {this.state.error && (
              <pre
                style={{
                  background: "rgba(0,0,0,0.3)",
                  padding: "10px",
                  borderRadius: "8px",
                  fontSize: "0.75rem",
                  color: "#ef4444",
                  textAlign: "left",
                  direction: "ltr",
                  overflowX: "auto",
                  marginBottom: "18px",
                  maxHeight: "120px",
                }}
              >
                {String(this.state.error.message || this.state.error)}
              </pre>
            )}

            <button
              onClick={this.handleReset}
              style={{
                font: "inherit",
                fontSize: "0.92rem",
                fontWeight: 700,
                padding: "10px 20px",
                borderRadius: "99px",
                background: "var(--ac, #4fc3d6)",
                color: "#16252b",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(79, 195, 214, 0.4)",
              }}
            >
              🔄 العودة للرئيسية وإعادة المحاولة
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
