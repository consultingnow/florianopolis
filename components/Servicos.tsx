import {
  TrendingUp,
  Receipt,
  Handshake,
  MonitorCog,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { servicos, type Servico } from "@/lib/content";

const icones: Record<Servico["icone"], typeof TrendingUp> = {
  "trending-up": TrendingUp,
  receipt: Receipt,
  handshake: Handshake,
  "monitor-cog": MonitorCog,
};

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Serviços"
          titulo={servicos.titulo}
          subLinha={servicos.subLinha}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.itens.map((item) => {
            const Icone = icones[item.icone];
            return (
              <article
                key={item.id}
                className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-cloud p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icone className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-navy">
                  {item.titulo}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {item.descricao}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#diagnostico"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(46,94,234,0.9)] transition-all hover:bg-accent-dark"
          >
            {servicos.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
