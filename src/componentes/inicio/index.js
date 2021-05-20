import React from 'react'
import Portada from "../../img/Portada.jpg";
import { Link } from "react-router-dom";

export const inicio = () => {
    return(
        <div className="inicio">
            <Link to="/">
                <h1 >Inicio</h1>
            </Link>
            <Link to="/productos">
            <h1 >Productos</h1>
            </Link>
            <Link to="/sesion">
            <h1 >Inicio de sesion</h1>
            </Link>
            <img src={Portada} alt="inicio"/>
        </div>
    )
}