import { Route, Routes } from 'react-router'
import './App.css'
import Header from './assets/components/Header'
import Home from './pages/Home'
import Sobre_Mim from './pages/Sobre_Mim'
import Form_Acad from './pages/Form_Acad'
import IHC from './pages/IHC'
import TP2 from './pages/TP2'
import GAP from './pages/GAP'

function App() {

  return (
    <>
    
      <Header />

      <Routes>
        

        <Route path='/' element={<Home />}/>
        <Route path='/Sobre_Mim' element={<Sobre_Mim />} />
        <Route path='/Form_Acad' element={<Form_Acad />} />
        <Route path='/Refl/IHC' element={<IHC />} />
        <Route path='/Refl/TP2' element={<TP2 />} />
        <Route path='/Refl/GAP' element={<GAP />} />

      </Routes>
    </>
  )
}

export default App
