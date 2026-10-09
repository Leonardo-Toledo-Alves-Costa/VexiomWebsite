"use client";
// Desloca o conteúdo alguns pixels acompanhando o cursor pela janela inteira.
// Dá sensação de profundidade: o símbolo "flutua" sobre o fundo.
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export function Paralaxe({ children, alcance = 14 }: { children: React.ReactNode; alcance?: number }) {
  const alvoX = useMotionValue(0);
  const alvoY = useMotionValue(0);
  const x = useSpring(alvoX, { stiffness: 60, damping: 18 });
  const y = useSpring(alvoY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const aoMover = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      // -1 a 1, conforme a distância do cursor ao centro da janela
      alvoX.set((e.clientX / window.innerWidth - 0.5) * 2 * alcance);
      alvoY.set((e.clientY / window.innerHeight - 0.5) * 2 * alcance);
    };
    window.addEventListener("pointermove", aoMover);
    return () => window.removeEventListener("pointermove", aoMover);
  }, [alvoX, alvoY, alcance]);

  return <motion.div style={{ x, y }}>{children}</motion.div>;
}
