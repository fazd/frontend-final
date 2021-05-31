import React from 'react';

const Login = () => {
  return (
    <div id="login" class="d-flex justify-content-center align-items-center">
   <div id="login-card" class="card">
     <div class="card-body">
       <form class="login-card">
            <div class="form-group d-flex flex-column justify-content-center align-items-center">
            <img src="quillatour.png" class="mb-4 p-2"width="250px"/>
              <input type="email" class="form-control login-input mb-3" id="username" aria-describedby="Usuario" placeholder="Usuario"/>
              <input type="password" class="form-control login-input mb-3" id="password" placeholder="Contraseña"/>
              <a href="#" class="text-white">Olvidé mi cuenta/contraseña</a>
              <button type="submit" class="btn btn-success login-button mt-3">Login</button>
            </div>
        </form>
     </div>
   </div>
  </div>
  );
};

export default Login;