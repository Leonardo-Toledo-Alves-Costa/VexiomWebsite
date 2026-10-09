"use client";
// Faz o conteúdo subir e aparecer quando entra na tela. "atraso" permite
// escalonar vários itens vizinhos (o primeiro entra, depois o segundo...).
import { motion } from "motion/react";

const tags = { div: motion.div, li: motion.li };

type Props = {
  children: React.ReactNode;
  como?: keyof typeof tags;
  atraso?: number;
  className?: string;
};

export function Revela({ children, como = "div", atraso = 0, className }: Props) {
  const Tag = tags[como];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      // once: anima só na primeira vez; margin: espera o item entrar 80px na tela
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay: atraso, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
