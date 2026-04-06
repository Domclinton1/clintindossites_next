import ComoFunciona from "./components/ComoFunciona";
import FaqConstrutores from "./components/FaqConstrutores";
import HeroConstrutores from "./components/HeroConstrutores";
import OfertaConstrutores from "./components/Oferta";
import PortfolioConstrutores from "./components/PortfolioConstrutores";
import Solucao from "./components/Solucao";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sites para Construtores",
  description:
    "Criação de sites para construtores, serralherias, vidraçarias, eletricistas e profissionais da construção civil.",
  keywords: [
    "site para construtor",
    "site para serralheria",
    "site para vidraçaria",
    "site para eletricista",
    "trafego pago para esquadrias de alumínio",
    "marketing para construção civil",
  ],
};

export default function SitesParaConstrutores() {
  return (
    <>
      <HeroConstrutores />
      <ComoFunciona />
      <Solucao />
      <PortfolioConstrutores />
      <OfertaConstrutores />
      <FaqConstrutores />
    </>
  );
}
