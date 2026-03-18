"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Quanto custa um site?",
    answer:
      "O valor varia de acordo com o tipo de projeto (site, landing page, e-commerce ou sistema). Trabalhamos com soluções sob medida para atender sua necessidade e orçamento.",
  },
  {
    question: "Em quanto tempo meu projeto fica pronto?",
    answer:
      "O prazo médio é de 7 a 20 dias, dependendo da complexidade do projeto e da entrega das informações pelo cliente.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim. Oferecemos suporte e manutenção opcional para garantir que seu site continue rápido, seguro e atualizado.",
  },
  {
    question: "O site funciona no celular?",
    answer:
      "Todos os projetos são 100% responsivos, funcionando perfeitamente em celulares, tablets e computadores.",
  },
  {
    question: "Posso anunciar meu site depois de pronto?",
    answer:
      "Sim. Também trabalhamos com tráfego pago no Google e redes sociais para gerar visitas e clientes para o seu negócio.",
  },
];

export default function Faq() {
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
