"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoContent = {
  badge: { en: "Book a Demo", ar: "احجز عرضاً تجريبياً" },
  headline: {
    en: "See URIMPACT in Action",
    ar: "شاهد يوريمباكت في العمل",
  },
  sub: {
    en: "Fill in the form below and our team will reach out within 24 hours to schedule a personalized demo tailored to your organization's sustainability goals.",
    ar: "أدخل بياناتك أدناه وسيتواصل معك فريقنا خلال 24 ساعة لجدولة عرض تجريبي مخصص لأهداف الاستدامة في مؤسستك.",
  },
  form: {
    name: { en: "Full Name", ar: "الاسم الكامل" },
    namePlaceholder: { en: "Ahmed Al-Rashid", ar: "أحمد الراشد" },
    email: { en: "Work Email", ar: "البريد الإلكتروني للعمل" },
    emailPlaceholder: { en: "ahmed@company.com", ar: "ahmed@company.com" },
    message: { en: "Message", ar: "الرسالة" },
    messagePlaceholder: {
      en: "Tell us about your organization and sustainability goals...",
      ar: "أخبرنا عن مؤسستك وأهداف الاستدامة الخاصة بك...",
    },
    submit: { en: "Request Your Demo", ar: "اطلب عرضك التجريبي" },
    submitting: { en: "Sending...", ar: "جارٍ الإرسال..." },
  },
  success: {
    title: { en: "We'll be in touch!", ar: "سنتواصل معك قريباً!" },
    body: {
      en: "Thank you for your interest in URIMPACT. Our team will contact you within 24 hours.",
      ar: "شكراً لاهتمامك بيوريمباكت. سيتواصل معك فريقنا خلال 24 ساعة.",
    },
  },
  features: [
    {
      icon: "🌿",
      title: {
        en: "GHG Emissions Tracking",
        ar: "تتبع انبعاثات الغازات الدفيئة",
      },
      desc: {
        en: "Scope 1, 2 & 3 automated measurement",
        ar: "قياس تلقائي للنطاق 1 و2 و3",
      },
    },
    {
      icon: "📊",
      title: { en: "ESG Reporting", ar: "تقارير ESG" },
      desc: {
        en: "GRI, IFRS S1/S2, ISO 14064 aligned",
        ar: "متوافق مع GRI و IFRS و ISO 14064",
      },
    },
    {
      icon: "🛰️",
      title: {
        en: "Satellite Forest Monitoring",
        ar: "مراقبة الغابات بالأقمار الاصطناعية",
      },
      desc: {
        en: "Daily verified tree data from space",
        ar: "بيانات الأشجار المتحقق منها يومياً من الفضاء",
      },
    },
    {
      icon: "🤖",
      title: { en: "AI-Powered Insights", ar: "رؤى مدعومة بالذكاء الاصطناعي" },
      desc: {
        en: "Actionable decarbonization roadmaps",
        ar: "خرائط طريق فعّالة لإزالة الكربون",
      },
    },
  ],
};

