import { Github, Linkedin, Mail, ArrowUpRight, Download, MapPin } from "lucide-react";
import GlassPanel from "./ui/GlassPanel.jsx";
import avatar from "../assets/avatar.jpg";
import { PROFILE } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-32 pb-28 w-full overflow-hidden">
      <div
        className="pointer-events-none absolute -top-52 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl animate-pulse-slow"
        style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grain" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-blush-soft/80 border border-blush/25 bg-blush/5 rounded-full px-3.5 py-1.5 mb-7 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-blush animate-pulse" />
            Open to Full-Stack Roles
          </div>

          <h1 className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] font-medium text-white leading-[1.12] tracking-tight">
            Bridging{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blush-soft via-blush to-blush-dim">
              Full-Stack Web Apps
            </span>{" "}
            &amp; Smart{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blush-dim via-blush to-blush-soft">
              Embedded Systems
            </span>
            .
          </h1>
          <p className="mt-4 text-blush-soft/80 text-sm sm:text-base tracking-wide font-mono uppercase">
            MERN Stack Developer &amp; Electronics Undergraduate
          </p>

          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            I'm {PROFILE.name} — a {PROFILE.title} and {PROFILE.subtitle}. I build
            scalable MERN applications, real-time communication systems, and smart
            mechanical-electronic integrations.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blush text-navy-deep text-sm font-semibold hover:bg-blush-soft transition-colors shadow-glow"
            >
              View Projects <ArrowUpRight size={16} />
            </a>

            <a
              href="/resume.pdf"
              download={`${PROFILE.name.replace(/\s+/g, '_')}_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-panel/40 backdrop-blur-md border border-white/10 text-slate-200 text-sm font-medium hover:border-blush/40 hover:shadow-glow transition-all"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-11 flex items-center gap-4">
            {[
              [Github, PROFILE.github],
              [Linkedin, PROFILE.linkedin],
              [Mail, `mailto:${PROFILE.email}`],
            ].map(([Icon, href], i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group w-11 h-11 flex items-center justify-center rounded-xl bg-navy-panel/40 backdrop-blur-md border border-white/10 text-slate-300 hover:text-blush-soft hover:border-blush/40 hover:shadow-glow transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="flex items-center gap-1.5 text-xs text-slate-500 pl-2 font-mono">
              <MapPin size={13} /> {PROFILE.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-blush/20 animate-float-slow" />
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden group bg-navy-panel/40 backdrop-blur-md border border-white/10 shadow-2xl">
            <div className="absolute inset-0 rounded-[2rem] border border-blush/20 group-hover:border-blush/40 transition-colors z-10" />
            <img
              src={avatar}
              alt={PROFILE.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
          </div>

          <GlassPanel className="absolute -bottom-6 -left-6 px-4 py-3 animate-float-slow" style={{ animationDelay: "1s" }}>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">CGPA</p>
            <p className="font-display text-xl text-white">{PROFILE.cgpa}</p>
          </GlassPanel>
          <GlassPanel className="absolute -top-5 -right-5 px-4 py-3 animate-float-slow" style={{ animationDelay: "2s" }}>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">Hackathons</p>
            <p className="font-display text-xl text-white">4 Entries</p>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}