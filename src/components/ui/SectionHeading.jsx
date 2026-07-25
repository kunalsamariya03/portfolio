export default function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-3 mb-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-blush/70 to-transparent" />
        <span className="text-[11px] tracking-[0.3em] uppercase text-blush-soft/70 font-mono">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-4xl sm:text-[2.75rem] font-medium text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
}
