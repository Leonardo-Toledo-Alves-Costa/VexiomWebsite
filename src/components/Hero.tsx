// Primeira dobra do site: promessa, texto de apoio, dois botões e o símbolo
// da Vexiom desenhado em linhas (como uma planta técnica), sobre um campo de
// vetores que reage ao cursor.
import { hero } from "@/content/site";
import { Botao } from "./Botao";
import styles from "./Hero.module.css";
import { CampoVetorial } from "./movimento/CampoVetorial";
import { Magnetico } from "./movimento/Magnetico";
import { Paralaxe } from "./movimento/Paralaxe";
import { TituloRevelado } from "./movimento/TituloRevelado";

// As cinco barras do símbolo, nas coordenadas do SVG original da marca.
const barras = (
  <>
    <rect
      x="715.46"
      y="101.36"
      width="243.46"
      height="27.22"
      transform="translate(359.97 812.37) rotate(-63.44)"
    />
    <polygon points="801.5 256.33 668.12 17.59 692.41 4.49 825.79 243.23 801.5 256.33" />
    <polygon points="834.74 78.25 792.35 2.38 768.06 15.47 819.82 108.1 834.74 78.25" />
    <polygon points="856.7 117.56 841.78 147.41 901.44 254.21 925.73 241.11 856.7 117.56" />
    <polygon points="904.46 22.03 889.54 51.89 1001.39 252.09 1025.68 239 904.46 22.03" />
  </>
);

// Posiciona o símbolo (372 x 181 no original) dentro do quadro de 560 x 490.
const ENCAIXE = "translate(40 128) scale(1.29) translate(-654.29 -19.45)";

function SimboloEmLinhas() {
  return (
    <svg className={styles.grafico} viewBox="0 0 560 490" fill="none" aria-hidden="true">
      {/* linhas de construção: as barras inteiras, antes do corte, e as duas
          retas horizontais que marcam onde o símbolo é cortado */}
      <g className={styles.construcao}>
        <g transform={ENCAIXE}>{barras}</g>
        <line x1="0" y1="128" x2="560" y2="128" />
        <line x1="0" y1="362" x2="560" y2="362" />
      </g>

      {/* o símbolo em si: pathLength="1" faz cada contorno "medir 1", o que
          deixa a animação de desenhar igual para todas as barras */}
      <clipPath id="hero-corte">
        <rect x="40" y="128" width="480" height="234" />
      </clipPath>
      <g clipPath="url(#hero-corte)">
        <g transform={ENCAIXE} className={styles.simbolo}>
          <rect
            pathLength={1}
            x="715.46"
            y="101.36"
            width="243.46"
            height="27.22"
            transform="translate(359.97 812.37) rotate(-63.44)"
          />
          <polygon
            pathLength={1}
            points="801.5 256.33 668.12 17.59 692.41 4.49 825.79 243.23 801.5 256.33"
          />
          <polygon
            pathLength={1}
            points="834.74 78.25 792.35 2.38 768.06 15.47 819.82 108.1 834.74 78.25"
          />
          <polygon
            pathLength={1}
            points="856.7 117.56 841.78 147.41 901.44 254.21 925.73 241.11 856.7 117.56"
          />
          <polygon
            pathLength={1}
            points="904.46 22.03 889.54 51.89 1001.39 252.09 1025.68 239 904.46 22.03"
          />
        </g>
        <g transform={ENCAIXE}>
          <rect
            className={styles.pingo}
            x="674.34"
            y="142.95"
            width="27.22"
            height="57.97"
          />
        </g>
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <CampoVetorial />
      <div className={`container ${styles.conteudo}`}>
        <div className={styles.texto}>
          <p className="rotulo rotulo-traco">{hero.rotulo}</p>
          <h1 className={`display ${styles.titulo}`}>
            <TituloRevelado texto={hero.titulo} atraso={0.15} />
          </h1>
          <p className={`corpo-g ${styles.apoio}`}>{hero.apoio}</p>
          <div className={styles.acoes}>
            <Magnetico>
              <Botao href={hero.acaoPrincipal.href}>{hero.acaoPrincipal.rotulo}</Botao>
            </Magnetico>
            <Botao href={hero.acaoSecundaria.href} variante="secundario">
              {hero.acaoSecundaria.rotulo}
            </Botao>
          </div>
        </div>
        <Paralaxe>
          <SimboloEmLinhas />
        </Paralaxe>
      </div>
    </section>
  );
}
