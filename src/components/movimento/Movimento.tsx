"use client";
// Configuração global da biblioteca Motion. reducedMotion="user" faz todas as
// animações de movimento respeitarem a preferência "reduzir movimento" do
// sistema operacional do visitante, sem precisarmos tratar isso caso a caso.
import { MotionConfig } from "motion/react";

export function Movimento({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
