import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data.js";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-blush-soft transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-blush-soft transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-slate-500 hover:text-blush-soft transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
