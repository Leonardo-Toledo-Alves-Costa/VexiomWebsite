// Botão do site. Na prática é um link (<a>) com cara de botão, porque todos
// os nossos botões levam a algum lugar da página.
import styles from "./Botao.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: "primario" | "secundario" | "cta";
};

export function Botao({ href, children, variante = "primario" }: Props) {
  return (
    <a href={href} className={`${styles.botao} ${styles[variante]}`}>
      {children}
    </a>
  );
}
