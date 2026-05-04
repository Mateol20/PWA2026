import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"

 const Header = () => {
    const navegar = useNavigate();
    const irAHome=()=>{
        navegar('/')
    }
    const irAFavoritas=()=>{
        navegar('/favoritas')
    }

    return (
    <>
    <header className="flex justify-between w-full">
    <div className='h-24 bg-gray-500  flex justify-between w-full p-7'>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-80 h-10" onClick={irAHome}>Inicio</button>
      <input type="text" className=" flex w-80 h-10 border border-black" placeholder="   Buscar..."></input>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-80 h-10" onClick={irAFavoritas}>Fav</button>
    </div>
    </header>
    </>
  )
}
export default Header
  