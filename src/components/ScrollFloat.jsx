import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  animationDuration = 1.2,
  ease = 'power3.out',
  scrollStart = 'top 85%',
  scrollEnd = 'bottom bottom',
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: animationDuration,
          ease: ease,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            toggleActions: 'play none none reverse',
            scrub: false,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd]);

  return (
    <div ref={containerRef} className="scroll-float-section">
      {children}
    </div>
  );
};

export default ScrollFloat;
