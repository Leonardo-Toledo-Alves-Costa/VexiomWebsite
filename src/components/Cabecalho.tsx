// Cabeçalho fixo no topo: logo, navegação e botão de contato.
// No celular a navegação vira um menu que abre e fecha (MenuMobile).
import { navegacao } from "@/content/site";
import { Botao } from "./Botao";
import styles from "./Cabecalho.module.css";
import { LogoHorizontal } from "./Logo";
import { MenuMobile } from "./MenuMobile";

export function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <div className={`container ${styles.conteudo}`}>
        <a href="#topo" className={styles.logo} aria-label="Vexiom, voltar ao início">
          <LogoHorizontal />
        </a>

        <nav className={styles.nav} aria-label="Principal">
          <ul>
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.acao}>
          <Botao href="#contato" variante="secundario">
            Fale com a gente
          </Botao>
        </div>

        <MenuMobile itens={navegacao} />
      </div>
    </header>
  );
}
