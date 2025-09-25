import { useState, useEffect } from 'react';
import NomeAlunoForm from './NomeAlunoForm';
import { setAudioAtivo, getAudioAtivo } from './audioUtils';
import './App.css';
import { atividadesAula1 } from './data/atividadesAula1';
import Instrutor from './Instrutor';
import { atividadesAulaVetores } from './data/atividadesAulaVetores';
import { atividadesAula3 } from './data/atividadesAula3';
import AbstracaoLogica from './AbstracaoLogica';
import LigarColunas from './LigarColunas';
import ArrastarSoltar from './ArrastarSoltar';
import Aula2 from './Aula2';

function renderAtividadeAula1(atividade, audioAtivo) {
  if (atividade.tipo === 'sequencia') {
    return <AbstracaoLogica perguntas={atividade.perguntas} audioAtivo={audioAtivo} />;
  }
  if (atividade.tipo === 'ligar') {
    return <LigarColunas pares={atividade.pares} dicas={atividade.dicas} audioAtivo={audioAtivo} />;
  }
  if (atividade.tipo === 'arrastar') {
    return <ArrastarSoltar desafios={atividade.desafios} audioAtivo={audioAtivo} />;
  }
  return null;
}

const aulas = [
  {
    id: 'aula1',
    nome: 'Aula 1: UC Lógica de Programação — Abstração Lógica',
    conteudo: function Aula1Conteudo() {
      const [indice, setIndice] = useState(0);
      const [audioAtivo, setAudioAtivoState] = useState(getAudioAtivo());
      const atividadeAtual = atividadesAula1[indice];
      const total = atividadesAula1.length;
      const concluido = indice + 1;
      const finalizado = concluido === total;
      return (
        <div style={{position:'relative'}}>
          <b style={{color:'#ffd93d', fontSize:'1.15em'}}>Conceitos importantes:</b>
          <ul style={{margin:'12px 0 0 18px', color:'#fffbe6'}}>
            <li><b>Abstração:</b> Focar no essencial, ignorando detalhes desnecessários.</li>
            <li><b>Sequência:</b> Ordem lógica dos passos para resolver um problema.</li>
            <li><b>Padrão:</b> Identificar regularidades em números ou situações.</li>
            <li><b>Simplificação:</b> Reduzir a complexidade para facilitar a solução.</li>
          </ul>
          <nav style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 32 }}>
            {atividadesAula1.map((a, i) => (
              <button
                key={a.titulo}
                className={indice === i ? 'nav-btn active' : 'nav-btn'}
                onClick={() => setIndice(i)}
                aria-label={`Ir para atividade ${a.titulo}`}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIndice(i); }}
              >
                {a.titulo}
              </button>
            ))}
          </nav>
          <div style={{margin: '32px 0'}}>
            {renderAtividadeAula1(atividadeAtual, audioAtivo)}
          </div>
          <div style={{display: 'flex', justifyContent: 'center', gap: 16, marginTop: 32}}>
            <button
              className="nav-btn"
              onClick={() => setIndice(i => Math.max(0, i - 1))}
              disabled={indice === 0}
              aria-label="Voltar para atividade anterior"
              tabIndex={0}
              onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && indice > 0) setIndice(i => Math.max(0, i - 1)); }}
            >
              Voltar
            </button>
            <button
              className="nav-btn"
              onClick={() => setIndice(i => Math.min(atividadesAula1.length - 1, i + 1))}
              disabled={indice === atividadesAula1.length - 1}
              aria-label="Ir para próxima atividade"
              tabIndex={0}
              onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && indice < atividadesAula1.length - 1) setIndice(i => Math.min(atividadesAula1.length - 1, i + 1)); }}
            >
              Próxima
            </button>
          </div>
        </div>
      );
    },
  },
  {
    id: 'vetores',
    nome: 'Aula Especial: Vetores e Arrays',
    conteudo: function AulaVetoresConteudo() {
      const [indice, setIndice] = useState(0);
      const atividadeAtual = atividadesAulaVetores[indice];
      const total = atividadesAulaVetores.length;
      const concluido = indice + 1;
      return (
        <div className="container" style={{maxWidth: 800, margin: '0 auto'}}>
          <Instrutor dica={atividadeAtual.dicas?.[0] || "Dica: vetores guardam vários valores! Use colchetes e lembre-se que o índice começa em 0."} />
          <h2 style={{color:'var(--cor-destaque)', marginBottom: 18, textAlign:'center', fontWeight:700, letterSpacing:1}}>Explorando Vetores (Arrays)</h2>
          <div style={{background:'var(--cor-bg-sec)',borderRadius:12,padding:'18px',marginBottom:18,boxShadow:'0 2px 8px #0001',color:'var(--cor-texto)',textAlign:'left', fontSize:'1.08em'}}>
            <b style={{color:'var(--cor-destaque)'}}>O que é um vetor?</b><br/>
            Um vetor (ou array) é uma estrutura que permite guardar vários valores em uma única variável, organizados por posições (índices).<br/>
            <b style={{color:'var(--cor-destaque)'}}>Exemplo:</b> <code style={{background:'var(--cor-sidebar)',color:'var(--cor-destaque)',padding:'2px 8px',borderRadius:4, fontWeight:'bold'}}>let numeros = [10, 20, 30];</code> <br/>
            <b style={{color:'var(--cor-destaque)'}}>Por que usar vetores?</b> Para armazenar listas de dados, como notas, nomes, resultados, etc. Cada valor pode ser acessado pelo seu índice.<br/>
            <b style={{color:'var(--cor-destaque)'}}>Dica:</b> O primeiro elemento está sempre no índice 0.<br/>
          </div>
          <div style={{background:'var(--cor-primaria)',borderRadius:12,padding:'14px',marginBottom:18,color:'#fff', fontWeight:'bold', textAlign:'center', fontSize:'1.08em'}}>
            Como funciona esta aula?<br/>
            Você vai praticar com jogos de arrastar blocos, perguntas de sequência e ligar conceitos, sempre com explicações detalhadas após cada resposta.<br/>
            <span style={{color:'var(--cor-destaque)'}}>Se errar, leia a explicação e tente novamente!</span>
          </div>
          <div style={{marginBottom:24, textAlign:'center', color:'var(--cor-destaque)', fontWeight:600, fontSize:'1.1em'}}>
            Atividade {concluido} de {total}
          </div>
          {/* Renderização dinâmica das atividades */}
          {atividadeAtual.tipo === 'arrastar' && (
            <div style={{marginBottom:24}}>
              <h3 style={{color:'var(--cor-destaque)', textAlign:'center', fontWeight:700}}>{atividadeAtual.titulo}</h3>
              {atividadeAtual.desafios.map((desafio, i) => (
                <div key={i} style={{marginBottom:18,background:'var(--cor-bg-sec)',borderRadius:10,padding:16,color:'var(--cor-texto)', boxShadow:'0 2px 8px #0001'}}>
                  <b style={{color:'var(--cor-destaque)'}}>{desafio.titulo}</b>
                  <div style={{margin:'8px 0', color:'var(--cor-texto)'}}>Arraste os blocos para montar o algoritmo:</div>
                  <ul style={{margin:'8px 0 8px 18px', padding:0}}>
                    {desafio.blocosCorretos.map((bloco, j) => (
                      <li key={j} style={{background:'var(--cor-sidebar)',borderRadius:6,padding:'4px 10px',marginBottom:4,color:'var(--cor-destaque)', fontWeight:'bold', fontFamily:'monospace', display:'inline-block', marginRight:8}}>{bloco}</li>
                    ))}
                  </ul>
                  <div style={{background:'var(--cor-destaque)',color:'var(--cor-texto)',fontSize:'0.98em',marginBottom:4,padding:'4px 8px',borderRadius:6}}><b>Dicas:</b> <span>{desafio.dicas.join(' | ')}</span></div>
                  <div style={{background:'var(--cor-primaria)',color:'#fff',fontSize:'0.98em',padding:'4px 8px',borderRadius:6}}><b>Explicação:</b> <span>{desafio.explicacao}</span></div>
                </div>
              ))}
            </div>
          )}
          {atividadeAtual.tipo === 'sequencia' && (
            <div style={{marginBottom:24}}>
              <h3 style={{color:'var(--cor-destaque)', textAlign:'center', fontWeight:700}}>{atividadeAtual.titulo}</h3>
              {atividadeAtual.perguntas.map((pergunta, i) => (
                <div key={i} style={{marginBottom:18,background:'var(--cor-bg-sec)',borderRadius:10,padding:16,color:'var(--cor-texto)', boxShadow:'0 2px 8px #0001'}}>
                  <b style={{color:'var(--cor-destaque)'}}>{pergunta.texto}</b>
                  <div style={{background:'var(--cor-destaque)',color:'var(--cor-texto)',margin:'8px 0',fontSize:'0.98em',padding:'4px 8px',borderRadius:6}}>Dica: <span>{pergunta.dica}</span></div>
                  <div style={{background:'var(--cor-primaria)',color:'#fff',fontSize:'0.98em',padding:'4px 8px',borderRadius:6}}><b>Explicação:</b> <span>{pergunta.explicacao}</span></div>
                </div>
              ))}
            </div>
          )}
          {atividadeAtual.tipo === 'ligar' && (
            <div style={{marginBottom:24}}>
              <h3 style={{color:'var(--cor-destaque)', textAlign:'center', fontWeight:700}}>{atividadeAtual.titulo}</h3>
              <div style={{margin:'8px 0',color:'var(--cor-texto)', textAlign:'center'}}>Ligue cada conceito ao exemplo correto.</div>
              <ul style={{margin:'8px 0 8px 18px', padding:0}}>
                {atividadeAtual.pares.map((par, i) => (
                  <li key={i} style={{background:'var(--cor-sidebar)',borderRadius:6,padding:'4px 10px',marginBottom:4,color:'var(--cor-destaque)', fontWeight:'bold', fontFamily:'monospace', display:'inline-block', marginRight:8}}>
                    <b>{par.conceito}</b> → <span style={{color:'#fff'}}>{par.exemplo}</span>
                    <div style={{background:'var(--cor-primaria)',color:'#fff',fontSize:'0.98em',padding:'4px 8px',borderRadius:6,marginTop:4}}><b>Explicação:</b> <span>{par.explicacao}</span></div>
                  </li>
                ))}
              </ul>
              <div style={{background:'var(--cor-destaque)',color:'var(--cor-texto)',fontSize:'0.98em',marginBottom:4,padding:'4px 8px',borderRadius:6}}><b>Dicas:</b> <span>{atividadeAtual.dicas.join(' | ')}</span></div>
            </div>
          )}
          <div style={{display:'flex', justifyContent:'center', gap:16, marginTop:32}}>
            <button
              className="nav-btn"
              onClick={() => setIndice(i => Math.max(0, i - 1))}
              disabled={indice === 0}
              aria-label="Voltar para atividade anterior"
              tabIndex={0}
            >
              Voltar
            </button>
            <button
              className="nav-btn"
              onClick={() => setIndice(i => Math.min(atividadesAulaVetores.length - 1, i + 1))}
              disabled={indice === atividadesAulaVetores.length - 1}
              aria-label="Ir para próxima atividade"
              tabIndex={0}
            >
              Próxima
            </button>
          </div>
        </div>
      );
    },
  },
  {
    id: 'aula3',
    nome: 'Aula 3: Fundamentos de Algoritmos de Programação',
    conteudo: function Aula3Conteudo() {
      const [indice, setIndice] = useState(0);
      const atividadeAtual = atividadesAula3[indice];
      const total = atividadesAula3.length;
      const concluido = indice + 1;
      return (
        <div className="container" style={{maxWidth: 800, margin: '0 auto'}}>
          <Instrutor dica={atividadeAtual.dicas?.[0] || "Dica: siga as etapas do algoritmo: entender, planejar, codificar e testar!"} />
          <h2 style={{color:'var(--cor-destaque)', marginBottom: 18, textAlign:'center', fontWeight:700, letterSpacing:1}}>Fundamentos de Algoritmos de Programação</h2>
          <div style={{background:'var(--cor-bg-sec)',borderRadius:12,padding:'18px',marginBottom:18,boxShadow:'0 2px 8px #0001',color:'var(--cor-texto)',textAlign:'left', fontSize:'1.08em'}}>
            <b style={{color:'var(--cor-destaque)'}}>O que você vai aprender?</b><br/>
            Nesta aula, você vai entender o que é um algoritmo, como planejar, codificar e testar soluções para problemas, além de praticar conceitos essenciais como variáveis, entrada, saída e lógica sequencial.<br/>
            <b style={{color:'var(--cor-destaque)'}}>Dica:</b> Siga os passos, leia as dicas e tente resolver cada desafio!
          </div>
          <div style={{marginBottom:24, textAlign:'center', color:'var(--cor-destaque)', fontWeight:600, fontSize:'1.1em'}}>
            Atividade {concluido} de {total}
          </div>
          {/* Renderização dinâmica das atividades */}
          {atividadeAtual.tipo === 'sequencia' && (
            <div style={{marginBottom:24}}>
              <h3 style={{color:'var(--cor-destaque)', textAlign:'center', fontWeight:700}}>{atividadeAtual.titulo}</h3>
              {atividadeAtual.perguntas.map((pergunta, i) => (
                <div key={i} style={{marginBottom:18,background:'var(--cor-bg-sec)',borderRadius:10,padding:16,color:'var(--cor-texto)', boxShadow:'0 2px 8px #0001'}}>
                  <b style={{color:'var(--cor-destaque)'}}>{pergunta.texto}</b>
                  <div style={{background:'var(--cor-destaque)',color:'var(--cor-texto)',margin:'8px 0',fontSize:'0.98em',padding:'4px 8px',borderRadius:6}}>Dica: <span>{pergunta.dica}</span></div>
                  <div style={{background:'var(--cor-primaria)',color:'#fff',fontSize:'0.98em',padding:'4px 8px',borderRadius:6}}><b>Explicação:</b> <span>{pergunta.explicacao}</span></div>
                </div>
              ))}
            </div>
          )}
          {atividadeAtual.tipo === 'ligar' && (
            <div style={{marginBottom:24}}>
              <h3 style={{color:'var(--cor-destaque)', textAlign:'center', fontWeight:700}}>{atividadeAtual.titulo}</h3>
              <div style={{margin:'8px 0',color:'var(--cor-texto)', textAlign:'center'}}>Ligue cada conceito ao exemplo correto.</div>
              <ul style={{margin:'8px 0 8px 18px', padding:0}}>
                {atividadeAtual.pares.map((par, i) => (
                  <li key={i} style={{background:'var(--cor-sidebar)',borderRadius:6,padding:'4px 10px',marginBottom:4,color:'var(--cor-destaque)', fontWeight:'bold', fontFamily:'monospace', display:'inline-block', marginRight:8}}>
                    <b>{par.conceito}</b> → <span style={{color:'#fff'}}>{par.exemplo}</span>
                    <div style={{background:'var(--cor-primaria)',color:'#fff',fontSize:'0.98em',padding:'4px 8px',borderRadius:6,marginTop:4}}><b>Explicação:</b> <span>{par.explicacao}</span></div>
                  </li>
                ))}
              </ul>
              <div style={{background:'var(--cor-destaque)',color:'var(--cor-texto)',fontSize:'0.98em',marginBottom:4,padding:'4px 8px',borderRadius:6}}><b>Dicas:</b> <span>{atividadeAtual.dicas.join(' | ')}</span></div>
            </div>
          )}
          {atividadeAtual.tipo === 'arrastar' && (
            <div style={{marginBottom:24}}>
              <h3 style={{color:'var(--cor-destaque)', textAlign:'center', fontWeight:700}}>{atividadeAtual.titulo}</h3>
              {atividadeAtual.desafios.map((desafio, i) => (
                <div key={i} style={{marginBottom:18,background:'var(--cor-bg-sec)',borderRadius:10,padding:16,color:'var(--cor-texto)', boxShadow:'0 2px 8px #0001'}}>
                  <b style={{color:'var(--cor-destaque)'}}>{desafio.titulo}</b>
                  <div style={{margin:'8px 0', color:'var(--cor-texto)'}}>Arraste os blocos para montar o algoritmo:</div>
                  <ul style={{margin:'8px 0 8px 18px', padding:0}}>
                    {desafio.blocosCorretos.map((bloco, j) => (
                      <li key={j} style={{background:'var(--cor-sidebar)',borderRadius:6,padding:'4px 10px',marginBottom:4,color:'var(--cor-destaque)', fontWeight:'bold', fontFamily:'monospace', display:'inline-block', marginRight:8}}>{bloco}</li>
                    ))}
                  </ul>
                  <div style={{background:'var(--cor-destaque)',color:'var(--cor-texto)',fontSize:'0.98em',marginBottom:4,padding:'4px 8px',borderRadius:6}}><b>Dicas:</b> <span>{desafio.dicas.join(' | ')}</span></div>
                  <div style={{background:'var(--cor-primaria)',color:'#fff',fontSize:'0.98em',padding:'4px 8px',borderRadius:6}}><b>Explicação:</b> <span>{desafio.explicacao}</span></div>
                </div>
              ))}
            </div>
          )}
          <div style={{display:'flex', justifyContent:'center', gap:16, marginTop:32}}>
            <button
              className="nav-btn"
              onClick={() => setIndice(i => Math.max(0, i - 1))}
              disabled={indice === 0}
              aria-label="Voltar para atividade anterior"
              tabIndex={0}
            >
              Voltar
            </button>
            <button
              className="nav-btn"
              onClick={() => setIndice(i => Math.min(atividadesAula3.length - 1, i + 1))}
              disabled={indice === atividadesAula3.length - 1}
              aria-label="Ir para próxima atividade"
              tabIndex={0}
            >
              Próxima
            </button>
          </div>
        </div>
      );
    },
  },
  {
    id: 'aula2',
    nome: 'Aula 2: UC Lógica de Programação — Ordenar Algoritmo',
    conteudo: <Aula2 />, 
  },
];


