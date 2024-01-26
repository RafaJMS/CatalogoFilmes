import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Detalhes from './pages/Detalhes'
import Header from './components/Header'
import UpComing from './components/UpComing'
import TopRated from './components/TopRated'
import NowPlaying from './components/NowPlaying'
import Popular from './components/Popular'




function App() {
  return (
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/details/:id' element={<Detalhes/>}></Route>
      <Route path='/toprated' element={<TopRated/>}></Route>
      <Route path='/nowplaying' element={<NowPlaying/>}></Route>
      <Route path='/upcoming' element={<UpComing/>}></Route>
      <Route path='/popular' element={<Popular/>}></Route>           
    </Routes>
    
    </>
    
  )
}

export default App
