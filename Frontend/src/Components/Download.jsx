import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Product';

const Download = () => {
  const { id } = useParams();

  const product = products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="download-page">
      <h2>{product.name} Download Page</h2>
      <img src={product.img} alt={product.name} />
      <p>Category: {product.category}</p>
      <a href={`/downloads/${product.id}`}>Download Now</a>
      <h1>Hello World</h1>
    </div>
  );
};

export default Download;
