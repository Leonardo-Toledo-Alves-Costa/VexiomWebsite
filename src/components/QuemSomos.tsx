// Seção "Quem somos": texto de apresentação e um card para cada sócio.
import { quemSomos } from "@/content/site";
import { CartaoLuz } from "./movimento/CartaoLuz";
import { Revela } from "./movimento/Revela";
import styles from "./QuemSomos.module.css";

export function QuemSomos() {
  return (
    <section id="quem-somos" className="secao" aria-labelledby="quem-somos-titulo">
      <div className={`container ${styles.conteudo}`}>
        <Revela className={styles.texto}>
          <p className="rotulo rotulo-traco">{quemSomos.rotulo}</p>
          <h2 id="quem-somos-titulo" className="h1">
            {quemSomos.titulo}
          </h2>
          <p className="corpo-g">{quemSomos.texto}</p>
        </Revela>

        <ul className={styles.equipe}>
          {/* key={i}: aceitável aqui porque a lista é fixa e nunca reordena */}
          {quemSomos.equipe.map((pessoa, i) => (
            <CartaoLuz key={i} className={styles.pessoa} atraso={i * 0.12}>
              {/* marcador de foto, até termos as fotos reais */}
              <svg className={styles.foto} viewBox="0 0 72 72" fill="none" aria-hidden="true">
                <rect className={styles.fotoBorda} x="0.5" y="0.5" width="71" height="71" />
                <path d="M12 60L30 16L42 44L60 12" stroke="currentColor" strokeWidth="1.5" />
                <rect className={styles.fotoPingo} x="10" y="52" width="6" height="10" />
              </svg>
              <h3 className="h3">{pessoa.nome}</h3>
              <p className="corpo">{pessoa.papel}</p>
            </CartaoLuz>
          ))}
        </ul>
      </div>
    </section>
  );
}
