"use client";
// Contexto do plano escolhido. Um Context é um jeito de compartilhar um valor
// entre componentes distantes sem passar props de mão em mão: a seção de
// planos (e a de projetos) grava a escolha, a seção de contato lê.
import { createContext, useContext, useState } from "react";

type ValorDoContexto = {
  planoId: string | null;
  escolher: (id: string) => void;
};

const PlanoContext = createContext<ValorDoContexto | null>(null);

// O provedor guarda o estado e o entrega a tudo o que estiver dentro dele.
export function PlanoProvider({ children }: { children: React.ReactNode }) {
  const [planoId, setPlanoId] = useState<string | null>(null);
  return (
    <PlanoContext.Provider value={{ planoId, escolher: setPlanoId }}>
      {children}
    </PlanoContext.Provider>
  );
}

// Hook próprio: qualquer componente dentro do provedor chama usePlano().
export function usePlano() {
  const valor = useContext(PlanoContext);
  if (!valor) throw new Error("usePlano precisa estar dentro de <PlanoProvider>");
  return valor;
}
