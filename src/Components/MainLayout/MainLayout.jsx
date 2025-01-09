import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Settings from '../SubComponents/Settings/Settings'

const MainLayout = () => {
  return (
    <div   className='  w-full h-screen flex '>
        <Sidebar/>
        <div className='  w-full h-screen'>
            <Routes>
                <Route path='setting' element={<Settings/>}/>
            </Routes>
          
        </div>
     </div>
  )
}

export default MainLayout