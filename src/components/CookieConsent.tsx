"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-6 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Este site utiliza cookies para melhorar sua experiência, analisar
          tráfego e exibir anúncios personalizados. Ao continuar navegando, você
          concorda com nossa{" "}
          <a href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </a>{" "}
          e{" "}
          <a href="/termos-de-uso" className="underline">
            Termos de Uso
          </a>
          .
        </p>

        <button
          onClick={acceptCookies}
          className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
