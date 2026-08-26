import { Factory, Store, Briefcase, ArrowRight, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { dores } from "@/lib/content";

const icones: Record<string, LucideIcon> = {
  industry: Factory,
  store: Store,
  briefcase: Briefcase,
};

export default function Dores() {
  return (
    <section id="segmentos" className="bg-cloud py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Para quem é"
          titulo={dores.titulo}
          subLinha={dores.subLinha}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dores.segmentos.map((seg) => {
            const Icon = icones[seg.icone];
            return (
              <article
                key={seg.id}
                className="group rounded-2xl border border-slate-200/70 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="font-display text-5xl font-semibold text-slate-100">
                    {seg.id.slice(0, 1).toUpperCase()}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
                  {seg.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {seg.descricao}
                </p>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {seg.dores.map((dor) => (
                    <li
                      key={dor}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      {dor}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center">
          <a
            href="#diagnostico"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            Quero entender melhor o que está acontecendo na minha empresa
            <ArrowRight className="h-4 w-4" />
          </a>
        </p>
      </div>
    </section>
  );
}