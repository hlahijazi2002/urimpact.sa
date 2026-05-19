"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = {
  en: [
    "What is URIMPACT?",
    "How does GHG emissions tracking work?",
    "What ESG frameworks do you support?",
    "Tell me about your NBS solutions",
    "How can I book a demo?",
  ],
  ar: [
    "ما هو URIMPACT؟",
    "كيف يعمل تتبع انبعاثات الغازات الدفيئة؟",
    "ما هي معايير ESG التي تدعمونها؟",
    "أخبرني عن حلول NBS",
    "كيف أحجز عرضاً تجريبياً؟",
  ],
};

const UI = {
  title: { en: "URIMPACT Assistant", ar: "مساعد URIMPACT" },
  subtitle: { en: "Sustainability AI", ar: "ذكاء اصطناعي للاستدامة" },
  online: { en: "Online", ar: "متصل" },
  placeholder: {
    en: "Ask about sustainability...",
    ar: "اسألني عن الاستدامة...",
  },
  send: { en: "Send", ar: "إرسال" },
  typing: { en: "Typing...", ar: "يكتب..." },
  empty: {
    en: "Ask me anything about URIMPACT's sustainability platform.",
    ar: "اسألني أي شيء عن منصة URIMPACT للاستدامة.",
  },
  tooltip: { en: "💬 Ask about sustainability!", ar: "💬 اسأل عن الاستدامة!" },
};

export default function Chat() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const isAr = lang === "ar";
  const isDark = theme === "dark";

  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show tooltip after 4s if chat is closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    setShowSuggestions(false);
    setShowTooltip(false);

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      if (data.content) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.content },
        ]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const t = (obj: { en: string; ar: string }) => (isAr ? obj.ar : obj.en);

  // Theme classes
  const windowBg = isDark
    ? "bg-[#0A1A14] border-[#00E5A0]/15"
    : "bg-white border-gray-200";
  const headerBg = isDark
    ? "bg-[#0D2018] border-[#00E5A0]/10"
    : "bg-gray-50 border-gray-100";
  const bodyBg = isDark ? "bg-[#050D0A]" : "bg-gray-50";
  const inputBg = isDark
    ? "bg-[#0A1A14] border-[#00E5A0]/20 text-white placeholder-white/30 focus:border-[#00E5A0]/50"
    : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-[#00E5A0]/60";
  const userBubble =
    "bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A]";
  const aiBubble = isDark
    ? "bg-white/5 border border-white/10 text-white/85"
    : "bg-white border border-gray-200 text-gray-700";
  const closeBtnC = isDark
    ? "text-white/40 hover:text-white"
    : "text-gray-400 hover:text-gray-700";
  const suggBg = isDark
    ? "bg-white/5 border-white/10 text-white/60 hover:border-[#00E5A0]/40 hover:text-white"
    : "bg-gray-100 border-gray-200 text-gray-600 hover:border-[#00E5A0]/50 hover:text-gray-900";
  const emptyText = isDark ? "text-white/30" : "text-gray-400";
  const footerBg = isDark
    ? "bg-[#0D2018] border-[#00E5A0]/10"
    : "bg-gray-50 border-gray-100";

  return (
    <div
      className="fixed bottom-6 right-6 z-[999] flex flex-col items-end"
      dir="ltr"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={`mb-3 px-4 py-2 rounded-xl shadow-xl text-xs font-semibold border ${
              isDark
                ? "bg-[#0A1A14] text-[#00E5A0] border-[#00E5A0]/20"
                : "bg-white text-[#00796B] border-gray-200"
            }`}
          >
            {t(UI.tooltip)}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-4 w-[340px] h-[500px] rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden border ${windowBg}`}
            dir={isAr ? "rtl" : "ltr"}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between px-4 py-3 border-b ${headerBg}`}
            >
              <div className={`flex items-center gap-3 `}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dff5ee] to-[#c0e6f1] flex items-center justify-center text-sm flex-shrink-0">
                  <Image src="/logo.png" alt="logo" height={21} width={16} />
                </div>
                <div className={isAr ? "text-right" : ""}>
                  <p
                    className={`text-xs font-bold ${isDark ? "text-white" : "text-gray-800"}`}
                  >
                    {t(UI.title)}
                  </p>
                  <div
                    className={`flex items-center gap-1 ${isAr ? "flex-row-reverse justify-end" : ""}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" />
                    <span className="text-[9px] text-[#00E5A0] font-bold uppercase tracking-widest">
                      {t(UI.online)}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-1 transition-colors ${closeBtnC}`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className={`flex-1 overflow-y-auto p-4 space-y-3 ${bodyBg}`}
            >
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00E5A0]/20 to-[#00C2FF]/20 border border-[#00E5A0]/20 flex items-center justify-center text-2xl mb-3">
                    <Image src="/logo.png" alt="logo" height={28} width={23} />
                  </div>
                  <p className={`text-xs leading-relaxed ${emptyText}`}>
                    {t(UI.empty)}
                  </p>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl text-[13px] max-w-[85%] leading-relaxed ${
                      m.role === "user"
                        ? `${userBubble} rounded-tr-none`
                        : `${aiBubble} rounded-tl-none`
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div
                  className={`flex items-center gap-1.5 ${isAr ? "justify-end" : ""}`}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#00E5A0]"
                      style={{ animation: `bounce 1s infinite ${i * 0.15}s` }}
                    />
                  ))}
                </div>
              )}

              {/* Suggestions */}
              {showSuggestions && messages.length === 0 && (
                <div className="space-y-2 mt-2">
                  {SUGGESTIONS[isAr ? "ar" : "en"].map((s, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(s)}
                      className={`w-full text-left px-3 py-2 rounded-xl border text-[11px] transition-all ${suggBg} ${isAr ? "text-right" : ""}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className={`px-3 py-3 border-t ${footerBg}`}>
              <div className={`flex gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !e.shiftKey && sendMessage(input)
                  }
                  placeholder={t(UI.placeholder)}
                  dir={isAr ? "rtl" : "ltr"}
                  className={`flex-1 px-3 py-2 rounded-xl border text-xs outline-none transition-all ${inputBg}`}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={isLoading || !input.trim()}
                  className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] flex items-center justify-center flex-shrink-0 disabled:opacity-40 hover:shadow-[0_0_16px_rgba(0,229,160,0.4)] transition-shadow"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={isAr ? "rotate-180" : ""}
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00E5A0] to-[#00C2FF] text-[#050D0A] shadow-[0_8px_30px_rgba(0,229,160,0.4)] flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
}
