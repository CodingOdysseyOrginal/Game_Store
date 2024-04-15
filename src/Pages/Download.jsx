import React from "react";
import { useParams } from "react-router-dom";
import { products, newProducts } from "../Components/Product";
import Navbar from "../Components/Navbar";
import DownloadNavbar from "../Components/DownloadNavbar";
import DownloadFooter from "../Components/DownloadFooter";

const Download = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));
  const newProduct = newProducts.find((product) => product.id === parseInt(id));

  if (!product && !newProduct) {
    return <div className="download-page">Product not found</div>;
  }

  const selectedProduct = product || newProduct;

  return (
    <body className="download-page">
      <DownloadNavbar/>
      <div className="video-container container">
        <video controls muted autoPlay>
          <source src={selectedProduct.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about container">
        <h2>About Game</h2>
        <p>{selectedProduct.description}</p>
      </div>
      <div className="screenshots container">
        <h2>ScreenShots</h2>
        <div className="screenshots-content">
          <img width="940px" height="540px" src={selectedProduct.screen1} alt={selectedProduct.name} />
          <img width="940px" height="540px"  src={selectedProduct.screen2} alt={selectedProduct.name} />
          <img width="940px" height="540px"  src={selectedProduct.screen3} alt={selectedProduct.name} />
        </div>
      </div>

      <div className="download">
        <h2>Download Links</h2>
        <div className="download-links">
          <a href="#">For PS5</a>
          <a href="#">For PC</a>
        </div>
      </div>
      <DownloadFooter/>
    </body>
  );
};

export default Download;
