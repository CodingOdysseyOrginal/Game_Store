import React from 'react';
import { products } from './Product';

const Download = ({ match }) => {
  const productId = match.params.id;

  const product = products.find(product => product.id === parseInt(productId));

  return (
    <div className="download-page">
      <h2>{product.name} Download Page</h2>
      <p>Product Name: {product.name}</p>
      <p>Category: {product.category}</p>
      <a href={`/downloads/${product.id}`}>Download Now</a>
    </div>
  );
};

export default Download;
