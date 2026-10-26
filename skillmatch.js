// SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior
// Autor: Wellington Alves de Oliveira

//Descrição do candidato

const candidato = {
    nome: "Wellington Alves de Oliveira",
    areaInteresse: "Desenvolvedor Front-End Júnior",
    experienciaMeses: 3,
    disponivel: true,
    habilidades: ["JavaScript","Git", "GitHub", "HTML", "CSS", "Visual Studio Code", "Trello"]
};

//=== Classes ===

// A classe representa uma vaga de trabalho e guarda os dados da vaga, como: empresa, cargo, requisitos e tempo de experiência.

class Vaga {
  constructor(empresa, cargo, requisitos, experienciaMinimaMeses) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.experienciaMinimaMeses = experienciaMinimaMeses;
  }

  resumo() {
    return " A empresa " + this.empresa + " está contratando: " + this.cargo + " ; Requisitos solicitados: " + this.requisitos + " ; Experiência mínima necessária: " + this.experienciaMinimaMeses + " meses ";
  }
}

// A classe representa uma vaga de trabalho remoto que herda os dados da classe mãe e acrescenta a forma de trabalho.

class VagaRemota extends Vaga {
  constructor(empresa, cargo, requisitos, experienciaMinimaMeses, formaTrabalho) {
    super(empresa, cargo, requisitos, experienciaMinimaMeses);
    this.formaTrabalho = formaTrabalho;
  }

  resumo() {
    return super.resumo() + " ; Forma de trabalho: " + this.formaTrabalho; 
  }
}

//Descrição das Vagas

const vagas = [
    
    new Vaga ( "SENAI SC", "Desenvolvedor Front-End Júnior", ["HTML", "CSS", "JavaScript", "Git"], 0 ),

    new VagaRemota ( "Soluções Web Ltda", "Desenvolvedor Front-End Júnior", ["HTML", "CSS", "JavaScript", "GitHub", "Node.js", "API REST"], 6, "100% Remota" ),

    new Vaga ( "Conecta Web Ltda", "Desenvolvedor Front-End Júnior", ["JavaScript", "React", "TypeScript", "Tailwind", "Figma", "Testes"], 12 ),
];

//=== Funções ===

// A função recebe uma vaga e retorna os requisitos dela que o candidato possui como habilidade.

const requisitosAtendidos = (vaga) => {
  return vaga.requisitos.filter(req => candidato.habilidades.includes(req));
};

/*A função recebe uma vaga, filtra quantas habilidades compatíveis o candidato possui, divide as habilidades compatíveis pelo número total de requisitos da vaga, multiplica por 100 e retorna o valor percentual de compatibilidade de habilidades do candidato em relação aos requisitos da vaga.*/

const calcularPercentual = (vaga) => {
  return (requisitosAtendidos(vaga).length / vaga.requisitos.length) * 100;
};

// Função recebe uma vaga e retorna as habilidades que faltam ao candidato referente aos requisitos da vaga.

const habilidadesFaltantes = (vaga) => {
  return vaga.requisitos.filter(req => !candidato.habilidades.includes(req));
};

// A função recebe uma vaga, verifica a experiência exigida e retorna true se a experiência do candidato é suficiente, ou false se não é.

const experienciaSuficiente = (vaga) => {
  return candidato.experienciaMeses >= vaga.experienciaMinimaMeses;
};

// A função recebe o percentual de compatibilidade entre a vaga e as habilidades do candidato e retorna a classificação em Alta, Média ou Baixa compatibilidade.

const classificarCompatibilidade = (percentual) => {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
};

// Recebe uma lista de vagas e um critério, e retorna só as vagas que passam no critério.

const filtrarVagas = (listaVagas, criterio) => {
  return listaVagas.filter(criterio);
};

// Cria e devolve uma função que numera as vagas. A cada chamada soma 1 e devolve o número da vez. A contagem fica guardada dentro de criarContadorDeVagas (closure), por não ser uma variável global.

const criarContadorDeVagas = () => {
  let numero = 0;

  return () => {
    numero = numero + 1;
    return numero;
  };
};

//=== Servidor simulado ===

// No simulador, o servidor recebe a probeça de entregar o array de vagas do projeto, espra 1 segundo e resolve entregando o array, ou rejeita.

const buscarVagas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(vagas);
    }, 3000);
  });
};

buscarVagas().then(resultado => {
  console.log(resultado.length);
});