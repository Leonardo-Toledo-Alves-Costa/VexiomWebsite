"use client";
// Inclina o conteúdo em 3D conforme a posição do cursor sobre ele, como um
// cartão segurado na mão, e passa um reflexo de luz por cima.
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import styles from "./Inclina.module.css";

const MOLA = { stiffness: 160, damping: 18 };

export function Inclina({ children, graus = 7 }: { children: React.ReactNode; graus?: number }) {
  const rotateX = useSpring(useMotionValue(0), MOLA);
  const rotateY = useSpring(useMotionValue(0), MOLA);
  const brilhoX = useMotionValue(50);
  const brilhoY = useMotionValue(50);
  // useMotionTemplate monta um texto CSS a partir de motion values
  const reflexo = useMotionTemplate`radial-gradient(420px circle at ${brilhoX}% ${brilhoY}%, rgb(255 255 255 / 0.1), transparent 60%)`;

  const aoMover = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const caixa = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - caixa.left) / caixa.width; // 0 a 1
    const py = (e.clientY - caixa.top) / caixa.height;
    // cursor à direita gira em torno do eixo Y; cursor em cima, em torno do X
    rotateY.set((px - 0.5) * 2 * graus);
    rotateX.set((0.5 - py) * 2 * graus);
    brilhoX.set(px * 100);
    brilhoY.set(py * 100);
  };

  const aoSair = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className={styles.palco} onPointerMove={aoMover} onPointerLeave={aoSair}>
      <motion.div className={styles.peca} style={{ rotateX, rotateY }}>
        {children}
        <motion.div className={styles.reflexo} style={{ background: reflexo }} aria-hidden="true" />
      </motion.div>
    </div>
  );
}
