import React from 'react';
import './productlist.css';
import Product from '../products/Product';
import { products } from '../../data';
const ProductList = () => {
  return (
    <div className="p1">
      <div className="p1-texts">
        <p className="p1-desc">My Projects</p>
      </div>
      <div className="p1-list">
        {products.map((item, index) => (
          <Product key={item.id} image={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
