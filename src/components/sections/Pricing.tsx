import { IconCheck, IconArrowRight } from "../Icons";
import { MAILTO_ERSTGESPRAECH, MAILTO_INDIVIDUELL } from "../../config";

interface Plan {
  name: string;
  price: string;
  cadence?: string;
  tagline: string;
  features: string[];
  featured?: boolean;
  cta: string;
  ctaHref: string;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "490 €",
    cadence: "/ Monat",
    tagline: "Für den Einstieg: sichtbar werden mit System.",
    features: [
      "8 Static Ads pro Monat",
      "2 Motiv-Richtungen mit Varianten",
      "Monatliche Performance-Auswertung",
      "Handlungsempfehlungen fürs Budget",
      "Monatlich kündbar",
    ],
    cta: "Erstgespräch vereinbaren",
    ctaHref: MAILTO_ERSTGESPRAECH,
  },
  {
    name: "Wachstum",
    price: "890 €",
    cadence: "/ Monat",
    tagline: "Für Betriebe, die es ernst meinen: echtes Creative-Testing.",
    features: [
      "16 Static Ads pro Monat",
      "4 Motiv-Richtungen mit Varianten",
      "Laufendes Creative-Testing auf Basis deiner Kampagnen-Daten",
      "Output wird monatlich an die Ergebnisse angepasst",
      "Priorisierte Bearbeitung",
      "Monatlich kündbar",
    ],
    featured: true,
    cta: "Erstgespräch vereinbaren",
    ctaHref: MAILTO_ERSTGESPRAECH,
  },
  {
    name: "Performance",
    price: "1.490 €",
    cadence: "/ Monat",
    tagline: "Für Betriebe mit ernsthaftem Werbebudget: maximale Testtiefe.",
    features: [
      "30+ Static Ads pro Monat",
      "Volles Varianten-Testing über Motive, Botschaften und Formate",
      "Enge Optimierungsschleife mit detaillierter Auswertung",
      "Ausführliche Media-Buying-Empfehlungen",
      "Monatlich kündbar",
    ],
    cta: "Erstgespräch vereinbaren",
    ctaHref: MAILTO_ERSTGESPRAECH,
  },
  {
    name: "Individuell",
    price: "auf Anfrage",
    tagline: "Für alles, was nicht in ein Paket passt.",
    features: [
      "Eigene Volumen",
      "Mehrere Marken, Filialen oder Standorte",
      "Sonderformate und Sonderwünsche",
    ],
    cta: "Individuelles Angebot anfragen",
    ctaHref: MAILTO_INDIVIDUELL,
  },
];

export default function Pricing() {
  return (
    <section className="section section--alt pricing" id="preise">
      <div className="container">
        <div className="pricing__head">
          <h2 className="section-title" data-reveal>
            Klare Pakete. Keine versteckten Kosten.
          </h2>
          <p className="lede" data-reveal>
            Alle Pakete monatlich kündbar. Einmaliges Onboarding: 490 €. Alle
            Preise — auch das Onboarding — zzgl. gesetzlicher Umsatzsteuer.
            Dein Werbebudget geht direkt an die Plattform und ist nicht Teil
            unserer Pakete.
          </p>
          <p className="pricing__note" data-reveal>
            Alle Angebote richten sich ausschließlich an Unternehmer im Sinne
            des § 14 BGB sowie an Gewerbetreibende, Freiberufler und
            juristische Personen (B2B). Ein Verkauf an Verbraucher erfolgt
            nicht. Alle Preise zzgl. gesetzlicher Umsatzsteuer.
          </p>
        </div>

        <div className="pricing__grid">
          {PLANS.map((p, i) => (
            <article
              className={`plan${p.featured ? " plan--featured" : ""}`}
              data-reveal
              data-tilt
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              key={p.name}
            >
              {p.featured && <span className="plan__flag">Unsere Empfehlung</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__price">
                {p.price}
                {p.cadence && <span className="plan__cadence">{p.cadence}</span>}
              </p>
              <p className="plan__tagline">{p.tagline}</p>
              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <IconCheck className="plan__check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                className={`btn plan__cta${p.featured ? "" : " btn--ghost"}`}
                href={p.ctaHref}
              >
                {p.cta}
                <IconArrowRight className="icon-sm" />
              </a>
            </article>
          ))}
        </div>

        <p className="pricing__foot" data-reveal>
          Nicht sicher, welches Paket passt? Im kostenlosen Erstgespräch finden
          wir es gemeinsam heraus — unverbindlich.
        </p>
      </div>
    </section>
  );
}
