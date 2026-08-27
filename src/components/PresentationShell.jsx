import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TOTAL_SECTIONS = 8;

export default function PresentationShell({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);

  // Track section visibility with Intersection Observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('.slide-section');
    sectionRefs.current = Array.from(sections);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [children]);

  const scrollToSection = useCallback((index) => {
    if (index < 0 || index >= TOTAL_SECTIONS) return;
    const section = sectionRefs.current[index];
    if (section && !isScrolling.current) {
      isScrolling.current = true;
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    }
  }, []);

  const goNext = useCallback(() => scrollToSection(activeIndex + 1), [activeIndex, scrollToSection]);
  const goPrev = useCallback(() => scrollToSection(activeIndex - 1), [activeIndex, scrollToSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const progressPercent = (activeIndex / (TOTAL_SECTIONS - 1)) * 100;

  return (
    <>
      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{ width: `${progressPercent}%` }}
      />

      {/* Dot Navigation */}
      <nav className="dot-nav" aria-label="Navigasi slide">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => (
          <button
            key={i}
            className={`dot-nav-item ${i === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToSection(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === activeIndex ? 'step' : undefined}
          />
        ))}
      </nav>

      {/* Navigation Arrows */}
      {activeIndex > 0 && (
        <button className="nav-arrow prev" onClick={goPrev} aria-label="Slide sebelumnya">
          <ChevronLeft size={24} />
        </button>
      )}
      {activeIndex < TOTAL_SECTIONS - 1 && (
        <button className="nav-arrow next" onClick={goNext} aria-label="Slide berikutnya">
          <ChevronRight size={24} />
        </button>
      )}

      {/* Section Counter */}
      <div className="section-counter">
        {String(activeIndex + 1).padStart(2, '0')} / {String(TOTAL_SECTIONS).padStart(2, '0')}
      </div>

      {/* Sections Container */}
      <main className="presentation-container" ref={containerRef}>
        {children}
      </main>
    </>
  );
}
