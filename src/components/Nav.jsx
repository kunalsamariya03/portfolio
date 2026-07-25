import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="font-display text-white font-medium tracking-tight text-lg sm:text-xl">
            Kunal <span className="text-pink-400">Samariya</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-300 hover:text-pink-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-300 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all font-medium"
          >
            Let's talk <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-slate-200 p-1"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden pb-5 flex flex-col gap-4 border-t border-white/10 pt-4">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-200 hover:text-pink-300 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-300 hover:bg-pink-500/20 transition-all font-medium mt-2"
            >
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}