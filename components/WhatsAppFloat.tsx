import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/content";

/**
 * Botão flutuante de WhatsApp — CTA persistente de conversão.
 * Aparece após o primeiro scroll para não competir com o Hero.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={brand.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fade-up fade-up-4 fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
