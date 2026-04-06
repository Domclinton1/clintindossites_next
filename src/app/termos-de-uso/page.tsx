import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site Clintin dos Sites.",
};

export default function TermosDeUso() {
  return (
    <main className="max-w-4xl mx-auto px-[80px] py-[80px] mt-[80px]">
      <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>

      <p className="mb-4">
        Ao acessar o site Clintin dos Sites, você concorda com os seguintes
        termos e condições.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Uso do Site</h2>
      <p className="mb-4">
        O conteúdo deste site é destinado a fornecer informações sobre serviços
        de criação de sites, marketing digital e manutenção de computadores.
      </p>
      <p>
        O usuário concorda em utilizar o site apenas para fins legais e de forma
        que não prejudique o funcionamento do site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Propriedade Intelectual
      </h2>
      <p className="mb-4">
        Todo o conteúdo presente neste site, incluindo textos, imagens,
        logotipos, códigos e layout, é de propriedade do Clintin dos Sites e não
        pode ser copiado ou reproduzido sem autorização.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Serviços</h2>
      <p className="mb-4">
        Os serviços apresentados no site são oferecidos mediante orçamento.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Limitação de Responsabilidade
      </h2>
      <p>
        Não garantimos resultados específicos com marketing digital ou anúncios
        pagos, pois os resultados dependem de diversos fatores como mercado,
        investimento e concorrência.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Links Externos</h2>
      <p>
        O site pode conter links para outros sites, e não somos responsáveis
        pelo conteúdo ou políticas de privacidade desses sites.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Modificações</h2>
      <p>Podemos alterar estes termos a qualquer momento sem aviso prévio.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contato</h2>
      <p>
        Em caso de dúvidas, entre em contato através da página de contato do
        site.
      </p>
    </main>
  );
}
