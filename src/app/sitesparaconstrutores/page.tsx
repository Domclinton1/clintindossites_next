import ComoFunciona from "./components/ComoFunciona";
import FaqConstrutores from "./components/FaqConstrutores";
import HeroConstrutores from "./components/HeroConstrutores";
import OfertaConstrutores from "./components/Oferta";
import PortfolioConstrutores from "./components/PortfolioConstrutores";
import Solucao from "./components/Solucao";

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
