// Seção "Como funciona": os quatro passos entre a primeira conversa e a
// entrega. É ela que responde "como eu consigo um projeto desses?".
import { comoFunciona } from "@/content/site";
import { Botao } from "./Botao";
import styles from "./ComoFunciona.module.css";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="secao" aria-labelledby="como-funciona-titulo">
      <div className={`container ${styles.conteudo}`}>
        <header className={styles.titulo}>
          <p className="rotulo rotulo-traco">{comoFunciona.rotulo}</p>
          <h2 id="como-funciona-titulo" className="h1">
            {comoFunciona.titulo}
          </h2>
        </header>

        {/* <ol> porque a ordem dos passos importa */}
        <ol className={styles.passos}>
          {comoFunciona.passos.map((passo) => (
            <li key={passo.numero} className={`${styles.passo} revela`}>
              <span className={`h2 ${styles.numero}`}>{passo.numero}</span>
              <h3 className="h3">{passo.titulo}</h3>
              <p className="corpo">{passo.texto}</p>
            </li>
          ))}
        </ol>

        <Botao href={comoFunciona.acao.href}>{comoFunciona.acao.rotulo}</Botao>
      </div>
    </section>
  );
}
