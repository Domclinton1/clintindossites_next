import Link from "next/link";

export default function HeroManutencaoPC() {
  return (
    <section className="hero heroManutencao">
      <div className="heroManuText">
        <h1>
          Seu computador estragou? <br /> Clintin dos Sites consertou!
        </h1>
        <p>Assistência Técnica de Computadores e Notebooks em Belo Horizonte</p>
        <p>Entrega no mesmo dia ou em até 24 horas</p>
        <p>Atendimento a domicílio</p>

        <Link className="cta-button" href="https://wa.me/5538991369873">
          Clique e solicite orçamento no Whatsapp
        </Link>
      </div>
    </section>
  );
}
