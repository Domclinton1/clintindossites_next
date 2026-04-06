"use client";

import { useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("cookieConsent");
    }
    return false;
  });

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <section className="fixed bottom-0 left-0 w-full bg-black text-white p-6 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p>
          Este site usa cookies. Veja nossa{" "}
          <a href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </a>
          .
        </p>

        <button
          onClick={acceptCookies}
          className="bg-yellow-500 text-black px-4 py-2 rounded"
        >
          Aceitar
        </button>
      </div>
    </section>
  );
}
