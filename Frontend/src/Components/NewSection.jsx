import React, { useEffect } from 'react';
import { newProducts } from './Product';
import { Link } from 'react-router-dom';


const NewSection = () => {
  const scrollToTop = () => {
      window.scrollTo(0, 0)
    }
  
    useEffect(() => {
      const timerId = setTimeout(() => {
        scrollToTop()
      }, 10)
  
      return () => clearTimeout(timerId)
    }, [])
  return (
    <section className="new container" id="new">
      <div className="heading">
        <i className="bx bx-game"></i>
        <h2>New Games</h2>
      </div>
      <div className="new-content">
        {newProducts.map(product => (
          <div className="box" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="box-text">
              <h2>{product.name}</h2>
              <h3>{product.category}</h3>
              <div className="rating-download">
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <span>{product.rating}</span>
                </div>
                <Link onClick={scrollToTop} to={`/download/${product.id}`} className="box-btn">
                  <i className='bx bx-down-arrow-alt'></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="next-page">
        <a href="/">Next Page</a>
      </div>
    </section>
  );
};

export default NewSection;
