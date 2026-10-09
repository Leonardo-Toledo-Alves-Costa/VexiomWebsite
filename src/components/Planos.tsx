// Seção "Planos": três pontos de partida para o orçamento.
import { planos } from "@/content/site";
import { ListaPlanos } from "./ListaPlanos";
import { Revela } from "./movimento/Revela";
import styles from "./Planos.module.css";

export function Planos() {
  return (
    <section id="planos" className="secao" aria-labelledby="planos-titulo">
      <div className="container">
        <Revela className={styles.topo}>
          <p className="rotulo rotulo-traco">{planos.rotulo}</p>
          <h2 id="planos-titulo" className="h1">
            {planos.titulo}
          </h2>
          <p className={`corpo-g ${styles.apoio}`}>{planos.apoio}</p>
        </Revela>
        <ListaPlanos />
      </div>
    </section>
  );
}
