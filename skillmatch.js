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

console.log(candidato);

//Descrição das Vagas

const vagas = [
    
    {
        empresa: "SENAI SC",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["HTML", "CSS", "JavaScript", "Git"]
    },

    {
        empresa: "Soluções Web Ltda",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["HTML", "CSS", "JavaScript", "GitHub", "Node.js", "API REST"]
    },

    {
        empresa: "Conecta Web Ltda",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["JavaScript", "React", "TypeScript", "Tailwind", "Figma", "Testes"]
    }
];

console.log(vagas);