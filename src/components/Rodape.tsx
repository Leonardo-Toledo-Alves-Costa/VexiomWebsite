// Rodapé: símbolo, direitos e os mesmos links da navegação.
import { navegacao, rodape } from "@/content/site";
import { Simbolo } from "./Logo";
import styles from "./Rodape.module.css";

export function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={`container ${styles.conteudo}`}>
        <div className={styles.marca}>
          <Simbolo className={styles.simbolo} />
          <p>{rodape.direitos}</p>
        </div>
        <nav aria-label="Rodapé">
          <ul className={styles.links}>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
