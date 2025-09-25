import React, { useState } from 'react';
import Instrutor from './Instrutor';
import './ArrastarSoltar.css';

export default function AtividadeOrdenarAlgoritmo({ dados }) {
  const passosCorretos = dados?.passosCorretos || [
    'Início',
    'Leia o valor de A',
    'Leia o valor de B',
    'Soma = A + B',
    'Mostre o valor de Soma',
    'Fim',
  ];
  const dicas = dados?.dicas || [
    'Arraste os passos para formar o algoritmo correto.',
    'Todo algoritmo tem início e fim!',
    'Leia os valores antes de calcular.',
    'Mostre o resultado só depois do cálculo.',
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
      <Instrutor sugestao="Dica: todo algoritmo tem início e fim. Leia os valores antes de calcular e mostre o resultado ao final!" />
      <h3>Atividade: Ordene o Algoritmo de Soma</h3>
      <p>Arraste e solte os passos para formar o algoritmo que lê dois valores, soma e mostra o resultado.</p>
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
