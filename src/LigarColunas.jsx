

import React, { useState } from 'react';
import { playAudio } from './audioUtils';
import Instrutor from './Instrutor';
import ConfeteAnimado from './ConfeteAnimado';
import './LigarColunas.css';

// Jogo visual: arraste conceitos para exemplos
export default function LigarColunas({ pares, dicas }) {
  // embaralhar exemplos
  function embaralhar(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const [exemplos, setExemplos] = useState(embaralhar(pares.map(p => p.exemplo)));
  const [selecionado, setSelecionado] = useState(null); // índice do conceito selecionado
  const [ligacoes, setLigacoes] = useState(Array(pares.length).fill(null)); // para cada conceito, índice do exemplo
  const [feedback, setFeedback] = useState('');
  const [dicaAtual, setDicaAtual] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [confete, setConfete] = useState(false);

  function handleSelecionar(i) {
    setSelecionado(i);
    setFeedback('');
  }

  function handleLigar(j) {
    if (selecionado === null) return;
    // Evita ligar o mesmo exemplo para dois conceitos
    if (ligacoes.includes(j)) return;
    setLigacoes(l => l.map((v, idx) => idx === selecionado ? j : v));
    setSelecionado(null);
  }

  function verificar() {
    const correto = ligacoes.every((exIdx, i) => exemplos[exIdx] === pares[i].exemplo);
    setFeedback(correto ? 'Tudo certo! Parabéns! 🎉' : 'Há ligações incorretas. Tente novamente.');
    if (!correto) setDicaAtual((dicaAtual + 1) % (dicas?.length || 1));
    setFinalizado(correto);
    if (correto) {
      setConfete(true);
      playAudio('acerto');
    } else {
      playAudio('erro');
    }
  }

  function resetar() {
    setLigacoes(Array(pares.length).fill(null));
    setFeedback('');
    setFinalizado(false);
    setSelecionado(null);
    setDicaAtual(0);
    setExemplos(embaralhar(pares.map(p => p.exemplo)));
    setConfete(false);
  }

  return (
    <div className="ligar-colunas-atividade">
      <Instrutor dica={dicas?.[dicaAtual] || "Ligue cada conceito ao exemplo correto!"} />
      {confete && <ConfeteAnimado ativo={confete} onFim={() => setConfete(false)} />}
      <h3 style={{marginBottom:18}}>Jogo: Ligue os Conceitos aos Exemplos</h3>
      <div className="ligar-colunas-conteudo">
        <div className="coluna">
          <b>Conceitos</b>
          {pares.map((par, i) => (
            <div
              key={par.conceito}
              className={`item-coluna${selecionado === i ? ' selecionado' : ''}`}
              tabIndex={0}
              role="button"
              aria-label={`Conceito: ${par.conceito}${ligacoes[i] !== null ? ', ligado a exemplo ' + exemplos[ligacoes[i]] : ''}`}
              aria-pressed={selecionado === i}
              onClick={() => handleSelecionar(i)}
              onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && !finalizado) handleSelecionar(i); }}
              style={{cursor: finalizado ? 'not-allowed' : 'pointer', opacity: finalizado ? 0.7 : 1}}
            >
              {par.conceito}
              {ligacoes[i] !== null && (
                <span style={{display:'block', fontSize:'0.95em', color:'#43cea2', marginTop:4}}>
                  → {exemplos[ligacoes[i]]}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="coluna">
          <b>Exemplos</b>
          {exemplos.map((exemplo, j) => (
            <div
              key={exemplo}
              className={`item-coluna${ligacoes.includes(j) ? ' selecionado' : ''}`}
              tabIndex={0}
              role="button"
              aria-label={`Exemplo: ${exemplo}${ligacoes.includes(j) ? ', já ligado' : ''}`}
              aria-pressed={ligacoes.includes(j)}
              onClick={() => !finalizado && selecionado !== null && handleLigar(j)}
              onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && !finalizado && selecionado !== null && !ligacoes.includes(j)) handleLigar(j); }}
              style={{cursor: finalizado ? 'not-allowed' : selecionado !== null && !ligacoes.includes(j) ? 'pointer' : 'default', opacity: finalizado ? 0.7 : 1}}
            >
              {exemplo}
            </div>
          ))}
        </div>
        <div style={{minWidth:220, marginLeft:24}}>
          <Instrutor dica={dicas && dicas[dicaAtual]} />
        </div>
      </div>
      <div style={{display:'flex', gap:16, justifyContent:'center', marginTop:24}}>
        <button
          className="btn-verificar"
          onClick={verificar}
          disabled={finalizado}
          aria-label="Verificar ligações"
          tabIndex={0}
          onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && !finalizado) verificar(); }}
        >Verificar</button>
        <button
          className="btn-proxima"
          onClick={resetar}
          aria-label="Resetar ligações"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') resetar(); }}
        >Resetar</button>
      </div>
      <div
        className={`ligar-colunas-feedback${feedback.includes('Parabéns') ? ' acerto' : feedback ? ' erro' : ''}`}
        role="status"
        aria-live="polite"
        tabIndex={0}
      >{feedback}</div>
      {finalizado && <>
        <div className="ligar-colunas-final" role="status" aria-live="polite" tabIndex={0}>Você concluiu o jogo! 🎉</div>
        <div style={{margin:'18px auto 0 auto',maxWidth:480}}>
          <div style={{fontWeight:700,color:'#185a9d',marginBottom:8}}>Explicação dos conceitos:</div>
          {pares.map((par, i) => (
            <div key={par.conceito} style={{background:'#fffbe6',color:'#185a9d',borderRadius:10,padding:'10px 16px',marginBottom:8,border:'2px solid #ffd93d',fontWeight:500,fontSize:'1.05em',boxShadow:'0 1px 4px #ffd93d22'}}>
              <b>{par.conceito}:</b> {par.explicacao}
            </div>
          ))}
        </div>
      </>}
    </div>
  );
}
