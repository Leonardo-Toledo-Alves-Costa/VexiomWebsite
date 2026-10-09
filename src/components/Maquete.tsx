"use client";
// Maquetes dos modelos de projeto: telas esquemáticas ("wireframes") feitas só
// com blocos de CSS, dentro de uma moldura de navegador ou de celular. Como
// ainda não temos capturas de projetos reais, elas mostram o formato.
import { motion, type Variants } from "motion/react";
import type { TipoMaquete } from "@/content/site";
import styles from "./Maquete.module.css";

// "variants" dão nome aos estados da animação. O pai (conjunto) só diz
// "visivel", e cada filho entra com um pequeno atraso em relação ao anterior.
const conjunto: Variants = {
  oculto: {},
  visivel: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
};

const peca: Variants = {
  oculto: { opacity: 0, y: 10 },
  visivel: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] } },
};

const coluna: Variants = {
  oculto: { scaleY: 0 },
  visivel: { scaleY: 1, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
};

// Um bloco da maquete. As classes vêm do CSS Module pelo nome.
function B({ c, style, v = peca }: { c: string; style?: React.CSSProperties; v?: Variants }) {
  const classes = c
    .split(" ")
    .map((nome) => styles[nome])
    .join(" ");
  return <motion.div className={classes} variants={v} style={style} />;
}

function Menu() {
  return (
    <div className={styles.menu}>
      <B c="b forte" style={{ width: "14%" }} />
      <span className={styles.espaco} />
      <B c="b" style={{ width: "8%" }} />
      <B c="b" style={{ width: "8%" }} />
      <B c="b" style={{ width: "8%" }} />
      <B c="b acento" style={{ width: "12%" }} />
    </div>
  );
}

function Landing() {
  return (
    <>
      <Menu />
      <div className={styles.duas}>
        <div className={styles.pilha}>
          <B c="b forte alto" style={{ width: "90%" }} />
          <B c="b forte alto" style={{ width: "62%" }} />
          <B c="b fino" style={{ width: "80%" }} />
          <B c="b fino" style={{ width: "55%" }} />
          <B c="b acento botao" />
        </div>
        <B c="b imagem" />
      </div>
      <div className={styles.tres}>
        <B c="b cartao" />
        <B c="b cartao" />
        <B c="b cartao" />
      </div>
    </>
  );
}

function Institucional() {
  return (
    <>
      <Menu />
      <B c="b faixa" />
      <div className={styles.duas}>
        <B c="b imagem" />
        <div className={styles.pilha}>
          <B c="b forte alto" style={{ width: "70%" }} />
          <B c="b fino" style={{ width: "95%" }} />
          <B c="b fino" style={{ width: "88%" }} />
          <B c="b fino" style={{ width: "60%" }} />
        </div>
      </div>
      <div className={styles.quatro}>
        <B c="b cartao baixo" />
        <B c="b cartao baixo" />
        <B c="b cartao baixo" />
        <B c="b cartao baixo" />
      </div>
    </>
  );
}

function Painel() {
  const colunas = [38, 62, 45, 80, 58, 92, 70];
  return (
    <div className={styles.painel}>
      <div className={styles.lateral}>
        <B c="b forte" style={{ width: "70%" }} />
        <B c="b acento" />
        <B c="b" />
        <B c="b" />
        <B c="b" />
      </div>
      <div className={styles.principal}>
        <div className={styles.tres}>
          <B c="b cartao baixo" />
          <B c="b cartao baixo" />
          <B c="b cartao baixo" />
        </div>
        <motion.div className={styles.grafico} variants={peca}>
          {colunas.map((altura, i) => (
            <B
              key={i}
              c={i === 5 ? "colunaGrafico acento" : "colunaGrafico"}
              v={coluna}
              style={{ height: `${altura}%` }}
            />
          ))}
        </motion.div>
        <B c="b fino" />
        <B c="b fino" style={{ width: "85%" }} />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <B c="b forte" style={{ width: "45%" }} />
      <B c="b acento destaque" />
      {[0, 1, 2].map((i) => (
        <div key={i} className={styles.itemLista}>
          <B c="b bolinha" />
          <div className={styles.pilha}>
            <B c="b fino" style={{ width: "70%" }} />
            <B c="b fino" style={{ width: "45%" }} />
          </div>
        </div>
      ))}
      <span className={styles.espaco} />
      <div className={styles.abas}>
        <B c="b acento bolinha" />
        <B c="b bolinha" />
        <B c="b bolinha" />
        <B c="b bolinha" />
      </div>
    </>
  );
}

const telas: Record<TipoMaquete, () => React.ReactNode> = {
  landing: Landing,
  institucional: Institucional,
  painel: Painel,
  app: App,
};

export function Maquete({ tipo }: { tipo: TipoMaquete }) {
  const Tela = telas[tipo];

  if (tipo === "app") {
    return (
      <motion.div className={styles.celular} variants={conjunto} initial="oculto" animate="visivel">
        <div className={styles.telaCelular}>
          <Tela />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className={styles.navegador} variants={conjunto} initial="oculto" animate="visivel">
      <div className={styles.barra}>
        <span />
        <span />
        <span />
        <i />
      </div>
      <div className={styles.tela}>
        <Tela />
      </div>
    </motion.div>
  );
}
