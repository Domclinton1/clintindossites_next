import HeroTrafego from "@/app/trafego-pago/components/HeroTrafego";
import BeneficiosTrafego from "@/app/trafego-pago/components/JornadaCliente";
import ComoFuncionaTrafego from "@/app/trafego-pago/components/ComoFuncionaTrafego";
import ProvasTrafego from "@/app/trafego-pago/components/ProvasTrafego";
import PlanosTrafego from "@/app/trafego-pago/components/PlanosTrafego";
import FaqTrafego from "@/app/trafego-pago/components/FaqTrafego";

export default function TrafegoPagoPage() {
  return (
    <>
      <HeroTrafego />
      <ComoFuncionaTrafego />
      <BeneficiosTrafego />
      <ProvasTrafego />
      <PlanosTrafego />
      <FaqTrafego />
    </>
  );
}
