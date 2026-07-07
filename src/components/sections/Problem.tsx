const CARDS = [
  {
    tag: "„Wir machen unsere Anzeigen selbst.“",
    body: "Zwischen Tagesgeschäft und Feierabend entsteht ab und zu eine Anzeige. Sie sieht okay aus, läuft ein paar Wochen — und niemand weiß, ob sie eigentlich funktioniert. Getestet wird nichts, weil die Zeit fehlt.",
  },
  {
    tag: "„Wir zahlen eine Agentur.“",
    body: "Vier bis acht neue Motive im Monat, dafür ein vierstelliger Betrag. Jede Änderung dauert, jede Extra-Variante kostet extra. Das Budget geht in Stunden statt in Ergebnisse.",
  },
  {
    tag: "„Wir schalten gar keine Ads.“",
    body: "Die Konkurrenz ist auf Instagram und Facebook sichtbar, ihr nicht. Ein eigener Social-Media-Mitarbeiter würde voll geladen 3.000 € und mehr im Monat kosten — dafür ist der Betrieb zu klein.",
  },
];

export default function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Kommt dir eine dieser Situationen bekannt vor?
        </h2>

        <div className="problem__grid">
          {CARDS.map((c, i) => (
            <article
              className="problem__card"
              data-reveal
              data-tilt
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              key={c.tag}
            >
              <span className="problem__num">{i + 1}</span>
              <h3 className="problem__tag">{c.tag}</h3>
              <p className="problem__body">{c.body}</p>
            </article>
          ))}
        </div>

        <p className="problem__bridge" data-reveal>
          Das Problem ist in allen drei Fällen dasselbe:{" "}
          <strong>
            Gute Ads brauchen viele getestete Varianten — und genau das ist
            manuell unbezahlbar.
          </strong>
        </p>
      </div>
    </section>
  );
}
