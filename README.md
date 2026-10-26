# skillmatch-js
SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior

Autor: Wellington Alves de Oliveira (SENAI SC, curso SCTECH)

## Objetivo

O SkillMatch JS compara as habilidades de um candidato com os requisitos de vagas fictícias de Front-End Júnior. O programa mostra, para cada vaga, o percentual de compatibilidade, as habilidades que faltam e se a experiência é suficiente. No final, indica a melhor vaga e sugere qual habilidade estudar primeiro.

## Como executar

1. Instale o [Node.js](https://nodejs.org).
2. Clone o repositório: `git clone https://github.com/wadeotech/skillmatch-js.git`
3. Entre na pasta: `cd skillmatch-js`
4. Execute: `node skillmatch.js`

O relatório aparece no terminal depois de cerca de 3 segundos, que é o tempo do servidor simulado.

## Estrutura do projeto

```
skillmatch-js/
├── skillmatch.js
└── README.md
```

## Ferramentas e extensões

- Editor: Visual Studio Code
- Extensões usadas: ESLint, Live Server, Portuguese (Brazil) Language Pack e Prettier
- Versionamento: Git, GitHub e GitHub Desktop
- Organização das tarefas: Kanban ([https://trello.com/invite/b/6ad74471976c832ea086318b/ATTIdf5ab00f0a52bace30e8e82b0d5e1de012AF164A/skillmatch-js])

## Como o cálculo funciona

**Compatibilidade:** é a quantidade de requisitos da vaga que o candidato possui, dividida pelo total de requisitos da vaga, multiplicada por 100. A mesma regra vale para todas as vagas.

**Classificação:**

| Percentual | Classificação |
|---|---|
| 80% a 100% | Alta compatibilidade |
| 50% a 79% | Média compatibilidade |
| 0% a 49% | Baixa compatibilidade |

**Melhor vaga:** é a vaga com o maior percentual de compatibilidade. Em caso de empate, vale a primeira da lista.

**Recomendação de estudo:** o programa conta em quantas vagas cada habilidade faltante aparece. A habilidade que aparece em mais vagas é a prioridade, porque estudá-la aproxima o candidato de mais vagas. Em caso de empate, vale a primeira encontrada.

## Conceitos de JavaScript usados

- **Objetos:** o candidato é um objeto com nome, área de interesse, experiência, disponibilidade e habilidades.
- **Arrays e métodos de array:** `filter` (requisitos atendidos, habilidades faltantes e filtro de vagas), `reduce` (melhor vaga) e `map` (lista de empresas).
- **Classes e herança:** a classe `Vaga` guarda empresa, cargo, requisitos e experiência mínima. `VagaRemota` herda de `Vaga` e acrescenta a forma de trabalho, pois uma vaga remota é uma vaga com uma informação a mais.
- **this:** o método `resumo()` usa `this` para acessar os dados da própria vaga.
- **Callback:** `filtrarVagas` recebe uma função como critério. O relatório passa `experienciaSuficiente` para listar as vagas em que a experiência do candidato é suficiente.
- **Closure:** `criarContadorDeVagas` guarda o número da vaga dentro da função, sem usar variável global.
- **Promise e async/await:** `buscarVagas` simula um servidor com `setTimeout` de 3 segundos. `carregarVagas` e `gerarRelatorio` usam `async/await` para esperar a resposta.
- **Estruturas de decisão e repetição:** `if/else` na classificação e `for` na listagem das vagas. O operador ternário escolhe o texto "suficiente" ou "insuficiente".

## var, let e const

- `var` tem escopo de função, pode ser redeclarada e sofre hoisting. Por isso é evitada.
- `let` tem escopo de bloco e pode receber novo valor.
- `const` tem escopo de bloco e não pode receber novo valor.

Neste projeto uso `const` por padrão e `let` quando o valor muda (como nos contadores do `for`).

## Como a internet funciona e a arquitetura cliente-servidor

Na internet, o **cliente** (navegador ou aplicativo) envia uma requisição a um **servidor**, que processa o pedido e devolve uma resposta. Os dois conversam por meio de protocolos como o HTTP, e cada computador é encontrado por um endereço.

Neste projeto, o programa faz o papel do cliente que pede as vagas, e a função `buscarVagas` faz o papel do servidor. A **Promise** representa a resposta que ainda vai chegar, e o `await` faz o programa esperar por ela.

## Versionamento

O trabalho foi feito em branches, sem mexer direto na `main`, e depois integrado por Pull Request:

- `feature/recomendacao`: recomendação de estudo e contagem de habilidades faltantes.
- `feature/relatorio-`: relatório com vagas, habilidades faltantes, experiência, melhor vaga, map e callback.
- `docs/readme`: documentação do projeto.

## Vídeo de demonstração

[https://drive.google.com/file/d/1AUKc4reowF_XIveXZfU_O3hPEycDzK9t/view?usp=drive_link]