export default function BookDemoPage() {
  const { lang, t } = useLang();
  const isAr = lang === "ar";
  const c = demoContent;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim())
      newErrors.name = isAr ? "الاسم مطلوب" : "Name is required";
    if (!formData.email.trim())
      newErrors.email = isAr ? "البريد الإلكتروني مطلوب" : "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = isAr
        ? "بريد إلكتروني غير صحيح"
        : "Invalid email address";
    if (!formData.message.trim())
      newErrors.message = isAr ? "الرسالة مطلوبة" : "Message is required";
    return newErrors;
  };

  const handleSubmit = async () => {
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitting(false);
    setSubmitted(true);
    // Auto-dismiss toast after 6 seconds
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <>
      <Navbar />

      {/* Toast notification */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
          >
            <div className="flex items-start gap-4 px-5 py-4 rounded-2xl bg-[#0A1A14] border border-[#00E5A0]/30 shadow-[0_8px_40px_rgba(0,229,160,0.2)] backdrop-blur-xl">
              <div className="w-10 h-10 rounded-full bg-[#00E5A0]/15 border border-[#00E5A0]/30 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <motion.path
                    d="M5 13l4 4L19 7"
                    stroke="#00E5A0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">
                  {t(c.success.title)}
                </p>
                <p className="text-white/50 text-xs mt-0.5 leading-relaxed">
                  {t(c.success.body)}
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-white/30 hover:text-white transition-colors mt-0.5 flex-shrink-0"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-[#050D0A] pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isAr ? "direction-rtl" : ""}`}
          >
            {/* Left: Feature highlights */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p
                className={`text-[#00E5A0] text-sm font-semibold uppercase tracking-widest mb-6 ${isAr ? "text-right" : ""}`}
              >
                {isAr ? "ما ستشاهده في العرض" : "What you'll see in the demo"}
              </p>

              <div className="space-y-4">
                {c.features.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className={`flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-[#0A1A14]/60 hover:border-[#00E5A0]/20 hover:bg-[#0A1A14] transition-all duration-300 ${isAr ? "flex-row-reverse text-right" : ""}`}
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#00E5A0]/10 border border-[#00E5A0]/15 flex items-center justify-center text-xl shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">
                        {t(feat.title)}
                      </p>
                      <p className="text-white/40 text-sm">{t(feat.desc)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust badges */}
              <div
                className={`mt-10 pt-8 border-t border-white/5 ${isAr ? "text-right" : ""}`}
              >
                <p className="text-white/30 text-xs font-medium uppercase tracking-widest mb-4">
                  {isAr ? "متوافق مع" : "Compliant with"}
                </p>
                <div
                  className={`flex flex-wrap gap-2 ${isAr ? "justify-end" : ""}`}
                >
                  {[
                    "GRI",
                    "IFRS S1 & S2",
                    "GHG Protocol",
                    "ISO 14064",
                    "Vision 2030",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/3 text-white/40 text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form card */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative rounded-2xl border border-white/8 bg-[#0A1A14]/80 backdrop-blur-sm overflow-hidden">
                {/* Card glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00E5A0]/40 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-[#00E5A0]/5 blur-2xl" />

                <div className="relative z-10 p-8 lg:p-10">
                  <h2
                    className={`text-white text-2xl font-bold mb-2 ${isAr ? "text-right" : ""}`}
                  >
                    {isAr ? "ابدأ رحلتك معنا" : "Start Your Journey"}
                  </h2>
                  <p
                    className={`text-white/40 text-sm mb-8 ${isAr ? "text-right" : ""}`}
                  >
                    {isAr
                      ? "فريقنا سيتواصل معك خلال 24 ساعة"
                      : "Our team will get back to you within 24 hours."}
                  </p>

                  <div className="space-y-5">
                    {/* Name field */}
                    <div>
                      <label
                        className={`block text-white/60 text-sm font-medium mb-2 ${isAr ? "text-right" : ""}`}
                      >
                        {t(c.form.name)}{" "}
                        <span className="text-[#00E5A0]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t(c.form.namePlaceholder)}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/4 border ${
                          errors.name
                            ? "border-red-500/50"
                            : "border-white/10 focus:border-[#00E5A0]/50"
                        } text-white placeholder-white/20 text-sm outline-none transition-all duration-200 hover:border-white/20 ${isAr ? "text-right" : ""}`}
                      />
                      {errors.name && (
                        <p
                          className={`text-red-400 text-xs mt-1.5 ${isAr ? "text-right" : ""}`}
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label
                        className={`block text-white/60 text-sm font-medium mb-2 ${isAr ? "text-right" : ""}`}
                      >
                        {t(c.form.email)}{" "}
                        <span className="text-[#00E5A0]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={t(c.form.emailPlaceholder)}
                        dir="ltr"
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/4 border ${
                          errors.email
                            ? "border-red-500/50"
                            : "border-white/10 focus:border-[#00E5A0]/50"
                        } text-white placeholder-white/20 text-sm outline-none transition-all duration-200 hover:border-white/20 ${isAr ? "text-right" : ""}`}
                      />
                      {errors.email && (
                        <p
                          className={`text-red-400 text-xs mt-1.5 ${isAr ? "text-right" : ""}`}
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message field */}
                    <div>
                      <label
                        className={`block text-white/60 text-sm font-medium mb-2 ${isAr ? "text-right" : ""}`}
                      >
                        {t(c.form.message)}{" "}
                        <span className="text-[#00E5A0]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={t(c.form.messagePlaceholder)}
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/4 border ${
                          errors.message
                            ? "border-red-500/50"
                            : "border-white/10 focus:border-[#00E5A0]/50"
                        } text-white placeholder-white/20 text-sm outline-none transition-all duration-200 hover:border-white/20 resize-none ${isAr ? "text-right" : ""}`}
                      />
                      {errors.message && (
                        <p
                          className={`text-red-400 text-xs mt-1.5 ${isAr ? "text-right" : ""}`}
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="relative w-full py-4 rounded-xl bg-gradient-to-r from-[#00E5A0] to-[#00C2FF] text-[#050D0A] font-bold text-sm overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_40px_rgba(0,229,160,0.35)] transition-shadow duration-300"
                    >
                      <span
                        className={`flex items-center justify-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}
                      >
                        {submitting ? (
                          <>
                            <svg
                              className="animate-spin w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeOpacity="0.3"
                              />
                              <path
                                d="M12 2a10 10 0 0 1 10 10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>
                            {t(c.form.submitting)}
                          </>
                        ) : (
                          <>
                            {t(c.form.submit)}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              className={`transition-transform duration-200 group-hover:translate-x-1 ${isAr ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`}
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>

                    <p
                      className={`text-white/20 text-xs ${isAr ? "text-right" : "text-center"}`}
                    >
                      {isAr
                        ? "بتقديم النموذج، أنت توافق على سياسة الخصوصية الخاصة بنا"
                        : "By submitting, you agree to our Privacy Policy."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
