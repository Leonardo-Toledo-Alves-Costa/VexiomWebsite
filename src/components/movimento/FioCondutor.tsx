"use client";
// Linha vertical fixa na margem esquerda que se preenche de laranja conforme
// a página rola. É o "fio" que liga as seções e mostra onde o visitante está.
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import styles from "./FioCondutor.module.css";

export function FioCondutor() {
  // scrollYProgress vai de 0 (topo da página) a 1 (fim da página)
  const { scrollYProgress } = useScroll();
  const progresso = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const topo = useTransform(progresso, (v) => `${v * 100}%`);

  return (
    <div className={styles.trilho} aria-hidden="true">
      <motion.div className={styles.preenchimento} style={{ scaleY: progresso }} />
      <motion.div className={styles.ponta} style={{ top: topo }} />
    </div>
  );
}
