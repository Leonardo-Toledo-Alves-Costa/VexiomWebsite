// Rodapé: símbolo, direitos, navegação e os canais de contato.
import { contato, navegacao, rodape } from "@/content/site";
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

        <ul className={styles.links} aria-label="Canais de contato">
          <li>
            <a href={`mailto:${contato.email}`}>{contato.email}</a>
          </li>
          {contato.redes.map((rede) => (
            <li key={rede.nome}>
              <a href={rede.href} target="_blank" rel="noopener noreferrer">
                {rede.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
