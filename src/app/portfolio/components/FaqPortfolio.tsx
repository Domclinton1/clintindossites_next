"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Como você faz os sites e sistemas?",
    answer:
      "Todas as aplicações são construídas do zero na base da programação e não dependem de nenhuma plataforma que já entrega a aplicação pronta.",
  },
  {
    question: "Você faz sites em Wordpress,Elementor ou Winx?",
    answer:
      "Não, todos os sites que faço são construídos utilizando tecnologias de programação para melhor funcionamento da aplicação. As linguagens de programação utilizadas vão depender do projeto, mas vão desde o HTML, CSS e Javascript até aplicações em NextJs, PHP, Python, NodeJs e etc.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim. Oferecemos suporte e manutenção opcional para garantir que sua aplicação continue rápida, seguro e atualizada.",
  },
  {
    question: "Quanto custa um site ou um aplicativo?",
    answer:
      "Os valores variam de acordo com a complexidade do projeto. Mas como base, para Landing Pages os valores são a partir de R$800,00 até R$1.500,00; Site institucional vai de R$1.500,00 até R$3.000,00; aplicativos como delivery vai de R$2.500,00 até R$6.000,00 e Loja Virtual (ecommerce) vai de R$3.000,00 podendo custar até mais de R$8.0000,00. E claro que cada projeto tem seu suporte grátis por período limitado.",
  },
  {
    question: "Posso anunciar meu site depois de pronto?",
    answer:
      "Sim. Também trabalhamos com tráfego pago no Google e redes sociais para gerar visitas e clientes para o seu negócio.",
  },
  {
    question: "Os resultados de tráfego pago na página são reais?",
    answer:
      "Sim. Tenho compromisso com a verdade e todos os reultados são reais, sem nada editado para parecer algo milagroso.",
  },
  {
    question: "Quais benefícios seu tráfego pago trouxe aos seus clientes?",
    answer:
      "Meus clientes aumentaram significativamente o volume de vendas, visibilidade no Google e redes sociais e aumento de seguidoires e engajamento nas redes sociais.",
  },
  {
    question:
      "Eu posso escolher só o Google ADS ou só o Meta ADS ou tenho que escolher somente os dois?",
    answer:
      "Isso vai de acordo com a sua necessidade e comportamento do seu cliente. Alguns negócios tendem a performar mais no Google ADS enquanto outros performam melhor no Facebook ADS. Mas o ideal seria anunciar nas duas plataformas.",
  },
  {
    question: "Quantos reais por dia eu devo anunciar?",
    answer:
      "Eu recomendo anunciar pelo menos R$500 por semana isso utilizando o Google ADS + Meta ADS, agora se você anuncia só em uma plataforma, o recomendado é no minímo R$300 por semana. Mas quanto maior o retorno, maior o resultado.",
  },
  {
    question: "E da resultado mesmo?",
    answer:
      "Sim, é o que movimenta as empresas hoje em dia pois pode colocar as empresas na frente dos seus potenciais clientes e assim sempre mantendo um rítmo positivo de vendas.",
  },
  {
    question: "Fazem campanhas avulsas ou somente mensais?",
    answer:
      "Faço as duas opções, o cliente quer algo bom e nós ofertamos o melhor. Campanhas avulsas a partir de R$500 o pacote e campanhas mensais a partir de R$1.247,00 por mês.",
  },
];

export default function FaqPortfolio() {
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
