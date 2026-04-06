"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Como você faz os websites?",
    answer:
      "Todas as aplicações são construídas do zero na base da programação e não dependem de nenhuma plataforma que já entrega a aplicação pronta.",
  },
  {
    question: "Você faz sites em Wordpress,Elementor ou Winx?",
    answer:
      "Não, todos os sites que faço são construídos utilizando tecnologias de programação para melhor funcionamento da aplicação. As linguagens de programação utilizadas vão depender do projeto, mas vão desde o HTML, CSS e Javascript até aplicações em NextJs, PHP, Python, NodeJs e etc.",
  },
  {
    question: "Como funciona o pagamento desse serviço?",
    answer:
      "Você pode pagar via PIX sendo 50% do valor na entrada do serviço e 50% do valor na entrega do serviço. Você também pode pagar no boleto ou parcelar em até 6x no cartão de crédito(juros inclusos).",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "Entre 3 (três) a 5 (cinco) dias após o pagamento. Geralmente em 3 dias fica pronto e já disponível para trazer orçamentos qualificados para você.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim. Oferecemos suporte e manutenção opcional para garantir que sua aplicação continue rápida, seguro e atualizada.",
  },
  {
    question: "Com quanto tempo eu vejo retorno do meu investimento?",
    answer:
      "O retorno você consegue notar na primeira semana, geralmente após o site estar pronto e com a campanha de anúncios online, tem grandes chances de receber orçamento no primeiro dia, mas pode-se dizer que em uma semana você consegue superar o valor do investimento apenas com os orçamentos que chegam atráves do site.",
  },
  {
    question: "Posso anunciar meu site depois de pronto?",
    answer:
      "Sim. Essa oferta já oferece uma campanha de anúncios avulsa de Pesquisa no Google ADS e Vendas no Facebook ADS. Você vê o retorno do seu investimento na primeira semana após anunciar.",
  },

  {
    question: "Vou ficar rico da noite para o dia?",
    answer:
      "Não, mas com essa estrutura de vendas vai te ajudar a chegar lá mais rápido do que o jeito que você está tentando aaté então.",
  },
];

export default function FaqConstrutores() {
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
