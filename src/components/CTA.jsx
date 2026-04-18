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
            Call us to discuss your project goals, timeline, and next steps. We are happy to give
            practical guidance and help you decide the best way forward.
          </p>
          <a
            href="tel:+972543456305"
            className="btn btn-accent"
            style={{ padding: '16px 26px', fontSize: 16 }}
          >
            call us
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
