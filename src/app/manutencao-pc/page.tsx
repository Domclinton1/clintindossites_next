import { Metadata } from "next";
import AtendimentoPC from "./components/AtendimentoPC";
import CtaManutencao from "./components/CtaManutencao";
import DiferencialPC from "./components/DiferencialPC";
import HeroManutencaoPC from "./components/HeroManutencaoPC";
import ManutencaoNotebook from "./components/ManutencaoNotebook";
import ManutencaoPC from "./components/ManutencaoPC";
import ServicosPC from "./components/ServicosPC";
export const metadata: Metadata = {
  title: "Manutenção em Computadores em Belo Horizonte",
  description:
    "Seu computador estragou? Clintin dos Sites consertou! Assistência técnica de computadores e Notebooks em Belo Horizonte com atendimento a domícilio",
  keywords:
    "manutenção de computador, formatação de computador em bh, assistência técnica de computador em belo horizonte, orçamento manutenção de computadores",
};

export default function ManutencaoComputador() {
  return (
    <div
      className="
        relative

        /* MOBILE */
        bg-[linear-gradient(to_bottom,rgba(0,0,0,50),rgba(127,61,255,0.30),rgba(0,0,0,50)),url('/assets/manutencao-pc.png')]
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed

        /* DESKTOP */
        md:bg-none
      "
    >
      <div className="relative z-10">
        <HeroManutencaoPC />
        <ServicosPC />
        <ManutencaoNotebook />
        <ManutencaoPC />
        <DiferencialPC />
        <AtendimentoPC />
        <CtaManutencao />
      </div>
    </div>
  );
}
