import React from 'react';
import { newProducts} from './Product'; 


const GameBox = ({ imgSrc, title, genre }) => {
  return (
    <div className="box">
      <img src={imgSrc} alt={title} />
      <div className="box-text">
        <h2>{title}</h2>
        <h3>{genre}</h3>
        <div className="rating-download">
          <div className="rating">
            <i className="bx bxs-star"></i>
            <span>4.7</span>
          </div>
          <a href="#" className="box-btn"><i className='bx bx-down-arrow-alt'></i></a>
        </div>
      </div>
    </div>
  );
};

const New = () => {
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
          />
        ))}
      </div>
      <div className="next-page">
        <a href="#">Next Page</a>
      </div>
    </section>
  );
};

export default New;
