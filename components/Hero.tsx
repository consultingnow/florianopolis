import { ArrowRight, Sparkles } from "lucide-react";
import { hero } from "@/lib/content";
import HeroVideo from "@/components/HeroVideo";

function splitHeadline(headline: string, highlight: string) {
  const lower = headline.toLowerCase();
  const start = lower.indexOf(highlight.toLowerCase());

  if (start === -1) return headline;

  const before = headline.slice(0, start);
  const word = headline.slice(start, start + highlight.length);
  const after = headline.slice(start + highlight.length);

  // Preserva o "." final fora do destaque quando existir
  const trailing = after.replace(/[.,;!?]+$/, "");
  const punct = after.slice(trailing.length);

  return (
    <>
      {before}
      <span className="text-accent">{word}</span>
      {trailing}
      {punct}
    </>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy">
      {/* Vídeo aéreo de Florianópolis com parallax + overlay escuro */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/90" />
      </div>

      <div className="container-page relative pb-20 pt-32 lg:pb-28 lg:pt-40">
        {/* Coluna de texto */}
        <div>
          <span className="fade-up fade-up-1 inline-flex items-center gap-2 rounded-full border border-accent-light/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-light">
            <Sparkles className="h-3.5 w-3.5" />
            {hero.badge}
          </span>

          <h1 className="fade-up fade-up-2 mt-6 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.06] lg:text-[3.4rem]">
            {splitHeadline(hero.headline, hero.headlineHighlight)}
          </h1>

          <p className="fade-up fade-up-3 mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {hero.subheadline}
          </p>

          <div className="fade-up fade-up-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(46,94,234,0.9)] transition-all hover:bg-accent-dark hover:shadow-[0_18px_36px_-12px_rgba(46,94,234,1)]"
            >
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          {/* Estatísticas */}
          <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:gap-6 lg:grid-cols-4">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm font-medium text-slate-400 sm:text-[13px]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}