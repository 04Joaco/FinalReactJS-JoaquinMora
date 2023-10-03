import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'; 


const Navbar = () => {
    return (
    <div className='Nav'>
        <h1>BlueBerry</h1>
        <div></div>
        <div className="links">
                <NavLink to={"/"} ><h4>Home</h4></NavLink>
        </div>
        <div className="links">
                <NavLink to={"/Nosotros"} ><h4>Nosotros</h4></NavLink>
        </div>
        <div className='links'>
                <NavLink to={"/Products"} ><h4>Products</h4></NavLink>
        </div>
        <div className='links'>
                <NavLink to={"/Carro"} ><h4>Carrito</h4></NavLink>
        </div>
        </div>
    )
}

export default Navbar