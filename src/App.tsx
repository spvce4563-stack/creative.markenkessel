import { useEffect } from "react";
import "./styles/app.css";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useTilt } from "./hooks/useTilt";
import { useHashRoute } from "./hooks/useHashRoute";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LegalPage from "./components/legal/LegalPage";

import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import System from "./components/sections/System";
import HowItWorks from "./components/sections/HowItWorks";
import Deliverables from "./components/sections/Deliverables";
import Comparison from "./components/sections/Comparison";
import Pricing from "./components/sections/Pricing";
import Faq from "./components/sections/Faq";
import FinalCta from "./components/sections/FinalCta";

const LEGAL = ["impressum", "datenschutz"] as const;
type LegalKind = (typeof LEGAL)[number];

export default function App() {
  const route = useHashRoute();
  const isLegal = (LEGAL as readonly string[]).includes(route);

  // Rechtsseiten immer oben starten.
  useEffect(() => {
    if (isLegal) window.scrollTo(0, 0);
  }, [route, isLegal]);

  // Reveals + 3D-Tilt nach jedem Routenwechsel neu binden.
  useScrollReveal(route);
  useTilt(route);

  if (isLegal) {
    return (
      <>
        <Nav />
        <LegalPage kind={route as LegalKind} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <System />
        <HowItWorks />
        <Deliverables />
        <Comparison />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
