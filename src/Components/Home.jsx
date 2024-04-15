import React from 'react';
import { Link } from 'react-router-dom';
import Hogwarts from './img/Hogwarts.webp';
import { newProducts } from './Product';

export default function Home() {
    return (
        <section className="home container" id="home">
            <img src={Hogwarts} alt="" />
            <div className="home-text">
                <h1>Become A <br />Wizard</h1>
                <Link to={`/download/${newProducts[8].id}`} className="btn">Available Now</Link>
            </div>
        </section>
    );
}
