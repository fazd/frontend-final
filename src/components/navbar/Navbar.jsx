import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div>
      <header className="p-3 mb-3 border-bottom blue-navbar">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src="quillatour.png" className="me-5" width="250px" />

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text">
              <li><Link to="/discover" className="nav-link px-2 fs-5">Descubre</Link></li>
              <li><Link to="/contact" className="nav-link px-2 text-white fs-5">Contactanos</Link></li>
              <li><Link to="/plans" className="nav-link px-2 text-white fs-5">Planes</Link></li>
            </ul>
            <div class="dropdown text-end me-4">
              <Link to="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="40" height="40" class="rounded-circle" />
              </Link>
              <ul class="dropdown-menu text-small mt-2" aria-labelledby="dropdownUser1">
                <li><Link class="dropdown-item" to="/profile">Mi perfil</Link></li>
                <li><Link class="dropdown-item" to="/places">Mis lugares</Link></li>
                <li><hr class="dropdown-divider" /></li>
                <li><Link class="dropdown-item" to="/login">Sign out</Link></li>
              </ul>
            </div>
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