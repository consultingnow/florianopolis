"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

/**
 * Infográfico da metodologia com lightbox: clique para abrir em tela cheia,
 * zoom (+/-, scroll do mouse, duplo clique) e arrastar para navegar pelas
 * etapas. Pensado principalmente para leitura no celular.
 */
export default function MetodologiaImagem() {
  const [aberto, setAberto] = useState(false);
  const [escala, setEscala] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const arrastando = useRef(false);
  const ultimo = useRef({ x: 0, y: 0 });

  const fechar = useCallback(() => {
    setAberto(false);
    setEscala(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const limitarEscala = (v: number) => Math.min(4, Math.max(1, v));

  const ampliar = () => setEscala((s) => limitarEscala(s * 1.4));
  const reduzir = () => {
    setEscala((s) => {
      const nova = limitarEscala(s / 1.4);
      if (nova === 1) setOffset({ x: 0, y: 0 });
      return nova;
    });
  };

  // Trava o scroll do body e fecha com ESC enquanto o lightbox está aberto
  useEffect(() => {
    if (!aberto) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto, fechar]);

  // Arrastar (mouse e toque) para navegar pelo infográfico ampliado
  const iniciarArrasto = (x: number, y: number) => {
    arrastando.current = true;
    ultimo.current = { x, y };
  };
  const moverArrasto = (x: number, y: number) => {
    if (!arrastando.current || escala === 1) return;
    setOffset((o) => ({
      x: o.x + (x - ultimo.current.x),
      y: o.y + (y - ultimo.current.y),
    }));
    ultimo.current = { x, y };
  };
  const terminarArrasto = () => {
    arrastando.current = false;
  };

  return (
    <>
      {/* Miniatura clicável */}
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-label="Ampliar infográfico da metodologia"
        className="group relative mx-auto block w-full max-w-4xl cursor-zoom-in overflow-hidden rounded-xl"
      >
        <Image
          src="/metodologia.png"
          alt="Infográfico da metodologia Consulting Now: Diagnóstico e Projeto"
          width={1200}
          height={630}
          className="h-auto w-full object-contain"
        />
        <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-navy/0 pb-4 transition-colors group-hover:bg-navy/10">
          <span className="inline-flex items-center gap-2 rounded-full bg-navy/85 px-4 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            <Maximize2 className="h-4 w-4" />
            Toque para ampliar
          </span>
        </span>
      </button>


      {/* Lightbox em tela cheia */}
      {aberto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Infográfico da metodologia ampliado"
          className="fixed inset-0 z-[60] flex flex-col bg-navy-deep/95 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) fechar();
          }}
        >
          {/* Barra de controles */}
          <div className="flex items-center justify-between gap-2 p-4">
            <p className="text-xs font-medium text-slate-300 sm:text-sm">
              Arraste ou use os botões para explorar as etapas
            </p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={reduzir} aria-label="Reduzir zoom" className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10">
                <ZoomOut className="h-5 w-5" />
              </button>
              <button type="button" onClick={ampliar} aria-label="Ampliar zoom" className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10">
                <ZoomIn className="h-5 w-5" />
              </button>
              <button type="button" onClick={fechar} aria-label="Fechar" className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Área da imagem — pan por arraste, zoom por duplo clique/scroll */}
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden"
            onMouseDown={(e) => iniciarArrasto(e.clientX, e.clientY)}
            onMouseMove={(e) => moverArrasto(e.clientX, e.clientY)}
            onMouseUp={terminarArrasto}
            onMouseLeave={terminarArrasto}
            onTouchStart={(e) =>
              iniciarArrasto(e.touches[0].clientX, e.touches[0].clientY)
            }
            onTouchMove={(e) =>
              moverArrasto(e.touches[0].clientX, e.touches[0].clientY)
            }
            onTouchEnd={terminarArrasto}
            onDoubleClick={() => (escala > 1 ? reduzir() : setEscala(2.2))}
            onWheel={(e) => (e.deltaY < 0 ? ampliar() : reduzir())}
          >
            <Image
              src="/metodologia.png"
              alt="Infográfico da metodologia Consulting Now: Diagnóstico e Projeto"
              width={1200}
              height={630}
              className="max-h-full w-auto max-w-full select-none object-contain transition-transform duration-200"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${escala})`,
                cursor: escala > 1 ? "grab" : "zoom-in",
              }}
              draggable={false}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
