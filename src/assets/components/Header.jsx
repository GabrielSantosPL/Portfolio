import React, { useEffect, useState } from 'react';
import './css/Header.css'; // Não esqueça de importar o CSS
import { useLocation } from 'react-router';

export default function Header(){

    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const location = useLocation().pathname.substring(0);

  useEffect(

    () =>{

      if(theme === "dark"){

        localStorage.setItem("theme", "dark");
      
    } else {

      localStorage.setItem("theme", "white")

    }

    document.documentElement.setAttribute("theme", `${theme}`)

    },
    [theme]
  )

    function changeTheme(){

      if(theme==="dark"){

        setTheme("white");

      } else {

        setTheme("dark");

      }

    }

  return (
    <header className="retro-header">
      {/* Título decorativo à esquerda */}
      <div className="header-brand">
        <span className="brand-title">C:{location}</span>
      </div>

      {/* Botões à direita */}
      <div className="header-actions">
        {/* Botão de voltar para a Home usando React Router */}
        <a href="/" className="header-btn">
          Home
        </a>

        <button 
          className="header-btn" 
          onClick={()=>{changeTheme()}}
        >
          Trocar Tema
        </button>
      </div>
    </header>
  );
};