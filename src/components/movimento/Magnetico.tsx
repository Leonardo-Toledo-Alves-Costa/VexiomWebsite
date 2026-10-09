"use client";
// Efeito magnético: o conteúdo é puxado de leve na direção do cursor e volta
// ao lugar com uma mola quando o mouse sai.
import { motion, useMotionValue, useSpring } from "motion/react";

export function Magnetico({ children, forca = 0.3 }: { children: React.ReactNode; forca?: number }) {
  // Motion values guardam números que mudam a cada quadro sem redesenhar o
  // componente; useSpring suaviza a mudança com física de mola.
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });

  const aoMover = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== "mouse") return; // no toque não faz sentido
    const caixa = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (caixa.left + caixa.width / 2)) * forca);
    y.set((e.clientY - (caixa.top + caixa.height / 2)) * forca);
  };

  const aoSair = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      style={{ display: "inline-block", x, y }}
      onPointerMove={aoMover}
      onPointerLeave={aoSair}
    >
      {children}
    </motion.span>
  );
}
