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
    image: `/images/Dilution/Dr_Reckeweg_${name.replace(/\s/g, "")}.jpeg`,
    price: 160,
    powers: ["30", "200", "1M", "10M", "CM"],
  })),

// Mother Tinctures
...Object.entries(motherPrices).map(([name, price]) => ({
  id: id++,
  name,
  category: "Mother Tincture",
  image: `/images/MotherTincture/${name}.jpeg`,
  price,
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