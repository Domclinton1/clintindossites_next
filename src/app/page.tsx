import Hero from "../components/Hero";
import Servicos from "../components/Servicos";
import Portfolio from "../components/Portfolio";
import Reviews from "@/components/Reviews";
import Oferta from "@/components/Oferta";
import Faq from "@/components/Faq";
import Contato from "@/components/Contato";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais",
  description:
    "Desenvolvimento de sites, landing pages e gestão de Google Ads para empresas que querem mais clientes.",
};

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
