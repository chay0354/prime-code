import { ArrowRight } from './icons.jsx';

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="wrap cta-inner">
        <div className="reveal">
          <span className="eyebrow on-dark">04 — Let's talk</span>
          <h2 style={{ marginTop: 22 }}>
            Let's talk about
            <br />
            <em>your project.</em>
          </h2>
        </div>
        <div className="cta-side reveal" data-delay="1">
          <p>
            Tell us what you're building. We'll respond within one business day with honest
            feedback and, if it's a fit, a proposal within the week.
          </p>
          <a href="#" className="btn btn-accent" style={{ padding: '16px 26px', fontSize: 16 }}>
            Book a Free Call
            <ArrowRight />
          </a>
          <div className="cta-meta">
            <div>
              <b>45 min</b>No sales pitch
            </div>
            <div>
              <b>1 business day</b>Response time
            </div>
            <div>
              <b>NDA friendly</b>On request
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
