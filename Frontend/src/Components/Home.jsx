import Hogwarts from './img/Hogwarts.webp'

export default function Home() {
    return (
        <section className="home container" id="home">
            <img src={Hogwarts} alt="" />
            <div className="home-text">
                <h1>Become A <br />Wizard</h1>
                <a href="#" className="btn">Available Now</a>
            </div>
        </section>
    );
}
