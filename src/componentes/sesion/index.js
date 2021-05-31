import React from 'react'
import logo from "../../img/logo.png";

export const sesion = () => {
return (

  <div className="sesion"><br/><br/><br/><br/><br/><br/><br/><br/>
 <form method="post" action="" name="signup-form">
 <div className="logo">
                <img src={logo} alt="logo" width="150"/>
                </div>
    <div class="form-element">
        <label></label>
        <input type="text" name="usuario" pattern="[a-zA-Z0-9]+" placeholder="Usuario" required  />
    </div>
    <div class="form-element">
        <label></label>
        <input type="email" name="correo" placeholder="Correo" required />
    </div>
    <div class="form-element">
        <label></label>
        <input type="password" name="contraseña" placeholder="Contraseña" required />
    </div>
    <button className="boton" onClick="this.form.action='.php';this.form.submit();"  name="iniciar sesion" value="register">Iniciar sesion</button> <button className="boton"   name="iniciar sesion" value="register">Registrarse</button>
    <p className>olvidaste tu contraseña?</p>
</form>
    </div>
  )
}
