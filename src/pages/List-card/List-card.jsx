import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const ListCard = (props) => {
  return (
    <div className="">
      <Navbar />
      <div className="page">
        <span>List works with {props.type}</span>
      </div>
      <Footer />
    </div>
  );
};

export default ListCard;