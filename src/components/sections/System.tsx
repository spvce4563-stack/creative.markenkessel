import { withBrand } from "../../config";
import { IconLayers, IconShuffle, IconChart, IconTarget } from "../Icons";

const STEPS = [
  {
    icon: IconLayers,
    title: "Produzieren",
    body: "Jeden Monat entsteht ein Set frischer Static Ads — in deinem Corporate Design, mit deinen Produkten, in mehreren Bild- und Botschafts-Varianten.",
  },
  {
    icon: IconShuffle,
    title: "Testen",
    body: "Die Anzeigen laufen in deinem Werbekonto. Durch das Volumen entsteht echtes Creative-Testing statt Bauchgefühl.",
  },
  {
    icon: IconChart,
    title: "Auswerten",
    body: "Die Performance-Daten aus deinem Ads Manager fließen zurück in unser System: Welche Motive, Botschaften und Stile bringen Ergebnisse — welche nicht.",
  },
  {
    icon: IconTarget,
    title: "Anpassen",
    body: "Der Output des nächsten Monats baut auf den Gewinnern auf. Verlierer-Richtungen fliegen raus. Dazu bekommst du konkrete Handlungsempfehlungen für dein Budget: wo erhöhen, wo abschalten.",
  },
];

export default function System() {
  return (
    <section className="section section--alt system" id="system">
      <div className="container">
        <div className="system__head">
          <p className="eyebrow" data-reveal>
            {withBrand("Das [MARKE]-System")}
          </p>
          <h2 className="section-title" data-reveal>
            Ein Kreislauf, der aus jedem Euro Werbebudget lernt.
          </h2>
          <p className="lede" data-reveal>
            {withBrand(
              "Erfolgreiche Werbeanzeigen entstehen nicht durch Geschmack, sondern durch Testen. Große Marken testen dutzende Varianten, bevor sie skalieren — kleine Betriebe konnten sich das bisher nicht leisten. [MARKE] ändert das: Unser System produziert Anzeigen-Varianten in einem Volumen, das manuelle Produktion in dieser Form nicht erreicht, und nutzt die echten Ergebnisse aus deinem Werbekonto, um den nächsten Monat gezielter zu machen."
            )}
          </p>
        </div>

        <ol className="loop">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                className="loop__step"
                data-reveal
                data-tilt
                style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                key={s.title}
              >
                <div className="loop__top">
                  <span className="loop__icon">
                    <Icon className="icon" />
                  </span>
                  <span className="loop__index">0{i + 1}</span>
                </div>
                <h3 className="loop__title">{s.title}</h3>
                <p className="loop__body">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <span className="loop__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <p className="system__closer" data-reveal>
          Monat für Monat wird das System präziser — und deine Anzeigen werden es
          auch.
        </p>
      </div>
    </section>
  );
}
