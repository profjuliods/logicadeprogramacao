import React, { useEffect } from 'react';

// Componente de confete simples usando canvas
export default function ConfeteAnimado({ ativo, onFim }) {
  useEffect(() => {
    if (!ativo) return;
    const canvas = document.getElementById('confete-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const largura = window.innerWidth;
    const altura = window.innerHeight;
    canvas.width = largura;
    canvas.height = altura;
    let confetes = Array.from({ length: 80 }, () => ({
      x: Math.random() * largura,
      y: Math.random() * -altura,
      r: 6 + Math.random() * 8,
      d: 8 + Math.random() * 8,
      color: `hsl(${Math.random() * 360},90%,60%)`,
      tilt: Math.random() * 10 - 5,
      tiltAngle: 0,
      tiltAngleInc: 0.05 + Math.random() * 0.07
    }));
    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, largura, altura);
      confetes.forEach(c => {
        ctx.beginPath();
        ctx.ellipse(c.x, c.y, c.r, c.r / 2, c.tilt, 0, 2 * Math.PI);
        ctx.fillStyle = c.color;
        ctx.fill();
      });
    }
    function update() {
      confetes.forEach(c => {
        c.y += Math.cos(frame / 10 + c.d) + 2 + c.r / 4;
        c.x += Math.sin(frame / 20) * 2;
        c.tiltAngle += c.tiltAngleInc;
        c.tilt = Math.sin(c.tiltAngle) * 10;
        if (c.y > altura + 20) {
          c.x = Math.random() * largura;
          c.y = -10;
        }
      });
    }
    function loop() {
      frame++;
      draw();
      update();
      if (frame < 300) {
        requestAnimationFrame(loop);
      } else {
        ctx.clearRect(0, 0, largura, altura);
        if (onFim) onFim();
      }
    }
    loop();
    // Limpa ao desmontar
    return () => {
      ctx.clearRect(0, 0, largura, altura);
    };
  }, [ativo, onFim]);

  return (
    <canvas id="confete-canvas" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 2000
    }} />
  );
}
