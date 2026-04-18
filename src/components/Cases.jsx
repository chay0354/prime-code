const MediaFintech = () => (
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="p1" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="400" height="300" fill="#0A1628" />
    <rect width="400" height="300" fill="url(#p1)" />
    <g transform="translate(40,60)">
      <rect x="0" y="0" width="320" height="1" fill="rgba(234,179,120,0.5)" />
      <polyline
        points="0,120 40,110 80,118 120,90 160,95 200,70 240,75 280,45 320,50"
        fill="none"
        stroke="oklch(0.82 0.09 68)"
        strokeWidth="2"
      />
      <circle cx="320" cy="50" r="4" fill="oklch(0.82 0.09 68)" />
      <text x="0" y="170" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="10">
        ARR · T-12M
      </text>
    </g>
  </svg>
);

const MediaHealth = () => (
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="p2" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1" fill="rgba(255,255,255,0.12)" />
      </pattern>
    </defs>
    <rect width="400" height="300" fill="#0E1C33" />
    <rect width="400" height="300" fill="url(#p2)" />
    <g transform="translate(60,70)" stroke="oklch(0.82 0.09 68)" fill="none" strokeWidth="1.5">
      <rect x="0" y="0" width="280" height="160" rx="6" stroke="rgba(255,255,255,0.2)" />
      <rect x="16" y="20" width="80" height="8" rx="2" fill="rgba(255,255,255,0.14)" stroke="none" />
      <rect x="16" y="40" width="200" height="6" rx="2" fill="rgba(255,255,255,0.08)" stroke="none" />
      <rect x="16" y="54" width="140" height="6" rx="2" fill="rgba(255,255,255,0.08)" stroke="none" />
      <rect x="16" y="80" width="110" height="50" rx="4" stroke="oklch(0.82 0.09 68)" />
      <rect x="138" y="80" width="110" height="50" rx="4" stroke="rgba(255,255,255,0.25)" />
    </g>
  </svg>
);

const MediaSaas = () => (
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="p3" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 0 24 L 24 0" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="400" height="300" fill="#0A1628" />
    <rect width="400" height="300" fill="url(#p3)" />
    <g transform="translate(70,80)">
      <rect x="0" y="80" width="36" height="60" fill="rgba(255,255,255,0.18)" />
      <rect x="52" y="50" width="36" height="90" fill="rgba(255,255,255,0.28)" />
      <rect x="104" y="70" width="36" height="70" fill="rgba(255,255,255,0.22)" />
      <rect x="156" y="20" width="36" height="120" fill="oklch(0.82 0.09 68)" />
      <rect x="208" y="40" width="36" height="100" fill="rgba(255,255,255,0.3)" />
      <line x1="0" y1="140" x2="260" y2="140" stroke="rgba(255,255,255,0.3)" />
    </g>
  </svg>
);

const cases = [
  {
    tag: 'Fintech',
    Media: MediaFintech,
    title: 'Ledgerbloom — Realtime treasury dashboard',
    desc: 'Rebuilt a slow, legacy treasury console into a real-time multi-account cash-flow platform used by CFOs at 40+ portfolio companies.',
    result: 'Raised $3M seed, 10 weeks post-launch',
  },
  {
    tag: 'Healthcare',
    Media: MediaHealth,
    title: 'Hearthside Clinical — Provider scheduling suite',
    desc: 'HIPAA-compliant scheduling platform replacing a fax-and-spreadsheet workflow across 22 specialty clinics in the Midwest.',
    result: '62% reduction in no-shows',
  },
  {
    tag: 'B2B SaaS',
    Media: MediaSaas,
    title: 'Quillmark — Contract analytics for legal ops',
    desc: 'Document-parsing AI platform that flags risky clauses across thousands of contracts in minutes, built for a Fortune 500 legal team.',
    result: '$2.4M annual ops savings',
  },
];

export default function Cases() {
  return (
    <section id="cases" className="cases">
      <div className="wrap">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">02 — Case Studies</span>
            <h2 style={{ marginTop: 20 }}>
              Work that moved
              <br />
              the business.
            </h2>
          </div>
          <p className="reveal" data-delay="1">
            A cross-section of recent engagements. Names are on request under NDA — outcomes are
            what matter.
          </p>
        </div>

        <div className="cases-grid">
          {cases.map((c, i) => (
            <article key={c.title} className="case reveal" data-delay={i || undefined}>
              <div className="case-media">
                <span className="case-tag">{c.tag}</span>
                <c.Media />
              </div>
              <div className="case-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="result">
                  <span className="arrow">↗</span> {c.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
