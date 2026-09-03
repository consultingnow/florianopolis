import { MessageCircle, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { brand, footer, hero } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-slate-300">
      {/* Barra de CTA final */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-12 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Vamos começar pelo diagnóstico gratuito?
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Entenda o que está travando o resultado da sua empresa.
            </p>
          </div>
          <a
            href="#diagnostico"
            className="flex-none rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(46,94,234,0.9)] transition-all hover:bg-accent-dark"
          >
            {hero.ctaPrimary}
          </a>
        </div>
      </div>

      {/* Corpo do rodapé */}
      <div className="border-t border-white/10">
        <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandMark onDark />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {brand.footerNote}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-accent hover:text-accent-light"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-accent hover:text-accent-light"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#inicio"
                aria-label="Voltar ao topo"
                className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-accent hover:text-accent-light"
              >
                <ArrowUp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Página
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footer.navegacao.map((item) => (
                <li key={item.alvo}>
                  <a
                    href={item.alvo}
                    className="text-sm text-slate-400 transition-colors hover:text-accent-light"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-light"
                >
                  <MessageCircle className="h-4 w-4 text-accent-light" />
                  {brand.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-light"
                >
                  <Mail className="h-4 w-4 text-accent-light" />
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-light"
                >
                  <Mail className="h-4 w-4 text-accent-light" />
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Consulting Now Florianópolis · {brand.name}
          </p>
          <p className="text-xs text-slate-500">
            Unidade franqueada da rede{" "}
            <span className="text-slate-400">Grupo InterMaster</span> · CNPJ da
            unidade
          </p>
        </div>
      </div>
    </footer>
  );
}