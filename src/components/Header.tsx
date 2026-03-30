"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="container">
          {/* LOGO */}
          <Link href="/" className="logo">
            <Image
              src="/logo.svg"
              alt="Clintin dos Sites"
              width={160}
              height={100}
            />
          </Link>

          {/* MENU */}
          <nav className={`menu ${menuOpen ? "active" : "items-center"}`}>
            <Link href="/" onClick={closeMenu}>
              Websites
            </Link>

            <Link href="/trafego-pago" onClick={closeMenu}>
              Tráfego Pago
            </Link>

            <Link href="/portfolio" onClick={closeMenu}>
              Portfólio
            </Link>

            <Link href="/blog" onClick={closeMenu}>
              Blog
            </Link>

            <Link href="/contato" onClick={closeMenu}>
              Contato
            </Link>

            <Link
              href="/sites-para-construtores"
              className="cta-button"
              onClick={closeMenu}
            >
              Sites para Construtores
            </Link>
          </nav>

          {/* HAMBURGER */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`menu-backdrop ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
}
