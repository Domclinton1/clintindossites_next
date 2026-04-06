import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies do site Clintin dos Sites.",
};

export default function PoliticaCookies() {
  return (
    <main className="max-w-4xl mx-auto px-[80px] py-[80px] mt-[80px]">
      <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>

      <p className="mb-4">
        Este site utiliza cookies para melhorar a experiência do usuário e
        exibir anúncios personalizados.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">O que são Cookies</h2>
      <p className="mb-4">
        Cookies são pequenos arquivos armazenados no seu navegador que ajudam a
        melhorar a navegação e entender como os visitantes utilizam o site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Como usamos Cookies</h2>
      <p className="mb-4">
        Utilizamos cookies para análise de tráfego, marketing e anúncios com
        Google AdSense e Google Analytics.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies de Terceiros</h2>
      <p>
        Podemos utilizar serviços de terceiros como: Google Analytics Google Ads
        Google AdSense, Meta Pixel. Esses serviços podem utilizar cookies para
        coletar informações de navegação.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Desativar Cookies</h2>
      <p>
        Você pode desativar os cookies nas configurações do seu navegador a
        qualquer momento.
      </p>
      <p>
        Ao continuar navegando em nosso site, você concorda com o uso de
        cookies.
      </p>
    </main>
  );
}
