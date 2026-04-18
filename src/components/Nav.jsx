import { useEffect, useState } from 'react';
import { ArrowRight } from './icons.jsx';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#cases', label: 'Case Studies' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close menu on hash change
    const onHash = () => setOpen(false);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <header className={`nav ${open ? 'open' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="logo" aria-label="Primecode home">
          <span className="logo-mark" aria-hidden="true"></span>
          Primecode
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-accent nav-cta-mobile" onClick={() => setOpen(false)}>
            Get a Quote
          </a>
        </nav>
        <a href="#contact" className="btn btn-accent nav-cta-desktop">
          Get a Quote
          <ArrowRight />
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}
