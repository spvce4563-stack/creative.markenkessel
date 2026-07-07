const QA: { q: string; a: string }[] = [
  {
    q: "Sehen die Anzeigen aus wie „KI-Bilder“?",
    a: "Nein. Jede Anzeige entsteht in deinem Corporate Design, mit deinen Farben, Schriften und Produkten. Das System produziert Varianten deiner Marke — nicht generische Bilder. Und was nicht performt, fliegt automatisch aus dem Programm.",
  },
  {
    q: "Was muss ich liefern?",
    a: "Einmalig: Logo, Corporate Design, Produktbilder und den Zugang zu deinem Werbekonto. Danach nur noch eine kurze Freigabe pro Monat.",
  },
  {
    q: "Schaltet ihr die Anzeigen auch?",
    a: "Das Schalten bleibt bei dir oder deinem bisherigen Dienstleister. Du bekommst von uns die fertigen Anzeigen plus konkrete Empfehlungen, wie du dein Budget einsetzt. So behältst du die volle Kontrolle über dein Werbekonto und dein Geld.",
  },
  {
    q: "Wie schnell sehe ich Ergebnisse?",
    a: "Die ersten Anzeigen laufen innerhalb von zwei Wochen nach Onboarding. Der eigentliche Vorteil baut sich über die Monate auf: Mit jeder Runde weiß das System besser, was bei deiner Zielgruppe funktioniert.",
  },
  {
    q: "Wie viel Werbebudget brauche ich?",
    a: "Das Budget gehört dir und geht direkt an die Plattform. Für sinnvolles Testing empfehlen wir je nach Paket einen mittleren dreistelligen Betrag pro Monat aufwärts — im Erstgespräch rechnen wir das für deinen Fall konkret durch.",
  },
  {
    q: "Gibt es eine Vertragsbindung?",
    a: "Nein. Alle Pakete sind monatlich kündbar. Wir wollen, dass du bleibst, weil es funktioniert — nicht weil ein Vertrag dich zwingt.",
  },
  {
    q: "Für welche Branchen funktioniert das?",
    a: "Das System ist branchenunabhängig. Entscheidend ist nur, dass du Produkte oder Leistungen hast, die sich visuell zeigen lassen — vom Handwerk über Gastro bis Einzelhandel und Dienstleistung.",
  },
];

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Häufige Fragen
        </h2>

        <div className="faq__list">
          {QA.map((item, i) => (
            <details
              className="faq__item"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }}
              key={item.q}
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="faq__q">
                <span>{item.q}</span>
                <span className="faq__toggle" aria-hidden="true" />
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
