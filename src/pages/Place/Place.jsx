import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import img from '../../assets/ventana-al-mundo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from '../../components/comment/Comment';
import {places} from '../../services/places.json';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const Place = () => {

  const {id} = useParams();
  const [place, setPlace] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(()=> {
    const response = places.find((place) => place.id === parseInt(id));
    console.log(response);
    console.log(id);
    setPlace(response);
    setComments(response.comments);

  },[]);


  return (
    <div>
      <Navbar></Navbar>
      <div className="container page">
        <div className="row mt-5  d-flex justify-content-around">
          <div className="col-5 d-flex flex-column align-items-start pt-5">
            <div className="d-flex flex-column justify-content-center">
              <h3 className="fw-bold mb-3 text-center">{place.name}</h3>
              <img
                src={place.profileUrl}
                height="250"
                width="250"
                className="rounded-circle align-self-center"
                alt="img logo"
              />
              <div className="container mt-4">
                <div className="d-flex flex-row my-2">
                  <FontAwesomeIcon icon="signature" className="me-3" />
                  <span>{place.name}</span>
                </div>
                <div className="d-flex flex-row my-2">
                  <FontAwesomeIcon icon="map-marker-alt" className="me-4" />
                  <span>{place.address}</span>
                </div>
                <div className="d-flex flex-row my-2">
                  <FontAwesomeIcon icon="comment" className="me-3" />
                  <span>{place.description}</span>
                </div>

              </div>
            </div>
            {place.positionX && place.positionY ? <div className="align-self-center my-5">
              <MapContainer classname="maping" center={[place.positionX, place.positionY]} zoom={25} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                  position={[place.positionX, place.positionY]}
                  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
                />
                  
              </MapContainer>

            </div> : null}


          </div>
          <div className="col-5 d-flex flex-column pt-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                {
                  place.sliderUrls?.map((link, index) => {
                    const active = index === 0 ? 'active' : '';
                    return (
                      
                      <div className={`carousel-item ${active}`}>
                        <img src={link} className="d-block w-100" alt="..." />
                      </div>
                    )
                  }) 
                }
                {/* <div className="carousel-item active">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={img} className="d-block w-100" alt="..." />
                </div> */}
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
              { 
                place.comments?.map((comment) => {
                  return (
                    <Comment 
                      name={comment.user}
                      created={comment.created}
                      content={comment.content}
                      heartQuantity={comment.heart}
                      thumbsUpQuantity={comment.thumbsUp}
                      thumbsDownQuantity={comment.thumbsDown}
                    /> 
                  );
                })
              }

            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Place;