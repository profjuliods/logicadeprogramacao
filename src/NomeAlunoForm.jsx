import React, { useState } from 'react';

export default function NomeAlunoForm({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim()) {
      setErro('Digite seu nome para continuar.');
      return;
    }
    setErro('');
    onSubmit(nome.trim());
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', gap: 24, background: 'rgba(255,255,255,0.13)', borderRadius: 16, boxShadow: '0 2px 12px #ffd93d33', padding: 32, maxWidth: 380, margin: '48px auto'
    }}>
      <h2 style={{color:'#185a9d', fontWeight:700, fontSize:'1.5em'}}>Bem-vindo(a)!</h2>
      <label htmlFor="nome-aluno" style={{fontWeight:600, fontSize:'1.1em', color:'#222'}}>Digite seu nome para começar:</label>
      <input
        id="nome-aluno"
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        style={{padding:'10px 18px', borderRadius:8, border:'2px solid #ffd93d', fontSize:'1.1em', width:'100%'}}
        placeholder="Seu nome"
        autoFocus
        aria-label="Nome do aluno"
      />
      {erro && <div style={{color:'#c00', fontWeight:600}}>{erro}</div>}
      <button type="submit" style={{background:'#ffd93d', color:'#222', border:'none', borderRadius:8, padding:'10px 28px', fontWeight:700, fontSize:'1.1em', cursor:'pointer'}}>Começar</button>
    </form>
  );
}
