
import React, { useState } from 'react';
import { playAudio } from './audioUtils';
import Instrutor from './Instrutor';
import ConfeteAnimado from './ConfeteAnimado';
import './AbstracaoLogica.css';

export default function AbstracaoLogica({ perguntas }) {
  const [indice, setIndice] = useState(0);
  const [resposta, setResposta] = useState('');
  const [feedback, setFeedback] = useState('');
  const [confete, setConfete] = useState(false);
  const perguntaAtual = perguntas[indice];

  function verificarResposta() {
    // Aceita resposta numérica ou string, ignora maiúsculas/minúsculas
    const esperado = String(perguntaAtual.resposta).trim().toLowerCase();
    const dado = resposta.trim().toLowerCase();
    if (dado === esperado) {
      setFeedback('Correto!');
      setConfete(true);
      playAudio('acerto');
    } else {
      setFeedback(perguntaAtual.dica ? `Tente novamente. Dica: ${perguntaAtual.dica}` : 'Tente novamente.');
      playAudio('erro');
    }
  }

  function proximaPergunta() {
    setIndice(i => i + 1);
    setResposta('');
    setFeedback('');
    setConfete(false);
  }

  if (!perguntaAtual) return <div>Fim das perguntas!</div>;

  return (
    <div className="atividade atividade-jogo">
      {confete && <ConfeteAnimado ativo={confete} onFim={() => setConfete(false)} />}
      <div className="atividade-conteudo">
          <Instrutor dica={perguntaAtual.dica || "Lembre-se: abstração lógica é enxergar o problema de forma simplificada. Foque no essencial!"} />
        <div className="atividade-pergunta">
          <div className="atividade-enunciado">Jogo de Sequência Lógica</div>
          <div className="atividade-sequencia">{perguntaAtual.texto}</div>
          <input
            type="text"
            className="atividade-input"
            value={resposta}
            onChange={e => setResposta(e.target.value)}
            placeholder="Digite sua resposta"
            aria-label="Resposta da atividade"
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') verificarResposta(); }}
          />
          <div className="atividade-botoes">
            <button
              className="btn-verificar"
              onClick={verificarResposta}
              aria-label="Verificar resposta"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') verificarResposta(); }}
            >Verificar</button>
            {feedback === 'Correto!' && indice < perguntas.length - 1 && (
              <button
                className="btn-proxima"
                onClick={proximaPergunta}
                aria-label="Próxima pergunta"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') proximaPergunta(); }}
              >Próxima Pergunta</button>
            )}
          </div>
          <div
            className={`atividade-feedback ${feedback === 'Correto!' ? 'correto' : feedback ? 'erro' : ''}`}
            role="status"
            aria-live="polite"
            tabIndex={0}
          >{feedback}</div>
          {feedback === 'Correto!' && perguntaAtual.explicacao && (
            <div style={{
              background:'#fffbe6',
              color:'#185a9d',
              borderRadius:10,
              margin:'18px auto 0 auto',
              padding:'14px 18px',
              maxWidth:420,
              fontWeight:500,
              fontSize:'1.08em',
              boxShadow:'0 2px 8px #ffd93d33',
              border:'2px solid #ffd93d'
            }}
              aria-label="Explicação da resposta"
            >
              <span style={{fontWeight:700,marginRight:6}}>Explicação:</span> {perguntaAtual.explicacao}
            </div>
          )}
        </div>
        <Instrutor dica={perguntaAtual.dica} />
      </div>
    </div>
  );
}
