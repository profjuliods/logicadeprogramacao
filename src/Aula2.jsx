import React, { useState } from 'react';
import Instrutor from './Instrutor';
import { atividadesAula2 } from './data/atividadesAula2';
import AtividadeOrdenarAlgoritmo from './AtividadeOrdenarAlgoritmo';
import AtividadeOrdenarParImpar from './AtividadeOrdenarParImpar';
import AtividadePreencherLacunas from './AtividadePreencherLacunas';

function renderAtividade(atividade) {
  if (atividade.tipo === 'ordenar' && atividade.titulo.includes('Soma')) {
    return <AtividadeOrdenarAlgoritmo dados={atividade} />;
  }
  if (atividade.tipo === 'ordenar' && atividade.titulo.includes('Par ou Ímpar')) {
    return <AtividadeOrdenarParImpar dados={atividade} />;
  }
  if (atividade.tipo === 'lacunas') {
    return <AtividadePreencherLacunas dados={atividade} />;
  }
  return null;
}

export default function Aula2() {
  const [indice, setIndice] = useState(0);
  const atividadeAtual = atividadesAula2[indice];

  return (
    <div style={{padding: 24}}>
        <Instrutor dica={atividadeAtual.dicas?.[0] || "Dica: observe a ordem dos passos e pense na lógica do algoritmo antes de arrastar!"} />
      <h2>UC Lógica de Programação</h2>
      <h3>Tópico: Ordenar Algoritmo</h3>
      <section style={{
        background: 'rgba(255,255,255,0.13)',
        borderRadius: 12,
        padding: '24px 18px',
        margin: '0 auto 32px auto',
        maxWidth: 700,
        boxShadow: '0 2px 12px #ffd93d33',
        color: '#fffbe6',
        textAlign: 'left',
      }}>
        <b style={{color:'#ffd93d', fontSize:'1.15em'}}>Conceitos importantes:</b>
        <ul style={{
          margin:'12px 0 0 18px',
          color:'#fffbe6',
        }}>
          <li><b>Algoritmo:</b> Sequência de instruções para resolver um problema.</li>
          <li><b>Entrada:</b> Dados que o algoritmo recebe para processar.</li>
          <li><b>Processamento:</b> Operações realizadas sobre os dados.</li>
          <li><b>Saída:</b> Resultado produzido pelo algoritmo.</li>
          <li><b>Decisão:</b> Escolha de caminhos diferentes com base em condições.</li>
          <li><b>Estrutura sequencial:</b> Execução dos passos em ordem.</li>
        </ul>
      </section>
      <p>Neste tópico, você vai praticar a montagem de algoritmos, organizando os passos de forma lógica e sequencial. Arraste e solte para ordenar corretamente!</p>
      <div style={{margin: '32px 0'}}>
        <h3 style={{marginBottom: 8}}>{atividadeAtual.titulo}</h3>
        <div style={{fontStyle:'italic', color:'#ffd93d', marginBottom:16}}>{atividadeAtual.exemplo}</div>
        {renderAtividade(atividadeAtual)}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', gap: 16, marginTop: 32}}>
        <button
          className="nav-btn"
          onClick={() => setIndice(i => Math.max(0, i - 1))}
          disabled={indice === 0}
        >
          Voltar
        </button>
        <button
          className="nav-btn"
          onClick={() => setIndice(i => Math.min(atividadesAula2.length - 1, i + 1))}
          disabled={indice === atividadesAula2.length - 1}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
