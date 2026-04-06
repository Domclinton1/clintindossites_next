import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container p-[0px] ">
        <div className="footer-top ">
          <div className="footer-brand">
            <h3 className="text-metal">Clintin dos Sites</h3>

            <p>
              Desenvolvimento de sites, landing pages, e-commerce, aplicativos e
              tráfego pago.
            </p>

            <span className="global-badge">
              🌎 Atendemos Brasil e Estados Unidos
            </span>
          </div>
          <div>
            <Image
              src="/logo.svg"
              alt="Clintin dos Sites"
              width={160}
              height={100}
            />
          </div>
          <div className="footer-links">
            <h4>Links rápidos</h4>
            <Link href="/">Websites</Link>
            <Link href="/trafego-Pago">Tráfego Pago</Link>
            <Link href="/portfolio">Portfólio</Link>
            <Link href="/sitesparaconstrutores">Sites para Construtores</Link>
            <Link href="/blog">Blog</Link>

            <Link href="/contato">Contato</Link>
          </div>

          <div className="footer-social">
            <h4>Redes sociais</h4>

            <div className="social-icons">
              <a href="https://github.com/Domclinton1" target="_blank">
                <span className="icon icon-github"></span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61576133499522"
                target="_blank"
              >
                <span className="icon icon-facebook"></span>
              </a>

              <a
                href="https://www.linkedin.com/in/clintindos-sites/"
                target="_blank"
              >
                <span className="icon icon-linkedin"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Clintin dos Sites. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
