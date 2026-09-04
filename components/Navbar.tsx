"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { hero, footer } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = footer.navegacao.filter((item) => item.alvo !== "#inicio");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="container-page flex items-center justify-between py-4">
        <a href="#inicio" aria-label="Voltar ao topo" onClick={() => setOpen(false)}>
          <BrandMark />
        </a>

        {/* Links — desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.alvo}
              href={link.alvo}
              className="nav-link text-sm font-medium text-ink-soft transition-colors hover:text-accent"
            >
              {link.rotulo}
            </a>
          ))}
          <a
            href="#diagnostico"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(46,94,234,0.8)] transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            {hero.ctaPrimary}
          </a>
        </div>

        {/* Botão de menu mobile */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-navy transition-colors hover:bg-cloud lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.alvo}
                href={link.alvo}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-cloud hover:text-accent"
              >
                {link.rotulo}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(46,94,234,0.8)]"
            >
              {hero.ctaPrimary}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}