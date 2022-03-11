import React from 'react';
import './product.css';

const Product = ({ image, link }) => {
  return (
    <>
      <div className="b">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + '/image/' + image}
            alt="images"
            className="p-img"
          />
        </a>
      </div>
    </>
  );
};

export default Product;
