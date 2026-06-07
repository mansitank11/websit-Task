import { useState, useEffect, useRef } from "react";

export function ParallaxImg({ src, alt, speed = 0.15, className = "", style = {} }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const handler = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * speed);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [speed]);
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", ...style }}>
      <img
        src={src} alt={alt}
        style={{
          width: "100%", height: "110%", objectFit: "cover", display: "block",
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
          willChange: "transform",
        }}
      />
    </div>
  );
}
