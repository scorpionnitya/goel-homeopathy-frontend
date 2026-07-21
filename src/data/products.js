import bottle from "../assets/bottle.png";
import mother from "../assets/mother.png";
import biochemicImg from "../assets/Biochemic.png";


import {
  dilution,
  biochemic,
  bc,
  rdrops,
  motherPrices,
} from "./medicinesData";

let id = 1;

const products = [
  // Dilutions
  ...dilution.map((name) => ({
    id: id++,
    name,
    category: "Dilution",
    image: bottle,
    price: 160,
    powers: ["30", "200", "1M", "10M", "CM"],
  })),

  // Mother Tinctures
  ...Object.keys(motherPrices).map((name) => ({
    id: id++,
    name,
    category: "Mother Tincture",
    image: mother,
    price: motherPrices[name],
    powers: ["Q"],
  })),

  // Biochemic Salts
  ...biochemic.map((name) => ({
    id: id++,
    name,
    category: "Biochemic",
    image: biochemicImg,
    price: 220,
    powers: ["3X", "6X", "12X", "30X", "200X"],
  })),

// Bio Combinations
...bc.map((name) => ({
  id: id++,
  name,
  category: "BC",
  image: `/images/BC/Dr_Reckeweg_${name.replace(" ", "_")}.jpeg`,
  price: 220,
})),

// R Drops
...rdrops.map((name) => ({
  id: id++,
  name,
  category: "R Drops",
  image: `/images/rdrops/${name.replace(/\s/g, "")}.jpeg`,
  price: 295,
})),
];

export default products;