import {
  Target,
  ClipboardList,
  Users,
  GraduationCap,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { pilares } from "@/lib/content";

const icones: Record<string, LucideIcon> = {
  target: Target,
  clipboard: ClipboardList,
  users: Users,
  graduation: GraduationCap,
  monitor: Monitor,
};

export default function Pilares() {
  const itens = pilares.itens;
  const comUltimoCentro = itens.length === 5;

  return (
    <section id="pilares" className="bg-navy py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Nossa abordagem"
          titulo={pilares.titulo}
          subLinha={pilares.subLinha}
          onDark
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((pilar, i) => {
            const Icone = icones[pilar.icone];
            return (
              <article
                key={pilar.id}
                className={`group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/10 ${
                  comUltimoCentro && i === 3 ? "lg:col-start-2" : ""
                }`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icone className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {pilar.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {pilar.descricao}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}