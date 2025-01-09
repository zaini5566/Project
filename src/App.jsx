import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SettingLayout from './Components/SettingLayout/SettingLayout'
import MainLayout from './Components/MainLayout/MainLayout'
import Settings from './Components/SubComponents/Settings/Settings'


function App() {


  return (
    <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<MainLayout/>}>
             <Route path='setting' element={<Settings/>}/>
         </Route> 
       </Routes>
       </BrowserRouter>
    
      
    </>
  )
}

export default App
