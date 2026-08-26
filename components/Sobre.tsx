import { Handshake, CalendarClock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { sobre } from "@/lib/content";

const iconesDestaque = [Handshake, CalendarClock];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-2">
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
          </div>

          <div className="grid gap-5">
            {sobre.destaques.map((destaque, i) => {
              const Icone = iconesDestaque[i % iconesDestaque.length];
              return (
                <article
                  key={destaque.titulo}
                  className="rounded-2xl border border-slate-200/80 bg-cloud p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-accent/10 text-accent">
                      <Icone className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-navy">
                        {destaque.titulo}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                        {destaque.texto}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}