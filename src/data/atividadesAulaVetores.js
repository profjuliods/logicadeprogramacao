// Atividades lúdicas para aula de Vetores (busca, manipulação e conceitos)

export const atividadesAulaVetores = [
  {
    tipo: 'arrastar',
    titulo: 'Monte o Vetor dos Heróis',
    desafios: [
      {
        titulo: 'Crie um vetor com os nomes dos heróis',
        blocosCorretos: [
          'Início',
          'herois = ["Superman", "Batman", "Mulher-Maravilha"]',
          'Mostre herois',
          'Fim',
        ],
        dicas: [
          'Vetores (arrays) guardam vários valores em uma variável só.',
          'Use colchetes [ ] para criar um vetor.',
          'Separe os nomes por vírgula.',
        ],
        explicacao: 'O vetor herois armazena três nomes. Podemos acessar cada um pelo índice ou mostrar todos juntos.'
      },
      {
        titulo: 'Acesse o segundo elemento do vetor',
        blocosCorretos: [
          'Início',
          'herois = ["Superman", "Batman", "Mulher-Maravilha"]',
          'Mostre herois[1]',
          'Fim',
        ],
        dicas: [
          'O índice do vetor começa em 0.',
          'herois[1] mostra o segundo nome.',
        ],
        explicacao: 'herois[1] acessa o segundo elemento do vetor, que é "Batman".'
      },
    ]
  },
  {
    tipo: 'sequencia',
    titulo: 'Sequência de Busca no Vetor',
    perguntas: [
      {
        texto: 'Qual comando encontra o número 7 no vetor numeros = [2, 4, 7, 9]?',
        resposta: 'numeros[2]',
        dica: 'Lembre-se: o índice começa em 0.',
        explicacao: 'numeros[2] retorna 7, pois é o terceiro elemento.'
      },
      {
        texto: 'Como adicionar o número 10 ao final do vetor numeros?',
        resposta: 'numeros.push(10)',
        dica: 'Use o método push para adicionar ao final.',
        explicacao: 'numeros.push(10) adiciona o valor 10 ao final do vetor.'
      },
      {
        texto: 'Como remover o primeiro elemento do vetor nomes?',
        resposta: 'nomes.shift()',
        dica: 'O método shift remove o primeiro elemento.',
        explicacao: 'nomes.shift() remove o primeiro item do vetor nomes.'
      },
    ]
  },
  {
    tipo: 'ligar',
    titulo: 'Ligue o Conceito ao Exemplo (Vetores)',
    pares: [
      { conceito: 'Acessar elemento', exemplo: 'vetor[índice]', explicacao: 'Para acessar um valor específico, usamos o índice entre colchetes.' },
      { conceito: 'Adicionar ao final', exemplo: 'vetor.push(valor)', explicacao: 'O método push adiciona um valor ao final do vetor.' },
      { conceito: 'Remover do início', exemplo: 'vetor.shift()', explicacao: 'O método shift remove o primeiro elemento do vetor.' },
      { conceito: 'Tamanho do vetor', exemplo: 'vetor.length', explicacao: 'A propriedade length retorna quantos elementos o vetor possui.' },
    ],
    dicas: [
      'Leia todos os conceitos e exemplos antes de ligar.',
      'Procure palavras-chave parecidas.',
      'Se errar, tente outra combinação!',
    ]
  }
];
