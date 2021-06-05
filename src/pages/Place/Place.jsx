import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import img from '../../assets/ventana-al-mundo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from '../../components/comment/Comment';
import { places } from '../../services/places.json';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import CommentBox from '../../components/comment-box/Coment-box';
import ReactStars from 'react-stars'
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

const Place = () => {

  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    const response = places.find((place) => place.id === parseInt(id));
    console.log(response);
    console.log(id);
    setPlace(response);
    setComments(response.comments);

  }, [place, id]);

  const handleNewComment = (e) => {
    const aux = comments;
    aux.unshift({
      user: "Anonimo",
      created: "Ahora mismo",
      content: e,
      heart: 0,
      thumbsUp: 0,
      thumbsDown: 0
    });
    setComments(aux);
    console.log("au", aux);
  }

  const ratingChanged = (e) => {
    setRating(e.target.value)
  }

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
                alt="img loga"
              />
              <ReactStars
                className="align-self-center"
                count={5}
                value={place.score}
                size={48}
                color2={'#ffd700'}
                edit={false}
              />
              <div className="container mt-4">
                <div className="d-flex flex-row my-2">
                  <FontAwesomeIcon icon="signature" className="me-3" />
                  <span>{place.name}</span>
                </div>
                <div className="d-flex flex-row my-2 align-items-center">
                  <FontAwesomeIcon icon="map-marker-alt" className="me-4" />
                  <span>{place.address}</span>
                </div>
                <div className="d-flex flex-row my-2 align-items-center">
                  <FontAwesomeIcon icon="comment" className="me-3" />
                  <span>{place.description}</span>
                </div>
                <h4 className="my-3">Datos del lugar</h4>
                <div className="d-flex flex-row my-2 align-items-center">
                  <FontAwesomeIcon icon="cloud" className="me-3" />
                  <span>{place.weather} | </span>
                  <span className="ms-2 fw-bold">El clima anual tiende a ser soleado</span>
                </div>
                <div className="d-flex flex-row my-2 align-items-center">
                  <FontAwesomeIcon icon="thermometer-empty" className="ms-1 me-4" />
                  <span>{place.temp} ° | </span>
                  <span className="ms-2 fw-bold">  La Temperatura anual es de 39°</span>
                </div>
                <div class="alert alert-primary mt-4" role="alert">
                  Sin ningun imprevisto en la zona. Circule con tranquilidad
                </div>
                <h4 className="my-3">Información turística</h4>
                <div className="d-flex flex-row my-2 align-items-center">
                  <FontAwesomeIcon icon="concierge-bell" className="me-3" />
                  <Link className="link-span" to="#"><span>¡Conoce los hoteles Aquí!</span></Link>
                </div>
                <div className="d-flex flex-row my-2 align-items-center">
                  <FontAwesomeIcon icon="newspaper" className="me-3" />
                  <Link className="link-span" to="#"><span>Notas periodisticas de este lugar</span></Link>
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
                  icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
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
              <CommentBox newComment={handleNewComment} />
              {
                comments?.map((comment) => {
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
        <div className="row mt-5  d-flex justify-content-around mb-5">
          <h2 className="text-center mb-5">Tambien te puede interesar</h2>
          <div className="d-flex flex-row justify-content-evenly">
            {
              place.recomendations?.map((rec) =>
                <Card
                  img={rec.img}
                  name={rec.name}
                  content={rec.content}
                  id={rec.id}
                  type={rec.type}
                  thumbsUp={rec.thumbsUp}
                  thumbsDown={rec.thumbsDown}
                  className="mx-3"
                />
              )
            }
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Place;