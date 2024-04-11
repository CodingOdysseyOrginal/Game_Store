import React from 'react';
import { newProducts} from './Product'; 
import { Link } from 'react-router-dom';


const GameBox = ({ imgSrc, title, genre, rating }) => {
  return (
    <div className="box">
      <img src={imgSrc} alt={title} />
      <div className="box-text">
        <h2>{title}</h2>
        <h3>{genre}</h3>
        <div className="rating-download">
          <div className="rating">
            <i className="bx bxs-star"></i>
            <span>{rating}</span>
          </div>
          <Link to="/" className="box-btn">{/*THIS IS WHERE I WANT THE LINK TO GO PLEASE FOR EACH PROJECT */}<i className='bx bx-down-arrow-alt'></i></Link>
        </div>
      </div>
    </div>
  );
};

const NewSection = () => {
  return (
    <section className="new container" id="new">
      <div className="heading">
        <i className="bx bx-game"></i>
        <h2>New Games</h2>
      </div>
      <div className="new-content">
        {newProducts.map(products => (
          <GameBox
            key={products.id}
            imgSrc={products.img}
            title={products.name}
            genre={products.category}
            rating={products.rating}
          />
        ))}
      </div>
      <div className="next-page">
        <a href="/">Next Page</a>
      </div>
    </section>
  );
};

export default NewSection;
