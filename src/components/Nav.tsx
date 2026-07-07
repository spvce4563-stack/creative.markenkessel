import { BRAND, DIVISION } from "../config";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top">
          <span className="nav__mark" aria-hidden="true" />
          <span className="nav__brand-name">{BRAND}</span>
          <span className="nav__brand-sub">{DIVISION}</span>
        </a>
        <nav className="nav__links" aria-label="Seitennavigation">
          <a href="#system">System</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#preise">Preise</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn nav__cta" href="#kontakt">
          Erstgespräch
        </a>
      </div>
    </header>
  );
}
