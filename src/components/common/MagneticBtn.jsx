import { useRef, useCallback } from "react";

export function MagneticBtn({ children, className = "", style = {}, onClick }) {
  const ref = useRef(null);
  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.3;
    const dy = (e.clientY - cy) * 0.3;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  }, []);
  return (
    <button
      ref={ref}
      className={className}
      style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)", ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
