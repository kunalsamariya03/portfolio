import { Trophy } from "lucide-react";
import GlassPanel from "./ui/GlassPanel.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { TIMELINE } from "../data.js";

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Track Record" title="Hackathons & Achievements" />
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-blush/50 via-white/10 to-transparent" />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-blush shadow-[0_0_14px_2px_rgba(244,114,182,0.5)]" />
                <GlassPanel className="p-5 sm:p-6 hover:border-blush/30 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-white text-lg">{item.title}</h3>
                    <span className="flex items-center gap-1.5 text-xs text-blush-soft/80 font-mono">
                      <Trophy size={13} /> {item.year}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {item.detail}
                  </p>
                </GlassPanel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
