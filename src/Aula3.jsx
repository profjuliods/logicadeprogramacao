import React from 'react';
import Instrutor from './Instrutor';

export default function Aula3() {
  // Exemplo: dica dinâmica (ajuste conforme sua lógica de atividades)
  const dica = "Dica: siga as etapas do algoritmo: entender, planejar, codificar e testar!";
  return (
    <div style={{padding: 24}}>
      <Instrutor dica={dica} />
      {/* Aqui você pode renderizar as atividades da Aula 3 conforme sua lógica */}
      <h2>UC Lógica de Programação - Aula 3</h2>
      {/* ... */}
    </div>
  );
}
