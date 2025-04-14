import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='menu'>
        <li class='logo'>Tripz</li>
        <li>Home</li>
        <li>Como funciona</li>
        <li>Funcionalidades</li>
        <li>Destinos Populares</li>
        <li>Depoimentos</li>
      </ul>

      <div className='navbar-actions'>
        <button className="btn-navbar">Começe a Planejar</button>
        <button className="btn-navbar">Login</button>

      </div>
    </div>
  )
}

export default Navbar
