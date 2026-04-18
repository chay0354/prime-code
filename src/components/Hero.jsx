import { ArrowRight } from './icons.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="wrap hero-inner">
        <div className="hero-eyebrow-row reveal">
          <span className="pill">
            <span className="dot"></span> Now booking Q3 2026 engagements
          </span>
          <span className="trust-label">Tel Aviv, Israel</span>
        </div>

        <h1 className="reveal" data-delay="1">
          We build software that <em>scales</em> your business.
        </h1>
        <p className="hero-sub reveal" data-delay="2">
          Primecode is a senior engineering partner for startups and enterprises worldwide.
          For years we've shipped mission-critical platforms — zero missed launches,
          and product teams that stay with us past year three.
        </p>
        <div className="hero-ctas reveal" data-delay="3">
          <a href="#contact" className="btn btn-primary">
            Start a Project
            <ArrowRight />
          </a>
          <a href="#cases" className="btn btn-ghost">
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
