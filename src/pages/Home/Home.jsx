import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './style.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="page">
        <span>Home works</span>
        <div class="lugares_home">
          <div class="texto_lugar_home">
            <img src="ventana.jpg" alt="foto_ventana" class="imagen_home" />
            <p class="texto_imagenes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia accusamus iusto, suscipit vel quo recusandae quod dicta quis beatae debitis maxime aspernatur veniam, reprehenderit odit natus asperiores harum amet?
            </p>
          </div>
        </div>
        <div class="lugares_home2">
          <div class="texto_lugar_home2">
            <img src="../../assets/iglesia.jpg" alt="foto_ventana" class="imagen_home" />
            <p class="texto_imagenes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia accusamus iusto, suscipit vel quo recusandae quod dicta quis beatae debitis maxime aspernatur veniam, reprehenderit odit natus asperiores harum amet?
            </p>
          </div>
        </div>
        <div class="lugares_home3">
          <div class="texto_lugar_home">
            <img src="caiman.jpg" alt="foto_ventana" class="imagen_home" />
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