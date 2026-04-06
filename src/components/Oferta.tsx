import Link from "next/link";

export default function Oferta() {
  return (
    <section id="oferta" className="py-24 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div
          className="
          text-center flex flex-col items-center gap-[10px]
          p-[20px] md:p-12
          rounded-[20px]
          border border-[#7f3dff40]
          bg-gradient-to-b from-[#12121a] to-[#0b0b0f]
        "
        >
          {/* BADGE */}
          <span
            className="
            p-[10px] text-sm rounded-full
            border border-[#7f3dff60]
            bg-[#7f3dff20]
            text-zinc-200
            uppercase tracking-wider
          "
          >
            Oferta Limitada
          </span>

          {/* TÍTULO */}
          <h2 className="text-metal text-3xl md:text-4xl max-w-3xl">
            Condições Especiais para Profissionais da construção
          </h2>

          {/* SUBTÍTULO */}
          <p className="text-zinc-400 max-w-2xl">
            Criação de sites e landing pages profissionais com foco em
            conversão, performance e presença digital para construtores,
            vidraceiros, serralheiros, pintores e etc.
          </p>

          {/* ALERTA */}
          <p className="uppercase text-sm text-zinc-300 tracking-wide">
            Vagas limitadas para manter a qualidade e o suporte personalizado.
          </p>

          {/* BOTÃO */}
          <Link href="/sitesparaconstrutores" className="cta-button mt-2">
            Ver Oferta Completa
          </Link>
        </div>
      </div>
    </section>
  );
}
