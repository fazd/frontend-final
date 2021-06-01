import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { events } from '../../services/events.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const Event = () => {

  const [background, setBackground] = useState('');
  const [event, setEvent] = useState('');
 
  const {id} = useParams();

  useEffect(()=> {
    const response = events.find(event => event.id === parseInt(id));
    setBackground(response.backgroundURL);
    setEvent(response);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="page d-flex flex-column align-items-center mt-5">
        <div className="container row flex-column rounded-3 py-4 mt-3 mb-5">
          <div className="row">
            <div className="col d-flex justify-content-center flex-column">
              <img src={event.backgroundURL} className="sizing"  alt="bg" />
              <img 
                src={event.profileURL}
                height="120"
                width="120"
                className="align-self-center rounded-circle border border-4 border-white neg-mt"
                alt="profile"
              />
            </div>
          </div>
          <h3 className="fw-bold tf-3  p-3 text-center">{event.name}</h3>
          <div className="row mt-3">
            <div className="col-6 d-flex flex-column">
              <h5 className="fw-bold tf-6  ps-4">¿Cuando?</h5>
              
              <div className="container ms-3 my-3">
                <FontAwesomeIcon icon="calendar" size="2x"  className="me-3" />
                <span className=" fs-5">{event.date}</span>
              </div>

              <h5 className="fw-bold tf-6  ps-4">¿A qué hora?</h5>
              <div className="container ms-3 my-3">
                <FontAwesomeIcon icon="clock" size="2x"  className="me-3" />
                <span className=" fs-5">{event.hour}</span>
              </div>

              <h5 className="fw-bold tf-6  ps-4">¿Donde?</h5>
              <div className="container ms-3 my-3">
                <FontAwesomeIcon icon="map-marker-alt" size="2x"  className="me-3" />
                <span className=" fs-5">{event.address}</span>
              </div>

              {event.positionX && event.positionY ? <div className="align-self-center my-5">
              <MapContainer classname="maping" center={[event.positionX, event.positionY]} zoom={25} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                  position={[event.positionX, event.positionY]}
                  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
                />
                  
              </MapContainer>

            </div> : null}

            </div>
            <div className="col-6">
              <h5 className="fw-bold tf-6  ps-4">¿En qué consiste?</h5>
              <p className=" ps-4 ">
                {event.description}
              </p>
              
              <h5 className="fw-bold tf-6  ps-4">Maximo aforo</h5>
              <div className="container ms-3 my-3">
                <FontAwesomeIcon icon="users" size="2x"  className="me-3" />
                <span className=" fs-5">{event.maximun}</span>
              </div>

              <h5 className="fw-bold tf-6  ps-4">Personas confirmadas</h5>
              <div className="container ms-3 my-3">
                <FontAwesomeIcon icon="users" size="2x"  className="me-3" />
                <span className=" fs-5">{event.confirm}</span>
              </div>

              <h4 className=" text-center mt-5"> ¿Quieres asistir? Confirma tu asistencia!! </h4>

              <div className="d-flex justify-content-evenly">
              <button 
                type="button"
                className="mt-3 btn btn-outline-primary btn-lg"
              >
                <FontAwesomeIcon icon="save"className="me-3" />
                Guardar
              </button>
              <button 
                type="button"
                className="mt-3 btn btn-outline-success btn-lg"
              >
                <FontAwesomeIcon icon="plus-circle"  className="me-3" />
                Reservar asistencia
              </button>
              </div>

            </div>
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;