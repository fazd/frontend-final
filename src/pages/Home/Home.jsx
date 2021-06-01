import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './style.css';
import ventana from '../../assets/ventana.jpg';
import iglesia from '../../assets/iglesia.jpg';
import caiman from '../../assets/caiman.jpg';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="page">
        <div class="lugares_home">
          <div class="texto_lugar_home">
            <img src={ventana} alt="foto_ventana" class="imagen_home" />
            <p class="texto_imagenes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia accusamus iusto, suscipit vel quo recusandae quod dicta quis beatae debitis maxime aspernatur veniam, reprehenderit odit natus asperiores harum amet?
            </p>
          </div>
        </div>
        <div class="lugares_home2">
          <div class="texto_lugar_home2">
            <img src={iglesia} alt="foto_ventana" class="imagen_home" />
            <p class="texto_imagenes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia accusamus iusto, suscipit vel quo recusandae quod dicta quis beatae debitis maxime aspernatur veniam, reprehenderit odit natus asperiores harum amet?
            </p>
          </div>
        </div>
        <div class="lugares_home3">
          <div class="texto_lugar_home">
            <img src={caiman} alt="foto_ventana" class="imagen_home" />
            <p class="texto_imagenes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia accusamus iusto, suscipit vel quo recusandae quod dicta quis beatae debitis maxime aspernatur veniam, reprehenderit odit natus asperiores harum amet?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Home;