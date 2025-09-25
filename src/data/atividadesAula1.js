// Dados das atividades da Aula 1: Abstração Lógica

export const atividadesAula1 = [
  {
    tipo: 'sequencia',
    titulo: 'Jogo de Sequência Lógica',
    perguntas: [
      {
        texto: '2, 4, 8, 16, ?',
        resposta: 32,
        dica: 'Qual operação transforma cada número no próximo?',
        explicacao: 'Cada número é o dobro do anterior (multiplicação por 2). 16 x 2 = 32.'
      },
      {
        texto: '3, 6, 12, 24, ?',
        resposta: 48,
        dica: 'O que acontece com cada termo da sequência?',
        explicacao: 'Cada termo é multiplicado por 2. 24 x 2 = 48.'
      },
      {
        texto: '10, 7, 4, 1, ?',
        resposta: -2,
        dica: 'Observe se há uma diferença constante entre os números.',
        explicacao: 'A sequência diminui 3 a cada termo. 1 - 3 = -2.'
      },
      {
        texto: '1, 4, 9, 16, ?',
        resposta: 25,
        dica: 'Esses números têm relação com multiplicação de números iguais.',
        explicacao: 'São quadrados perfeitos: 1², 2², 3², 4², 5². 5² = 25.'
      },
      {
        texto: '21, 18, 15, 12, ?',
        resposta: 9,
        dica: 'Veja se a diferença entre os termos é sempre a mesma.',
        explicacao: 'A sequência diminui 3 a cada termo. 12 - 3 = 9.'
      },
      {
        texto: '2, 3, 5, 7, 11, ?',
        resposta: 13,
        dica: 'Todos os números da sequência só têm dois divisores.',
        explicacao: 'São números primos. O próximo primo após 11 é 13.'
      }
    ]
  },
  {
    tipo: 'ligar',
    titulo: 'Ligue os Conceitos',
    pares: [
      { conceito: 'Abstração', exemplo: 'Ignorar detalhes para focar no essencial', explicacao: 'Abstração é a habilidade de simplificar, focando apenas no que importa para resolver o problema.' },
      { conceito: 'Algoritmo', exemplo: 'Sequência de passos para resolver um problema', explicacao: 'Um algoritmo é uma sequência ordenada de instruções para chegar a uma solução.' },
      { conceito: 'Variável', exemplo: 'Espaço para guardar um valor', explicacao: 'Variável é um local na memória do computador onde guardamos informações temporárias.' },
      { conceito: 'Condição', exemplo: 'Tomar decisão com base em uma regra', explicacao: 'Condições permitem que o algoritmo tome decisões diferentes conforme a situação.' },
    ],
    dicas: [
      'Leia todos os conceitos antes de começar a ligar.',
      'Procure palavras-chave parecidas entre conceito e exemplo.',
      'Se errar, tente outra combinação! Não desista.',
      'Lembre-se: abstração é simplificar, algoritmo é passo a passo.',
    ]
  },
  {
    tipo: 'arrastar',
    titulo: 'Mini-jogo Arrastar e Soltar',
    desafios: [
      {
        titulo: 'Desafio 1: Número Positivo',
        blocosCorretos: [
          'Início',
          'Leia o número',
          'Se número > 0',
          'Mostre "Número positivo"',
          'Fim',
        ],
        dicas: [
          'Arraste os blocos para formar o algoritmo correto.',
          'Todo algoritmo tem início e fim!',
          'Blocos de decisão (se) vêm antes da ação.',
          'Se errar, tente reorganizar os blocos.',
        ],
        explicacao: 'O algoritmo lê um número e verifica se ele é maior que zero. Se for, mostra a mensagem "Número positivo".'
      },
      {
        titulo: 'Desafio 2: Par ou Ímpar',
        blocosCorretos: [
          'Início',
          'Leia o número',
          'Se número % 2 == 0',
          'Mostre "Par"',
          'Senão',
          'Mostre "Ímpar"',
          'Fim',
        ],
        dicas: [
          'Agora temos um desvio com "senão"!',
          'Lembre-se: leia o número antes de testar.',
          'O bloco "Senão" vem após o teste.',
          'Monte a estrutura completa antes de verificar.',
        ],
        explicacao: 'O algoritmo testa se o número é divisível por 2. Se for, mostra "Par"; senão, mostra "Ímpar".'
      },
      {
        titulo: 'Desafio 3: Média de Notas',
        blocosCorretos: [
          'Início',
          'Leia nota1',
          'Leia nota2',
          'media = (nota1 + nota2) / 2',
          'Se media >= 6',
          'Mostre "Aprovado"',
          'Senão',
          'Mostre "Reprovado"',
          'Fim',
        ],
        dicas: [
          'Leia as duas notas antes de calcular a média.',
          'O cálculo da média vem antes do teste.',
          'Use "Senão" para o caso de reprovação.',
          'Monte a estrutura completa antes de verificar.',
        ],
        explicacao: 'O algoritmo calcula a média de duas notas e verifica se o resultado é maior ou igual a 6 para aprovar ou reprovar.'
      },
    ]
  }
];
