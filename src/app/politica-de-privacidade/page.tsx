import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do site Clintin dos Sites.",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="max-w-4xl mx-auto px-[80px] py-[80px] mt-[80px]">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>

      <p className="mb-4">
        Esta Política de Privacidade descreve como as informações dos visitantes
        são coletadas, usadas e protegidas no site Clintin dos Sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Coleta de Informações</h2>
      <p className="mb-4">
        Podemos coletar informações como nome, e-mail e telefone quando o
        usuário preenche formulários ou entra em contato via WhatsApp.
      </p>
      <p>
        Também coletamos informações não pessoais como endereço IP, tipo de
        navegador, páginas visitadas e tempo de navegação, com o objetivo de
        melhorar a experiência do usuário.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Uso das Informações</h2>
      <p className="mb-4">
        As informações coletadas podem ser utilizadas para contato, envio de
        orçamentos, melhoria dos serviços e exibição de anúncios através do
        Google AdSense.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        Utilizamos cookies para melhorar a experiência do usuário, analisar o
        tráfego e exibir anúncios personalizados.
      </p>
      <p>
        O usuário pode desativar os cookies nas configurações do seu navegador a
        qualquer momento.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Compartilhamento de Informações
      </h2>
      <p>
        Não vendemos, trocamos ou transferimos suas informações pessoais para
        terceiros. As informações podem ser compartilhadas apenas com
        ferramentas necessárias para o funcionamento do site, como Google
        Analytics, Google Ads e Google AdSense.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Segurança</h2>
      <p>
        Adotamos medidas de segurança para proteger suas informações pessoais.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Consentimento</h2>
      <p>
        Ao utilizar nosso site, você concorda com esta Política de Privacidade.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contato</h2>
      <p>
        Se tiver dúvidas sobre esta política, entre em contato através da página
        de contato do site.
      </p>
    </main>
  );
}
