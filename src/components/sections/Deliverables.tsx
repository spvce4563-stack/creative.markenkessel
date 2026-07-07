import { IconLayers, IconShuffle, IconChart, IconTarget, IconRefresh, IconCalendar } from "../Icons";

const ITEMS = [
  {
    icon: IconLayers,
    title: "Fertige Static Ads",
    body: "In deinem Corporate Design — startklar für Meta & Co.",
  },
  {
    icon: IconShuffle,
    title: "Mehrere Varianten pro Motiv",
    body: "Unterschiedliche Bilder, Botschaften und Aufbauten für echtes Testing.",
  },
  {
    icon: IconChart,
    title: "Performance-Auswertung",
    body: "Deiner laufenden Anzeigen auf Basis der Ads-Manager-Daten.",
  },
  {
    icon: IconTarget,
    title: "Handlungsempfehlungen fürs Media Buying",
    body: "Verständlich, konkret, ohne Fachchinesisch: was hochdrehen, was stoppen.",
  },
  {
    icon: IconRefresh,
    title: "Lernender Output",
    body: "Jedes Monats-Set baut auf den Gewinnern des Vormonats auf.",
  },
  {
    icon: IconCalendar,
    title: "Monatlich kündbar",
    body: "Wir binden dich über Ergebnisse, nicht über Verträge.",
  },
];

export default function Deliverables() {
  return (
    <section className="section section--alt deliver" id="leistungen">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Alles drin, was Anzeigen zum Laufen bringt.
        </h2>

        <div className="deliver__grid">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <article
                className="deliver__item"
                data-reveal
                data-tilt
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
                key={it.title}
              >
                <span className="deliver__icon">
                  <Icon className="icon" />
                </span>
                <h3 className="deliver__title">{it.title}</h3>
                <p className="deliver__body">{it.body}</p>
              </article>
            );
          })}
        </div>

        <p className="deliver__note" data-reveal>
          Das Schalten der Kampagnen bleibt in deiner Hand bzw. bei deinem
          bisherigen Dienstleister — du bekommst von uns die Munition und den
          Plan.
        </p>
      </div>
    </section>
  );
}
