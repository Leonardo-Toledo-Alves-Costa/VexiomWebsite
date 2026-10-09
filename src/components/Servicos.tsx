// Seção "O que construímos": três cards, um por frente de atuação.
import { servicos, type IconeServico } from "@/content/site";
import { CartaoLuz } from "./movimento/CartaoLuz";
import { Revela } from "./movimento/Revela";
import styles from "./Servicos.module.css";

// Ícones de traço fino, desenhados à mão em SVG (os mesmos do Figma).
const icones: Record<IconeServico, React.ReactNode> = {
  web: (
    <>
      <rect x="4" y="7" width="32" height="26" />
      <path d="M4 14H36M9 21H21M9 26H17" />
      <rect className={styles.detalhe} x="25" y="20" width="6" height="7" />
    </>
  ),
  mobile: (
    <>
      <rect x="11" y="3" width="18" height="34" />
      <path d="M11 9H29M11 30H29" />
      <rect className={styles.detalhe} x="18" y="32" width="4" height="2" />
    </>
  ),
  tecnologia: (
    <>
      <path d="M5 33L16 9L24 26L35 7M5 33H35" />
      <rect className={styles.detalhe} x="14" y="7" width="4" height="4" />
    </>
  ),
};

export function Servicos() {
  return (
    <section id="servicos" className="secao" aria-labelledby="servicos-titulo">
      <div className="container">
        <Revela className={styles.topo}>
          <div className={styles.titulo}>
            <p className="rotulo rotulo-traco">{servicos.rotulo}</p>
            <h2 id="servicos-titulo" className="h1">
              {servicos.titulo}
            </h2>
          </div>
          <p className={`corpo-g ${styles.apoio}`}>{servicos.apoio}</p>
        </Revela>

        <ul className={styles.cards}>
          {servicos.itens.map((item, i) => (
            <CartaoLuz key={item.numero} className={styles.card} atraso={i * 0.12}>
              <div className={styles.cardTopo}>
                <svg
                  className={styles.icone}
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  {icones[item.icone]}
                </svg>
                <span className={styles.numero}>{item.numero}</span>
              </div>
              <span className={styles.acento} aria-hidden="true" />
              <h3 className="h3">{item.titulo}</h3>
              <p className="corpo">{item.texto}</p>
            </CartaoLuz>
          ))}
        </ul>
      </div>
    </section>
  );
}
