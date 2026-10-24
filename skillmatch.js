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

//Descrição das Vagas

const vagas = [
    
    {
        empresa: "SENAI SC",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["HTML", "CSS", "JavaScript", "Git"],
        experienciaMinimaMeses: 0
    },

    {
        empresa: "Soluções Web Ltda",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["HTML", "CSS", "JavaScript", "GitHub", "Node.js", "API REST"],
        experienciaMinimaMeses: 6
    },

    {
        empresa: "Conecta Web Ltda",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["JavaScript", "React", "TypeScript", "Tailwind", "Figma", "Testes"],
        experienciaMinimaMeses: 12
    }
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

const teste = new Vaga("SENAI SC", "Desenvolvedor Front-End Júnior", ["HTML", "CSS", "JavaScript", "Git"], 0 );
//console.log(teste.resumo());

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

const testeRemota = new VagaRemota("Soluções Web Ltda", "Desenvolvedor Front-End Júnior", ["HTML", "CSS", "JavaScript", "GitHub", "Node.js", "API REST"], 6, "100% Remota" );
console.log(testeRemota.resumo());