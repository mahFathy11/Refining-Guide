import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import useProgress from "../hooks/useProgress.js";
import { generateAiAdvice } from "../utils/aiAdvisorEngine.js";
import "../styles/aiChat.css";

const QUICK_PROMPTS = [
  { label: "🎓 خريج جديد.. أبدأ إزاي؟", query: "أنا خريج جديد ومش عارف أبدأ منين" },
  { label: "⚡ إنترفيو قريب.. أراجع إيه؟", query: "عندي إنترفيو قريب وعايز أراجع الزتونة والأسئلة" },
  { label: "💻 كورس Aspen HYSYS", query: "عايز أتعلم محاكاة Aspen HYSYS" },
  { label: "📐 مسار هندسة التصميم", query: "عايز أدخل مسار هندسة العمليات والتصميم والـ P&ID" },
  { label: "🛢️ تكرير وبتروكيماويات", query: "عايز أعرف كورسات تكرير البترول ومعالجة الغاز" },
  { label: "🎯 نصيحة لمساري الحالي", query: "إيه نصيحتك لمساري الحالي وخطوتي الجاية؟" },
];

export default function AiChatWidget() {
  const { currentUser } = useAuth();
  const { done } = useProgress();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(() => {
    try {
      return !sessionStorage.getItem("ai_tooltip_dismissed");
    } catch {
      return false;
    }
  });
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const userName = currentUser?.name ? `يا م. ${currentUser.name}` : "يا بشمهندس";

  // الرسالة الترحيبية الأولية
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "ai",
      text: `أهلاً بك ${userName}! 🧭 أنا مستشارك التوجيهي لمسارات الهندسة الكيميائية.

اختر من الأسئلة الجاهزة أو اسألني عن (طالب، خريج جديد، إنترفيو قريب، HYSYS، تصميم العمليات، أو المقارنة بين التراكات) وسأرشدك لأفضل الكورسات والملفات المباشرة خطوة بخطوة! 🎯`,
      actions: [
        { label: "🎓 خريج جديد.. أبدأ إزاي؟", query: "أنا خريج جديد ومش عارف أبدأ منين", icon: "🚀" },
        { label: "⚡ إنترفيو قريب.. أراجع إيه؟", query: "عندي إنترفيو قريب وعايز أراجع الزتونة", icon: "📥" },
        { label: "🎯 نصيحة لمساري الحالي", query: "إيه نصيحتك لمساري الحالي؟", icon: "🧭" },
      ],
    },
  ]);

  // التمرير التلقائي لأسفل المحادثة
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isTyping]);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (showTooltip) {
      setShowTooltip(false);
      try {
        sessionStorage.setItem("ai_tooltip_dismissed", "true");
      } catch {}
    }
  };

  const handleDismissTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
    try {
      sessionStorage.setItem("ai_tooltip_dismissed", "true");
    } catch {}
  };

  const handleSend = (textToSend) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    // إضافة رسالة المستخدم
    const userMsgId = `usr_${Date.now()}`;
    const newMessages = [
      ...messages,
      { id: userMsgId, sender: "user", text: query },
    ];
    setMessages(newMessages);
    setInputText("");
    setIsTyping(true);

    // سياق المستخدم للذكاء الاصطناعي
    const userContext = {
      name: currentUser?.name || "",
      role: currentUser?.role || "",
      targetTrack: currentUser?.targetTrack || "design",
      done: done || {},
    };

    // محاكاة تفكير الذكاء الاصطناعي لفترة وجيزة (350ms)
    setTimeout(() => {
      const advice = generateAiAdvice(query, userContext);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai_${Date.now()}`,
          sender: "ai",
          text: advice.text,
          actions: advice.actions || [],
        },
      ]);
      setIsTyping(false);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome_${Date.now()}`,
        sender: "ai",
        text: `أهلاً بك مجدداً ${userName}! 🤖 تم مسح المحادثة. اسألني عن أي تراك أو موضوع أو خطوة تحتاجها في مسارك!`,
        actions: [
          { label: "🎓 خريج جديد.. أبدأ إزاي؟", query: "أنا خريج جديد ومش عارف أبدأ منين", icon: "🚀" },
          { label: "⚡ إنترفيو قريب.. أراجع إيه؟", query: "عندي إنترفيو قريب وعايز أراجع الزتونة", icon: "📥" },
        ],
      },
    ]);
  };

  const handleActionClick = (action) => {
    if (action.query) {
      handleSend(action.query);
    } else if (action.link) {
      if (action.link.startsWith("#/")) {
        const route = action.link.replace("#", "");
        navigate(route);
      } else {
        window.open(action.link, "_blank");
      }
    }
  };

  return (
    <>
      {/* حاوية الزر العائم في الركن السفلي */}
      <div className="ai-fab-container">
        {showTooltip && !isOpen && (
          <div className="ai-fab-tooltip" onClick={handleToggleOpen}>
            <span>💡</span>
            <span>محتاج نصيحة أو ترشيح كورس يناسب وضعك؟ كلمني هنا!</span>
            <button
              className="ai-tooltip-close"
              onClick={handleDismissTooltip}
              aria-label="إغلاق التلميح"
            >
              ✕
            </button>
          </div>
        )}

        <button
          className="ai-fab-btn"
          onClick={handleToggleOpen}
          aria-label={isOpen ? "إغلاق مستشار المسارات" : "فتح مستشار المسارات"}
          title="مستشار المسارات المهنية والتوجيه الهندسي"
        >
          <div className="ai-fab-icon-wrap">
            <span>{isOpen ? "✕" : "🧭"}</span>
            {!isOpen && <span className="ai-fab-status-dot" />}
          </div>
          <span className="ai-fab-label">
            {isOpen ? "إغلاق" : "مستشار المسارات"}
          </span>
        </button>
      </div>

      {/* نافذة المحادثة التفاعلية */}
      {isOpen && (
        <div className="ai-chat-window" role="dialog" aria-modal="true">
          {/* هيدر الشات */}
          <div className="ai-chat-header">
            <div className="ai-header-left">
              <div className="ai-header-avatar">🧭</div>
              <div className="ai-header-title-wrap">
                <h4 className="ai-header-title">
                  <span>مستشار المسارات المهنية</span>
                </h4>
                <span className="ai-header-status">
                  <span className="ai-status-pulse" />
                  <span>دليل توجيهي للمسارات والمقابلات</span>
                </span>
              </div>
            </div>

            <div className="ai-header-actions">
              <button
                className="ai-header-btn"
                onClick={handleClearChat}
                title="مسح المحادثة والبدء من جديد"
                aria-label="مسح المحادثة"
              >
                🗑️
              </button>
              <button
                className="ai-header-btn"
                onClick={() => setIsOpen(false)}
                title="إغلاق النافذة"
                aria-label="إغلاق"
              >
                ✕
              </button>
            </div>
          </div>

          {/* شريط الأسئلة السريعة المقترحة */}
          <div className="ai-chips-bar">
            {QUICK_PROMPTS.map((qp, idx) => (
              <button
                key={idx}
                className="ai-chip-btn"
                onClick={() => handleSend(qp.query)}
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* قائمة الرسائل */}
          <div className="ai-messages-list">
            {messages.map((m) => (
              <div key={m.id} className={`ai-message-row ${m.sender}`}>
                <div className="ai-msg-avatar">
                  {m.sender === "ai" ? "🧭" : currentUser?.avatar || "👨‍🔬"}
                </div>
                <div className="ai-msg-bubble">
                  <div className="ai-msg-text">
                    {(m.text || "").split("\n\n").map((para, pIdx) => (
                      <p key={pIdx}>
                        {para.split("\n").map((line, lIdx) => (
                          <span key={lIdx}>
                            {line.startsWith("* ") || line.startsWith("- ") ? (
                              <span style={{ display: "block", margin: "2px 0" }}>
                                • {line.substring(2)}
                              </span>
                            ) : line.match(/^\d+\.\s/) ? (
                              <span style={{ display: "block", margin: "4px 0" }}>
                                {line}
                              </span>
                            ) : (
                              line
                            )}
                            {lIdx < para.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>

                  {/* أزرار الانتقال والإجراءات السريعة المقترحة من الـ AI */}
                  {m.actions && m.actions.length > 0 && (
                    <div className="ai-msg-actions">
                      {m.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          type="button"
                          className="ai-action-link-btn"
                          onClick={() => handleActionClick(act)}
                        >
                          <span>{act.icon || "↗"}</span>
                          <span>{act.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ai-message-row ai">
                <div className="ai-msg-avatar">🤖</div>
                <div className="ai-msg-bubble" style={{ padding: "8px 14px" }}>
                  <div className="typing-dots">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* شريط كتابة السؤال السفلي */}
          <div className="ai-chat-input-bar">
            <input
              ref={inputRef}
              type="text"
              className="ai-chat-input"
              placeholder="اكتب سؤالك.. مثلاً: عايز أبدأ في HYSYS، بجهز لإنترفيو..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="سؤال للمستشار الذكي"
            />
            <button
              className="ai-send-btn"
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              title="إرسال السؤال"
              aria-label="إرسال"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: "rotate(180deg)" }}
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
