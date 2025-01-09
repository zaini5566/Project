import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/Vector.png'
import bell from '../assets/Bell.png'
import pprofile from '../assets/Rectangle 12.png'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-gray-200  flex justify-between items-center px-4'>
        <div >
             <img src={logo} alt="" width='150px' height="23"/>
        </div>

        <div className='flex border rounded-lg  border-gray-400 w-[460px] h-[48px] items-center px-2 gap-2'>
             <img src={search} alt="" className='w-4 h-5 '/>
            <input type="search"  placeholder='Search' className='bg-transparent  outline-none  border-gray-400'/>
        </div>

        <div className='flex items-center justify-center gap-4'>
             <div className='bell icon'>
                    <img src={bell} alt="" width='16px' height='18px'/>
             </div>
             <div className='flex justify-center items-center gap-2'>
                <div className='profileimg '>
                    <img src={pprofile} alt="" width='32px' height="32px"/>
                </div>
                <div >
                    <div className='text-[14px] font-normal text-profile-text '>
                        Time Bownmen
                    </div>
                    <div className='text-[11px] font-normal text-cool-gray '>
                        Aestec Amstern
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Navbar