import {
  FaFlask,
  FaLeaf,
  FaCapsules,
  FaTint,
  FaPrescriptionBottle,
  FaHeartbeat,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";

const categories = [
  {
    name: "Dilutions",
    category: "Dilution",
    icon: <FaPrescriptionBottle size={35} className="text-green-600" />,
  },
  {
    name: "Mother Tinctures",
    category: "Mother Tincture",
    icon: <FaLeaf size={35} className="text-green-600" />,
  },
  {
    name: "Biochemic Salts",
    category: "Biochemic",
    icon: <FaCapsules size={35} className="text-green-600" />,
  },
  {
    name: "R Drops",
    category: "R Drops",
    icon: <FaTint size={35} className="text-green-600" />,
  },
  {
    name: "Bio Combinations",
    category: "BC",
    icon: <FaFlask size={35} className="text-green-600" />,
  },
  {
    name: "Health & Wellness",
    category: "Health",
    icon: <FaHeartbeat size={35} className="text-green-600" />,
  },
];

function Categories() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">

      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl md:text-3xl font-bold">
          Shop by Category
        </h2>

      </div>

      {/* Slider */}

      <div className="relative">

        {/* Left Arrow */}

        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-green-600 hover:text-white transition flex items-center justify-center"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Categories */}

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-16 scroll-smooth"
        >

          {categories.map((category) => (

            <Link
              key={category.name}
              to={`/medicines?category=${encodeURIComponent(category.category)}`}
              className="flex-shrink-0"
            >

              <div className="w-52 bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-8 flex flex-col items-center justify-center cursor-pointer">

                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">

                  {category.icon}

                </div>

                <p className="mt-5 text-center text-lg font-medium leading-7">

                  {category.name}

                </p>

              </div>

            </Link>

          ))}

        </div>

        {/* Right Arrow */}

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-green-600 hover:text-white transition flex items-center justify-center"
        >
          <FiChevronRight size={24} />
        </button>

      </div>

    </section>
  );
}

export default Categories;