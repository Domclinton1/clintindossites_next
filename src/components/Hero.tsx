import HeroForm from "@/components/HeroForm";

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto p-10">
      <div className="hero flex gap-8 justify-center items-center">
        <div className="heroText flex flex-col gap-8 flex-1">
          <h1 className="text-4xl font-title">
            Criamos sites que geram clientes todos os dias
          </h1>

          <p className="text-lg text-gray-300">
            Desenvolvemos sites para empresas, restaurantes, construtores,
            engenheiros, serralheiros, vidraçarias, clínicas, lojas e
            prestadores de serviço.
          </p>

          <div className="flex flex-col gap-6 text-sm text-gray-400">
            <span>✔ Landing Page a partir de R$697</span>
            <span>✔ Site Institucional a partir de R$1.497</span>
            <span>✔ Loja Virtual a partir de R$2.497</span>
          </div>
        </div>

        <div className="flex-1">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
