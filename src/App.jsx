import { useState, useEffect } from "react";
import "./App.css";

// Common UI Components
import { Lightbox } from "./components/common/Lightbox";
import { InquiryModal } from "./components/common/InquiryModal";

// Section Components
import { Preloader } from "./components/Preloader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Intro } from "./components/Intro";
import { GifFeature } from "./components/GifFeature";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";
import { ScrollTopBtn } from "./components/ScrollTopBtn";
import { CustomCursor } from "./components/CustomCursor";

export default function AdaniSpices() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorBig, setCursorBig] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Preloader loading progress counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Scroll triggers for navbar background and scroll-to-top button
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Custom cursor position updates
  useEffect(() => {
    const onMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Scroll to top on page mount/reload
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div style={{ background: "#0F0D0B", color: "#fff", fontFamily: "'DM Sans',sans-serif", overflowX: "hidden", minHeight: "100vh" }}>
      
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* Custom Liquid Cursor */}
      <CustomCursor isLoading={isLoading} cursorBig={cursorBig} cursorPos={cursorPos} />

      {/* Preloader */}
      <Preloader isLoading={isLoading} progress={progress} />

      {/* Image/GIF Lightbox Zoom Overlay */}
      {lightbox && <Lightbox src={lightbox.src} label={lightbox.label} onClose={() => setLightbox(null)} />}

      {/* Inquiry Form Modal */}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />

      {/* Header Sticky Navigation */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} onInquiryClick={() => setInquiryOpen(true)} />

      {/* Page Sections */}
      <Hero setCursorBig={setCursorBig} setLightbox={setLightbox} />
      
      <Marquee />
      
      <Intro setCursorBig={setCursorBig} setLightbox={setLightbox} />
      
      <GifFeature setCursorBig={setCursorBig} setLightbox={setLightbox} />
      
      <Gallery setCursorBig={setCursorBig} setLightbox={setLightbox} />
      
      <Services />
      
      <CtaBanner />
      
      <Footer />

      {/* Floating Back to Top Button */}
      <ScrollTopBtn showScrollTop={showScrollTop} scrollToTop={scrollToTop} />

    </div>
  );
}