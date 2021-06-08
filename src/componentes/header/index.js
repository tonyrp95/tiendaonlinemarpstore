import React,{useContext} from 'react'
import logo from "../../img/logo.png";
import logo1 from "../../img/logo1.png";
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
                    <Link to="/Nosotros">NOSOTROS</Link>
                </li>
                <li>
                    <Link to="/Politicas">POLÍTICAS</Link>
                </li>
                <li>
                    <Link to="/sesion">INICIO DE SESION</Link>
                </li>
                <img  src={logo1} className="logo1" alt="logo1" width="20" />
                <div className="" onClick="">
                <input type="name" name="buscar" className="buscar" placeholder="Buscar..." />
            </div>
            </ul>

            <div className="cart" onClick={tooggleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length} </span>
            </div>
        </header>

    )
}