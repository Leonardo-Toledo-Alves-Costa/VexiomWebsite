// Página inicial (rota "/"). Ela só empilha as seções; cada seção é um
// componente em src/components.
import { Axiomas } from "@/components/Axiomas";
import { Cabecalho } from "@/components/Cabecalho";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Contato } from "@/components/Contato";
import { Faixa } from "@/components/Faixa";
import { Hero } from "@/components/Hero";
import { FioCondutor } from "@/components/movimento/FioCondutor";
import { Planos } from "@/components/Planos";
import { Projetos } from "@/components/Projetos";
import { QuemSomos } from "@/components/QuemSomos";
import { Rodape } from "@/components/Rodape";
import { Servicos } from "@/components/Servicos";
import { PlanoProvider } from "@/contexts/plano";

export default function Home() {
  return (
    // O provedor envolve a página para que Projetos, Planos e Contato
    // compartilhem o plano escolhido.
    <PlanoProvider>
      <Cabecalho />
      <FioCondutor />
      <main>
        <Hero />
        <Faixa />
        <Axiomas />
        <QuemSomos />
        <Servicos />
        <Projetos />
        <ComoFunciona />
        <Planos />
        <Contato />
      </main>
      <Rodape />
    </PlanoProvider>
  );
}
