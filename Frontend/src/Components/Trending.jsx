import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Trend } from './Product'; 

const Trending = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="trending container" id="trending">
      <div className="heading">
        <i className="bx bxs-flame"></i>
        <h2>Trending Games</h2>
      </div>

      <div className="trending-content">
        <Slider {...settings}>
          {Trend.map((product) => (
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
                  <a href="#" className="box-btn">
                    <i className='bx bx-down-arrow-alt'></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Trending;
