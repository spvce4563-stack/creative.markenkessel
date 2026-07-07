import { useEffect, useRef } from "react";
import HeroAnimation from "../HeroAnimation";
import { withBrand } from "../../config";
import { IconArrowDown } from "../Icons";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Cursor-Parallaxe: setzt --hx/--hy (-1..1) auf die Hero-Section. Vererbt sich
  // an Glows, Visual und die 3D-Anim-Grid, die alle daraus ihre Tiefe ableiten.
  //
  // Ein gedämpfter rAF-Lerp führt die IST-Werte pro Frame ein Stück an das
  // Cursor-Ziel heran (leicht floatig, ~0.09). Dadurch driften die Tiefen-
  // Ebenen weich mit — statt hart der Maus zu folgen. Die CSS-Transitions auf
  // Grid/Visual/Glow entfallen bewusst, damit sie den Lerp nicht doppelt dämpfen.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !fine) return;

    const DAMP = 0.09; // floatiger als der Karten-Tilt → Hintergrund-Drift
    const EPS = 0.0016;
    let raf = 0;
    let tx = 0; // Ziel (-1..1)
    let ty = 0;
    let cx = 0; // Ist
    let cy = 0;

    const frame = () => {
      cx += (tx - cx) * DAMP;
      cy += (ty - cy) * DAMP;
      const settled = Math.abs(tx - cx) < EPS && Math.abs(ty - cy) < EPS;
      if (settled) {
        cx = tx;
        cy = ty;
      }
      el.style.setProperty("--hx", cx.toFixed(4));
      el.style.setProperty("--hy", cy.toFixed(4));
      raf = settled ? 0 : requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <span className="glow glow--accent hero__glow hero__glow--1" aria-hidden="true" />
      <span className="glow glow--data hero__glow hero__glow--2" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Ad Creatives im Abo · Für kleine Betriebe in DACH</p>

          <h1 className="hero__headline">
            Werbeanzeigen, die jeden Monat <em>besser</em> werden.
            <br />
            Ohne Agentur. Ohne neuen Mitarbeiter.
          </h1>

          <p className="hero__subline">
            {withBrand(
              "[MARKE] liefert dir monatlich fertige Static Ads in deinem Corporate Design — und lernt aus deinen echten Kampagnen-Daten, welche Motive für dein Geschäft funktionieren. Du bekommst mehr getestete Anzeigen als jede Agentur liefern könnte, zu einem Bruchteil der Kosten."
            )}
          </p>

          <div className="hero__actions">
            <a className="btn btn--lg" href="#kontakt">
              Kostenloses Erstgespräch
            </a>
            <a className="btn btn--ghost btn--lg" href="#system">
              So funktioniert das System
              <IconArrowDown className="icon-sm" />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
}
