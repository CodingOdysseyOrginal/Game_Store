import GhostOfTsushima from './img/ghost-tsushima.jpg';
import Witcher from './img/Witcher.jpg';
import cyberpunk from './img/cyberpunk.webp';
import redsident4 from './img/Resident evil 4.jpg';
import spiderman from './img/Spiderman.jpg';
import persona5 from './img//Persona-5-Royal-Deluxe-Edition.jpg';
import dyinglight from './img/Dying Light 2.jpg';
import zeroDawn from './img/Zero Dawn.jpg';
import AcMirgin from "./img/Assassin's Creed m.jpg";
import AllenWake from './img/Allen wake.jpg';
import MortalKombat from './img/Mortal kombat.jpg';
import evilWest from './img/Evil West.jpg';
import ratchclank from './img/Ratchet&clank.jpg'
import redsidentVillage from './img/Resident evil Village.jpg';
import Elder from './img/Elden Ring.jpg';



export const products = [
    {
      id: 1,
      name: "Ghost of Tsushima",
      img: GhostOfTsushima,
      rating: 4.7,
      category: "Action",
      Selection: "Trending",

    },
    {
      id: 2,
      name: "The Witcher 3",
      img: Witcher,
      rating: 5.0,
      category: "Adventure",
      Selection: "Trending",

    },
    {
      id: 3,
      name: "Cyberpunk 2077",
      img: cyberpunk,
      rating: 4.3,
      category: "Action",
      Selection: "Trending",

    },
    {
      id: 4,
      name: "Resident Evil 4 Remake",
      img: redsident4,
      rating: 4.6,
      category: "Horror",
      Selection: "Trending",

    },
    {
      id: 5,
      name: "Spiderman",
      img: spiderman,
      rating: 4.7,
      category: "Action",
      Selection: "Trending",

    },
    {
      id: 6,
      name: "Persona 5",
      img: persona5,
      rating: 4.9,
      category: "Action",
      Selection: "Trending",

    },
    {
      id: 7,
      name: "Dying Light 2",
      img: dyinglight,
      rating: 3.7,
      category: "Horror",
      Selection: "Trending",
    },
    {
      id: 8,
      name: "Horizon Zero Dawn: Forbidden West",
      img: zeroDawn,
      rating: 3.3,
      category: "Adventure",
      Selection: "New",

    },
    {
      id: 9,
      name: "Assassin's Creed Mirage",
      img: AcMirgin,
      rating: 2.7,
      category: "Action",
      Selection: "New",

    },
    {
      id: 10,
      name: "Allen Wake 2",
      img: AllenWake,
      rating: 4.2,
      category: "Horror",
      Selection: "New",

    },
    {
      id: 11,
      name: "Mortal kombat 1",
      img: MortalKombat,
      rating: 3.9,
      category: "Action",
      Selection: "New",

    },
    {
      id: 12,
      name: "Evil West",
      img: evilWest,
      rating: 2.3,
      category: "Action",
      Selection: "New",

    },
    {
      id: 13,
      name: "Ratchet & Clank: Rift Apart",
      img: ratchclank,
      rating: 4.5,
      category: "Action",
      Selection: "New",

    },
    {
      id: 14,
      name: "Resident Evil Village",
      img: redsidentVillage,
      rating: 4.2,
      category: "Horror",
      Selection: "New",

    },
    {
      id: 15,
      name: "Elden Ring",
      img: Elder,
      rating: 5.0,
      category: "Action",
      Selection: "New",

    },
  ];

export const Trend = products.filter(product => product.category === "Trending");
export const New = products.filter(product => product.category === "New");
  