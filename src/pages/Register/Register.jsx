import React, { useState } from 'react';
import quillatour from '../../assets/quillatour.png'

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isFalse, setIsFalse] = useState(false);

  const handleClick = () => {
    if(password === password2) {
      
    } else{
      setIsFalse(true);
    }
  }

  return (
    <div id="login" class="d-flex justify-content-center align-items-center">
   <div id="login-card" class="card">
     <div class="card-body">
       <form class="login-card">
            <div class="form-group d-flex flex-column justify-content-center align-items-center">
            <img src={quillatour} class="mb-4 p-2"width="250px"/>
              <input 
                type="email"
                class="form-control login-input mb-3"
                id="username"
                aria-describedby="Usuario"
                placeholder="Usuario"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                type="password"
                class="form-control login-input mb-3"
                id="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                class="form-control login-input mb-3"
                id="confirm-password"
                placeholder="Confirmar contraseña"
                onChange={(e) => setPassword2(e.target.value)}
              />
              { isFalse ? <div class="alert alert-warning" role="alert">
                Las contraseñas no coinciden
              </div> : null}
              <button
                type="button"
                class="btn btn-success login-button mt-3"
                onClick={handleClick}
              >Registrar</button>
            </div>
        </form>
     </div>
   </div>
  </div>
  )
};

export default Register;