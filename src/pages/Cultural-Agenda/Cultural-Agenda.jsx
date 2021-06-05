import React, { useEffect } from 'react';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';


import { cultural_events } from '../../services/cultural-agenda.json';


const CulturalAgenda = () => {

  return (
    <div>
      <Navbar />
      <div className="page container mt-5">
        <h2>Descubre la agenda cultural para cada evento</h2>
        <div class="accordion" id="accordionExample">


          {
            cultural_events?.map((ce) =>
              <div class="accordion-item my-5 mx-4">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${ce.collapse}`} aria-expanded="true" aria-controls="collapseOne">
                    {ce.name}
                  </button>
                </h2>
                <div id={ce.collapse} class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body d-flex flex-row justify-content-evenly">
                    {
                      ce.events?.map((event) =>
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
                  </div>
                </div>
              </div>
            )}

        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CulturalAgenda;