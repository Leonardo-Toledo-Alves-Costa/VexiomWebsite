"use client";
// Fundo do hero: um campo de vetores. Pequenos traços numa grade ondulam
// devagar e, perto do cursor, giram para apontar para ele e acendem em
// laranja. É desenhado num <canvas>, quadro a quadro.
import { useEffect, useRef } from "react";
import styles from "./CampoVetorial.module.css";

const PASSO = 44; // distância entre os vetores
const RAIO = 280; // alcance da influência do cursor

export function CampoVetorial() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // as cores vêm das variáveis de tema, então o campo acompanha claro/escuro
    const estilo = getComputedStyle(canvas);
    const corBase = estilo.getPropertyValue("--texto").trim();
    const corAcento = estilo.getPropertyValue("--acento").trim();

    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let largura = 0;
    let altura = 0;
    let quadro = 0;
    let visivel = true;
    const cursor = { x: -9999, y: -9999 };

    const ajustar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      largura = canvas.clientWidth;
      altura = canvas.clientHeight;
      canvas.width = largura * dpr;
      canvas.height = altura * dpr;
      // desenhamos em pixels CSS; o dpr deixa nítido em telas de alta densidade
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const desenhar = (tempo: number) => {
      ctx.clearRect(0, 0, largura, altura);
      ctx.lineWidth = 1;
      const t = tempo / 1000;

      for (let x = PASSO / 2; x < largura; x += PASSO) {
        for (let y = PASSO / 2; y < altura; y += PASSO) {
          // ângulo "de repouso": uma onda lenta que varia no espaço e no tempo
          let angulo = Math.sin(x * 0.006 + t * 0.35) + Math.cos(y * 0.008 - t * 0.28);
          let tamanho = 7;
          let forca = 0;

          const dx = cursor.x - x;
          const dy = cursor.y - y;
          const distancia = Math.hypot(dx, dy);
          if (distancia < RAIO) {
            forca = (1 - distancia / RAIO) ** 2; // 1 no cursor, 0 na borda do raio
            const paraCursor = Math.atan2(dy, dx);
            // mistura o ângulo de repouso com a direção do cursor
            angulo += Math.atan2(Math.sin(paraCursor - angulo), Math.cos(paraCursor - angulo)) * forca;
            tamanho += forca * 9;
          }

          const cx = Math.cos(angulo) * tamanho;
          const cy = Math.sin(angulo) * tamanho;
          ctx.strokeStyle = forca > 0.05 ? corAcento : corBase;
          ctx.globalAlpha = forca > 0.05 ? 0.25 + forca * 0.75 : 0.13;
          ctx.beginPath();
          ctx.moveTo(x - cx, y - cy);
          ctx.lineTo(x + cx, y + cy);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const ciclo = (tempo: number) => {
      if (visivel) desenhar(tempo);
      quadro = requestAnimationFrame(ciclo);
    };

    const aoMover = (e: PointerEvent) => {
      const caixa = canvas.getBoundingClientRect();
      cursor.x = e.clientX - caixa.left;
      cursor.y = e.clientY - caixa.top;
    };

    ajustar();
    const observadorTamanho = new ResizeObserver(() => {
      ajustar();
      if (semMovimento) desenhar(0);
    });
    observadorTamanho.observe(canvas);

    // não gasta bateria desenhando quando o hero saiu da tela
    const observadorTela = new IntersectionObserver(([e]) => {
      visivel = e.isIntersecting;
    });
    observadorTela.observe(canvas);

    if (semMovimento) {
      desenhar(0); // um quadro parado, sem animação
    } else {
      window.addEventListener("pointermove", aoMover);
      quadro = requestAnimationFrame(ciclo);
    }

    // limpeza: roda quando o componente sai da tela
    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("pointermove", aoMover);
      observadorTamanho.disconnect();
      observadorTela.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={styles.campo} aria-hidden="true" />;
}
