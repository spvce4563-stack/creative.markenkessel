import { useEffect, useState } from "react";

// Minimaler Hash-Router für die Rechtsseiten (#impressum / #datenschutz),
// ohne zusätzliche Router-Abhängigkeit.
export function useHashRoute(): string {
  const [hash, setHash] = useState<string>(() =>
    window.location.hash.replace("#", "")
  );

  useEffect(() => {
    const onChange = () => setHash(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return hash;
}
