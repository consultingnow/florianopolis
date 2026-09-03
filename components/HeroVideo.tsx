"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Imagem aérea de Florianópolis ao fundo do Hero com efeito de
 * câmera de drone: animação contínua "Ken Burns 3D" (zoom + translação
 * + inclinação de gimbal via rotateX) combinada com parallax no scroll.
 */
export default function HeroVideo() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Parallax no scroll (aplicado no wrapper; a animação do drone roda na imagem)
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = wrapperRef.current;
        if (el) {
          const y = window.scrollY;
          el.style.transform = `translateY(${y * 0.22}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="drone-viewport absolute inset-0 will-change-transform"
    >
      <Image
        src="/fpolis.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="drone-camera object-cover"
      />
    </div>
  );
}


