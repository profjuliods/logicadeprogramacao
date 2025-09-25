// Dados das atividades da Aula 2: Ordenar Algoritmo e Preencher Lacunas

export const atividadesAula2 = [
  {
    tipo: 'ordenar',
    titulo: 'Ordene o Algoritmo de Soma',
    exemplo: 'Exemplo: Calcule a soma de dois valores lidos.',
    passosCorretos: [
      'Início',
      'Leia o valor de A',
      'Leia o valor de B',
      'Soma = A + B',
      'Mostre o valor de Soma',
      'Fim',
    ],
    dicas: [
      'Arraste os passos para formar o algoritmo correto.',
      'Todo algoritmo tem início e fim!',
      'Leia os valores antes de calcular.',
      'Mostre o resultado só depois do cálculo.',
    ],
  },
  {
    tipo: 'ordenar',
    titulo: 'Ordene o Algoritmo Par ou Ímpar',
    exemplo: 'Exemplo: Verifique se um número lido é par ou ímpar.',
    passosCorretos: [
      'Início',
      'Leia o número',
      'Se número % 2 == 0',
      'Mostre "Par"',
      'Senão',
      'Mostre "Ímpar"',
      'Fim',
    ],
    dicas: [
      'Arraste os passos para formar o algoritmo correto.',
      'Lembre-se: leia o número antes de testar.',
      'O bloco "Senão" vem após o teste.',
      'Monte a estrutura completa antes de verificar.',
    ],
  },
  {
    tipo: 'lacunas',
    titulo: 'Preencha as Lacunas do Pseudocódigo',
    exemplo: 'Exemplo: Complete o pseudocódigo de soma.',
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
    explicacao: 'Primeiro, lemos os valores de A e B. Depois, somamos os dois e guardamos em Soma. Por fim, mostramos o resultado. Essa é a lógica básica de um algoritmo de soma.',
  },
];
