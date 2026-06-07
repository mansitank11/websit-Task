import { useState, useRef } from "react";

export function TiltCard({ children, className = "", style = {}, onClick, onMouseEnter, onMouseLeave }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const rX = -(mouseY / (height / 2)) * 8;
    const rY = (mouseX / (width / 2)) * 8;
    setCoords({ x: rX, y: rY });
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(1.02, 1.02, 1.02)` : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "transform 0.05s ease-out, box-shadow 0.3s ease" : "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s",
        willChange: "transform",
        ...style
      }}
    >
      {children}
    </div>
  );
}
