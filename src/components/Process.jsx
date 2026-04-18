import { ArrowRightThin } from './icons.jsx';

const steps = [
  {
    n: '01',
    title: 'Discovery Call',
    desc: 'A 45-minute working session to map goals, constraints, and success metrics. You leave with a one-page brief whether or not we continue.',
  },
  {
    n: '02',
    title: 'Proposal',
    desc: 'A scoped plan with a fixed timeline, team composition, and milestone-based pricing — delivered within 5 business days.',
  },
  {
    n: '03',
    title: 'Development',
    desc: 'Weekly demos, a shared Linear board, and a principal engineer on every standup. You ship software every week, not every quarter.',
  },
  {
    n: '04',
    title: 'Launch & Support',
    desc: "We don't disappear at go-live. 90-day hypercare is built in, plus optional retainers for ongoing platform work.",
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">03 — Process</span>
            <h2 style={{ marginTop: 20 }}>
              A predictable path
              <br />
              from idea to production.
            </h2>
          </div>
          <p className="reveal" data-delay="1">
            No surprises, no dark corners. Every engagement follows the same four-stage rhythm —
            you'll always know what's next and what we owe you by Friday.
          </p>
        </div>

        <div className="process-list">
          <div className="steps">
            {steps.map((s, i) => (
              <div key={s.n} className="step reveal" data-delay={i || undefined}>
                <div className="step-marker">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <ArrowRightThin className="arrow-next" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
