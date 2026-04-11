import Link from "next/link";

export default function Servicos() {
  const servicos = [
    {
      id: "sites-profissionais",
      titulo: "Websites Profissionais",
      descricao:
        "Sites modernos, rápidos e responsivos, pensados para posicionar sua marca e gerar credibilidade. Websites a partir de R$997.",
      mensagem:
        "Olá, tenho interesse em criar um site profissional. Pode me passar mais informações?",
    },
    {
      id: "landing-page",
      titulo: "Landing Pages",
      descricao:
        "Páginas focadas em conversão, ideais para anúncios e captação de leads qualificados. Landing Pages a partir de R$497.",
      mensagem:
        "Olá, quero uma landing page para gerar mais leads. Pode me explicar como funciona?",
    },
    {
      id: "aplicacoes",
      titulo: "Aplicações Web & Apps",
      descricao:
        "Sistemas e aplicações sob medida para automatizar processos e escalar operações. App mobile a partir de R$2.497.",
      mensagem:
        "Olá, tenho interesse em desenvolver uma aplicação ou app. Pode me dar mais detalhes?",
    },
    {
      id: "trafego-pago",
      titulo: "Tráfego Pago",
      descricao:
        "Gestão estratégica de anúncios no Google e redes sociais com foco em resultado real. Gestão Google a partir de R$1.197 por mês.",
      mensagem:
        "Olá, quero investir em tráfego pago. Pode me explicar como você trabalha?",
    },
    {
      id: "ecommerce",
      titulo: "Loja Virtual / E-Commerce",
      descricao:
        "Lojas virtuais completas, rápidas e seguras, prontas para vender. E-commerce a partir de R$ R$2.497",
      mensagem:
        "Olá, quero criar uma loja virtual. Pode me passar mais informações?",
    },
    {
      id: "manutencao-seo",
      titulo: "Manutenção e Otimização SEO",
      descricao:
        "Correção de bugs, falhas, layout quebrado, funções e otimizações no seu site. ",
      mensagem:
        "Olá, tenho interesse em automações e integrações. Pode me explicar melhor?",
    },
  ];

  return (
    <section id="servicos" className="py-24 text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-metal text-4xl md:text-5xl font-extrabold">
          Nossos serviços
        </h2>

        <p className="text-[#bdbdbd] mt-3 mb-[60px] text-[16px] max-w-2xl mx-auto">
          Soluções digitais completas para atrair, converter e escalar seu
          negócio.
        </p>

        <div className="grid gap-[1.3rem] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {servicos.map((item, index) => {
            const url = `https://wa.me/5538991369873?text=${encodeURIComponent(
              item.mensagem
            )}`;

            return (
              <div
                key={index}
                id={item.id}
                className="rounded-[20px] p-[20px] border transition duration-300 hover:-translate-y-[6px] bg-[linear-gradient(180deg,rgba(18,18,26,0.95),rgba(11,11,15,0.95))] border-[rgba(127,61,255,0.25)] hover:shadow-[0_0_40px_rgba(127,61,255,0.4)] justify-center flex flex-col items-center"
              >
                <h3 className="text-metal text-[20px] mb-[14px] font-bold">
                  {item.titulo}
                </h3>

                <p className="text-[#cfcfcf] text-[15px] leading-relaxed mb-4">
                  {item.descricao}
                </p>

                <Link
                  href={url}
                  target="_blank"
                  className="cta-button whatsapp-track mx-auto mt-[20px]"
                >
                  Solicitar orçamento no WhatsApp
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
