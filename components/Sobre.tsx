import Image from "next/image";
import { Handshake, CalendarClock, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { sobre, ceo } from "@/lib/content";

const iconesDestaque = [Handshake, CalendarClock];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Coluna de texto — fluxo de leitura único */}
        <div>
          <SectionHeading
            align="left"
            eyebrow={sobre.eyebrow}
            titulo={sobre.titulo}
            subLinha={sobre.subLinha}
          />

          <div className="mt-6 space-y-4">
            {sobre.paragrafos.map((paragrafo, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-ink-soft sm:text-base"
              >
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Diferenciais — lista compacta com ícone (menos peso visual que cards) */}
          <ul className="mt-8 space-y-4 border-t border-slate-100 pt-8">
            {sobre.destaques.map((destaque, i) => {
              const Icone = iconesDestaque[i % iconesDestaque.length];
              return (
                <li key={destaque.titulo} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy">
                      {destaque.titulo}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {destaque.texto}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Selo + prova social em linha discreta */}
          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-cloud p-5">
            <Image
              src="/selo_30_anos.png"
              alt="Consulting Now - Selo de 30 anos"
              width={96}
              height={96}
              className="h-auto w-20 flex-none object-contain sm:w-24"
            />
            <p className="text-sm leading-relaxed text-ink-soft">
              <strong className="font-semibold text-navy">3 décadas</strong> de
              metodologia comprovada e{" "}
              <strong className="font-semibold text-navy">
                +500 clientes atendidos
              </strong>{" "}
              em todo o Brasil.
            </p>
          </div>
        </div>

        {/* Coluna visual — cartão único do CEO, sem competição de elementos */}
        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-lift">
            <Image
              src={ceo.foto}
              alt={`Foto de ${ceo.nome}, ${ceo.cargo}`}
              width={800}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            {/* Selo posicionado sobre a foto */}
            <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-navy backdrop-blur-sm">
              <BadgeCheck className="h-4 w-4 text-accent" />
              CEO · Grupo InterMaster
            </span>
          </div>
          {/* Nome, cargo e bio abaixo da foto */}
          <figcaption className="mt-5">
            <h3 className="font-display text-2xl font-semibold text-navy">
              {ceo.nome}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {ceo.cargo}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {ceo.bio}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
