// Seção "Projetos": modelos do que o cliente pode receber. O cabeçalho é
// renderizado no servidor; a parte interativa fica em VitrineProjetos.
import { projetos } from "@/content/site";
import { Revela } from "./movimento/Revela";
import styles from "./Projetos.module.css";
import { VitrineProjetos } from "./VitrineProjetos";

export function Projetos() {
  return (
    <section id="projetos" className="secao" aria-labelledby="projetos-titulo">
      <div className="container">
        <Revela className={styles.topo}>
          <div className={styles.titulo}>
            <p className="rotulo rotulo-traco">{projetos.rotulo}</p>
            <h2 id="projetos-titulo" className="h1">
              {projetos.titulo}
            </h2>
          </div>
          <p className={`corpo-g ${styles.apoio}`}>{projetos.apoio}</p>
        </Revela>
        <Revela>
          <VitrineProjetos />
        </Revela>
      </div>
    </section>
  );
}
