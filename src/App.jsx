import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import Cases from './components/Cases.jsx';
import Process from './components/Process.jsx';
import Testimonial from './components/Testimonial.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  useReveal();

  // animate stat counters once visible
  useEffect(() => {
    const els = document.querySelectorAll('[data-count]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const dur = 1200;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Cases />
      <Process />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
