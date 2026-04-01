import CTAPortfolio from "./components/CTAPortfolio";
import FaqPortfolio from "./components/FaqPortfolio";
import HeroPortfolio from "./components/HeroPortfolio";
import PortfolioGeral from "./components/PortfolioGeral";

export default function Portfolio() {
  return (
    <>
      <HeroPortfolio />
      <PortfolioGeral />
      <CTAPortfolio />
      <FaqPortfolio />
    </>
  );
}
