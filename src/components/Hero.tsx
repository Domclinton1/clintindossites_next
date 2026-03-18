import CtaButton from "@/components/CTAButton";
import HeroForm from "@/components/HeroForm";

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto p-10">
      <div className="hero flex gap-8 justify-center items-center">
        <div className="heroText flex flex-col gap-8 flex-1">
          <h1 className="text-4xl font-title">
            Criamos sites que geram clientes todos os dias
          </h1>

          <p className="text-lg text-gray-300">
            Desenvolvimento web + tráfego pago para negócios que querem escalar.
          </p>

          <CtaButton href="https://wa.me/5538991369873?text=Quero%20realizar%20um%20orçamento">
            Orçamento no Whatsapp
            <span className="icon icon-whatsapp" />
          </CtaButton>
        </div>

        <div className="flex-1">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
