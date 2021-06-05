import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo192.png';

const Footer = () => {

  return (
    <div >
      <footer class="footer mt-auto py-3 bg-dark">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-8">
              <ul className="list-group list-group-horizontal  d-flex justify-content-around">
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><Link className="footer-link text-white fw-bold" to="/discover">Descubre</Link></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><Link className="footer-link text-white fw-bold" to="/events/all">Eventos</Link></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><Link className="footer-link text-white fw-bold" to="/"><img src={Logo} height="40" width="40" alt="" /></Link></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><Link className="footer-link text-white fw-bold" to="/places/all">Lugares</Link></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><Link className="footer-link text-white fw-bold" to="/cultural-agenda">Agenda cultural</Link></li>
              </ul>
            </div>
          </div>
          <div className="row mt-4 d-flex justify-content-center">
            <div className="col-6">
              <ul className="list-group list-group-horizontal  d-flex justify-content-around">
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><img src={Logo} height="40" width="40" alt="" /></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><img src={Logo} height="40" width="40" alt="" /></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><img src={Logo} height="40" width="40" alt="" /></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><img src={Logo} height="40" width="40" alt="" /></li>
              </ul>
            </div>
          </div>
          <hr className="gray-divider" />
          <div className="row mt-4 d-flex justify-content-center">
            <div className="col-5 d-flex justify-content-center flex-column">
              <span className="text-white text-center fw-bold">Hecho con cariño por</span>
              <ul className="list-group list-group-horizontal  d-flex justify-content-around">
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><span className="text-white fw-bold">Fabio</span></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><span className="text-white fw-bold">Gabriela</span></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><span className="text-white fw-bold">Sebastian</span></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><span className="text-white fw-bold">Miguel</span></li>
                <li className="list-group-item bg-transparent d-flex align-items-center no-border"><span className="text-white fw-bold">Hernan</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Footer;