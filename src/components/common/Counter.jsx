import { useState, useEffect } from "react";
import { useFade } from "./Reveal";

export function Counter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useFade();
  useEffect(() => {
    if (!visible) return;
    let start = null;
    const num = parseInt(target, 10);
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);
  return (
    <span ref={ref} style={{ display: "inline-block" }}>
      {count}{suffix}
    </span>
  );
}
