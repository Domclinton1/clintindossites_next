export default function HeroConstrutores() {
  return (
    <section className="hero hero-trafego">
      <div className="hero-text">
        <h1>
          Descubra como construtores, serralheiros e vidraceiros estão recebendo
          mais orçamentos todos os dias pela internet
        </h1>

        <p className="subtitulo">
          Tenha um site profissional focado em conversão e ainda ganhe tráfego
          pago grátis para começar agora.
        </p>

        <a href="https://wa.me/5538991369873" className="cta-button">
          Quero receber mais orçamentos
        </a>
      </div>

      <div id="form-hero">
        <form className="form-whatsapp cta-form" data-origem="hero-obras">
          <h2>Análise gratuita</h2>

          <label>
            Nome
            <input type="text" name="nome" required placeholder="Seu nome" />
          </label>

          <label>
            WhatsApp
            <input
              type="tel"
              name="whatsapp"
              required
              placeholder="(DDD) Seu número"
            />
          </label>

          <label>
            Seu serviço
            <select name="tipo-negocio" required>
              <option value="">Selecione</option>
              <option>Construtor</option>
              <option>Serralheiro</option>
              <option>Vidraceiro</option>
            </select>
          </label>

          <button type="submit">Quero mais clientes</button>
        </form>
      </div>
    </section>
  );
}
