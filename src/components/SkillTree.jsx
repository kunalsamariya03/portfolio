import { useState } from "react";
import { Cpu, Terminal, Code2, Radio, GitBranch } from "lucide-react";
import GlassPanel from "./ui/GlassPanel.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { SKILL_BRANCHES } from "../data.js";

const ICONS = {
  languages: Terminal,
  frontend: Code2,
  backend: Cpu,
  realtime: Radio,
  tools: GitBranch,
};

function BranchCard({ branch, active, setActive }) {
  const Icon = ICONS[branch.id] || Terminal;
  const isActive = active === branch.id;

  return (
    <div className="flex flex-col items-center relative">
      {/* Vertical Dashed Line connecting down to card */}
      <div className="w-px h-6 border-l border-dashed border-blush/40" />

      <GlassPanel
        onMouseEnter={() => setActive(branch.id)}
        onMouseLeave={() => setActive(null)}
        className={
          "w-full px-4 py-4 transition-all duration-300 cursor-default " +
          (isActive
            ? "border-blush/50 shadow-glow -translate-y-0.5"
            : "hover:border-blush/40 hover:shadow-glow")
        }
      >
        <div className="flex items-center gap-2 mb-3">
          <Icon size={15} className="text-blush flex-shrink-0" />
          <p className="text-white text-[11px] font-semibold tracking-wide uppercase font-mono">
            {branch.label}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {branch.nodes?.map((n) => (
            <span
              key={n}
              className="text-[11px] px-2 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 whitespace-nowrap"
            >
              {n}
            </span>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}

export default function SkillTree() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Skill Tree" title="Kunal's Core Tech Stack" />

        {/* Desktop / Tablet Grid Tree */}
        <div className="hidden sm:block">
          {/* Main Top Node */}
          <div className="flex justify-center">
            <GlassPanel className="px-7 py-5 border-blush/40 text-center min-w-[200px] shadow-glow relative z-10">
              <Cpu className="mx-auto mb-2 text-blush" size={22} />
              <p className="font-display text-white text-base leading-tight">
                Kunal's Core
                <br />
                Tech Stack
              </p>
            </GlassPanel>
          </div>

          {/* Tree Trunk Connection Line (Vertical Line down from Top Node) */}
          <div className="flex justify-center">
            <div className="w-px h-6 border-l border-dashed border-blush/40" />
          </div>

          {/* Connected Branches Container */}
          <div className="relative">
            {/* Horizontal Connecting Bar across all columns */}
            <div className="absolute top-0 left-[10%] right-[10%] border-t border-dashed border-blush/40" />

            {/* Grid Columns */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 items-start">
              {SKILL_BRANCHES.map((branch) => (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  active={active}
                  setActive={setActive}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stacked Tree */}
        <div className="sm:hidden space-y-5">
          <GlassPanel className="px-5 py-4 border-blush/30 flex items-center gap-2.5 w-fit">
            <Cpu size={18} className="text-blush" />
            <p className="font-display text-white text-base">Kunal's Core Tech Stack</p>
          </GlassPanel>
          {SKILL_BRANCHES.map((branch) => {
            const Icon = ICONS[branch.id] || Terminal;
            return (
              <div
                key={branch.id}
                className="relative pl-6 border-l border-dashed border-blush/30 ml-3"
              >
                <GlassPanel className="px-4 py-3.5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Icon size={15} className="text-blush" />
                    <p className="text-white text-[11px] font-semibold tracking-wide uppercase font-mono">
                      {branch.label}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {branch.nodes?.map((n) => (
                      <span
                        key={n}
                        className="text-[11px] px-2 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </GlassPanel>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}