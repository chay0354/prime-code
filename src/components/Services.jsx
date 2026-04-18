import { MvpIcon, EnterpriseIcon, AiIcon, SaasIcon } from './icons.jsx';

const services = [
  {
    n: '01',
    Icon: MvpIcon,
    title: 'MVP Development',
    desc: 'Get a credible product into customer hands in 10 – 14 weeks. We handle architecture, design, and shipping.',
    bullets: [
      'Product scoping & sprint planning',
      'Full-stack build (TypeScript / Rails)',
      'Launch & investor-ready metrics',
    ],
  },
  {
    n: '02',
    Icon: EnterpriseIcon,
    title: 'Enterprise Platforms',
    desc: 'Modernize legacy systems without the big-bang rewrite. SOC 2 friendly, audit-ready, built to outlast you.',
    bullets: ['Strangler-fig migrations', 'Internal tooling & admin', 'SSO, RBAC, audit trails'],
  },
  {
    n: '03',
    Icon: AiIcon,
    title: 'AI Integration',
    desc: 'Bring language models into real workflows — evaluated, guard-railed, and wired into your data with provenance.',
    bullets: [
      'RAG & agent architectures',
      'Eval harnesses & monitoring',
      'On-prem & private deployments',
    ],
  },
  {
    n: '04',
    Icon: SaasIcon,
    title: 'Custom SaaS',
    desc: 'Multi-tenant products built for scale from day one. Billing, auth, telemetry, and infra — solved.',
    bullets: [
      'Multi-tenant architecture',
      'Stripe billing & usage metering',
      'Observability from day one',
    ],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">01 — Services</span>
            <h2 style={{ marginTop: 20 }}>
              Engineering capacity,
              <br />
              at every stage.
            </h2>
          </div>
          <p className="reveal" data-delay="1">
            We plug into your team as a senior delivery partner — from zero-to-one validation
            through enterprise platform modernization. Every engagement is led by a principal
            engineer who stays on the project end to end.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.n} className="service reveal" data-delay={i || undefined}>
              <div className="svc-num">{s.n}</div>
              <div className="svc-icon">
                <s.Icon />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svc-list">
                {s.bullets.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
