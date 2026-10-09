"use client";
// Card com um brilho laranja que segue o cursor, na borda e no fundo.
// A posição do mouse vai para duas variáveis CSS (--mx e --my) direto no
// elemento, sem useState: assim o React não redesenha o card a cada pixel.
import { motion } from "motion/react";
import styles from "./CartaoLuz.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  atraso?: number;
};

export function CartaoLuz({ children, className = "", atraso = 0 }: Props) {
  const aoMover = (e: React.PointerEvent<HTMLLIElement>) => {
    const caixa = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - caixa.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - caixa.top}px`);
  };

  return (
    <motion.li
      className={`${styles.luz} ${className}`}
      onPointerMove={aoMover}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay: atraso, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    >
      {children}
    </motion.li>
  );
}
