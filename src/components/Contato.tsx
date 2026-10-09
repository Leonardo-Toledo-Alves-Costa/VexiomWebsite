"use client";
// Seção de contato (id="contato"). Lê do contexto o plano que o visitante
// escolheu e adapta o título e o e-mail que será aberto.
import { AnimatePresence, motion } from "motion/react";
import { contato, planos } from "@/content/site";
import { usePlano } from "@/contexts/plano";
import { Botao } from "./Botao";
import styles from "./Contato.module.css";
import { Magnetico } from "./movimento/Magnetico";
import { Revela } from "./movimento/Revela";

export function Contato() {
  const { planoId } = usePlano();
  const plano = planos.itens.find((p) => p.id === planoId);

  const titulo = plano ? contato.tituloComPlano.replace("{plano}", plano.nome) : contato.titulo;

  // mailto: abre o programa de e-mail do visitante com assunto e texto já
  // preenchidos. encodeURIComponent troca espaços e acentos por códigos que
  // podem ir numa URL.
  const assunto = plano ? `Quero o plano ${plano.nome}` : "Quero conversar sobre um projeto";
  const corpo = plano
    ? `Olá, Vexiom! Tenho interesse no plano ${plano.nome}.\n\nMeu projeto: `
    : "Olá, Vexiom! Quero conversar sobre um projeto.\n\nMinha ideia: ";
  const mailto = `mailto:${contato.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

  return (
    <section id="contato" className={styles.chamada} aria-labelledby="contato-titulo">
      <Revela className={`container ${styles.conteudo}`}>
        <div className={styles.principal}>
          <p className={styles.rotulo}>{contato.rotulo}</p>

          {/* quando o plano muda, o título antigo sai e o novo entra */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.h2
              key={titulo}
              id="contato-titulo"
              className="h1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
            >
              {titulo}
            </motion.h2>
          </AnimatePresence>

          <p className={styles.texto}>{contato.texto}</p>

          <div className={styles.acoes}>
            <Magnetico>
              <Botao href={mailto} variante="cta">
                {contato.acao}
              </Botao>
            </Magnetico>
            <a className={styles.email} href={mailto}>
              {contato.email}
            </a>
          </div>
        </div>

        <ul className={styles.redes}>
          {contato.redes.map((rede) => (
            <li key={rede.nome}>
              {/* target="_blank" abre em nova aba; rel="noopener" impede a
                  página aberta de controlar a nossa */}
              <a href={rede.href} target="_blank" rel="noopener noreferrer">
                <span>{rede.nome}</span>
                <strong>{rede.usuario}</strong>
              </a>
            </li>
          ))}
        </ul>
      </Revela>
    </section>
  );
}
