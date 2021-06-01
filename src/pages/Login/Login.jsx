import React, { useState } from 'react';
import quillatour from '../../assets/quillatour.png'
import {users} from '../../services/users.json';
const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFalse, setIsFalse] = useState(false);

  const handleClick = () => {
    const user = users.find((user) => user.user === username);
    if(username === user.user && password === user.password) {
      setIsFalse(false);
      localStorage.setItem("usuario", user.name);
      window.location.href = '/';
    } 
    else {
      setIsFalse(true);
    }
  }

  return (
    <div id="login" class="d-flex justify-content-center align-items-center">
   <div id="login-card" class="card">
     <div class="card-body">
       <form class="login-card">
            <div class="form-group d-flex flex-column justify-content-center align-items-center">
            <img src={quillatour} class="mb-4 p-2" width="250px" alt="..." />
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
              <a href="#" class="text-white">Olvidé mi cuenta/contraseña</a>
              {isFalse ? <div class="alert alert-warning mt-4" role="alert">
                La contraseña o el usuario es incorrecto
              </div>: null }
              <button
                type="button"
                class="btn btn-success login-button mt-3"
                onClick={handleClick}
              >Login</button>
            </div>
        </form>
     </div>
   </div>
  </div>
  );
};

export default Login;