import { BRAND, DIVISION, CONTACT_EMAIL } from "../../config";

type Props = { kind: "impressum" | "datenschutz" };

const TITLES: Record<Props["kind"], string> = {
  impressum: "Impressum",
  datenschutz: "Datenschutzerklärung",
};

export default function LegalPage({ kind }: Props) {
  return (
    <main className="legal">
      <div className="container legal__inner">
        <a className="legal__back" href="#top">
          ← Zurück zur Startseite
        </a>
        <h1 className="legal__title">{TITLES[kind]}</h1>

        {kind === "impressum" && (
          <div className="legal__body">
            <p className="legal__lead">Angaben gemäß § 5 DDG.</p>

            <h2>Diensteanbieter</h2>
            <p>
              Jonas Schweizer
              <br />
              {BRAND} {DIVISION}
              <br />
              Schwabstraße 47
              <br />
              70197 Stuttgart
              <br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>

            <h2>Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
            <p>
              Jonas Schweizer
              <br />
              Schwabstraße 47, 70197 Stuttgart
            </p>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält gegebenenfalls Links zu externen Websites
              Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge
              Dritter sind als solche gekennzeichnet.
            </p>
          </div>
        )}

        {kind === "datenschutz" && (
          <div className="legal__body">
            <p className="legal__lead">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß
              Art. 13 DSGVO beim Besuch dieser Website.
            </p>

            <h2>1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Jonas Schweizer
              <br />
              {BRAND} {DIVISION}
              <br />
              Schwabstraße 47
              <br />
              70197 Stuttgart
              <br />
              E-Mail:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>
              Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Vercel
              Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA). Beim Aufruf der
              Website erhebt der Hoster automatisch sogenannte Server-Log-Dateien,
              die Ihr Browser übermittelt:
            </p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>aufgerufene Seite bzw. Datei</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              Diese Daten dienen der technisch fehlerfreien Bereitstellung sowie
              der Sicherheit und Stabilität der Website. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse). Mit dem Anbieter besteht
              ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO). Da eine Verarbeitung
              auch in den USA erfolgen kann, liegt eine Übermittlung in ein
              Drittland vor; Grundlage sind die EU-Standardvertragsklauseln bzw. die
              Zertifizierung unter dem EU-US Data Privacy Framework. Die
              Server-Logs werden nur für einen begrenzten Zeitraum
              entsprechend den Vorgaben von Vercel gespeichert. Weitere
              Informationen:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>

            <h2>3. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn Sie per E-Mail Kontakt zu uns aufnehmen, verarbeiten wir
              Ihre E-Mail-Adresse, den Inhalt Ihrer Nachricht sowie den
              Zeitpunkt der Übermittlung. Zweck der Verarbeitung ist die
              Bearbeitung Ihrer Anfrage bzw. die Anbahnung eines Vertrags.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen bzw. Vertragserfüllung), im Übrigen Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an der Beantwortung von
              Anfragen). Die Daten werden gespeichert, bis Ihre Anfrage
              abschließend bearbeitet ist; darüber hinaus nur, soweit
              gesetzliche Aufbewahrungspflichten bestehen.
            </p>

            <h2>4. Keine Analyse- oder Tracking-Dienste</h2>
            <p>
              Diese Website verwendet keine Analyse- oder Tracking-Dienste.
              Über die unter Ziffer 2 und 3 genannten Vorgänge hinaus werden
              keine personenbezogenen Daten von Ihnen erhoben oder
              gespeichert.
            </p>

            <h2>5. Keine Cookies</h2>
            <p>
              Diese Website setzt keine Cookies und verwendet keine
              vergleichbaren Technologien, die eine Einwilligung erfordern.
              Ein Kontaktformular existiert nicht.
            </p>

            <h2>6. Schriftarten (lokal)</h2>
            <p>
              Diese Website verwendet zur einheitlichen Darstellung der
              Schriftarten sogenannte Web Fonts. Die Schriften sind lokal auf
              unserem Server eingebunden und werden von dort geladen. Eine
              Verbindung zu Servern Dritter (etwa Google Fonts) findet dabei nicht
              statt; es werden keine personenbezogenen Daten an Dritte übermittelt.
            </p>

            <h2>7. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO),
              Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung
              der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO),
              Widerspruch (Art. 21 DSGVO) sowie das Recht, erteilte
              Einwilligungen jederzeit mit Wirkung für die Zukunft zu
              widerrufen (Art. 7 Abs. 3 DSGVO). Zur Ausübung genügt eine
              formlose Mitteilung an die oben genannte verantwortliche Stelle.
            </p>

            <h2>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Ihnen steht ein Beschwerderecht bei einer
              Datenschutz-Aufsichtsbehörde zu. Zuständig ist die Aufsichtsbehörde
              des Bundeslandes, in dem die verantwortliche Stelle ihren Sitz hat.
              Für uns ist dies der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Baden-Württemberg (LfDI BW),
              Lautenschlagerstraße 20, 70173 Stuttgart —{" "}
              <a
                href="https://www.baden-wuerttemberg.datenschutz.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                baden-wuerttemberg.datenschutz.de
              </a>
              .
            </p>

            <h2>9. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am
              „https://“ in der Adresszeile Ihres Browsers.
            </p>

            <h2>10. Widerspruch gegen Werbe-E-Mails</h2>
            <p>
              Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung wird hiermit widersprochen.
            </p>

            <p className="legal__date">Stand: Juli 2026</p>
          </div>
        )}
      </div>
    </main>
  );
}
