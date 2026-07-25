export default function GlassPanel({ children, className = "", ...rest }) {
  return (
    <div
      className={
        "bg-navy-panel/40 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl " +
        className
      }
      {...rest}
    >
      {children}
    </div>
  );
}
