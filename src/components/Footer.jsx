import { MailIcon } from './icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>© 2026 Primecode Studio, Inc. All rights reserved.</div>
        <div className="footer-links">
          <a href="mailto:chay.moalem@gmail.com">
            <MailIcon /> chay.moalem@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
