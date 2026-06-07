export function ScrollTopBtn({ showScrollTop, scrollToTop }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
        opacity: showScrollTop ? 1 : 0,
        pointerEvents: showScrollTop ? "auto" : "none",
        transform: showScrollTop ? "translateY(0)" : "translateY(20px) scale(0.8)",
        transition: "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
        </svg>
      </button>
    </div>
  );
}
