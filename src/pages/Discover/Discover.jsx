import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import Card from '../../components/card/Card';
import { places, events } from '../../services/discover.json';

const Discover = () => {
  const [position, setPosition] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setPosition([position.coords.latitude, position.coords.longitude]);
        setLoading(false);
      });
    }

  }, []);
  return (
    <div>
      <Navbar />
      <div className="page container">
        <h2 className="mt-4 fw-bold">Descubre lugares magicos que visitar</h2>
        <div className="row ps-4 d-flex justify-content-center align-items-center">
          <div className="align-self-center my-5 d-flex flex-column">
            <h3 className="text-center mb-4">Te encuentras aquí</h3>
            {loading ?

              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>

              :
              <>

                {position.length > 0 ? <MapContainer className="align-self-center" center={position} zoom={15} scrollWheelZoom={false}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                    <Popup >
                      Estás aqui
                </Popup>
                  </Marker>
                </MapContainer> : null} </>}
          </div>
        </div>
        <div className="row ps-4 d-flex justify-content-center align-items-center">
          <h2 className="mb-4">Eventos cerca de ti</h2>
          {loading ?
            <div class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div> :
            <div className="d-flex flex-row justify-content-evenly">
              {
                events?.map((event) =>
                  <Card
                    img={event.img}
                    name={event.name}
                    content={event.content}
                    id={event.id}
                    type={event.type}
                    thumbsUp={event.thumbsUp}
                    thumbsDown={event.thumbsDown}
                    className="mx-3"
                    disableLikes
                  />
                )
              }
            </div>}
        </div>
        <div className="row ps-4 mt-5 mb-5 d-flex justify-content-center align-items-center">
          <h2 className="mb-4">Lugares  cerca de ti</h2>
          {loading ?
            <div class="text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div> :
            <div className="d-flex flex-row justify-content-evenly">
              {
                places?.map((place) =>
                  <Card
                    img={place.img}
                    name={place.name}
                    content={place.content}
                    id={place.id}
                    type={place.type}
                    thumbsUp={place.thumbsUp}
                    thumbsDown={place.thumbsDown}
                    className="mx-3"
                    disableLikes
                  />
                )
              }
            </div>}
        </div>

      </div>
      <Footer />
    </div >
  )
};

export default Discover;