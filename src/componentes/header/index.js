import React,{useContext} from 'react'
import logo from "../../img/logo.png";
import { Link} from "react-router-dom";
import { DataContext} from "../../context/Dataprovider";

export const Header = () => {
const value = useContext(DataContext);
const [menu, setMenu] = value.menu;
const [carrito] = value.carrito

const tooggleMenu = () =>{
    setMenu(!menu)
}

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
                    <Link to="/Nosotros">NOSTROS</Link>
                </li>
                <li>
                    <Link to="/Politicas">POLÍTICAS</Link>
                </li>
                <li>
                    <Link to="/sesion">INICIO DE SESION</Link>
                </li>
            </ul>
            <div className="cart" onClick={tooggleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length} </span>
            </div>
        </header>

    )
}