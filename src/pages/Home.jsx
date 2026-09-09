import Card_Image from "../assets/Card_Image";

export default function Home(){

    const idade = Math.trunc((new Date() - new Date("2007-01-18"))/31536000000);

    const cards = [
        {
            id: 1,
            title: "Portfolio Digital",
            text: "*Clique a direita do card para progredir e na esquerda para voltar*"
        },
        {
            id: 2,
            title: "Sobre Mim",
            text: `Me chamo Gabriel Santos Patrício e tenho ${idade} anos de idade.
            Atualmente estou cursando Desenvolvimento de Software Multiplataforma na Faculdade de Tecnologia de Indaiatuba.`,
            links: [{url:"/Sobre_Mim",
            text: `Acessar página "Sobre Mim"`}]
        },
        {
            id: 3,
            title: "Formação acadêmica",
            text: "Para além do curso de Desenvolvimento de Software que presto na Fatec, tenho também cursos complementares que ocasionalmente participo, caso esteja interessado(a) acesse o link abaixo: ",
            links: [{url: "/Form_Acad",
            text: "Cursos e Certificados"}]
        }
    ]

    return(

        <>
        
            <Card_Image data={cards}/>

        </>

    )

}