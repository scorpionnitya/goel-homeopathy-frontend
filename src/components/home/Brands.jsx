import { motion } from "framer-motion";

import sbl from "../../assets/home/brands/sbl.png";
import reckeweg from "../../assets/home/brands/reckeweg.png";
import schwabe from "../../assets/home/brands/schwabe.png";
import soundarya from "../../assets/home/brands/soundarya.png";
import bakson from "../../assets/home/brands/bakson.png";
import hapdco from "../../assets/home/brands/hapdco.png";
import wheezal from "../../assets/home/brands/wheezal.png";
import adel from "../../assets/home/brands/adel.png";


const brands = [
  { name: "SBL", logo: sbl, large:true},
  { name: "Dr. Reckeweg", logo: reckeweg, large:true },
  { name: "Schwabe", logo: schwabe },
  { name: "Soundarya", logo: soundarya },
  { name: "BAKSON", logo: bakson, large:true },
  { name: "HAPDCO", logo: hapdco },
  { name: "Wheezal", logo: wheezal },
  { name: "Adel", logo: adel, large:true },
];

function Brands() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">
          Popular Brands
        </h2>

        <button className="text-green-600 font-semibold">
          View All
        </button>
      </div>

<div className="relative overflow-hidden py-4">
  <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

  <motion.div
    className="flex gap-6"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    }}
  >

    {[...brands, ...brands].map((brand, index) => (

      <div
        key={index}
        className="min-w-[170px] h-28 bg-white rounded-2xl shadow-sm flex items-center justify-center"
      >

        <img
          src={brand.logo}
          alt={brand.name}
          className={`object-contain ${
            brand.large
              ? "max-h-20 md:max-h-24"
              : "max-h-12 md:max-h-16"
          }`}
        />

      </div>

    ))}

  </motion.div>
  <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

</div>
    </section>
  );
}

export default Brands;