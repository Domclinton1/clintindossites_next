import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Portfolio from "../components/Portfolio";
import Reviews from "@/components/Reviews";
import Oferta from "@/components/Oferta";
import Faq from "@/components/Faq";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Portfolio />
      <Reviews />
      <Oferta />
      <Faq />
      <Contato />
    </>
  );
}
