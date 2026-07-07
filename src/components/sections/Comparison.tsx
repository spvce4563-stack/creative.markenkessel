import { BRAND } from "../../config";

const ROWS: { label: string; agency: string; employee: string; brand: string }[] = [
  {
    label: "Kosten pro Monat",
    agency: "1.500–5.000 €",
    employee: "3.000–4.500 € (geladen)",
    brand: "ab 490 €",
  },
  {
    label: "Neue Ad-Motive pro Monat",
    agency: "4–8",
    employee: "schwankend",
    brand: "8 bis 30+",
  },
  {
    label: "Creative-Testing",
    agency: "Aufpreis",
    employee: "selten systematisch",
    brand: "eingebaut",
  },
  {
    label: "Lernt aus deinen Kampagnen-Daten",
    agency: "manuell, träge",
    employee: "kaum",
    brand: "automatisch, jeden Monat",
  },
  {
    label: "Bindung",
    agency: "oft 6–12 Monate",
    employee: "Kündigungsfristen",
    brand: "monatlich kündbar",
  },
  {
    label: "Dein Zeitaufwand",
    agency: "Meetings, Abstimmungen",
    employee: "Führung, Einarbeitung",
    brand: "1 Freigabe/Monat",
  },
];

export default function Comparison() {
  return (
    <section className="section compare" id="vergleich">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Rechne es einfach durch.
        </h2>

        {/* Desktop: Tabelle */}
        <div className="compare__table-wrap" data-reveal>
          <table className="compare__table">
            <thead>
              <tr>
                <th className="compare__rowhead" scope="col"></th>
                <th scope="col">Agentur</th>
                <th scope="col">Eigener Mitarbeiter</th>
                <th scope="col" className="compare__brandcol">
                  {BRAND}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label}>
                  <th className="compare__rowhead" scope="row">
                    {r.label}
                  </th>
                  <td>{r.agency}</td>
                  <td>{r.employee}</td>
                  <td className="compare__brandcol">
                    <strong>{r.brand}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: gestapelte Karten */}
        <div className="compare__cards">
          {ROWS.map((r, i) => (
            <article
              className="compare__card"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              key={r.label}
            >
              <h3 className="compare__card-label">{r.label}</h3>
              <dl className="compare__card-rows">
                <div>
                  <dt>Agentur</dt>
                  <dd>{r.agency}</dd>
                </div>
                <div>
                  <dt>Mitarbeiter</dt>
                  <dd>{r.employee}</dd>
                </div>
                <div className="compare__card-brand">
                  <dt>{BRAND}</dt>
                  <dd>{r.brand}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
