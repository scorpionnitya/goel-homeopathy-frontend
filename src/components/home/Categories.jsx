import {
  FaFlask,
  FaLeaf,
  FaCapsules,
  FaTint,
  FaPrescriptionBottle,
  FaHeartbeat,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
  return (
   <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Shop by Category
        </h2>

        <button className="text-green-600 font-semibold">
          View All
        </button>
      </div>

<div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto md:overflow-visible pb-2 no-scrollbar">

  {categories.map((category) => (

    <Link
      key={category.name}
      to={`/medicines?category=${encodeURIComponent(category.category)}`}
      className="flex-shrink-0 md:block"
    >

      <div className="w-24 md:w-auto bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-4 md:p-8 flex flex-col items-center justify-center cursor-pointer">

        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">

          {category.icon}

        </div>

        <p className="mt-3 text-center text-sm md:text-base font-medium leading-5">

          {category.name}

        </p>

      </div>

    </Link>

  ))}

</div>
    </section>
  );
}

export default Categories;