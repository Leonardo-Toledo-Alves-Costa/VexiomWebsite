// Chamada final (id="contato"): o convite para conversar, sobre o padrão de
// listras diagonais da marca.
import { chamadaFinal } from "@/content/site";
import { Botao } from "./Botao";
import styles from "./ChamadaFinal.module.css";

export function ChamadaFinal() {
  return (
    <section id="contato" className={styles.chamada} aria-labelledby="contato-titulo">
      <div className={`container ${styles.conteudo}`}>
        <h2 id="contato-titulo" className="h1">
          {chamadaFinal.titulo}
        </h2>
        <p className={styles.texto}>{chamadaFinal.texto}</p>
        <Botao href={chamadaFinal.acao.href} variante="cta">
          {chamadaFinal.acao.rotulo}
        </Botao>
      </div>
    </section>
  );
}
