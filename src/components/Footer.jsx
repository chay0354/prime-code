import { LinkedInIcon, MailIcon } from './icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>© 2026 Primecode Studio, Inc. All rights reserved.</div>
        <div className="footer-links">
          <a href="#" aria-label="LinkedIn">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="mailto:hello@primecode.studio">
            <MailIcon /> hello@primecode.studio
          </a>
        </div>
      </div>
    </footer>
  );
}
