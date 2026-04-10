"use client";

import Image from "next/image";

const rows = [
  {
    titulo: "Websites para Construtores",
    itens: [
      {
        link: "https://www.vidrosa.com.br",
        img: "/assets/images/vidrosa-site.webp",
      },
      {
        link: "https://wmaesquadriasevidros.com.br/",
        img: "/assets/images/wmaesquadriasevidros.webp",
      },
      {
        link: "https://www.bnesquadrias.com.br",
        img: "/assets/images/bnesquadrias-site.webp",
      },
      {
        link: "https://www.newformesquadrias.com.br",
        img: "/assets/images/newformesquadrias-site.webp",
      },
      {
        link: "https://www.gmglass.com.br",
        img: "/assets/images/gmglass-site.webp",
      },
      {
        link: "https://www.jcesquadriasmg.com.br",
        img: "/assets/images/jc-esquadrias-site.webp",
      },
      {
        link: "https://www.wedsonconstrucoes.com.br",
        img: "/assets/images/wedsonconstrucoes-site.webp",
      },
      {
        link: "https://fceserralheria-deluxe.vercel.app/",
        img: "/assets/images/fce-serralheria-2.webp",
      },
      {
        link: "https://fce-serralheria-site.vercel.app/",
        img: "/assets/images/fce-serralheria-1.webp",
      },
    ],
  },

  {
    titulo: "Websites para negócios locais",
    itens: [
      {
        link: "https://angelamodas.vercel.app/",
        img: "/assets/images/angelamodas-site.webp",
      },
      {
        link: "https://hreletronicos.vercel.app",
        img: "/assets/images/hreletronicos-site.webp",
      },
      {
        link: "https://dnbluxembourgsa.vercel.app",
        img: "/assets/images/dbnluxembourg-site.webp",
      },
      {
        link: "https://internationalcarservices.vercel.app/",
        img: "/assets/images/international-car-services-site.webp",
      },
      {
        link: "https://dllgroupcastro.vercel.app/",
        img: "/assets/images/dllgroup-site.webp",
      },
      {
        link: "https://diniztransportes.vercel.app",
        img: "/assets/images/diniztransportes-site.webp",
      },
      {
        link: "https://harmoniapsicanalitica.com.br",
        img: "/assets/images/harmoniapsicanalitica-site.webp",
      },
      {
        link: "https://salaokennoa.vercel.app/",
        img: "/assets/images/kennoa-beauty-site.webp",
      },
      {
        link: "https://feriasdossonhos.vercel.app",
        img: "/assets/images/feriasdossonhos-site.webp",
      },
      {
        link: "https://granmaisnatural.vercel.app/",
        img: "/assets/images/grannatural-site.webp",
      },
      {
        link: "https://diskfiltro.vercel.app/",
        img: "/assets/images/diskfiltro-site.webp",
      },
      {
        link: "https://eu-arrumo.vercel.app/",
        img: "/assets/images/euarrumo.webp",
      },
    ],
  },
  {
    titulo: "Websites para provedores de internet",
    itens: [
      {
        link: "https://fujitel.vercel.app/",
        img: "/assets/images/fujitel-site.webp",
      },
      {
        link: "https://vitalservicostelecom.vercel.app/",
        img: "/assets/images/vitalservicos-site.webp",
      },
      {
        link: "https://soaresfibra.vercel.app",
        img: "/assets/images/soaresfibra-site.webp",
      },
      {
        link: "https://fctelecom.vercel.app/",
        img: "/assets/images/fc-telecom-site.webp",
      },
      {
        link: "https://tf-telecom.vercel.app/",
        img: "/assets/images/tftelecom-site.webp",
      },
    ],
  },
  {
    titulo: "Landing pages de infoprodutos",
    itens: [
      {
        link: "https://resistenciacavalar.vercel.app",
        img: "/assets/images/resistencia-cavalar-site.webp",
      },
      {
        link: "https://amandapas.vercel.app/",
        img: "/assets/images/amandapas-site.webp",
      },
      {
        link: "https://projeto-seca-rapido.vercel.app/",
        img: "/assets/images/lipotraining-site.webp",
      },
      {
        link: "https://paidosestofados.vercel.app/",
        img: "/assets/images/paidosestofados-site.webp",
      },
      {
        link: "https://fature1k.vercel.app/",
        img: "/assets/images/karinaferraira-site.webp",
      },
      {
        link: "https://sissibolinhos.vercel.app/",
        img: "/assets/images/sissi-bolinhos.webp",
      },
      {
        link: "https://clickschat.com.br",
        img: "/assets/images/clickschat-site.webp",
      },
      {
        link: "https://clube-dos-psicopedagogos.vercel.app/",
        img: "/assets/images/clubedospsicopedagogos-site.webp",
      },
    ],
  },
  {
    titulo: "Apps / Delivery / Utilitários",
    itens: [
      {
        link: "https://cearaburgueracai.vercel.app/ceara-app",
        img: "/assets/images/cearaburugeracai-app.webp",
      },
      {
        link: "https://ceara-acai-burguer.vercel.app",
        img: "/assets/images/cearaburgueracai-app-2.webp",
      },
      {
        link: "https://kazzau-links.vercel.app",
        img: "/assets/images/sergiolanches-links.webp",
      },
      {
        link: "https://linkcardflix.vercel.app",
        img: "/assets/images/linkcardflix-app.webp",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
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
                  href={item.link}
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
                  <div className="relative h-full overflow-hidden">
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
