export default function ComoFuncionaTrafego() {
  const etapas = [
    {
      numero: "01",
      titulo: "Diagnóstico e Planejamento",
      desc: "Analisamos seu negócio, público-alvo e concorrentes para montar uma estratégia focada em geração de leads e vendas.",
    },
    {
      numero: "02",
      titulo: "Criação das Campanhas",
      desc: "Configuramos campanhas no Google e Meta Ads com segmentação avançada e copy persuasiva.",
    },
    {
      numero: "03",
      titulo: "Otimizações Semanais",
      desc: "Monitoramos os dados e realizamos ajustes constantes para reduzir o custo por lead e aumentar o ROI.",
    },
    {
      numero: "04",
      titulo: "Escala e Crescimento",
      desc: "Depois das campanhas validadas, escalamos o investimento para gerar mais resultados previsíveis.",
    },
  ];

  return (
    <section className="max-w-[1200px] m-auto w-full py-24 px-6 ">
      <div className=" mx-auto flex flex-col gap-[2rem]">
        {/* TÍTULO */}
        <div className="text-center mb-16 gap-[1rem] flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Como funciona o{" "}
            <span className="text-violet-500">tráfego pago?</span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Um processo estratégico e contínuo para gerar clientes todos os dias
            para o seu negócio.
          </p>
        </div>

        {/* ETAPAS */}
        <div className="grid-col grid grid-cols-2 md:grid-cols-2 gap-[20px] m-auto">
          {etapas.map((item, index) => (
            <div
              key={index}
              className="group p-[20px] rounded-[20px] max-w-[500px] border border-[#7f3dff40]
              bg-gradient-to-b from-[#12121a] to-[#0b0b0f]
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(127,61,255,0.35)]
              transition duration-300 flex flex-col gap-[10px]"
            >
              <span className="numero text-violet-500 text-sm font-semibold">
                {item.numero}
              </span>

              <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                {item.titulo}
              </h3>

              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
