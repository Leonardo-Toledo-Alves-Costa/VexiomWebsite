// Faixa de tecnologias que desliza sem parar (um "marquee"). A lista aparece
// duas vezes seguidas: quando a primeira cópia sai inteira pela esquerda, a
// segunda está exatamente no lugar dela, e o loop recomeça sem salto.
import { tecnologias } from "@/content/site";
import styles from "./Faixa.module.css";

export function Faixa() {
  return (
    <div className={styles.faixa} aria-label="Tecnologias com que trabalhamos">
      <div className={styles.trilho}>
        {[0, 1].map((copia) => (
          // a segunda cópia é só visual: aria-hidden evita leitura repetida
          <ul key={copia} className={styles.lista} aria-hidden={copia === 1}>
            {tecnologias.map((nome) => (
              <li key={nome}>{nome}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
