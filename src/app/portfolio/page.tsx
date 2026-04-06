import CTAPortfolio from "./components/CTAPortfolio";
import FaqPortfolio from "./components/FaqPortfolio";
import HeroPortfolio from "./components/HeroPortfolio";
import PortfolioGeral from "./components/PortfolioGeral";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio de Sites",
  description:
    "Veja resultados de campanhas de tráfego pago e veja os sites, landing pages e sistemas desenvolvidos pelo Clintin dos Sites.",
};

export default function Portfolio() {
  return (
    <>
      <HeroPortfolio />
      <PortfolioGeral />
      <FaqPortfolio />
      <CTAPortfolio />
    </>
  );
}
