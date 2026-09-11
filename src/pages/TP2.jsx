import { useState } from "react";
import CardDeck from "../assets/components/CardDeck";

export default function TP2(){

    const [activeIndex, setActiveIndex] = useState(0);
    const data = [{id: 1, title: "05/08 - Apresentação da Disciplina", text: "Aula dedicada para a apresentação da disciplina, contendo ementa, objetivos da matéria, metodologia aplicada, critérios avaliativos e plano de aula. "},
                  
                  {id: 2, title: "13/08 - Revisão dos conceitos de POO", text: "Devido a ausência da matéria de TP1 no 2º semestre do curso, foi-se necessário a aplicação de uma aula de revisão dos conceitos de programação orientada à objetos, assim como aplicação de uma atividade de nivelamento da turma. (Atividade feita em grupo, ainda espero o retorno do arquivo dos meus colegas)"},
                  
                  {id: 3, title: "20/08 - Atividade de construção de cenários POO", text: "Outra aula dedicada ao entendimento geral dos conceitos de POO, foi proposto aos grupos que fizessem 5 cenários que contenham conceitos da programação orientada à objetos, assim como códigos/pseudocódigos complementares.", links:[{url: "https://docs.google.com/document/d/1zVlg76LJR7Ca-U5TKPjEf-NDVJ-ygzdp21Pu24RKKCc/", text: "Texto dos cenários", target: true}, {url: "https://centropaulasouza-my.sharepoint.com/:u:/g/personal/gabriel_lourenco5_aluno_cps_sp_gov_br/IQAPjm53vVcDS4Q5M7038S_tAWqKJKVJkOjqU9vaB_SHwCQ?e=7X0SQP", text:"Códigos dos cenários", target: true}]},
                  
                  {id: 4, title: "27/08 - Padrões de projeto", text: "Foi abordado nesta aula padrões de projetos, como por exemplo, MVVM, MVP e MVC. Não foi cobrado uma atividade sobre a matéria, tendo em vista que o conteúdo foi abordado na disciplina de Desenvolvimento Web 3, sendo possível acessar nosso projeto em MVVM nos links abaixo (necessita-se dos dois para funcionamento):", links: [{url: "https://github.com/trueryk/mvvm_estudo_reactjs", text: "Front-End MVVM", target: true}, {url:"https://github.com/GabrielSantosPL/Biblioteca_Backend", text: "Back-End MVVM", target: true}]},

                  {id: 5, title: "03/09 - Prova POO", text:"Foi aplicada a primeira prova avaliativa de TP2, tendo como conteudo os principais conceitos de POO e padrões de projetos."},

                  {id: 6, title: "10/09 - Apresentação do portfólio e entrega do escopo do PI", text: "Aula dedicada à construção do portfolio digital junto à entrega do escopo do projeto integrador.", links:[{url: "https://docs.google.com/document/d/1gjzrWbfhHb4Kw2dksPxOKZ_Zj_7qxKHsK4705JF1RLI/", text: "Escopo PI"}]}
    ]

    return(

        <CardDeck cardsData={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

    )

}