function App() {
  const [aulaSelecionada, setAulaSelecionada] = useState('aula1');
  const [sidebarAberta, setSidebarAberta] = useState(false);
  const [nomeAluno, setNomeAluno] = useState(() => {
    try {
      return localStorage.getItem('nomeAluno') || '';
    } catch {
      return '';
    }
  });
  const aula = aulas.find(a => a.id === aulaSelecionada);

  // Extrair tópico do nome da aula
  const ucNome = 'UC Lógica de Programação';
  const topico = aula.nome.split('—')[1]?.trim() || '';

  // Fecha menu ao clicar no overlay
  function fecharSidebar() {
    setSidebarAberta(false);
  }

  function handleNomeAluno(nome) {
    setNomeAluno(nome);
    try { localStorage.setItem('nomeAluno', nome); } catch {}
  }

  if (!nomeAluno) {
    return <NomeAlunoForm onSubmit={handleNomeAluno} />;
  }

  return (
  // sidebarAberta já está declarado acima, não redeclarar
    <div style={{ minHeight: '100vh' }}>
      {/* Botão para abrir a barra lateral */}
      <button
        className="sidebar-toggle"
        style={{ position: 'fixed', top: 18, left: 18, zIndex: 2001, background: '#ffd93d', color: '#232946', border: 'none', borderRadius: 8, padding: '8px 10px 8px 4px', fontSize: '1.2em', cursor: 'pointer', boxShadow: '0 2px 8px #0001', display: 'block' }}
        onClick={() => setSidebarAberta(true)}
        aria-label="Abrir menu de aulas"
      >
        <span className="sidebar-toggle-icon">
          <span className="bar">≡</span>
        </span>
      </button>
      {/* Sidebar sobrepondo o conteúdo */}
      {sidebarAberta && (
        <aside
          id="sidebar-menu"
          className="sidebar drawer aberta"
          role="navigation"
          aria-hidden={false}
          style={{ position: 'fixed', top: 0, left: 0, width: 220, height: '100vh', background: '#232946', color: '#fffbe6', boxShadow: '2px 0 24px #0004', padding: '32px 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1200, transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)' }}
        >
          <button
            onClick={() => setSidebarAberta(false)}
            style={{ position: 'absolute', top: 12, right: 12, background: '#ffd93d', color: '#232946', border: 'none', borderRadius: 8, padding: '4px 10px', fontWeight: 600, cursor: 'pointer', fontSize: '1em' }}
            aria-label="Fechar menu de aulas"
          >
            ×
          </button>
          <h2 className="sidebar-title" style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: 18, letterSpacing: 1, color: '#ffd93d' }}>Aulas</h2>
          <ul className="sidebar-list" style={{ listStyle: 'none', padding: 0, width: '100%' }}>
            {aulas.map(a => (
              <li
                key={a.id}
                className={aulaSelecionada === a.id ? 'sidebar-item active' : 'sidebar-item'}
                onClick={() => { setAulaSelecionada(a.id); setSidebarAberta(false); }}
                tabIndex={0}
                role="button"
                aria-label={`Selecionar aula ${a.nome}`}
                aria-pressed={aulaSelecionada === a.id}
                style={{ padding: '16px 24px', cursor: 'pointer', fontSize: '1.08em', color: aulaSelecionada === a.id ? '#232946' : '#fffbe6', background: aulaSelecionada === a.id ? '#ffd93d' : 'transparent', borderLeft: aulaSelecionada === a.id ? '4px solid #232946' : '4px solid transparent', fontWeight: aulaSelecionada === a.id ? 'bold' : 'normal', transition: 'background 0.2s, color 0.2s, border 0.2s', outline: 'none' }}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setAulaSelecionada(a.id); setSidebarAberta(false); } }}
              >
                {a.nome}
              </li>
            ))}
          </ul>
        </aside>
      )}
      {/* Overlay para fechar a sidebar ao clicar fora */}
      {sidebarAberta && (
        <div
          onClick={() => setSidebarAberta(false)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,32,48,0.25)', zIndex: 1199 }}
          aria-label="Fechar menu de aulas"
        />
      )}
      <main className="container" style={{ marginLeft: 0, flex: 1 }}>
        <h1>{ucNome}</h1>
        <div style={{display:'flex',alignItems:'center',gap:18,marginBottom:8}}>
          <span style={{fontWeight:600,fontSize:'1.1em',color:'#185a9d'}}>Aluno: {nomeAluno}</span>
          <button onClick={()=>{setNomeAluno('');localStorage.removeItem('nomeAluno')}} style={{background:'#ffd93d',color:'#222',border:'none',borderRadius:8,padding:'4px 14px',fontWeight:600,cursor:'pointer',fontSize:'0.95em'}}>Trocar nome</button>
        </div>
        {topico && (
          <div style={{
            fontWeight: 600,
            fontSize: '1.25em',
            color: '#ffd93d',
            margin: '0 0 24px 0',
            letterSpacing: '0.5px',
            textShadow: '0 1px 4px #0002',
          }}>Tópico: {topico}</div>
        )}
        {typeof aula.conteudo === 'function' ? <aula.conteudo /> : aula.conteudo}
      </main>
    </div>
  );
}

export default App;
