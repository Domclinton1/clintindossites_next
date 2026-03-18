export default function Servicos() {
  const servicos = [
    {
      titulo: "Websites Profissionais",
      descricao:
        "Sites modernos, rápidos e responsivos, pensados para posicionar sua marca e gerar credibilidade.",
    },
    {
      titulo: "Landing Pages",
      descricao:
        "Páginas focadas em conversão, ideais para anúncios e captação de leads qualificados.",
    },
    {
      titulo: "Aplicações Web & Apps",
      descricao:
        "Sistemas e aplicações sob medida para automatizar processos e escalar operações.",
    },
    {
      titulo: "Tráfego Pago",
      descricao:
        "Gestão estratégica de anúncios no Google e redes sociais com foco em resultado real.",
    },
    {
      titulo: "E-commerce (Loja Virtual)",
      descricao:
        "Lojas virtuais completas, rápidas e seguras, prontas para vender com integrações de pagamento, frete e automações.",
    },
    {
      titulo: "Automações & Integrações",
      descricao:
        "Integrações inteligentes entre sistemas, formulários, WhatsApp, CRMs e plataformas de pagamento para escalar processos.",
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

        <div
          className="
          grid
          gap-[1.3rem]
          [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]
        "
        >
          {servicos.map((item, index) => (
            <div
              key={index}
              className="
              rounded-[20px]
              p-[20px]
              border
              transition
              duration-300
              hover:-translate-y-[6px]
              bg-[linear-gradient(180deg,rgba(18,18,26,0.95),rgba(11,11,15,0.95))]
              border-[rgba(127,61,255,0.25)]
              hover:shadow-[0_0_40px_rgba(127,61,255,0.4)]
              "
            >
              <h3 className="text-metal text-[20px] mb-[14px] font-bold">
                {item.titulo}
              </h3>

              <p className="text-[#cfcfcf] text-[15px] leading-relaxed">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
