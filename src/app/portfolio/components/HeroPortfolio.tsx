"use client";

import Link from "next/link";

export default function HeroPortfolio() {
  return (
    <section>
      <div className=" mx-auto max-w-[1200px] flex flex-col justify-center text-center gap-2 mt-[150px] items-center gap-[1.3rem]">
        <h1>Aplicações online e resultados digitais</h1>
        <p>
          Confira websites, landing pages, aplicações mobile e resultados
          digitais gerados com gestão de tráfego pago eficiente e aplicações
          desenvolvidas com estratégia e dedicação
        </p>
        <Link
          href="https://wa.me/5538991369873"
          target="blank"
          className="cta-button"
        >
          Solicite seu projeto digital
        </Link>
      </div>
    </section>
  );
}
