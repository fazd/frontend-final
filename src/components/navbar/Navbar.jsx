import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/quillatour.png';

const Navbar = () => {

  const [isLogged, setIsLogged] = useState(localStorage.getItem('usuario') ? true : false);



  return (
    <div>
      <header className="p-3 mb-3 border-bottom blue-navbar">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="nav-link px-2 fs-5"><img src={Logo} className="me-5" width="250px" alt="logo" /></Link>


            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text">
              <li><Link to="/discover" className="nav-link px-2 fs-5">Descubre</Link></li>
              <li><Link to="/places/all" className="nav-link px-2 text-white fs-5">Lugares</Link></li>
              <li><Link to="/events/all" className="nav-link px-2 text-white fs-5">Eventos</Link></li>
              <li><Link to="/cultural-agenda" className="nav-link px-2 text-white fs-5">Agenda cultural</Link></li>
            </ul>
            {isLogged ? <div class="dropdown text-end me-4">
              <Link to="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="40" height="40" class="rounded-circle" />
              </Link>
              <ul class="dropdown-menu text-small mt-2" aria-labelledby="dropdownUser1">
                <li><Link class="dropdown-item" to="/profile">Mi perfil</Link></li>
                <li><Link class="dropdown-item" to="/places">Mis lugares</Link></li>
                <li><hr class="dropdown-divider" /></li>
                <li class="dropdown-item" onClick={() => { localStorage.removeItem('usuario'); window.location.href = '/' }}>Sign out</li>
              </ul>
            </div> :
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 ms-5  d-flex justify-content-around mb-md-0 text">
                <li><Link to="/login" className="nav-link px-2 fs-5">Iniciar sesion</Link></li>
                <li><Link to="/register" className="nav-link px-2 text-white fs-5">registrarse</Link></li>
              </ul>

            }
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control" placeholder="Buscar..." aria-label="Search" />
            </form>
          </div>
        </div>
      </header>
    </div>

  );
};

export default Navbar;