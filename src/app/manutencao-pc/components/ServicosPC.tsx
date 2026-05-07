import Image from "next/image";
import Link from "next/link";
export default function ServicosPC() {
  const servicos = [
    {
      id: "manutencaoComputador",
      titulo: "Manutenção de Computador e notebook",
      descricao:
        "Diagnóstico completo e solução de problemas no seu computador.",
      apartir: "A partir de:",
      preco: "R$150,00",
      frete: "Com Frete Grátis",
      imagem: "/assets/manutencao-pc.webp",
      mensagem:
        "Olá, preciso de manutenção no meu computador. Pode me passar mais detalhes?",
    },
    {
      id: "manutencaoNotebook",
      titulo: "Backup de arquivos",
      descricao:
        "Backup de arquivos importantes para o seu empreendimento ou sua vida pessoal",
      apartir: "A partir de:",
      preco: "R$100,00",
      giga: "Por Giga",
      imagem: "/assets/manutencao-notebook.webp",
      mensagem:
        "Olá, meu notebook está com problema. Pode me passar um orçamento?",
    },
    {
      id: "formatacao",
      titulo: "Formatação Profissional",
      descricao: "Formatação completa com instalação de programas essenciais.",
      porapenas: "Por apenas:",
      preco: "R$159,00",
      frete: "Com Frete Grátis",
      imagem: "/assets/formatacao.webp",
      mensagem:
        "Olá, gostaria de formatar meu computador. Pode me explicar como funciona?",
    },
    {
      id: "comboFormatacao",
      titulo: "🔥 Combo Formatação Expert",
      descricao: "Formatação + limpeza interna + troca de pasta térmica.",
      porapenas: "Por apenas:",
      preco: "R$220,00",
      frete: "Com Frete Grátis",
      imagem: "/assets/combo-formatacao.webp",
      mensagem:
        "Olá, tenho interesse no combo formatação profissional. Pode me passar mais detalhes?",
    },
    {
      id: "remocaoVirus",
      titulo: "Remoção de Vírus",
      descricao: "Eliminação de vírus e otimização para melhorar desempenho.",
      apartir: "A partir de:",
      preco: "R$120,00",
      frete: "Com Frete Grátis",
      imagem: "/assets/remocao-virus.webp",
      mensagem: "Olá, acho que meu computador está com vírus. Pode me ajudar?",
    },
    {
      id: "upgrade",
      titulo: "Upgrade (SSD / RAM)",
      descricao: "Deixe seu computador muito mais rápido com upgrade de peças.",
      apartir: "A partir de:",
      preco: "R$150,00",
      frete: "Com Frete Grátis",
      imagem: "/assets/upgrade-pc.webp",
      mensagem: "Olá, quero fazer upgrade no meu computador. Pode me orientar?",
    },
  ];
  return (
    <section id="servicosPC" className="py-24 text-center">
      {" "}
      <div className="max-w-[1100px] mx-auto px-6">
        {" "}
        <h2 className="text-metal text-4xl md:text-5xl font-extrabold">
          {" "}
          Serviços de Manutenção{" "}
        </h2>{" "}
        <p className="text-[#bdbdbd] mt-3 mb-[60px] text-[16px] max-w-2xl mx-auto">
          {" "}
          Atendimento em BH e Contagem. Orçamento rápido e sem compromisso.{" "}
        </p>{" "}
        <div className="grid gap-[1.3rem] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {" "}
          {servicos.map(item => {
            const url = `https://wa.me/5538991369873?text=${encodeURIComponent(item.mensagem)}`;
            return (
              <div
                key={item.id}
                className="rounded-[20px] overflow-hidden border transition duration-300 hover:-translate-y-[6px] bg-[linear-gradient(180deg,rgba(18,18,26,0.95),rgba(11,11,15,0.95))] border-[rgba(127,61,255,0.25)] hover:shadow-[0_0_40px_rgba(127,61,255,0.4)] flex flex-col"
              >
                {" "}
                {/* IMAGEM */}{" "}
                <Image
                  width={100}
                  height={100}
                  src={item.imagem}
                  alt={item.titulo}
                  className="w-full h-[160px] object-cover"
                />{" "}
                <div className="p-[20px] flex flex-col items-center gap-[20px]">
                  {" "}
                  <h3 className="text-metal text-[20px] mb-[10px] font-bold">
                    {" "}
                    {item.titulo}{" "}
                  </h3>{" "}
                  <p className="text-[#cfcfcf] text-[15px] leading-relaxed mb-3">
                    {" "}
                    {item.descricao}{" "}
                  </p>{" "}
                  <div>
                    <p>
                      {item.porapenas} {item.apartir}
                    </p>
                    <p className="text-[30px] font-bold text-green-400 mb-4">
                      {" "}
                      {item.preco}{" "}
                    </p>
                    <span className="text-sm">{item.giga}</span>{" "}
                    {item.frete}{" "}
                  </div>
                  <Link
                    href={url}
                    target="_blank"
                    className="cta-button whatsapp-track mt-auto"
                  >
                    {" "}
                    Falar com técnico{" "}
                  </Link>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
