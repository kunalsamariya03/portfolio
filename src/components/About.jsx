import { User } from "lucide-react";
import GlassPanel from "./ui/GlassPanel.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { PROFILE } from "../data.js";

const FOCUS_AREAS = [
  "Backend Development & APIs",
  "Robotics & Automation Systems",
  "Mechatronics & Sensor-Based Systems",
];

export default function About() {
  return (
    <section id="about" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="About" title="Objective" />
        <GlassPanel className="p-8 sm:p-12 grid md:grid-cols-[1.4fr_1fr] gap-10 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)" }}
          />
          <div className="relative">
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
              Electronics &amp; Communication Engineering undergraduate with a strong technical
              foundation in Full-Stack Web Development, APIs, and Embedded/Sensor-based
              Automation. Passionate about building scalable MERN-stack applications, real-time
              communication systems, and smart mechanical-electronic integrations.
            </p>
            <div className="mt-9 flex items-start gap-3 text-sm text-slate-300">
              <span className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                <User size={15} className="text-blush" />
              </span>
              <div>
                <p className="text-white font-medium">B.Tech, Electronics &amp; Communication Engineering</p>
                <p className="text-slate-500 text-sm mt-0.5">
                  {PROFILE.college} — {PROFILE.year} — CGPA {PROFILE.cgpa}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3 relative">
            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-mono mb-2">
              Focus Areas
            </p>
            {FOCUS_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blush/30 hover:bg-white/[0.045] transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blush flex-shrink-0" />
                <span className="text-sm text-slate-300">{area}</span>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
