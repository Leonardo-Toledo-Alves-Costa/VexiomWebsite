"use client";
// Vitrine interativa dos modelos de projeto: uma lista à esquerda e, à
// direita, a maquete do item escolhido. A seleção avança sozinha a cada
// poucos segundos e pausa enquanto o visitante interage.
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { projetos } from "@/content/site";
import { usePlano } from "@/contexts/plano";
import { Botao } from "./Botao";
import { Maquete } from "./Maquete";
import { Inclina } from "./movimento/Inclina";
import styles from "./VitrineProjetos.module.css";

export function VitrineProjetos() {
  const itens = projetos.itens;
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const semMovimento = useReducedMotion();
  const { escolher } = usePlano();
  const item = itens[ativo];

  return (
    <div
      className={styles.vitrine}
      onPointerEnter={() => setPausado(true)}
      onPointerLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <ul className={styles.lista}>
        {itens.map((p, i) => {
          const aberto = i === ativo;
          return (
            <li key={p.id} className={`${styles.item} ${aberto ? styles.aberto : ""}`}>
              <button
                type="button"
                className={styles.cabeca}
                aria-expanded={aberto}
                onClick={() => setAtivo(i)}
              >
                <span className={styles.numero}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`h3 ${styles.titulo}`}>{p.titulo}</span>
                <span className={styles.tipo}>{p.tipo}</span>
              </button>

              {/* a troca de altura é feita no CSS (grid 0fr → 1fr) */}
              <div className={styles.detalhe}>
                <div className={styles.miolo}>
                  <p className="corpo">{p.texto}</p>
                  <ul className={styles.tags}>
                    {p.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div>
                    <Botao href="#contato" variante="secundario" onClick={() => escolher(p.plano)}>
                      {projetos.acao}
                    </Botao>
                  </div>
                </div>
              </div>

              {/* barra de tempo: quando a animação CSS termina, passa ao próximo.
                  A "key" recria a barra a cada troca, reiniciando a animação. */}
              {aberto && !semMovimento && (
                <span
                  key={ativo}
                  className={styles.tempo}
                  style={{ animationPlayState: pausado ? "paused" : "running" }}
                  onAnimationEnd={() => setAtivo((ativo + 1) % itens.length)}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ul>

      <div className={styles.palco}>
        <Inclina>
          {/* AnimatePresence deixa a maquete antiga animar a saída antes de a
              nova entrar; mode="wait" faz uma esperar a outra */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.id}
              className={styles.maquete}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <Maquete tipo={item.maquete} />
            </motion.div>
          </AnimatePresence>
        </Inclina>
      </div>
    </div>
  );
}
