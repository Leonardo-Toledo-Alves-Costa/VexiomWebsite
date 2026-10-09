// Seção "Como funciona": os quatro passos entre a primeira conversa e a
// entrega. É ela que responde "como eu consigo um projeto desses?".
import { comoFunciona } from "@/content/site";
import { Botao } from "./Botao";
import styles from "./ComoFunciona.module.css";
import { Magnetico } from "./movimento/Magnetico";
import { PassosAnimados } from "./movimento/PassosAnimados";
import { Revela } from "./movimento/Revela";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="secao" aria-labelledby="como-funciona-titulo">
      <div className={`container ${styles.conteudo}`}>
        <Revela className={styles.titulo}>
          <p className="rotulo rotulo-traco">{comoFunciona.rotulo}</p>
          <h2 id="como-funciona-titulo" className="h1">
            {comoFunciona.titulo}
          </h2>
        </Revela>

        <PassosAnimados passos={comoFunciona.passos} />

        <Magnetico>
          <Botao href={comoFunciona.acao.href}>{comoFunciona.acao.rotulo}</Botao>
        </Magnetico>
      </div>
    </section>
  );
}
