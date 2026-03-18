"use client";

import { motion } from "framer-motion";

export default function JornadaCliente() {
  const etapas = [
    {
      titulo: "Cliente pesquisa no Google",
      desc: "O cliente com intenção de compra pesquisa pelo seu serviço ou produto pelo Google e lá ele pode te encontrar.",
    },
    {
      titulo: "Cliente visita seu site",
      desc: "Atráves da pesquisa no Google o cliente visita seu site e tem acesso a seu contato e portfólio de produtos e serviços.",
    },
    {
      titulo: "Cliente entra em contato",
      desc: "Após a vizualização no seu site e interesse em fazer orçamento do seu serviço ou comprar produto, ele entra em contato no seu Whatsapp através de botões de chamada para ação posicionados estratégicamente pelo site ou compra o seu produto direto pelo site.",
    },
    {
      titulo: "Cliente fecha o serviço",
      desc: "Cliente fecha serviço com seu empreendimento, te indica para outros potenciais compradores, ganha mais credibilidade por sempre estar nas pesquisas do Google e avaliações positivas no Google Meu Negócio.",
    },
    {
      titulo: "Engajamento nas redes sociais",
      desc: "Nas redes sociais, seu instagram ganha segdores reais a longo prazo, mais engajamento com a conta e publicações e também trazendo mais vendas vindas de clientes que estão nas redes sociais como Facebook e Instagram.",
    },
    {
      titulo: "Remarketing inteligente",
      desc: "Recupera a venda para aquele cliente que entrou no seu site mas não entrou em contato ou abandonou o carrinho de compras ou até mesmo interagiram com seu anúncio no Facebook/Instagram mas não fechou orçamento ou comprou.",
    },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col gap-[30px]">
        {/* TÍTULO */}
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Como o <span className="text-violet-500"> processo</span> funciona
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Um processo contínuo para gerar clientes todos os dias.
          </p>
        </div>

        {/* LINHA DESKTOP */}
        <div className="relative hidden md:block">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500 origin-left"
          />
        </div>

        {/* GRID */}
        <div className="grid-col relative mt-20 grid grid-cols-3 md:flex-wrap sm:grid-cols-2 md:flex-col gap-[1rem]">
          {/* LINHA MOBILE */}
          <div className="absolute md:hidden left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-violet-500/40 to-transparent" />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute md:hidden left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-violet-500 via-violet-400 to-violet-500 origin-top"
          />

          {etapas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* CARD */}
              <div
                className="
                max-w-[300px]
                p-[20px]
                flex flex-col gap-[10px]
                rounded-[20px]
                border border-[#7f3dff40]
                bg-gradient-to-b from-[#12121a] to-[#0b0b0f]
                hover:-translate-y-3
                hover:shadow-[0_0_45px_rgba(127,61,255,0.45)]
                transition duration-500
                text-left
                group
                "
              >
                <span className="text-violet-500 text-sm font-semibold">
                  ETAPA {index + 1}
                </span>

                <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-violet-400 transition">
                  {item.titulo}
                </h3>

                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
