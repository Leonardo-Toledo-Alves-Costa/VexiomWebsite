// Faixa "Nossos axiomas": quatro células separadas por linhas finas.
import { axiomas } from "@/content/site";
import styles from "./Axiomas.module.css";
import { Revela } from "./movimento/Revela";

export function Axiomas() {
  return (
    <section className={styles.axiomas} aria-labelledby="axiomas-titulo">
      <div className={`container ${styles.faixa}`}>
        <Revela className={styles.celula}>
          <h2 id="axiomas-titulo" className="h3">
            {axiomas.titulo}
          </h2>
          <p className="corpo">{axiomas.apoio}</p>
        </Revela>
        {axiomas.itens.map((item, i) => (
          <Revela key={item.codigo} className={styles.celula} atraso={(i + 1) * 0.1}>
            <p className="rotulo">{item.codigo}</p>
            <h3 className="h3">{item.titulo}</h3>
            <p className="corpo">{item.texto}</p>
          </Revela>
        ))}
      </div>
    </section>
  );
}
