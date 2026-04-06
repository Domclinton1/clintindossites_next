import QuizHero from "./QuizHero";

export default function HeroConstrutores() {
  return (
    <section className="hero hero-portfolio">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Descubra como construtores, serralheiros e vidraceiros estão
            recebendo mais orçamentos todos os dias pela internet
          </h1>

          <p className="subtitulo">
            Tenha um site profissional focado em conversão e ainda ganhe tráfego
            pago grátis para começar agora.
          </p>

          <a href="https://wa.me/5538991369873" className="cta-button">
            Quero receber mais orçamentos
          </a>
        </div>

        <QuizHero />
      </div>
    </section>
  );
}
