export default function Stats() {
  return (
    <section className="stats" style={{ padding: 0 }}>
      <div className="wrap" style={{ padding: 0 }}>
        <div className="stats-grid">
          <div className="stat reveal">
            <div className="stat-num">
              <span className="sym">+</span>
              <span data-count="50">0</span>
            </div>
            <div className="stat-label">
              Projects delivered across finance, health, and B2B SaaS
            </div>
          </div>
          <div className="stat reveal" data-delay="1">
            <div className="stat-num">
              <span className="sym">$</span>
              <span data-count="10">0</span>
              <span style={{ color: 'var(--accent)' }}>M+</span>
            </div>
            <div className="stat-label">
              In measurable client revenue generated from shipped product
            </div>
          </div>
          <div className="stat reveal" data-delay="2">
            <div className="stat-num">
              <span data-count="25">0</span>
              <span className="sym">+</span>
            </div>
            <div className="stat-label">
              Enterprise &amp; Fortune-listed companies trust Primecode in production
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
