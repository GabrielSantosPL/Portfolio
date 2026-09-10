import { Route, Routes } from 'react-router'
import './App.css'
import Header from './assets/components/Header'
import Home from './pages/Home'
import Sobre_Mim from './pages/Sobre_Mim'
import Form_Acad from './pages/Form_Acad'

function App() {

  return (
    <>
    
      <Header />

      <Routes>
        

        <Route path='/' element={<Home />}/>
        <Route path='/Sobre_Mim' element={<Sobre_Mim />} />
        <Route path='/Form_Acad' element={<Form_Acad />} />

      </Routes>
    </>
  )
}

export default App
