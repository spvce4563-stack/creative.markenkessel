import { useEffect, useMemo, useRef, useState } from "react";
import "./HeroAnimation.css";

type Status = "idle" | "winner" | "dim";

interface Card {
  id: number;
  tone: number; // 0..4  Farbwelt der Ad-Variante
  layout: number; // 0..2 Aufbau-Variante
  metric: string;
  status: Status;
  nonce: number; // erzwingt Re-Animation beim "Nachrücken"
}

const TONES = 5;
const LAYOUTS = 3;
const CARD_COUNT = 9;

const METRICS = [
  "CTR 1.4%",
  "CTR 2.1%",
  "CTR 3.6%",
  "ROAS 2.3×",
  "ROAS 4.1×",
  "CPC 0,42 €",
  "CPC 0,28 €",
];

const rand = (n: number) => Math.floor(Math.random() * n);

function freshCard(id: number): Card {
  return {
    id,
    tone: rand(TONES),
    layout: rand(LAYOUTS),
    metric: METRICS[rand(METRICS.length)],
    status: "idle",
    nonce: 0,
  };
}

// Ein einzelnes abstrahiertes Static-Ad-Mockup (kein echtes Bild).
function AdCard({ card }: { card: Card }) {
  return (
    <div
      key={card.nonce}
      className={`adcard adcard--tone-${card.tone} adcard--${card.status} adcard--layout-${card.layout}`}
      aria-hidden="true"
    >
      <div className="adcard__media">
        <span className="adcard__shape" />
      </div>
      <div className="adcard__lines">
        <span className="adcard__line adcard__line--head" />
        <span className="adcard__line" />
      </div>
      <div className="adcard__foot">
        <span className="adcard__pill" />
        <span className="adcard__metric">{card.metric}</span>
      </div>

      <span className="adcard__badge">
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
          <path
            d="M4 20V10m6 10V4m6 16v-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
        Winner
      </span>
    </div>
  );
}

export default function HeroAnimation() {
  const [cards, setCards] = useState<Card[]>(() =>
    Array.from({ length: CARD_COUNT }, (_, i) => freshCard(i))
  );
  const tick = useRef(0);

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (reducedMotion) {
      // Ruhiger Endzustand: zwei markierte Gewinner, keine Bewegung.
      setCards((prev) =>
        prev.map((c, i) => ({
          ...c,
          status: i === 2 || i === 6 ? "winner" : "idle",
        }))
      );
      return;
    }

    const id = window.setInterval(() => {
      tick.current += 1;
      setCards((prev) => {
        const n = prev.length;
        const winner = tick.current % n;
        const second = (winner + 4) % n;
        const refresh = (winner + 2) % n; // "Verlierer" wird durch neue Variante ersetzt

        return prev.map((c, i) => {
          if (i === refresh) {
            const nc = freshCard(c.id);
            nc.nonce = c.nonce + 1;
            nc.status = "idle";
            return nc;
          }
          if (i === winner || i === second) {
            return { ...c, status: "winner", metric: winnerMetric() };
          }
          // ein paar rundum abdimmen für Kontrast
          const dim = (i + tick.current) % 3 === 0;
          return { ...c, status: dim ? "dim" : "idle" };
        });
      });
    }, 2000);

    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <div className="hero-anim" role="img" aria-label="Der Lern-Kreislauf: Anzeigen-Varianten werden getestet, Gewinner steigen auf, neue Varianten rücken nach.">
      <div className="hero-anim__stage">
        <div className="hero-anim__grid">
          {cards.map((c) => (
            <AdCard key={c.id} card={c} />
          ))}
        </div>
      </div>

      <span className="hero-anim__loop-label hero-anim__loop-label--produce">
        Produzieren
      </span>
      <span className="hero-anim__loop-label hero-anim__loop-label--test">
        Testen
      </span>
      <span className="hero-anim__loop-label hero-anim__loop-label--learn">
        Auswerten
      </span>
    </div>
  );
}

function winnerMetric() {
  const good = ["CTR 3.6%", "ROAS 4.1×", "CPC 0,28 €", "ROAS 3.4×"];
  return good[rand(good.length)];
}
