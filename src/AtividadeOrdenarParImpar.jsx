import React, { useState } from 'react';
import Instrutor from './Instrutor';
import './ArrastarSoltar.css';

export default function AtividadeOrdenarParImpar({ dados }) {
  const passosCorretos = dados?.passosCorretos || [
    'Início',
    'Leia o número',
    'Se número % 2 == 0',
    'Mostre "Par"',
    'Senão',
    'Mostre "Ímpar"',
    'Fim',
  ];
  const dicas = dados?.dicas || [
    'Arraste os passos para formar o algoritmo correto.',
    'Lembre-se: leia o número antes de testar.',
    'O bloco "Senão" vem após o teste.',
    'Monte a estrutura completa antes de verificar.',
  ];
  function embaralhar(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const [passos, setPassos] = useState(embaralhar(passosCorretos));
  const [arrastando, setArrastando] = useState(null);
  const [dicaAtual, setDicaAtual] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [finalizado, setFinalizado] = useState(false);

  function onDragStart(idx) {
    setArrastando(idx);
  }

  function onDrop(idx) {
    if (arrastando === null || arrastando === idx) return;
    const novos = [...passos];
    const [removido] = novos.splice(arrastando, 1);
    novos.splice(idx, 0, removido);
    setPassos(novos);
    setArrastando(null);
    setFeedback('');
  }

  function verificar() {
    if (JSON.stringify(passos) === JSON.stringify(passosCorretos)) {
      setFeedback('Parabéns! Algoritmo correto! 🎉');
      setFinalizado(true);
    } else {
      setFeedback('Ainda não está correto. Tente reorganizar!');
      setDicaAtual((dicaAtual + 1) % dicas.length);
    }
  }

  return (
    <div className="arrastar-soltar-atividade">
      <Instrutor sugestao="Dica: leia o número antes de testar. O bloco 'Senão' vem após o teste. Monte a estrutura completa!" />
      <h3>Atividade: Ordene o Algoritmo Par ou Ímpar</h3>
      <p>Arraste e solte os passos para formar o algoritmo que verifica se um número é par ou ímpar.</p>
      <div className="blocos-container">
        {passos.map((passo, idx) => (
          <div
            key={passo}
            className="bloco"
            draggable={!finalizado}
            onDragStart={() => onDragStart(idx)}
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop(idx)}
          >
            {passo}
          </div>
        ))}
      </div>
      <button onClick={verificar} disabled={finalizado} className="verificar-btn">Verificar</button>
      {feedback && <div className="arrastar-soltar-feedback">{feedback}</div>}
      <Instrutor dica={dicas[dicaAtual]} />
      {finalizado && <div className="arrastar-soltar-final">Você concluiu a atividade!</div>}
    </div>
  );
}
