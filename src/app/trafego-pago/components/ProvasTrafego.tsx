"use client";

import Image from "next/image";

const rows = [
  {
    titulo: "Gestão de Trafego Meta ADS",
    itens: [
      {
        img: "/assets/images/meta_ads_bnesquadrias.webp",
      },
      {
        img: "/assets/images/meta_ads_clintin_dos_sites.webp",
      },
      {
        img: "/assets/images/meta_ads_hreletronicos.webp",
      },
      {
        img: "/assets/images/meta_ads_newform.webp",
      },
      {
        img: "/assets/images/meta_ads_pizzaria_prazeres_da_massa.webp",
      },
      {
        img: "/assets/images/meta_ads_retifica.webp",
      },
      {
        img: "/assets/images/meta_ads_telecom.webp",
      },
      {
        img: "/assets/images/meta_ads_telecom2.webp",
      },
      {
        img: "/assets/images/meta_ads_telecom3.webp",
      },
      {
        img: "/assets/images/meta_ads_vidrosa.webp",
      },
    ],
  },
  {
    titulo: "Gestão de Tráfego Google ADS",
    itens: [
      {
        img: "/assets/images/google_ads_bnesquadrias.webp",
      },
      {
        img: "/assets/images/google_ads_jcesquadrias.webp",
      },
      {
        img: "/assets/images/google_ads_ vidrosa.webp",
      },
      {
        img: "/assets/images/google_ads_newfom.webp",
      },
      {
        img: "/assets/images/google_ads_wmaesquadrias.webp",
      },
      {
        img: "/assets/images/google-print-2.png",
      },
    ],
  },
];

export default function PortfolioTrafego() {
  return (
    <section
      id="portfolioTrafego"
      className="portfolio max-w-[1200px] m-auto py-[100px] px-5"
    >
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-metal text-center text-4xl md:text-5xl font-extrabold">
          Portfólio
        </h2>

        <p className="text-[#bdbdbd] text-center mt-3 mt-[1rem] mb-[1rem]">
          Projetos desenvolvidos para negócios reais
        </p>

        {rows.map((row, i) => (
          <div key={i} className="mb-[60px]">
            <h3 className="mb-[1.3rem] text-xl font-semibold">{row.titulo}</h3>

            {/* SCROLL */}
            <div
              className="
              flex gap-[1rem] overflow-x-auto pb-[1rem]
              scroll-smooth
              scrollbar-thin
              scrollbar-thumb-[rgba(127,61,255,0.4)]
              "
            >
              {row.itens.map((item, index) => (
                <a
                  key={index}
                  target="_blank"
                  className="
                  group
                  relative
                  flex-[0_0_240px] sm:flex-[0_0_260px] md:flex-[0_0_280px]
h-[320px] sm:h-[340px] md:h-[380px]
                  rounded-[18px]
                  border border-[rgba(127,61,255,0.25)]
                  bg-[#0b0b0f]
                  overflow-hidden
                  "
                >
                  {/* IMAGE */}
                  <div className="h-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt="Projeto"
                      fill
                      className="
                      object-cover
                      min-h-[120%]
                      transition-transform
                      duration-[6000ms]
                      ease-linear
                      group-hover:-translate-y-[40%]
                      "
                    />
                  </div>

                  {/* OVERLAY */}
                  <div
                    className="
                    absolute inset-0
                    bg-[linear-gradient(to_top,rgba(11,11,15,0.95),rgba(11,11,15,0.2))]
                    flex items-end justify-center
                    pb-5
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                      bg-[linear-gradient(135deg,#4b1fb8,#7f3dff,#9b6cff)]
                      px-5 py-2
                      rounded-full
                      text-sm
                      shadow-[0_0_20px_rgba(127,61,255,0.6)]
                      "
                    >
                      Ver projeto
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
