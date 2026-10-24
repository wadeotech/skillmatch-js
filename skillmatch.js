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

//console.log(candidato);

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
        empresa: "Conecvaga.requita Web Ltda",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["JavaScript", "React", "TypeScript", "Tailwind", "Figma", "Testes"],
        experienciaMinimaMeses: 12
    }
];

//console.log(vagas);

//node skillmatch.jsconsole.log(vagas[1].experienciaMinimaMeses);

//console.log(candidato.habilidades.includes("HTML"));
//console.log(candidato.habilidades.includes("React"));


//=== Funções ===

// A função recebe uma vaga e retorna os requisitos dela que o candidato possui como habilidade.

const requisitosAtendidos = (vaga) => {
  return vaga.requisitos.filter(req => candidato.habilidades.includes(req));
};

console.log(requisitosAtendidos(vagas[0]));
console.log(requisitosAtendidos(vagas[1]));
console.log(requisitosAtendidos(vagas[2]));

console.log(requisitosAtendidos(vagas[1]).length);
console.log(vagas[1].requisitos.length);

/*A função recebe uma vaga, filtra quantas habilidades compatíveis o candidato possui, divide as habilidades compatíveis pelo número total de requisitos da vaga, multiplica por 100 e retorna o valor percentual de compatibilidade de habilidades do candidato em relação aos requisitos da vaga.*/

const calcularPercentual = (vaga) => {
  return (requisitosAtendidos(vaga).length / vaga.requisitos.length) * 100;
};

console.log(calcularPercentual(vagas[0]));
console.log(calcularPercentual(vagas[1]));
console.log(calcularPercentual(vagas[2]));

//console.log(candidato.habilidades.includes("React"));
//console.log(!candidato.habilidades.includes("React"));

// // Função recebe uma vaga e retorna as habilidades que faltam ao candidato referente aos requisitos da vaga.

const habilidadesFaltantes = (vaga) => {
  return vaga.requisitos.filter(req => !candidato.habilidades.includes(req));
};

console.log(habilidadesFaltantes(vagas[0]));
console.log(habilidadesFaltantes(vagas[1]));
console.log(habilidadesFaltantes(vagas[2]));


// A função recebe uma vaga, verifica a experiência exigida e retorna true se a experiência do candidato é suficiente, ou false se não é.

const experienciaSuficiente = (vaga) => {
  return candidato.experienciaMeses >= vaga.experienciaMinimaMeses;
};

console.log(experienciaSuficiente(vagas[0]));
console.log(experienciaSuficiente(vagas[1]));
console.log(experienciaSuficiente(vagas[2]));