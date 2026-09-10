import { useState } from "react";
import CardDeck from "../assets/components/CardDeck";

export default function GAP(){

    const [activeIndex, setActiveIndex] = useState(0);
        const data = [{id: 1, title: "03/08 - Introdução a disciplina", text: "Aula dedicada a explicar o objetivo da disciplina, sua ementa, avaliações e metodologias aplicadas."}, 
                      
                      {id: 2, title: "10/08 - Introdução a metodologia ágil na gestão de um projeto", text: "Foi explicado em aula os conceitos fundamentais quando se trata de desenvolver um projeto utilizando da metodologia ágil, sendo eles: Entregas constantes, Organização Fluida e flexivel da equipe, priorização da experiência do usuário, análise e absorção de feedback, ritmo controlado e estável de desenvolvimento, etc."},
                    
                      {id: 3, title: "17/08 - Apresentação do manual do projeto integrador", text: "Nesta aula foi apresentado o manual do projeto integrador, responsável por instruir os grupos quanto a construção e apresentação do projeto integrador. O manual contém, Tema do projeto, Objetivo geral do projeto, Objetivo específico, metodologias que deverão ser aplicadas, entregaveis, etc."},

                      {id: 4, title: "24/08 - Desenvolvimento do PI", text: "Outra aula voltada para organizar e estruturar o PI em grupo, sendo introduzido os conceitos aprendidos em aula na prática."},
                    
                      {id: 5, title: "31/08 - Atividade e programação da primeira avaliação de Gestão Ágil", text: "Nesta aula foi feita e corrigida uma lista de exercicios que abordam os conteúdos vistos até então, junto da orientação para a primeira avaliação da disciplina, na qual será apresentado um seminário apresentando 3 artigos que utilizaram da metodologia Scrum.", links:[{url: "/atividades/31_08_GAP.pdf", text: "Lista de exercícios", target: true}]}
                    ]

                    return(

                        <CardDeck cardsData={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

                    )

}