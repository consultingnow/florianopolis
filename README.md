# Consulting Now Florianópolis

Landing page da unidade **Florianópolis** da **Consulting Now**, consultoria em gestão empresarial para PMEs — Cliente do Grupo InterMaster.

Desenvolvida em **Next.js 15 (App Router)**, **TypeScript** e **Tailwind CSS**, com objetivo único de **gerar leads** por meio de um formulário de **Diagnóstico Empresarial Gratuito**.

## ✨ Seções da página

- **Hero** — headline de conversão com estatísticas do grupo (+32 anos, +100 unidades)
- **Para quem é** — Indústria, Comércio e Serviços
- **Metodologia** — 2 fases (Diagnóstico + Projeto), payback projetado em até 12 meses
- **Quem somos** — Grupo InterMaster / Consulting Now
- **Os 5 Pilares** — Estratégia, Processos, Gestão, Gente e Informações
- **Depoimentos** — prova social (placeholders editáveis)
- **Formulário de contato** — principal CTA de conversão
- **Footer** — contatos, redes sociais e aviso de unidade franqueada

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## 🧑‍💻 Commands

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Sobe o build de produção |

## 📝 Editar conteúdos

Todo o texto, dados e contatos ficam centralizados em **`lib/content.ts`** — edite sem tocar em componentes.

## 🎨 Identidade visual

- Paleta: azul-marinho `#12224A`, branco, azul-acinzentado `#EEF1F7` e azul de destaque `#2E5EEA`
- Fontes: **Fraunces** (display/serif) + **Inter** (sans), via `next/font`
- Logos: versão **azul** (`logo_Blue.png`, fundos claros) e **branca** (`logo.png`, fundos escuros)

## 🌐 Deploy

Compatível com **Vercel** (importe o repositório `consultingnow/florianopolis`; o build padrão `next build` é detectado automaticamente).