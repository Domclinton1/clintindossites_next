import Image from "next/image";
import Link from "next/link";

export default function OfertaConstrutores() {
  return (
    <section className="oferta" id="oferta">
      <div className="container">
        <h2 className="text-metal">Esse método é para você que:</h2>
        <div className="oferta-box">
          <ul className="oferta-lsta-2 bonus">
            <li className="card-servico">
              <h3>É profissional da construção civil</h3>
              <p className="subtitulo">
                Ideal para vidraçarias, serralheria de alumínio, construtores,
                pedreiros, pintores e demais profissionais da construção civil
              </p>
            </li>
            <li className="card-servico">
              <h3>Quer se livrar de indicações</h3>
              <p className="subtitulo">
                Só ganha dinheiro se algum conhecido indicar você para quem
                precisa do seu serviço. Indicações é bom, mas não é a melhor
                opção para aumentar as vendas.
              </p>
            </li>
            <li className="card-servico">
              <h3>Aumentar as vendas do seu negocio</h3>
              <p className="subtitulo">
                Conseguir volume grande de orçamentos de pequenas e grandes
                obras permitindo melhor liberdade financeira e progresso do seu
                empreendimento
              </p>
            </li>
          </ul>
          <div className="cta-oferta">
            <h3>O que eu vou receber e quanto custa esse investimento?</h3>
            <p>
              Esse método válidado te oferece uma estrutura profissional de
              vendas para grandes construtores e está com uma oferta especial
              para construtores que querem conseguir mais orçamentos.
            </p>
            <div className="cta-oferta-boxes">
              <div className="cta-oferta-box" id="valor-site">
                <h3>Valor do site:</h3>
                <ul>
                  <li>Website profissional focado em conversão</li>
                  <li>Pronto para receber orçamento de obras</li>
                  <li>Estrutura pronta para anúncios</li>
                  <li>Integração com Whatsapp</li>
                  <li>Google Meu Negócio</li>
                  <li>Integração com Pixel Meta e Google Tags</li>
                  <li>Indexação do site no Google</li>
                  <li>
                    <strong>Domínio grátis por 1 ano</strong>
                  </li>
                </ul>
                <p>
                  Por apenas: <br />
                  <strong id="base"> R$ 1.997,00 </strong>
                </p>
                <Link
                  href="https://wa.me/5538991369873?text=Olá,%20tenho%20interesse%20em%20adquirir%20um%20website%20para%20construtores%20por%20R$1.997,00%20para%20gerar%20orçamentos.%20Pode%20me%20explicar%20como%20funciona?"
                  className="cta-button"
                  id="apenas-site"
                >
                  Quero adquirir apenas o Website
                </Link>
              </div>
              <div className="cta-oferta-box">
                <h3>Valor do Tráfego Pago:</h3>
                <div className="px-[30px] flex flex-col gap-[5px]">
                  <p>
                    {" "}
                    Campanha avulsa: <br />
                    <strong id="base">R$ 750,00</strong>
                  </p>
                  <ul>
                    <li>Anúncios no Google e Meta</li>
                    <li>Otimização Inicial</li>
                    <li>Relatório do anúncio</li>
                  </ul>
                  <Link
                    href="https://wa.me/5538991369873?text=Olá,%20tenho%20interesse%20na%20campanha%20de%20tráfego%20pago%20avulsa%20de%20R$600%20para%20gerar%20orçamentos.%20Pode%20me%20explicar%20como%20funciona?"
                    className="cta-button"
                    id="trf-avulso"
                  >
                    Contratar Avulso
                  </Link>
                </div>

                <div className="p-[10px] flex flex-col gap-[5px]">
                  <p>
                    {" "}
                    Mensalidade: <br />
                    <strong id="base">R$ 1.997,00</strong>
                    <br />
                  </p>
                  <ul>
                    <li>Gestão mensal de anúncios</li>
                    <li>Criação ilimitada de campanhas</li>
                    <li>Relatórios semanais</li>
                    <li>Google ADS + Facebook ADS</li>
                  </ul>
                  <Link
                    href="https://wa.me/5538991369873?text=Olá,%20quero%20contratar%20a%20gestão%20mensal%20de%20tráfego%20pago%20de%20R$1200%20para%20gerar%20mais%20orçamentos%20para%20minha%20empresa.%20Pode%20me%20passar%20os%20detalhes?"
                    className="cta-button"
                    id="trf-mensal"
                  >
                    Contratar Mensalidade
                  </Link>
                </div>
              </div>
              {/*<div className="cta-oferta-box">
                <h3>Manual de Orçamentos</h3>
                <ul>
                  <li>
                    <strong>Aprenda na prática:</strong>
                  </li>
                  <li>Anúncios Google ADS</li>
                  <li>Anúncios Facebook/Instagram</li>
                  <li>Domine estratégias avançadas</li>
                  <li>Vendas todo dia</li>
                </ul>
                <p id="base">R$ 297,00</p>

                <Link
                  href="https://wa.me/5538991369873?text=Olá,%20tenho%20interesse%20no%20Manual%20de%20Orçamentos%20de%20R$397.%20Quero%20aprender%20a%20gerar%20clientes%20todos%20os%20dias.%20Como%20faço%20para%20comprar?"
                  className="cta-button"
                  id="manual"
                >
                  COMPRAR MANUAL
                </Link>
              </div>*/}
            </div>
            <div className="cta-price">
              <h3>
                Mas com essa oferta especial você leva o ouro no preço de
                bronze:
              </h3>
              <p>
                <strong>Soma dos valores:</strong>
              </p>

              <p>
                R$ 1.997,00(Site) + R$750,00(ADS Avulso) ={" "}
                <strong>R$2.747,00</strong>
                <br />
                <em>(Oferta com 20% de desconto)</em>
              </p>

              <h3>Tudo isso com um desconto especial você paga apenas:</h3>
              <p id="principal">
                <strong>R$2.197,00</strong>
              </p>

              <p>
                <strong>
                  Quer alavancar as vendas e conseguir muitas obras? Clique no
                  botão abaixo e peça sua máquina de orçamentos agora!
                </strong>
              </p>
              <Link
                className="cta-button"
                href="https://wa.me/5538991369873?text=Olá,%20quero%20aproveitar%20a%20oferta%20completa%20da%20máquina%20de%20orçamentos%20por%20R$2.497.%20Quero%20mais%20clientes%20e%20fechar%20mais%20obras.%20Pode%20me%20atender?"
                id="cta-principal"
              >
                QUERO ADQUIRIR MINHA MÁQUINA DE ORÇAMENTOS AGORA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
