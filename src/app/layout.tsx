// Layout raiz: envolve todas as páginas. Aqui entram as fontes, os estilos
// globais e os dados de SEO (título e descrição que o Google mostra).
import type { Metadata } from "next";
import { Montserrat, Red_Hat_Display } from "next/font/google";
import "./globals.css";

// next/font baixa as fontes no build e as serve do nosso próprio domínio.
// "variable" cria uma variável CSS que o globals.css usa em font-family.
const fonteTitulo = Red_Hat_Display({
  variable: "--fonte-titulo",
  subsets: ["latin"],
  display: "swap",
});

const fonteTexto = Montserrat({
  variable: "--fonte-texto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vexiom | Software web, aplicativos mobile e tecnologia",
  description:
    "A Vexiom desenvolve sites, sistemas web e aplicativos sob medida. Tecnologia com direção e fundamento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fonteTitulo.variable} ${fonteTexto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
