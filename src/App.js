import React from "react";
import {Header} from "./componentes/header";               
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import { Dataprovider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";
import { sesion } from "./componentes/sesion";


function App() {
  return (
    <Dataprovider>
    <div className="App">
      <Router>
        <Header />
        <Carrito />
        
        <Paginas />
        
      </Router>
    </div>
    </Dataprovider>
  );
}

export default App;
