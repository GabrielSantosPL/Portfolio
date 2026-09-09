import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
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

    
            <button onClick={()=>{changeTheme()}}>Oi</button>

      <Routes>
        

        <Route path='/' element={<Home />}/>

      </Routes>
    </>
  )
}

export default App
