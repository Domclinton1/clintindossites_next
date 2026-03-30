"use client";

import CtaButton from "../../../components/CTAButton";
import FormTrafegoPago from "./FormTrafegoPago";
export default function HeroTrafego() {
  return (
    <section className="max-w-[1200px] mx-auto p-10 ">
      <div className="hero flex gap-8 justify-center items-center md:flex-col">
        <div className="heroText flex flex-col gap-8 flex-1">
          <h1 className="text-4xl font-title">
            Traga clientes todos os dias com tráfego pago estratégico
          </h1>

          <p className="text-lg text-gray-300">
            Gestão profissional no Google e Meta Ads para gerar leads, vendas e
            crescimento previsível.
          </p>

          <CtaButton href="https://wa.me/5538991369873?text=Quero%20realizar%20um%20orçamento de trafego pago">
            Orçamento no Whatsapp
            <span className="icon icon-whatsapp" />
          </CtaButton>
        </div>

        <div className="flex-1">
          <FormTrafegoPago />
        </div>
      </div>
    </section>
  );
}
