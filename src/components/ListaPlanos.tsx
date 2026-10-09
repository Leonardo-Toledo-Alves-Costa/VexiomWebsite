"use client";
// Os cards dos planos. "Escolher este plano" faz duas coisas: grava o plano
// no contexto (para a seção de contato saber qual foi) e, por ser um link
// para #contato, leva o visitante até lá.
import { planos } from "@/content/site";
import { usePlano } from "@/contexts/plano";
import { Botao } from "./Botao";
import { CartaoLuz } from "./movimento/CartaoLuz";
import styles from "./Planos.module.css";

export function ListaPlanos() {
  const { planoId, escolher } = usePlano();

  return (
    <ul className={styles.lista}>
      {planos.itens.map((plano, i) => {
        const classes = [
          styles.plano,
          plano.destaque ? styles.destaque : "",
          plano.id === planoId ? styles.escolhido : "",
        ].join(" ");

        return (
          <CartaoLuz key={plano.id} className={classes} atraso={i * 0.1}>
            {plano.destaque && <span className={styles.selo}>{planos.seloDestaque}</span>}

            <div className={styles.cabeca}>
              <h3 className="h2">{plano.nome}</h3>
              <p className="corpo">{plano.paraQuem}</p>
            </div>

            <p className={styles.preco}>
              {plano.preco ? (
                <>
                  {plano.preco !== "Sob consulta" && <small>A partir de</small>}
                  <strong>{plano.preco}</strong>
                </>
              ) : (
                <span className={styles.semPreco}>{planos.precoIndefinido}</span>
              )}
            </p>

            <ul className={styles.itens}>
              {plano.itens.map((texto) => (
                <li key={texto}>{texto}</li>
              ))}
            </ul>

            <Botao
              href="#contato"
              variante={plano.destaque ? "primario" : "secundario"}
              larguraTotal
              onClick={() => escolher(plano.id)}
            >
              {planos.acao}
            </Botao>
          </CartaoLuz>
        );
      })}
    </ul>
  );
}
