import { BRAND, DIVISION, CONTACT_EMAIL, CONTACT_PHONE } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__mark" aria-hidden="true" />
          <span>{BRAND}</span>
          <span className="nav__brand-sub">{DIVISION}</span>
        </div>

        <nav className="footer__links" aria-label="Rechtliches">
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          {CONTACT_PHONE && <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>}
        </div>
      </div>

      <div className="container footer__legal">
        <span>
          © {new Date().getFullYear()} {BRAND}. Alle Rechte vorbehalten.
        </span>
        <span className="footer__b2b">
          Angebot richtet sich ausschließlich an Unternehmer i. S. d. § 14
          BGB. Alle Preise zzgl. USt.
        </span>
      </div>
    </footer>
  );
}
