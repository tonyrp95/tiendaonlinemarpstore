import React from 'react'
import {Switch, Route, Router } from "react-router-dom";
import { inicio }  from "./inicio";
import { ProductosLista} from "./productos/index";
import { sesion }  from "./sesion";
import { Nosotros }  from "./Nosotros";
import { Politicas }  from "./Politicas";
import { ProductoDetalles } from "./productos/ProductoDetalles";

export const Paginas = () => {
    return (
       <section>
           <Switch>
            <Route path="/inicio" exact component={inicio} />
            <Route path="/productos" exact component={ProductosLista} />
            <Route path="/sesion" exact component={sesion } />
            <Route path="/Nosotros" exact component={ Nosotros } />
            <Route path="/Politicas" exact component={ Politicas } />
            <Route path="/producto/:id" exact component={ProductoDetalles} />
           </Switch>
       </section>

    )
}