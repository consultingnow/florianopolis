import { Check, ClipboardList } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { metodologia } from "@/lib/content";

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Metodologia"
          titulo={metodologia.titulo}
          subLinha={metodologia.subLinha}
        />

        {/* Stepper horizontal — desktop / vertical — mobile */}
        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-2 lg:gap-8">
            {metodologia.fases.map((fase) => (
              <li key={fase.numero} className="relative">
                {/* Bolha de número */}
                <div className="relative z-10 mb-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-accent font-display text-lg font-semibold text-white shadow-[0_10px_24px_-10px_rgba(46,94,234,0.8)]">
                    {fase.numero}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Fase {fase.numero}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-navy">
                      {fase.nome}
                    </h3>
                  </div>
                </div>

                <div className="ml-0 rounded-2xl border border-slate-200/80 bg-cloud p-6 sm:p-8 lg:ml-16">
                  <p className="text-sm font-medium text-ink-soft">
                    {fase.titulo}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {fase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] text-ink"
                      >
                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent/10">
                          <Check className="h-3.5 w-3.5 text-accent" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-ink-muted">
                    <ClipboardList className="h-4 w-4" />
                    {fase.duracao}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#diagnostico"
            className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(46,94,234,0.9)] transition-all hover:bg-accent-dark"
          >
            {metodologia.cta}
          </a>
        </div>
      </div>
    </section>
  );
}