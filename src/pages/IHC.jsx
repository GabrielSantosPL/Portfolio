import { useState } from "react"
import CardDeck from "../assets/components/CardDeck"

export default function IHC(){

    const ihc = [
        {id: 1, title: "03/08 - Introdução a disciplína", text: "Nesta primeira aula, foi explicado o intuito da matéria, assim como sua ementa, critérios avaliativos e resultado da aplicação dos conceitos no projeto prático do PI. Acredito que esta matéria será bem leve, tendo em vista que boa parte do conteúdo a ser absorvido e aplicado não passam de boas práticas que deveriam ser implatadas em todas aplicações desenvolvidas por mim e meu grupo."},
        
        {id: 2, title: "10/08 - Introdução a IHC", text: "Nesta aula, foi apresentado os primeiros conceitos de IHC, sendo eles: Usabilidade, Experiência do Usuário (UX), Affordance, FeedBack e Restrições. Além disso, foi explicados modelos e técnicas para obter feedback e retorno dos usuários. ."}]
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <CardDeck cardsData={ihc} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

    )

}