import { CheckIcon } from './icons.jsx';

export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="wrap">
        <div className="quote-card reveal">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <p className="quote-text">
            Primecode felt less like a vendor and more like the engineering team we wished we'd
            hired. They delivered a production platform in one quarter that our previous agency
            couldn't finish in a year — and the code is so clean our own engineers picked it up in
            a week.
          </p>
          <div className="quote-person">
            <div className="verified-mark" aria-hidden="true">
              <CheckIcon />
            </div>
            <div>
              <div className="quote-name">CEO, Series B fintech platform</div>
              <div className="quote-title">Verified client · name withheld under NDA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
