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
    >,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const texto = `
📩 *Novo orçamento - Site*
👤 Nome: ${form.nome}
💼 Serviço: ${form.servico}
💰 Orçamento: ${form.orcamento}
📍 Cidade: ${form.endereco}
📝 Projeto: ${form.mensagem}
`.trim();

    const url = `https://wa.me/5538991369873?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="form-whatsapp">
      <h2>Solicite um orçamento</h2>

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
