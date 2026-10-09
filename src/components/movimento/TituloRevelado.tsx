"use client";
// Título que entra palavra por palavra: cada palavra sobe de dentro de uma
// "janela" com overflow escondido, uma depois da outra.
import { motion } from "motion/react";
import styles from "./TituloRevelado.module.css";

export function TituloRevelado({ texto, atraso = 0 }: { texto: string; atraso?: number }) {
  const palavras = texto.split(" ");
  return (
    <>
      {/* leitores de tela leem a frase inteira; as palavras soltas são decorativas */}
      <span className={styles.leitor}>{texto}</span>
      <span aria-hidden="true">
        {palavras.map((palavra, i) => (
          <span key={i} className={styles.janela}>
            <motion.span
              className={styles.palavra}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: atraso + i * 0.09, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {palavra}
            </motion.span>
            {i < palavras.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </>
  );
}
