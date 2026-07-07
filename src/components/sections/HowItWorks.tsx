import { IconUpload, IconSpark, IconRocket, IconRefresh } from "../Icons";

const STEPS = [
  {
    icon: IconUpload,
    label: "Onboarding (einmalig)",
    body: "Du gibst uns dein Logo, Corporate Design und Produktbilder — und den Zugang zu deinem Werbekonto (z. B. Meta Ads Manager). Mehr brauchen wir nicht von dir.",
  },
  {
    icon: IconSpark,
    label: "Erstes Ad-Set",
    body: "Wir richten dein Marken-Profil im System ein und produzieren dein erstes Monats-Set an Static Ads, abgestimmt auf deine Ziele.",
  },
  {
    icon: IconRocket,
    label: "Kampagnenstart",
    body: "Die Anzeigen laufen in deinem Konto. Das Werbebudget bleibt bei dir und geht direkt an die Plattform — wir verdienen nichts daran mit.",
  },
  {
    icon: IconRefresh,
    label: "Monatlicher Rhythmus",
    body: "Jeden Monat: neues Ad-Set auf Basis der Ergebnisse, Auswertung, konkrete Empfehlungen für dein Budget. Du entscheidest, wir liefern.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section how" id="ablauf">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Von der Unterschrift zur ersten Anzeige in unter zwei Wochen.
        </h2>

        <div className="how__grid">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                className="how__step"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                key={s.label}
              >
                <div className="how__marker">
                  <span className="how__step-num">Schritt {i + 1}</span>
                  <span className="how__icon">
                    <Icon className="icon" />
                  </span>
                </div>
                <h3 className="how__label">{s.label}</h3>
                <p className="how__body">{s.body}</p>
              </article>
            );
          })}
        </div>

        <p className="how__note" data-reveal>
          <strong>Dein Aufwand nach dem Onboarding:</strong> eine kurze Freigabe
          pro Monat. Das war’s.
        </p>
      </div>
    </section>
  );
}
