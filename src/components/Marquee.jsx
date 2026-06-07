export function Marquee() {
  return (
    <div style={{ overflow: "hidden", padding: "28px 0", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="marquee-track">
        {[...Array(2)].flatMap((_, outerIdx) =>
          ["Creators of Taste", "·", "100% Pure & Natural", "·", "Rich Culinary Heritage", "·", "Aromatic Ground Spices", "·", "Authentic Blended Masalas", "·", "Traditional Pickles", "·"].map((t, i) => (
            <span key={`${t}-${outerIdx}-${i}`} className="marquee-item">{t}</span>
          ))
        )}
      </div>
    </div>
  );
}
