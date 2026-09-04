import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { depoimentos } from "@/lib/content";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Prova social"
          titulo={depoimentos.titulo}
          subLinha={depoimentos.subLinha}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {depoimentos.list.map((dep) => (
            <figure
              key={dep.id}
              className="relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card"
            >
              <Quote className="h-9 w-9 text-accent/25" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                “{dep.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent">
                  {dep.nome.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{dep.nome}</p>
                  <p className="text-xs font-medium text-ink-muted">{dep.cargo}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Números de destaque */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {depoimentos.numerosDestaque.map((num) => (
            <div key={num.label} className="bg-navy p-8 text-center">
              <p className="font-display text-4xl font-semibold text-accent-light">
                {num.valor}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300">
                {num.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}