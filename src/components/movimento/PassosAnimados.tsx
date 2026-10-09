"use client";
// Os quatro passos de "Como funciona", ligados à rolagem: uma linha laranja
// avança pelos passos e cada número acende quando a linha chega nele.
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import styles from "./PassosAnimados.module.css";

type Passo = { numero: string; titulo: string; texto: string };

function ItemPasso({
  passo,
  indice,
  total,
  progresso,
}: {
  passo: Passo;
  indice: number;
  total: number;
  progresso: MotionValue<number>;
}) {
  // cada passo acende numa fatia do progresso: o 1º de 0 a 0,15, o 2º de 0,25 a 0,40...
  const inicio = indice / total;
  const brilho = useTransform(progresso, [inicio, inicio + 0.15], [0.28, 1]);

  return (
    <li className={styles.passo}>
      <motion.span className={`h2 ${styles.numero}`} style={{ opacity: brilho }}>
        {passo.numero}
      </motion.span>
      <h3 className="h3">{passo.titulo}</h3>
      <p className="corpo">{passo.texto}</p>
    </li>
  );
}

export function PassosAnimados({ passos }: { passos: Passo[] }) {
  const ref = useRef<HTMLDivElement>(null);
  // offset: o progresso é 0 quando o topo do bloco chega a 85% da altura da
  // janela e 1 quando o fim do bloco chega a 55%
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const progresso = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  return (
    <div ref={ref} className={styles.bloco}>
      {/* a mesma linha em duas versões; o CSS mostra uma conforme a tela */}
      <motion.div className={styles.linhaHorizontal} style={{ scaleX: progresso }} aria-hidden="true" />
      <motion.div className={styles.linhaVertical} style={{ scaleY: progresso }} aria-hidden="true" />
      <ol className={styles.passos}>
        {passos.map((passo, i) => (
          <ItemPasso
            key={passo.numero}
            passo={passo}
            indice={i}
            total={passos.length}
            progresso={progresso}
          />
        ))}
      </ol>
    </div>
  );
}
