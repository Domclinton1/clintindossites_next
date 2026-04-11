import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto p-10">
      <div className="hero flex gap-8 justify-center items-center">
        <div className="heroText flex flex-col gap-8 flex-1">
          <h1 className="text-4xl font-title">
            Criação de sites em BH que geram clientes todos os dias
          </h1>

          <p className="text-lg text-gray-300">
            Desenvolvemos sites, landing pages, aplicativos e loja virtual para
            empresas, restaurantes, construtores, engenheiros, serralheiros,
            vidraçarias, clínicas, lojas e prestadores de serviço.
          </p>

          <div className="flex flex-col gap-6 text-sm text-gray-400">
            <span>✔ Landing Page a partir de R$497</span>
            <span>✔ Site Institucional a partir de R$997</span>
            <span>✔ Loja Virtual e App Mobile a partir de R$2.497</span>
          </div>
          <Link
            href="https://wa.me/5538991369873?text=Olá,%20tenho%20interesse%20em%20adquirir%20um%20website.%20Pode%20me%20explicar%20como%20funciona?"
            className="cta-button whatsapp-track"
            id="orcamento-wpp"
            target="_blank"
          >
            Peça seu Orçamento pelo WhatsApp
          </Link>
        </div>

        {/*<div className="flex-1">
          <Image src="" />
        </div>*/}
      </div>
    </section>
  );
}
