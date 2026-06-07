export function CustomCursor({ isLoading, cursorBig, cursorPos }) {
  if (isLoading) return null;
  return (
    <div
      className={`custom-cursor${cursorBig ? " big" : ""}`}
      style={{ left: cursorPos.x, top: cursorPos.y }}
    >
      {cursorBig === "view" && <span style={{ fontSize: "9px", fontWeight: "700", color: "#0F0D0B", letterSpacing: "0.05em" }}>VIEW</span>}
      {cursorBig === "zoom" && <span style={{ fontSize: "9px", fontWeight: "700", color: "#0F0D0B", letterSpacing: "0.05em" }}>ZOOM</span>}
    </div>
  );
}
