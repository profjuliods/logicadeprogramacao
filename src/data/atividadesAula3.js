// Dados das atividades da Aula 3: Fundamentos de Algoritmos de Programação
// Baseado em matriz_competencias_uc_logica.txt e mapa_funcoes_capacidades.txt

export const atividadesAula3 = [
  {
    tipo: 'sequencia',
    titulo: 'Sequência de Passos de um Algoritmo',
    perguntas: [
      {
        texto: 'Qual é o primeiro passo para resolver um problema com algoritmo?',
        resposta: 'Entender o problema',
        dica: 'Antes de programar, é preciso compreender o que deve ser resolvido.',
        explicacao: 'O primeiro passo é entender o problema para depois planejar a solução.'
      },
      {
        texto: 'Depois de entender o problema, o que deve ser feito?',
        resposta: 'Planejar a solução',
        dica: 'Pense nos passos necessários antes de codificar.',
        explicacao: 'Planejar a solução ajuda a organizar o raciocínio e evita erros.'
      },
      {
        texto: 'Qual etapa vem após planejar a solução?',
        resposta: 'Codificar o algoritmo',
        dica: 'Agora é hora de transformar o plano em código.',
        explicacao: 'Codificar é escrever o algoritmo em uma linguagem compreendida pelo computador.'
      },
      {
        texto: 'O que fazer após codificar o algoritmo?',
        resposta: 'Testar o algoritmo',
        dica: 'Verifique se o algoritmo resolve o problema corretamente.',
        explicacao: 'Testar garante que o algoritmo funciona como esperado.'
      },
    ]
  },
  {
    tipo: 'ligar',
    titulo: 'Ligue os Conceitos de Algoritmos',
    pares: [
      { conceito: 'Algoritmo', exemplo: 'Sequência de passos para resolver um problema', explicacao: 'Algoritmo é um conjunto ordenado de instruções para atingir um objetivo.' },
      { conceito: 'Variável', exemplo: 'Espaço para armazenar um valor', explicacao: 'Variável é um local na memória para guardar dados temporários.' },
      { conceito: 'Entrada', exemplo: 'Dados fornecidos ao algoritmo', explicacao: 'Entrada são as informações que o algoritmo recebe para processar.' },
      { conceito: 'Saída', exemplo: 'Resultado produzido pelo algoritmo', explicacao: 'Saída é o resultado final após o processamento dos dados.' },
    ],
    dicas: [
      'Leia todos os conceitos e exemplos antes de ligar.',
      'Procure palavras-chave parecidas.',
      'Se errar, tente outra combinação!',
    ]
  },
  {
    tipo: 'arrastar',
    titulo: 'Monte o Algoritmo de Soma',
    desafios: [
      {
        titulo: 'Arraste os blocos para montar um algoritmo que some dois números',
        blocosCorretos: [
          'Início',
          'Leia A',
          'Leia B',
          'Soma = A + B',
          'Mostre Soma',
          'Fim',
        ],
        dicas: [
          'Todo algoritmo tem início e fim.',
          'Leia os valores antes de calcular.',
          'Mostre o resultado só depois do cálculo.',
        ],
        explicacao: 'O algoritmo lê dois valores, soma e mostra o resultado.'
      }
    ]
  }
];
