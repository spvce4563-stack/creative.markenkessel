// Zentrale Platzhalter — vor Launch an EINER Stelle ersetzen.
export const BRAND = "Markenkessel";
// Nebenrubrik: Diese Seite ist die Creative-Abteilung von Markenkessel.
export const DIVISION = "Creative";
export const CONTACT_EMAIL = "studio@markenkessel.de";
// Markenkessel-Impressum führt bewusst keine Telefonnummer. Leer lassen =
// Telefon wird in Footer/Impressum ausgeblendet. Bei Bedarf hier eintragen.
export const CONTACT_PHONE = "";

// Ersetzt "[MARKE]" in beliebigen Textbausteinen durch den finalen Namen.
export const withBrand = (text: string): string =>
  text.replaceAll("[MARKE]", BRAND);
