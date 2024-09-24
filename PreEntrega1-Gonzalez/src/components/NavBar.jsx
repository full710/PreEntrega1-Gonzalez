import React from 'react'
import logo from "../assets/logo.webp"
import lupaBuscador from "../assets/lupaBuscador.svg"
import '../styles/navbar.css'
import CartWidget from './CartWidget'



const NavBar = () => {
  return (
    <>
        <div className='navbar'>
            <div className="logoNavbar">
                <a href="#Inicio"><img src={logo} alt="logo" /></a>
            </div>
            <div className="infoNavbar">
                <div className='formNavbar'>
                    <form>
                        <input type="search" placeholder="¿Que estas buscando?" name="buscador" autoComplete="off"/>
                        <button type="submit" value="Buscar" ><img src={lupaBuscador} alt="lupaBuscador"/></button>
                    </form>
                </div>
                <div className='ulNavbar'>
                    <ul>
                        <li><a href="#Inicio">Inicio</a></li>
                        <li><a href="#Contacto">Contacto</a></li>
                        <li><a href="#Productos">Productos</a></li>
                        <li><a href="Nosotros">Nosotros</a></li>
                    </ul>
                </div>
                <div className='cartNavbar'>
                    <CartWidget />
                </div>

            </div>
        </div>
    </>
  )
}

export default NavBar
