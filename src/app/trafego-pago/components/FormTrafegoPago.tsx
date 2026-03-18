"use client";
import { useState } from "react";

export default function FormTrafegoPago() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      nome: form.nome.value,
      whatsapp: form.whatsapp.value,
      negocio: form.negocio.value,
      faturamento: form.faturamento.value,
      objetivo: form.objetivo.value,
      anuncia: form.anuncia.value,
      investimento: form.investimento.value,
      mensagem: form.mensagem.value,
    };

    const texto = `
🚀 *NOVO LEAD — TRÁFEGO PAGO*

👤 Nome: ${data.nome}
📱 WhatsApp: ${data.whatsapp}
🏢 Negócio: ${data.negocio}
💰 Faturamento: ${data.faturamento}

🎯 Objetivo: ${data.objetivo}
📢 Já anuncia? ${data.anuncia}
💸 Investimento mensal: ${data.investimento}

📝 Mensagem:
${data.mensagem}
`;

    const url = `https://wa.me/5538991369873?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="form-whatsapp">
      <h3 className="text-2xl font-bold text-white text-center">
        Solicitar Diagnóstico Gratuito
      </h3>

      {/* NOME */}
      <input name="nome" required placeholder="Seu nome" className="input" />

      {/* WHATS */}
      <input
        name="whatsapp"
        required
        placeholder="Seu WhatsApp"
        className="input"
      />

      {/* NEGÓCIO */}
      <input
        name="negocio"
        required
        placeholder="Qual é o seu negócio?"
        className="input"
      />

      {/* FATURAMENTO */}
      <select name="faturamento" required className="input">
        <option value="">Faturamento médio mensal</option>
        <option>Até R$5 mil</option>
        <option>R$5 mil – R$10 mil</option>
        <option>R$10 mil – R$30 mil</option>
        <option>Acima de R$30 mil</option>
      </select>

      {/* OBJETIVO */}
      <select name="objetivo" required className="input">
        <option value="">Qual seu principal objetivo?</option>
        <option>Gerar mais leads</option>
        <option>Vender mais pelo WhatsApp</option>
        <option>Aumentar faturamento</option>
        <option>Fortalecer minha marca</option>
      </select>

      {/* JÁ ANUNCIA */}
      <select name="anuncia" required className="input">
        <option value="">Já anuncia hoje?</option>
        <option>Não</option>
        <option>Sim, mas não tenho resultados</option>
        <option>Sim, quero escalar</option>
      </select>

      {/* INVESTIMENTO */}
      <select name="investimento" required className="input">
        <option value="">Investimento mensal em anúncios</option>
        <option>R$500 – R$1.000</option>
        <option>R$1.000 – R$3.000</option>
        <option>R$3.000 – R$5.000</option>
        <option>Acima de R$5.000</option>
      </select>

      {/* MENSAGEM */}
      <textarea
        name="mensagem"
        rows={4}
        placeholder="Fale mais sobre seu projeto (opcional)"
        className="input"
      />

      <button className="cta-button mt-2" disabled={loading}>
        {loading ? "Enviando..." : "Receber Diagnóstico no WhatsApp"}
      </button>
    </form>
  );
}
