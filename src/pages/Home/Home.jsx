import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="page">
        <span>Home works</span>
      </div>
      <Footer />
    </div>
  )
};

export default Home;