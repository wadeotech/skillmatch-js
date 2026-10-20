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
        empresa: "Conecta Web Ltda",
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

