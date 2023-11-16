import React from 'react'
import {FiSearch, FiUser,FiMenu } from 'react-icons/fi'
import  logo  from "./../../public/img/UrbanNight.png"



export default function Nav() {
  return (
    <div className='bg-[#000000] text-white flex flex-row h-14  justify-between '>
        <ul className='flex flex-row  list-none gap-20  pl-16  my-auto'>
            <li><button>Inicio</button></li>
            <li><button>Nosotros</button></li>
            <li><button>Coleccion</button></li>
            <li><button>Locales</button></li>
        </ul>

        <div className='my-auto right-36 relative '>
            <img src={logo} alt="Logo" />
        </div>

        <div className='my-auto mx-10 flex flex-row gap-6 order-last'>
      <button><FiSearch /></button>
      <button> <FiUser /></button>
      <button>  <FiMenu /></button>
     
    
            
        </div>
    </div>
  )
}
