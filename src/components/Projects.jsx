import { Github, ExternalLink, Code2, Globe } from "lucide-react";
import GlassPanel from "./ui/GlassPanel.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { PROJECTS } from "../data.js";
import socialImg from "../assets/social-media.jpg";
import droneImg from "../assets/objectdetector-drone.jpg";
import ventilatorImg from "../assets/ventilator-img.jpg";
import chessImg from "../assets/queen.webp";

const IMAGES = { social: socialImg, drone: droneImg, ventilator: ventilatorImg, chess: chessImg };

function ProjectCard({ project }) {
  const image = project.image ? IMAGES[project.image] : null;
  const isDemoAvailable = Boolean(project.links.demo);

  return (
    <GlassPanel className="overflow-hidden group flex flex-col hover:border-blush/40 hover:shadow-glow transition-all duration-300 relative cursor-pointer">
      {/* 🔽 Main Card Direct Link Overlay 🔽 */}
      {isDemoAvailable && (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.title}`}
          className="absolute inset-0 z-10"
        />
      )}

      {/* Card Header Image/Icon */}
      <div className="relative h-44 overflow-hidden bg-navy-deep/60">
        {image ? (
          <img
            src={image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-navy-deep/40 group-hover:bg-navy-deep/20 transition-colors">
            <Code2 className="text-slate-600 group-hover:text-blush-soft/70 transition-colors" size={38} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
        <span className="absolute top-3 right-3 font-display text-3xl text-white/20 select-none">
          {project.index}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 z-20 pointer-events-none">
        <p className="text-[11px] tracking-widest uppercase text-blush-soft/70 mb-1.5 font-mono">
          {project.subtitle}
        </p>
        <h3 className="font-display text-white text-xl mb-2.5 group-hover:text-blush-soft transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 font-light">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-1 rounded-lg bg-blush/[0.06] border border-blush/15 text-blush-soft/80"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom Action Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 pointer-events-auto">
          {/* GitHub Link */}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} // Card click override avoid karne ke liye
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-blush-soft transition-colors relative z-30"
            >
              <Github size={14} /> Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
              <Github size={14} /> Private
            </span>
          )}

          {/* Dynamic View / Live Demo Button */}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-blush/10 border border-blush/30 text-blush-soft hover:bg-blush/20 hover:scale-105 transition-all relative z-30"
            >
              <ExternalLink size={13} /> View Live App
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
              <Globe size={14} /> In Progress
            </span>
          )}
        </div>
      </div>
    </GlassPanel>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Selected Work" title="Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}