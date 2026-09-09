import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Sobre_Mim from './pages/Sobre_Mim'
import Form_Acad from './pages/Form_Acad'
import { useEffect, useState } from 'react'

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

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
    <>
    
            <button onClick={()=>{changeTheme()}}>Alterar tema</button>

      <Routes>
        

        <Route path='/' element={<Home />}/>
        <Route path='/Sobre_Mim' element={<Sobre_Mim />} />
        <Route path='/Form_Acad' element={<Form_Acad />} />

      </Routes>
    </>
  )
}

export default App
