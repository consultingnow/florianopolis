"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { formulario, brand } from "@/lib/content";

const labels: Record<string, string> = {
  nome: "Nome",
  empresa: "Empresa",
  telefone: "Telefone / WhatsApp",
  email: "E-mail",
  setor: "Setor",
  desafio: "Principal desafio",
};

const placeholders: Record<string, string> = {
  nome: "Seu nome completo",
  empresa: "Nome da sua empresa",
  telefone: "(48) 99999-9999",
  email: "voce@empresa.com.br",
  setor: "Selecione o setor",
  desafio: "Conte em poucas palavras o maior desafio da sua gestão hoje",
};

export default function FormularioContato() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    setor: "",
    desafio: "",
  });

  function atualizar(campo: string, valor: string) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  function aoSubmeter(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrar envio (e-mail / webhook / CRM) aqui.
    // Ex.: enviar `form` para um endpoint em /api/lead ou serviço externo.
    setEnviado(true);
  }

  const inputBase =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <section id="diagnostico" className="bg-cloud py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Texto motivador */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Diagnóstico gratuito"
              titulo={formulario.titulo}
              subLinha={formulario.subLinha}
            />
            <ul className="mt-8 space-y-4">
              {[
                "Avaliação inicial sem custo e sem compromisso",
                "Vista de perto nos pontos que travam o seu crescimento",
                "Proposta com cronograma e retorno (payback) estimado",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-accent/10">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lift sm:p-8">
            {enviado ? (
<div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/10">
                  <CheckCircle2 className="h-9 w-9 text-accent" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
                  {formulario.sucesso.titulo}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  {formulario.sucesso.texto}
                </p>
                <a
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  {formulario.sucesso.ctaWhatsapp}
                </a>
              </div>
            ) : (
              <form onSubmit={aoSubmeter} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={labels.nome}>
                    <input
                      className={inputBase}
                      placeholder={placeholders.nome}
                      value={form.nome}
                      onChange={(e) => atualizar("nome", e.target.value)}
                      required
                    />
                  </Field>
                  <Field label={labels.empresa}>
                    <input
                      className={inputBase}
                      placeholder={placeholders.empresa}
                      value={form.empresa}
                      onChange={(e) => atualizar("empresa", e.target.value)}
                      required
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={labels.telefone}>
                    <input
                      className={inputBase}
                      placeholder={placeholders.telefone}
                      value={form.telefone}
                      onChange={(e) => atualizar("telefone", e.target.value)}
                      type="tel"
                      required
                    />
                  </Field>
                  <Field label={labels.email}>
                    <input
                      className={inputBase}
                      placeholder={placeholders.email}
                      value={form.email}
                      onChange={(e) => atualizar("email", e.target.value)}
                      type="email"
                      required
                    />
                  </Field>
                </div>
<Field label={labels.setor}>
                  <select
                    className={inputBase}
                    value={form.setor}
                    onChange={(e) => atualizar("setor", e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      {placeholders.setor}
                    </option>
                    {formulario.setores.map((setor) => (
                      <option key={setor} value={setor}>
                        {setor}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label={labels.desafio}>
                  <textarea
                    className={`${inputBase} min-h-[96px] resize-y`}
                    placeholder={placeholders.desafio}
                    value={form.desafio}
                    onChange={(e) => atualizar("desafio", e.target.value)}
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white shadow-[0_14px_30px_-12px_rgba(46,94,234,0.9)] transition-all hover:bg-accent-dark hover:shadow-[0_18px_36px_-12px_rgba(46,94,234,1)]"
                >
                  <Send className="h-5 w-5" />
                  {formulario.rotuloBotao}
                </button>

                <p className="text-center text-xs text-ink-muted">
                  Seus dados são usados apenas para o nosso contato. Resposta em
                  até 1 dia útil.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </span>
      {children}
    </label>
  );
}