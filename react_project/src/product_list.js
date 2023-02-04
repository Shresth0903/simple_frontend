import React from 'react';
import { products } from './products';

const ProductList = () => {
  return (
    <ul>
      {
        products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))
      }
    </ul>
  );
};

export default ProductList;
