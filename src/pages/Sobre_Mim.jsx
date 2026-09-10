import Card_Image from "../assets/Card_Image";


export default function Sobre_Mim(){

    const idade = Math.trunc((new Date() - new Date("2007-01-18"))/31536000000);

    const sobre_mim = [{id: 1, title: "Sobre Mim", image: "/imgs/GSPL.jpg", text: `Me chamo Gabriel Santos Patrício, tenho ${idade} anos de idade. Possuo uma irmã mais nova e dois cachorros da raça Yorkshire. Curso Desenvolvimento de Software Multiplataforma, e ocasionalmente participo de outros cursos complementares. No meu tempo livre, gosto de jogar videogames, de diferentes gêneros. Tenho como meta desenvolver minhas habilidades na área de TI para produzir minhas próprias aplicações, assim como jogos.`}]

    return(

        <Card_Image data={sobre_mim}/>

    )

}