import Card_Image from "../assets/Card_Image";


export default function Form_Acad(){


    const form_acad = [{id: 1, title: "Formação Acadêmica", text: `Nesta seção é possível encontrar todas certificações por mim obtidas ao longo de minha vida acadêmica.`}, {id: 2, title: "Faculdade de Tecnologia", image: "/imgs/log-dsm.png",text: "Todos os certificados obtidos por meio ou por conta da Fatec estarão dispostos nos links abaixo. Atualmente todos os certificados relacionados à semana de tecnologia as quais participei estão indisponíveis, pois a única cópia dos arquivos que possuo agora estão perdidos em meu celular quebrado, sendo a única alternativa para obter-los novamente pagar a plataforma Even3, que, apesar de estar em meus planos, não ocorrerá tão brevemente.", links:[{url: "/certificados/Python_Essentials.pdf", text:"Python Essentials"}, {url: "/certificados/Networking.pdf", text: "Networking Basics"}]},{id:3,title:"Senai",image: "/imgs/Senai.jpg",text:"Além do curso de DSM que curso na Fatec, as vezes dedico meus sábados para participar de demais cursos em instituições como o Senai. Apesar de ser uma prática recente, já possuo alguns certificados, e pretendo continuar essa prática sempre que achar necessário", links:[{url: "/certificados/Java_Fundamentals.pdf", text: "Java Fundamentals"}]}]

    return(

        <Card_Image data={form_acad}/>

    )

}