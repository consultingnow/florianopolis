import { ArrowRight, Sparkles } from "lucide-react";
import { hero } from "@/lib/content";

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
      {/* Composição geométrica de fundo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 800 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="120" cy="80" r="180" stroke="#EEF1F7" strokeWidth="1" />
          <circle cx="700" cy="420" r="220" stroke="#EEF1F7" strokeWidth="1" />
          <path d="M0 520 200 400 420 520 640 400 800 520" stroke="#EEF1F7" strokeWidth="1" />
          <path d="M0 560 220 460 480 560 700 460 800 540" stroke="#EEF1F7" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-page relative grid items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-40">
        {/* Coluna de texto */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-light/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-light">
            <Sparkles className="h-3.5 w-3.5" />
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]">
            {splitHeadline(hero.headline, hero.headlineHighlight)}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 text-slate-300">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/15 pt-8 sm:gap-6">
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

        {/* Coluna visual / motivo geométrico */}
        <div className="relative hidden lg:block" aria-hidden="true">
          <AbstractCard />
        </div>
      </div>
    </section>
  );
}

function AbstractCard() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Estratégia", w: "h-16" },
            { label: "Processos", w: "h-24" },
            { label: "Gestão", w: "h-20" },
            { label: "Gente", w: "h-28" },
          ].map((item, i) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-navy-light/40 p-4">
              <span
                className={`block rounded-lg ${item.w} w-full ${
                  i % 3 === 0 ? "bg-accent/60" : i % 3 === 1 ? "bg-accent-light/40" : "bg-white/20"
                }`}
              />
              <p className="mt-3 text-sm font-medium text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-5 -right-5 rounded-2xl bg-accent px-6 py-5 shadow-lift">
        <p className="font-display text-3xl font-semibold text-white">+700</p>
        <p className="text-xs font-medium text-white/80">empresas reestruturadas</p>
      </div>
    </div>
  );
}