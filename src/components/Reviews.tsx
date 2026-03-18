import Image from "next/image";
import Link from "next/link";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-24 px-5">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col gap-7">
        <h2 className="text-metal text-3xl md:text-4xl">
          Avaliações no Google
        </h2>

        <p className="text-zinc-400">
          O que nossos clientes dizem sobre nossos serviços
        </p>

        {/* GRID */}
        <div className="container flex gap-[30px] my-[60px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* CARD */}
          <ReviewCard
            image="/assets/images/logo-bn-esquadrias-2.jpeg"
            name="BN Esquadrias"
            time="2 semanas atrás"
            text="Um dos melhores profissionais na área de programação e gestor de
                tráfego pago. Eu tenho uma loja de esquadrias de alumínio e eu
                posso dizer que as vendas da minha loja aumentaram 1000% desde
                que eu encontrei o Clintin através de uma indicação. Atendimento
                incrível, super explicativo, trabalho impecável o site da loja
                ficou maravilhoso, só tenho a agradecer! Valorizem os
                programadores pessoal, é um trabalho cansativo mentalmente...
                Obrigada Clintin por tudo que você tem feito por mim e pela
                minha empresa desde o início, você é 10! ❤️❤️"
          />

          <ReviewCard
            image="/assets/images/review-larissa.png"
            name="Larissa Kelly"
            time="1 mês atrás"
            text=" Foi uma experiência impecável. É um profissional extremamente
                comprometido, inteligente e dedicado. Entrega tudo com
                excelência, tem uma visão técnica muito acima da média e sempre
                busca soluções práticas e criativas para qualquer desafio. Além
                do domínio técnico, o que mais me impressiona é a
                responsabilidade, a agilidade e a clareza na comunicação. Ele
                realmente se importa com o cliente e faz de tudo para garantir
                um resultado final de qualidade. Recomendo de olhos fechados. É
                raro encontrar alguém tão competente e confiável na área de
                desenvolvimento de sites, galera!"
          />

          <ReviewCard
            image="/assets/images/review-jhessi.png"
            name="Jhessii Moura"
            time="Há alguns dias atrás"
            text="Sou cliente e Recomendo muito , ja contratei vários serviços,
                site , trafego pago , designer grafico e amei todas as
                experiências, voltarei sempre 🚀✅️👏❤️"
          />
        </div>

        {/* BOTÃO */}
        <Link
          href="https://g.page/r/CVIh9lOqXWq3EAI/review"
          target="_blank"
          className="cta-button mx-auto"
        >
          Ver todas as avaliações no Google
          <Image
            src="/assets/icons/google.svg"
            alt="Google"
            width={18}
            height={18}
          />
        </Link>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function ReviewCard({ image, name, time, text }: any) {
  return (
    <div className="bg-[#0b0b0f] rounded-[18px] p-[15px] border border-[#7f3dff40] text-left max-w-[380px]">
      <div className="flex items-center gap-3 mb-[10px]">
        <Image
          src={image}
          alt={name}
          width={42}
          height={42}
          className="rounded-full object-cover"
        />

        <div>
          <strong className="text-white text-[15px] block">{name}</strong>
          <span className="text-[12px] text-[#9e9e9e]">{time}</span>
        </div>
      </div>

      <div className="text-[#fbbc04] text-[16px] my-[8px] mb-[12px]">★★★★★</div>

      <p className="text-[14px] text-[#d0d0d0] leading-[1.6]">{text}</p>
    </div>
  );
}
