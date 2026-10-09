// Página inicial (rota "/"). Ela só empilha as seções, na ordem do protótipo
// do Figma; cada seção é um componente em src/components.
import { Axiomas } from "@/components/Axiomas";
import { Cabecalho } from "@/components/Cabecalho";
import { ChamadaFinal } from "@/components/ChamadaFinal";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Faixa } from "@/components/Faixa";
import { Hero } from "@/components/Hero";
import { FioCondutor } from "@/components/movimento/FioCondutor";
import { QuemSomos } from "@/components/QuemSomos";
import { Rodape } from "@/components/Rodape";
import { Servicos } from "@/components/Servicos";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <FioCondutor />
      <main>
        <Hero />
        <Faixa />
        <Axiomas />
        <Servicos />
        <ComoFunciona />
        <QuemSomos />
        <ChamadaFinal />
      </main>
      <Rodape />
    </>
  );
}
