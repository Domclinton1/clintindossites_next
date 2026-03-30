"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Tráfego pago da resultado mesmo?",
    answer:
      "Sim, o tráfego pago ajuda e muito a aumentar as vendas. Podemos dizer que os clientes sentem um aumento de 40% a 60% nas vendas desde que começaram a anunciar.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer:
      "Geralmente na primeira semana você já vê resultados positivos, e claro, quanto mais otimizar melhor serão os resultados.",
  },
  {
    question:
      "Qual é o melhor tráfego para o meu negócio? Google ADS ou Meta ADS?",
    answer:
      "Google ADS funciona para quem já está pesquisando, que são clientes potenciais e tem consciência do que precisam. Meta ADS são os anúncios que veiculam no Facebook e Instagram de acordo com o comportamento, interesses e dados demograficos dos seus clientes, trabalha no despertar interesse. A mais recomendado é utilizar os dois pois os dois trabalham em conjunto, embora cada negócio tem mais resultados em Google enquanto outros tem mais resultado no Meta pois isso vai do comportamento do seu cliente.",
  },
  {
    question: "Vocês atendem todos os segmentos?",
    answer:
      "Somos especializados em construção civil, estética, delivery e telecom. Mas atendemos outros nichos do mercado também, chame no whatsapp para mais informações.",
  },
  {
    question: "Como funciona o atendimento?",
    answer:
      "Nosso atendimento funciona 100% online pois permite maior liberdade geografica, mas fazemos reuniões presenciais quando necessário em Belo Horizonte e região, as demais localidades do Brasil o atendimento funciona 100% online",
  },
];

export default function FaqTrafego() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <section id="faq" className="py-24 px-5">
      <div className="max-w-[900px] mx-auto flex flex-col gap-[20px]">
        <h2 className="text-metal text-3xl md:text-4xl text-center">
          Perguntas Frequentes
        </h2>

        <p className="subtitulo text-center mb-14">
          Tire suas dúvidas antes de entrar em contato
        </p>

        <div className="space-y-4 flex flex-col gap-[20px]">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-[#0b0b0f]
                border border-[#7f3dff40]
                rounded-2xl
                overflow-hidden rounded-[20px]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="faq-question w-full flex justify-between items-center
                  text-left p-[20px] text-white"
                >
                  {faq.question}

                  <span
                    className={`text-[#7f3dff] text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className=" overflow-hidden">
                    <p className="p-[20px] pt-0 text-sm text-zinc-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
