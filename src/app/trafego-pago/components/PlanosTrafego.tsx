"use client";

import CtaButton from "@/components/CTAButton";

export default function PlanosTrafego() {
  return (
    <section className="py-24 px-6" id="planos">
      <div className="max-w-[1200px] mx-auto text-center gap-[2rem] flex flex-col">
        {/* Título */}
        <div className="gap-[1rem]">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Planos de <span className="text-violet-500">Tráfego Pago</span>
          </h2>

          <p className="text-gray-400 mt-4 mb-16">
            Escolha o modelo ideal para o seu negócio
          </p>
        </div>

        {/* GRID */}
        <div className="planosGrid w-full max-w-[1200px] m-autoflex gap-[1rem] flex justify-between">
          {/* CARD 1 */}
          <div
            className="
            plano-card
            bg-white
            p-10
            rounded-[20px]
            shadow-[0_10px_28px_rgba(0,0,0,0.08)]
            text-left
            flex flex-col gap-4
            hover:-translate-y-2
            hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)]
            transition duration-300
          "
          >
            <h3 className="text-2xl font-semibold text-[#0b2545]">
              Setup Avulso de Campanha
            </h3>

            <p className="textPlanos">Por apenas R$ 500</p>

            <ul className="space-y-2 text-violet-600 text-lg">
              <li>Criação completa da campanha</li>
              <li>Configuração de público e segmentação</li>
              <li>Estrutura profissional de anúncios</li>
              <li>Pronto para rodar</li>
            </ul>

            <p className="textPlanos2">
              Após o setup, você pode gerenciar por conta própria.
            </p>

            <CtaButton href="https://wa.me/5538991369873?text=Quero%20contratar%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago PACOTE AVULSO!">
              Quero esse pacote
            </CtaButton>
          </div>

          {/* CARD 2 - DESTAQUE */}
          <div
            className="
            plano-card destaque
              relative
              p-10
              rounded-[20px]
              text-left
              flex flex-col gap-4
              overflow-hidden
              border border-white/10
              shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              hover:-translate-y-2
              transition duration-300
              bg-cover bg-center
            "
            style={{
              backgroundImage: "url('/assets/images/google-print.png')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/50 z-0" />

            <div className="relative z-10 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">
                Plano de Gestão Mensal
              </h3>

              <p className="textPlanos">A partir de R$ 1.400,00/mês</p>

              <ul className="space-y-2 text-violet-300 text-lg">
                <li>Gestão completa das campanhas</li>
                <li>Otimizações semanais</li>
                <li>Relatórios de desempenho</li>
                <li>Suporte contínuo</li>
              </ul>

              <p className="textPlanos2">
                Valor varia conforme volume de anúncios e plataformas.
              </p>

              <CtaButton href="https://wa.me/5538991369873?text=Quero%20contratar%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago PLANO MENSAL!">
                Quero plano mensal
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
