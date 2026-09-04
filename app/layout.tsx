import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

// Manrope: sans-serif geométrica e suave (sem serifa = visual liso,
// sem o efeito "serrilhado" da Fraunces anterior).
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Consulting Now Florianópolis | Consultoria em Gestão Empresarial para PMEs",
  description:
    "Consultoria Empresarial em Gestão e Processos para PMEs de Indústria, Comércio e Serviços em Florianópolis. Grupo InterMaster com +32 anos de atuação e +100 unidades no Brasil. Diagnóstico Empresarial Gratuito.",
  keywords: [
    "consultoria empresarial Florianópolis",
    "gestão empresarial PMEs",
    "consultoria de gestão",
    "diagnóstico empresarial gratuito",
    "Consulting Now",
    "Grupo InterMaster",
    "consultoria indústria comércio serviços",
  ],
  openGraph: {
    title: "Consulting Now Florianópolis | Diagnóstico Empresarial Gratuito",
    description:
      "Consultoria em gestão empresarial para PMEs de Indústria, Comércio e Serviços. Solicite seu diagnóstico gratuito.",
    type: "website",
    locale: "pt_BR",
    siteName: "Consulting Now Florianópolis",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12224A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}