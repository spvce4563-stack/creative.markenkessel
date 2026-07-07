import { useEffect } from "react";

// Cursor-reaktiver 3D-Tilt für alle [data-tilt]-Elemente.
//
// Statt den Zielwert direkt zu setzen und die CSS-Transition „hinterherlaufen"
// zu lassen (fühlt sich stufig/träge an, weil die Transition bei jeder
// Mausbewegung neu startet), führt hier ein gedämpfter rAF-Loop die IST-Werte
// pro Frame ein Stück an die ZIEL-Werte heran (Lerp). Ergebnis: gewichtete,
// butterweiche Bewegung, egal wie ruckartig die Maus bewegt wird.
//
// Gesetzt werden nur --rx/--ry/--ty; der eigentliche transform lebt in
// index.css und kombiniert diese mit den Reveal-Offsets.
const MAX_TILT = 6; // maximaler Neigungswinkel in Grad
const LIFT = -10; // Anheben zur Kamera in px
const DAMP = 0.15; // Anteil der Restdistanz pro Frame (höher = snappiger)
const EPS_DEG = 0.04; // Einrast-Schwelle Winkel
const EPS_PX = 0.08; // Einrast-Schwelle Verschiebung

export function useTilt(key?: unknown) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Nur auf Geräten mit präzisem Zeiger (Maus/Trackpad) — nicht auf Touch.
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (reduce || !finePointer) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]")
    );
    const cleanups: Array<() => void> = [];

    els.forEach((el) => {
      let rect: DOMRect | null = null;
      let raf = 0;
      let active = false; // Zeiger aktuell über dem Element?
      // Ziel- und Ist-Werte
      let tRx = 0;
      let tRy = 0;
      let tTy = 0;
      let rx = 0;
      let ry = 0;
      let ty = 0;

      const frame = () => {
        rx += (tRx - rx) * DAMP;
        ry += (tRy - ry) * DAMP;
        ty += (tTy - ty) * DAMP;

        const settled =
          Math.abs(tRx - rx) < EPS_DEG &&
          Math.abs(tRy - ry) < EPS_DEG &&
          Math.abs(tTy - ty) < EPS_PX;

        if (settled) {
          rx = tRx;
          ry = tRy;
          ty = tTy;
        }

        el.style.setProperty("--rx", `${rx.toFixed(3)}deg`);
        el.style.setProperty("--ry", `${ry.toFixed(3)}deg`);
        el.style.setProperty("--ty", `${ty.toFixed(2)}px`);

        if (!settled) {
          raf = requestAnimationFrame(frame);
          return;
        }

        raf = 0;
        // Ruhezustand nur dann „aufräumen", wenn der Zeiger das Element
        // wirklich verlassen hat — nicht wenn er nur kurz stillsteht.
        if (!active) {
          el.style.removeProperty("--rx");
          el.style.removeProperty("--ry");
          el.style.removeProperty("--ty");
          el.style.removeProperty("will-change");
          el.classList.remove("is-tilting");
        }
      };

      const kick = () => {
        if (!raf) raf = requestAnimationFrame(frame);
      };

      const onEnter = () => {
        active = true;
        rect = el.getBoundingClientRect();
        el.classList.add("is-tilting");
        // Layer nur für die Dauer der Interaktion promoten.
        el.style.willChange = "transform";
        kick();
      };
      const onMove = (e: PointerEvent) => {
        if (!rect) rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        tRy = (px - 0.5) * MAX_TILT * 2;
        tRx = (0.5 - py) * MAX_TILT * 2;
        tTy = LIFT;
        kick();
      };
      const onLeave = () => {
        active = false;
        rect = null;
        // Ziel = Ruhe; der Loop gleitet weich zurück und räumt danach auf.
        tRx = 0;
        tRy = 0;
        tTy = 0;
        kick();
      };

      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        if (raf) cancelAnimationFrame(raf);
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        el.style.removeProperty("will-change");
        el.classList.remove("is-tilting");
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [key]);
}
