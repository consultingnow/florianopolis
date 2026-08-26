export default function SectionHeading({
  eyebrow,
  titulo,
  subLinha,
  align = "center",
  onDark = false,
}: {
  eyebrow?: string;
  titulo: string;
  subLinha?: string;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <span
          className={`label-eyebrow ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl ${
          onDark ? "text-white" : "text-navy"
        }`}
      >
        {titulo}
      </h2>
      {subLinha && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            onDark ? "text-slate-300" : "text-ink-soft"
          }`}
        >
          {subLinha}
        </p>
      )}
    </div>
  );
}