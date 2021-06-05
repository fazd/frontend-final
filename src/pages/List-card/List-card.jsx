import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

import { places, events } from '../../services/list.json';



const ListCard = (props) => {

  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (props.type === 'eventos') {
      setArr(events);
    }
    else {
      setArr(places);
    }
  }, [props]);

  return (
    <div className="">
      <Navbar />
      <div className="page container mb-5">
        <h2 className="fw-bold mt-5">Aquí encontrarás todos nuestros {props.type}</h2>
        <div className="d-flex flex-wrap justify-content-evenly">
          {
            arr.map((element) =>
              <Card
                img={element.img}
                name={element.name}
                content={element.content}
                id={element.id}
                type={element.type}
                thumbsUp={element.thumbsUp}
                thumbsDown={element.thumbsDown}
                className="m-3"

              />
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListCard;