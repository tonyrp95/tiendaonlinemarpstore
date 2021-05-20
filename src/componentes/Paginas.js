import React from 'react'
import {Switch, Route, Router } from "react-router-dom";
import { inicio }  from "./inicio";
import { ProductosLista} from "./productos/index";
import { sesion }  from "./sesion";

export const Paginas = () => {
    return (
       <section>
           <Switch>
            <Route path="/inicio" exact component={inicio} />
            <Route path="/productos" exact component={ProductosLista} />
            <Route path="/sesion" exact component={sesion } />
           </Switch>
       </section>

    )
}