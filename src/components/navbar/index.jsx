import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { Route,Routes,BrowserRouter} from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
        

            <nav>
                <NavLink to='/'>Inicio</NavLink>
                <a href='#'>About me</a>
                <a href='#myskill'>My skills</a>
                <a href='#'>Works</a>
                <NavLink to='/contacto'>Contacto</NavLink>
                <NavLink to='/otrapagina'>Otra Pagina</NavLink>
            </nav>

            
            
            
        </div>
    )
}

export { Navbar }