import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Detalhes from './pages/Detalhes'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/detalhes/:id' element={<Detalhes/>}></Route>   
    </Routes>

    <Footer/>
    </>
    
  )
}

export default App
