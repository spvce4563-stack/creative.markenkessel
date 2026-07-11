import { withBrand, CONTACT_EMAIL, MAILTO_ERSTGESPRAECH } from "../../config";

const POINTS = [
  "20 Minuten, telefonisch oder per Video",
  "Ehrliche Einschätzung — auch wenn wir nicht passen",
  "Konkrete Budget-Empfehlung für deinen Fall",
];

export default function FinalCta() {
  return (
    <section className="section final" id="kontakt">
      <span className="final__glow final__glow--1" aria-hidden="true" />
      <span className="final__glow final__glow--2" aria-hidden="true" />
      <div className="container final__inner">
        <h2 className="final__headline" data-reveal>
          Deine Konkurrenz testet schon. Höchste Zeit, dass dein Budget klüger
          arbeitet.
        </h2>
        <p className="final__subline" data-reveal>
          {withBrand(
            "Kostenloses Erstgespräch — 20 Minuten, unverbindlich. Wir schauen gemeinsam auf deine Ausgangslage und sagen dir ehrlich, ob und wie [MARKE] für dich funktioniert."
          )}
        </p>

        <ul className="final__points" data-reveal>
          {POINTS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <div className="final__actions" data-reveal>
          <a className="btn btn--lg" href={MAILTO_ERSTGESPRAECH}>
            Erstgespräch vereinbaren
          </a>
          <p className="final__mail">
            Oder direkt per E-Mail:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
