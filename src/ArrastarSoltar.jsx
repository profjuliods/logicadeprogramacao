

import React, { useState } from 'react';
import { playAudio } from './audioUtils';
import Instrutor from './Instrutor';
import ConfeteAnimado from './ConfeteAnimado';
import './ArrastarSoltar.css';

// Mostra um desafio por vez, com blocos para ordenar
export default function ArrastarSoltar({ desafios }) {
  const [indice, setIndice] = useState(0);
  const desafio = desafios[indice];
  const [blocos, setBlocos] = useState(embaralhar(desafio.blocosCorretos));
  const [arrastando, setArrastando] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [finalizado, setFinalizado] = useState(false);
  const [dicaAtual, setDicaAtual] = useState(0);
  const [confete, setConfete] = useState(false);

  function embaralhar(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function onDragStart(idx) {
    setArrastando(idx);
  }

  function onDrop(idx) {
    if (arrastando === null || arrastando === idx) return;
    const novos = [...blocos];
    const [removido] = novos.splice(arrastando, 1);
    novos.splice(idx, 0, removido);
    setBlocos(novos);
    setArrastando(null);
    setFeedback('');
  }

  function verificar() {
    if (JSON.stringify(blocos) === JSON.stringify(desafio.blocosCorretos)) {
      setFeedback('Parabéns! Algoritmo correto! 🎉');
      setFinalizado(true);
      setConfete(true);
      playAudio('acerto');
    } else {
      setFeedback('Ainda não está correto. Tente reorganizar!');
      setDicaAtual((dicaAtual + 1) % desafio.dicas.length);
      playAudio('erro');
    }
  }

  function proximoDesafio() {
    setIndice(i => i + 1);
    setBlocos(embaralhar(desafios[indice + 1]?.blocosCorretos || []));
    setArrastando(null);
    setFeedback('');
    setFinalizado(false);
    setDicaAtual(0);
    setConfete(false);
  }

  if (!desafio) return <div>Fim dos desafios!</div>;

  return (
    <div className="arrastar-soltar-atividade">
      <Instrutor dica={desafio.dicas?.[dicaAtual] || "Arraste os blocos para montar o algoritmo!"} />
      {confete && <ConfeteAnimado ativo={confete} onFim={() => setConfete(false)} />}
      <h3>{desafio.titulo}</h3>
      <p>Arraste e solte os blocos para formar o algoritmo correto.</p>
      <div className="blocos-container">
        {blocos.map((bloco, idx) => (
          <div
            key={bloco + idx}
            className="bloco"
            draggable={!finalizado}
            onDragStart={() => onDragStart(idx)}
            onDragOver={e => e.preventDefault()}
            onDrop={() => onDrop(idx)}
          >
            {bloco}
          </div>
        ))}
      </div>
      <button
        onClick={verificar}
        disabled={finalizado}
        className="verificar-btn"
        aria-label="Verificar ordem dos blocos"
        tabIndex={0}
        onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && !finalizado) verificar(); }}
      >Verificar</button>
      {feedback && (
        <div
          className="arrastar-soltar-feedback"
          role="status"
          aria-live="polite"
          tabIndex={0}
        >{feedback}</div>
      )}
      <Instrutor dica={desafio.dicas[dicaAtual]} />
      {finalizado && indice < desafios.length - 1 && (
        <button
          onClick={proximoDesafio}
          className="btn-proxima"
          style={{marginTop:18}}
          aria-label="Próximo desafio"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') proximoDesafio(); }}
        >Próximo Desafio</button>
      )}
      {finalizado && (
        <div style={{margin:'18px auto 0 auto',maxWidth:480}}>
          <div className="arrastar-soltar-final" role="status" aria-live="polite" tabIndex={0}>
            {indice === desafios.length - 1 ? 'Você concluiu todos os desafios!' : 'Desafio concluído!'}
          </div>
          {desafio.explicacao && (
            <div style={{background:'#fffbe6',color:'#185a9d',borderRadius:10,padding:'12px 18px',marginTop:10,border:'2px solid #ffd93d',fontWeight:500,fontSize:'1.08em',boxShadow:'0 1px 4px #ffd93d22'}} aria-label="Explicação do desafio">
              <span style={{fontWeight:700,marginRight:6}}>Explicação:</span> {desafio.explicacao}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
