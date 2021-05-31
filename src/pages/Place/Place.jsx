import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import img from '../../assets/ventana-al-mundo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from '../../components/comment/Comment';

const Place = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container page">
        <div className="row mt-5  d-flex justify-content-center pt-5">
          <div className="col-5 d-flex flex-column">
            <div className="">
              <img
                src={img}
                height="250"
                width="250"
                className="rounded-circle"
                alt="img logo"
              />
              <div className="container mt-4">
                <div className="d-flex flex-row my-2">
                  <FontAwesomeIcon icon="signature" className="me-3" />
                  <span>Nombre</span>
                </div>
                <div className="d-flex flex-row my-2">
                  <FontAwesomeIcon icon="map-marker-alt" className="me-4" />
                  <span>Direccion</span>
                </div>
                <div className="d-flex flex-row my-2">
                  <FontAwesomeIcon icon="comment" className="me-3" />
                  <span>Comentario</span>
                </div>

              </div>
            </div>
          </div>
          <div className="col-5 d-flex flex-column">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h3 className="mt-3">Comentarios </h3>
            <div className="comment-group mb-4">
              <Comment name="Fabio" created="Hace 1 min" content="Hola soy fabio" heartQuantity="45"></Comment>
              <Comment name="Fabio" created="Hace 1 min" content="Hola soy fabio"></Comment>
              <Comment name="Fabio" created="Hace 1 min" content="Hola soy fabio"></Comment>

            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Place;