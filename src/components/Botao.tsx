// Botão do site. Na prática é um link (<a>) com cara de botão, porque todos
// os nossos botões levam a algum lugar da página.
import styles from "./Botao.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: "primario" | "secundario" | "cta";
  larguraTotal?: boolean;
  // opcional: algo a fazer no clique, antes de o link levar ao destino
  onClick?: () => void;
};

export function Botao({ href, children, variante = "primario", larguraTotal, onClick }: Props) {
  const classes = [styles.botao, styles[variante], larguraTotal ? styles.total : ""].join(" ");
  return (
    <a href={href} className={classes} onClick={onClick}>
      {children}
    </a>
  );
}
