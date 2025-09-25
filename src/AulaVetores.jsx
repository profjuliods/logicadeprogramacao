import React from 'react';
import Instrutor from './Instrutor';

export default function AulaVetores() {
  // Exemplo: dica dinâmica (ajuste conforme sua lógica de atividades)
  const dica = "Dica: vetores guardam vários valores! Use colchetes e lembre-se que o índice começa em 0.";
  return (
    <div style={{padding: 24}}>
      <Instrutor dica={dica} />
      {/* Aqui você pode renderizar as atividades de vetores conforme sua lógica */}
      <h2>UC Lógica de Programação - Vetores</h2>
      {/* ... */}
    </div>
  );
}
