import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { products } from './Product';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Trending = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1251 },
      items: 4,
    },
    desktop2: {
      breakpoint: { max: 1250, min: 1001 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 751 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 750, min: 501 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      scrollToTop();
    }, 10);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <section className="trending container" id="trending">
      <div className="heading">
        <i className="bx bxs-flame"></i>
        <h2>Trending Games</h2>
      </div>

      <div className="trending-content">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {products.map(product => (
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
        </Carousel>
      </div>
    </section>
  );
};

export default Trending;
