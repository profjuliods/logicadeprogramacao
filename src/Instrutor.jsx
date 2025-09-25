import React, { useState, useEffect, useRef } from 'react';
import './Instrutor.css';

const posicoes = [
  { left: 40, top: 30, balao: 'right', msg: 'Quer uma dica?' },
  { right: 40, top: 30, balao: 'left', msg: '😂 Ops!' },
  { left: 40, bottom: 30, balao: 'right', msg: '😅 Haha, foi quase!' },
  { right: 40, bottom: 30, balao: 'left', msg: '🛑 Parei, pode clicar!' }
];

export default function Instrutor({ dica, onDicaClick }) {
  const [fugas, setFugas] = useState(0);
  const [showDica, setShowDica] = useState(false);
  const [drag, setDrag] = useState(false);
  const [pos, setPos] = useState(posicoes[0]);
  const [customPos, setCustomPos] = useState(null); // {left, top}
  const dragOffset = useRef({ x: 0, y: 0 });
  const instrutorRef = useRef(null);

  // Reset instrutor ao trocar de pergunta
  useEffect(() => {
    setFugas(0);
    setShowDica(false);
    setCustomPos(null);
    setPos(posicoes[0]);
  }, [dica]);

  // Atualiza posição automática enquanto não está arrastando
  useEffect(() => {
    if (!showDica && fugas < 4) {
      setCustomPos(null);
      setPos(posicoes[fugas] || posicoes[3]);
    }
  }, [fugas, showDica]);

  // Drag and drop handlers
  useEffect(() => {
    if (!drag) return;
    function onMouseMove(e) {
      setCustomPos({
        left: e.clientX - dragOffset.current.x,
        top: e.clientY - dragOffset.current.y
      });
    }
    function onMouseUp() {
      setDrag(false);
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [drag]);

  const handleMouseEnter = () => {
    if (fugas < 4 && !showDica) setFugas(fugas + 1);
  };

  const handleClick = (e) => {
    if (fugas >= 4) setShowDica((v) => !v);
    if (fugas >= 4 && onDicaClick) onDicaClick();
  };

  // Inicia drag somente se a dica estiver visível
  const handleMouseDown = (e) => {
    if (!showDica) return;
    const rect = instrutorRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    setDrag(true);
  };

  // Estilo dinâmico
  const style = customPos
    ? {
        position: 'fixed',
        zIndex: 1000,
        cursor: showDica ? (drag ? 'grabbing' : 'grab') : 'pointer',
        left: customPos.left,
        top: customPos.top
      }
    : {
        position: 'fixed',
        zIndex: 1000,
        cursor: showDica ? 'grab' : 'pointer',
        ...('left' in pos ? { left: pos.left } : {}),
        ...('right' in pos ? { right: pos.right } : {}),
        ...('top' in pos ? { top: pos.top } : {}),
        ...('bottom' in pos ? { bottom: pos.bottom } : {}),
      };

  return (
    <span
      ref={instrutorRef}
      style={style}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      <span
        className={`balao ${pos.balao}`}
        style={{ display: showDica ? 'none' : 'block', textAlign: 'center', lineHeight: 1.5, padding: '18px 28px', fontWeight: 500 }}
      >
        {pos.msg}
      </span>
      <img src="/instrutor_senai.png" alt="Instrutor" style={{ height: 300, borderRadius: 32, display: 'block', margin: '0 auto' }} draggable={false} />
      <span
        className={`balao ${pos.balao}`}
        style={{ display: showDica ? 'block' : 'none', textAlign: 'center', lineHeight: 1.6, padding: '18px 28px', fontWeight: 500 }}
      >
        <span style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#185a9d' }}>Dica do Julhão:</span>
        <span style={{ display: 'block', color: '#222' }}>{dica}</span>
        <button
          style={{ marginTop: 10, background: '#ffd93d', border: 'none', borderRadius: 8, padding: '6px 16px', cursor: 'pointer', fontWeight: 600, color: '#222', fontSize: '1em' }}
          aria-label="Ouvir dica"
          onClick={e => {
            e.stopPropagation();
            if (!window.speechSynthesis) return;
            const utter = new window.SpeechSynthesisUtterance(dica);
            // Seleciona voz pt-BR masculina se disponível
            const voices = window.speechSynthesis.getVoices();
            const vozBr = voices.find(v => v.lang === 'pt-BR' && v.name.toLowerCase().includes('male'))
              || voices.find(v => v.lang === 'pt-BR')
              || voices.find(v => v.lang.startsWith('pt'));
            if (vozBr) utter.voice = vozBr;
            utter.rate = 1;
            utter.pitch = 1;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utter);
          }}
        >🔊 Ouvir dica</button>
      </span>
    </span>
  );
}
