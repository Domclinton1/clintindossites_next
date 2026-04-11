"use client";

import { useState } from "react";

export default function HeroForm() {
  const [form, setForm] = useState({
    nome: "",
    servico: "",
    orcamento: "",
    endereco: "",
    mensagem: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const texto = `
📩 *Novo orçamento - Site*
👤 *Nome:* ${form.nome}
💼 *Serviço:* ${form.servico}
💰 *Orçamento:* ${form.orcamento}
📍 *Cidade:* ${form.endereco}
📝 *Projeto:* ${form.mensagem}
`.trim();

    const url = `https://wa.me/5538991369873?text=${encodeURIComponent(texto)}`;

    // GOOGLE ADS
    window.gtag?.("event", "conversion", {
      send_to: "AW-17677408224/8Zy7CLmXj5ocEOCvn-1B",
      value: 1.0,
      currency: "BRL",
    });

    // META PIXEL
    window.fbq?.("track", "Lead");

    // Delay para garantir tracking antes de abrir whatsapp
    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  }

  return (
    <form onSubmit={handleSubmit} className="form-whatsapp">
      <h2>Solicite um orçamento</h2>
      <p>
        Preencha o formulário e envie seu pedido para o Whatsapp e receba a
        resposta hoje mesmo
      </p>

      <div>
        <label>Nome</label>
        <input
          name="nome"
          required
          placeholder="Seu nome"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Serviço desejado</label>
        <select name="servico" required onChange={handleChange}>
          <option value="">Selecione</option>
          <option>Website</option>
          <option>E-commerce/Loja Virtual</option>
          <option>Landing Page</option>
          <option>App Mobile</option>
          <option>Tráfego Pago</option>
        </select>
      </div>

      <div>
        <label>Orçamento estimado</label>
        <select name="orcamento" required onChange={handleChange}>
          <option value="">Selecione</option>
          <option>Até R$ 1.000</option>
          <option>R$ 1.000 – R$ 3.000</option>
          <option>R$ 3.000 – R$ 5.000</option>
          <option>Acima de R$ 5.000</option>
        </select>
      </div>

      <div>
        <label>Cidade / Estado</label>
        <input
          name="endereco"
          placeholder="Ex: Belo Horizonte - MG"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Mensagem</label>
        <textarea
          name="mensagem"
          rows={4}
          placeholder="Descreva seu projeto"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="cta-button">
        Enviar para WhatsApp
      </button>
    </form>
  );
}
