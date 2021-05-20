import React from 'react'
import logo from "../../img/logo.png";
import { Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/inicio">
                <div className="logo">
                <img src={logo} alt="logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
                <li>
                    <Link to="#">NOSTROS</Link>
                </li>
                <li>
                    <Link to="#">POLITICAS</Link>
                </li>
                <li>
                    <Link to="/sesion">INICIO DE SESION</Link>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>

    )
}