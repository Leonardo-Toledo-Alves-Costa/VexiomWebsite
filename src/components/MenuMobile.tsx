"use client";
// "use client" faz este componente rodar também no navegador. Ele precisa
// disso porque guarda estado (menu aberto ou fechado) e reage a cliques.
// Os outros componentes do site não têm estado e ficam só no servidor.
import { useEffect, useState } from "react";
import styles from "./MenuMobile.module.css";

type Props = {
  itens: { rotulo: string; href: string }[];
};

export function MenuMobile({ itens }: Props) {
  const [aberto, setAberto] = useState(false);

  // Fecha com a tecla Esc enquanto o menu estiver aberto.
  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  return (
    <div className={styles.menu}>
      <button
        type="button"
        className={styles.botao}
        aria-expanded={aberto}
        aria-controls="menu-mobile"
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        onClick={() => setAberto(!aberto)}
      >
        <span className={styles.linhas} data-aberto={aberto} aria-hidden="true" />
      </button>

      {aberto && (
        <nav id="menu-mobile" className={styles.painel} aria-label="Principal">
          <ul>
            {itens.map((item) => (
              <li key={item.href}>
                {/* ao tocar num link, a página rola até a seção e o menu fecha */}
                <a href={item.href} onClick={() => setAberto(false)}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
