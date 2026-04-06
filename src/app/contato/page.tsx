import HeroContato from "./components/HeroContato";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato para solicitar orçamento de site, landing page ou gestão de tráfego pago.",
};

export default function Contato() {
  return (
    <>
      <HeroContato />
    </>
  );
}
