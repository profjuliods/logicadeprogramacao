import React, { useState } from 'react';
import { playAudio } from './audioUtils';
import Instrutor from './Instrutor';
import ConfeteAnimado from './ConfeteAnimado';

export default function AtividadePreencherLacunas({ dados, indiceAtividade = 0 }) {
  const atividade = dados || {
    enunciado: 'Complete o pseudocódigo para somar dois números:',
    lacunas: [
      { texto: 'Início', resposta: null },
      { texto: 'Leia ', resposta: 'A' },
      { texto: 'Leia ', resposta: 'B' },
      { texto: 'Soma = ', resposta: 'A + B' },
      { texto: 'Mostre ', resposta: 'Soma' },
      { texto: 'Fim', resposta: null },
    ],
    dicas: [
      'Lembre-se: primeiro leia os valores, depois calcule e mostre.',
      'A soma é feita com A + B.',
      'O comando Mostre exibe o resultado.',
    ],
  };
  const [respostas, setRespostas] = useState(Array(atividade.lacunas.length).fill(''));
  const [feedback, setFeedback] = useState('');
  const [acertou, setAcertou] = useState(false);
  const [dicaAtual, setDicaAtual] = useState(0);
  const [confete, setConfete] = useState(false);

  function handleChange(i, valor) {
    const novo = [...respostas];
    novo[i] = valor;
    setRespostas(novo);
  }

  function verificar() {
    let ok = true;
    atividade.lacunas.forEach((lacuna, i) => {
      if (lacuna.resposta && respostas[i].trim() !== lacuna.resposta) ok = false;
    });
    if (ok) {
      setFeedback('Parabéns! Tudo correto! 🎉');
      setAcertou(true);
      setConfete(true);
      playAudio('acerto');
    } else {
      setFeedback('Ainda há lacunas incorretas. Tente de novo ou peça uma dica!');
      setDicaAtual((dicaAtual + 1) % atividade.dicas.length);
      playAudio('erro');
    }
  }

  return (
    <div className="atividade atividade-jogo">
      <Instrutor sugestao="Dica: primeiro leia os valores, depois calcule e mostre o resultado. Complete cada lacuna com atenção!" />
      {confete && <ConfeteAnimado ativo={confete} onFim={() => setConfete(false)} />}
      <h3>Atividade: Preencha as Lacunas</h3>
      <div className="atividade-conteudo">
        <div className="atividade-pergunta" style={{minWidth:320}}>
          <div className="atividade-enunciado">{atividade.enunciado}</div>
          <div style={{margin:'18px 0'}}>
            {atividade.lacunas.map((lacuna, i) => (
              <div key={i} style={{marginBottom:8, display:'flex', alignItems:'center'}}>
                <span>{lacuna.texto}</span>
                {lacuna.resposta ? (
                  <input
                    type="text"
                    value={respostas[i]}
                    onChange={e => handleChange(i, e.target.value)}
                    disabled={acertou}
                    style={{marginLeft:6, width:80, borderRadius:6, border:'1.5px solid #ffd93d', padding:'4px 8px'}}
                    aria-label={`Resposta da lacuna ${i+1}`}
                    tabIndex={0}
                    onKeyDown={e => { if (e.key === 'Enter') verificar(); }}
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="atividade-botoes">
            <button
              className="btn-verificar"
              onClick={verificar}
              disabled={acertou}
              aria-label="Verificar respostas das lacunas"
              tabIndex={0}
              onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && !acertou) verificar(); }}
            >Verificar</button>
          </div>
          <div
            className={`atividade-feedback ${acertou ? 'correto' : feedback ? 'erro' : ''}`}
            role="status"
            aria-live="polite"
            tabIndex={0}
          >{feedback}</div>
          {/* Explicação pós-resposta */}
          {acertou && atividade.explicacao && (
            <div className="atividade-explicacao" style={{marginTop:18, background:'#f6f6f6', borderRadius:8, padding:'12px 16px', border:'1.5px solid #ffd93d', color:'#444'}}>
              <strong>Explicação:</strong> {atividade.explicacao}
            </div>
          )}
        </div>
        <Instrutor dica={atividade.dicas[dicaAtual]} />
      </div>
    </div>
  );
}
