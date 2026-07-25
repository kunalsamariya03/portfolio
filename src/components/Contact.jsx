import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import GlassPanel from "./ui/GlassPanel.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { PROFILE } from "../data.js";
import socialImg from "../assets/project-social.jpg";

const inputClasses =
  "w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white " +
  "placeholder:text-slate-600 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 " +
  "transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // EmailJS ko message bhej rahe hain
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" }); // Form clear kar diya
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Message nahi bhej paye! Kripya dubara try karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Get In Touch" title="Let's build something." />
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6">
          <GlassPanel className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl hover:border-pink-500/30 transition-all flex flex-col justify-between gap-6">
            <div>
              {/* Image Banner Container */}
              <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-6 border border-white/10 group">
                <img
                  src={socialImg}
                  alt="Connect & Collaborate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                Open to full-stack opportunities, robotics collaborations, and interesting
                problems in general. Reach out directly or drop a message.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-pink-300 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-pink-400" />
                  </span>
                  <span className="truncate">{PROFILE.email}</span>
                </a>

                <a
                  href={`tel:${PROFILE.phone?.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-pink-300 transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={15} className="text-pink-400" />
                  </span>
                  <span>{PROFILE.phone}</span>
                </a>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-pink-400" />
                  </span>
                  <span>{PROFILE.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-pink-300 hover:border-pink-400/40 transition-all"
              >
                <Github size={16} />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-pink-300 hover:border-pink-400/40 transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </GlassPanel>

          <GlassPanel className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl hover:border-pink-500/30 transition-all">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-12 h-12 rounded-full bg-pink-400/10 border border-pink-400/30 flex items-center justify-center mb-4">
                  <Send size={18} className="text-pink-400" />
                </div>
                <p className="font-display text-white text-lg mb-1">Message Sent!</p>
                <p className="text-slate-400 text-sm max-w-xs font-light mb-4">
                  Aapka message mil gaya hai. Main jaldi hi aapko mail par reply karunga!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-pink-400 hover:underline"
                >
                  Ek aur message bhejein
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl">
                    {error}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 mb-1.5 block">Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 mb-1.5 block">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClasses}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1.5 block">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className={inputClasses + " resize-none"}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-400 text-slate-900 text-sm font-semibold hover:bg-pink-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_25px_-6px_rgba(244,114,182,0.7)] hover:shadow-[0_0_35px_-6px_rgba(244,114,182,0.9)] transition-all"
                >
                  {loading ? (
                    <>
                      Sending... <Loader2 size={14} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}