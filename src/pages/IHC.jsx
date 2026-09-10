import { useState } from "react"
import CardDeck from "../assets/components/CardDeck"

export default function IHC(){

    const ihc = [
        {id: 1, title: "03/08 - Introdução a disciplína", text: "Nesta primeira aula, foi explicado o intuito da matéria, assim como sua ementa, critérios avaliativos e resultado da aplicação dos conceitos no projeto prático do PI. Acredito que esta matéria será bem leve, tendo em vista que boa parte do conteúdo a ser absorvido e aplicado não passam de boas práticas que deveriam ser implatadas em todas aplicações desenvolvidas por mim e meu grupo."},
        
        {id: 2, title: "10/08 - Introdução a IHC", text: "Nesta aula, foi apresentado os primeiros conceitos de IHC, sendo eles: Usabilidade, Experiência do Usuário (UX), Affordance, FeedBack e Restrições. Além disso, foi explicados modelos e técnicas para obter feedback e retorno dos usuários. A aplicação destes conceitos em um projeto pode auxiliar a orientar e nortear o desenvolvimento."},
    
        {id: 3, title: "17/08 - Planejamento do Projeto Integrador", text: "Aula dedicada para planejamento do grupo e projeto do PI. Acho que os entregáveis deste trabalho estão meio confuso, a divisão de cargos representativos me pareceu meio desnecessário, e muita das coisas 'a fazer' do projeto, já estavam feitas nos semestres anteriores."},
    
        {id: 4, title: "24/08 - Atividade 'Uso de IA'", text: "Atividade voltada para formalizar a utilização durante o desenvolvimento das atividades em aula.", links: [{url: "/atividades/24_08_IHC.pdf", text: "Atividade", target: true}]},

        {id:5, title: "31/08 - Mapeamento da jornada do usuário", text: "Foi abordado nesta aula o mapeamento da jornada do usuário em um sistema, bem como planejar isso no desenvolvimento de um projeto. Este conceito é extremamente importante, levando em consideração a possível dificuldade que os usuários possam ter quando não planejado sua navegação. Houve também uma atividade prática para idealizar uma persona para um restaurante, juntamente com sua jornada. (Atividade feita em grupo, ainda espero o retorno do arquivo dos meus colegas)"}
    ]
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <CardDeck cardsData={ihc} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

    )

}