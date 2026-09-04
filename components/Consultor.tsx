"use client";

import { useEffect, useRef, useState } from "react";
import {
  SearchCheck,
  Rocket,
  TrendingUp,
  MessageCircle,
  Instagram,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { consultor, brand } from "@/lib/content";

const iconesFoco: Record<string, typeof SearchCheck> = {
  search: SearchCheck,
  rocket: Rocket,
  "trending-up": TrendingUp,
};

/**
 * Seção do consultor com revelação no scroll: os elementos surgem com
 * fade + slide quando entram na viewport (IntersectionObserver).
 */
export default function Consultor() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);
  const [fotoFalhou, setFotoFalhou] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mostrar = (atraso: string) =>
    `transition-all duration-1000 ease-out ${atraso} ${
      visivel ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`;

  return (
    <section
      id="consultor"
      ref={sectionRef}
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Foto — revela primeiro, com zoom suave (abaixo do texto no mobile) */}
        <div className={`relative order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-none ${mostrar("")}`}>
          <div
            className={`relative overflow-hidden rounded-3xl border border-white/10 shadow-lift transition-transform duration-1000 ${
              visivel ? "scale-100" : "scale-90"
            }`}
          >
            {fotoFalhou ? (
              <div className="grid aspect-[4/5] w-full place-items-center bg-navy-light">
                <span className="font-display text-7xl font-semibold text-accent-light">
                  {consultor.nome
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={consultor.foto}
                alt={`Foto de ${consultor.nome}, ${consultor.cargo}`}
                onError={() => setFotoFalhou(true)}
                className="aspect-[4/5] w-full object-cover"
              />
            )}
          </div>
          <div
            className={`absolute inset-x-4 -bottom-5 max-w-sm rounded-2xl bg-accent px-5 py-3 text-center shadow-lift sm:inset-x-auto sm:left-1/2 sm:w-max sm:max-w-md sm:-translate-x-1/2 ${mostrar(
              "delay-300",
            )}`}
          >
            <p className="text-sm font-semibold text-white">
              {consultor.nome}
            </p>
            <p className="text-xs text-white/80">{consultor.cargo}</p>
            <p className="mt-1 text-[11px] leading-snug text-white/70">
              {consultor.credenciais}
            </p>
          </div>
        </div>

        {/* Texto — pessoa, método e ação */}
        <div className="order-1 lg:order-2">
          <div className={mostrar("delay-150")}>
            <SectionHeading
              onDark
              align="left"
              eyebrow={consultor.eyebrow}
              titulo={consultor.titulo}
            />
          </div>
          <div className="mt-6 space-y-4">
            {consultor.bio.map((paragrafo, i) => (
              <p
                key={i}
                className={`text-[15px] leading-relaxed text-slate-300 sm:text-base ${mostrar(
                  i === 0 ? "delay-300" : "delay-500",
                )}`}
              >
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Pilares de atuação — escaneáveis em 3 segundos */}
          <ul className="mt-9 grid gap-4 sm:grid-cols-3">
            {consultor.focos.map((foco, i) => {
              const Icone = iconesFoco[foco.icone] ?? SearchCheck;
              return (
                <li
                  key={foco.titulo}
                  className={`rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm ${mostrar(
                    i === 0 ? "delay-500" : i === 1 ? "delay-700" : "delay-1000",
                  )}`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-accent-light">
                    <Icone className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {foco.titulo}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                    {foco.texto}
                  </p>
                </li>
              );
            })}
          </ul>

          {/* CTAs — ação primária e secundária bem distinguíveis */}
          <div
            className={`mt-9 flex flex-col gap-3 sm:flex-row sm:items-center ${mostrar(
              "delay-1000",
            )}`}
          >
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(46,94,234,0.9)] transition-all hover:bg-accent-dark"
            >
              <MessageCircle className="h-4 w-4" />
              {consultor.ctaPrimario}
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent-light"
            >
              <Instagram className="h-4 w-4" />
              {consultor.instagramCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
