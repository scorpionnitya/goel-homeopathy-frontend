import {
  FiSearch,
  FiMapPin,
  FiShoppingCart,
} from "react-icons/fi";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiMic } from "react-icons/fi";
import products from "../../data/products";
import { useNavigate } from "react-router-dom";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";


function Navbar({ cart }) {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
const allMedicines = products.map((product) => product.name);

const filteredMedicines =
  search.trim() === ""
    ? []
    : allMedicines
        .filter((medicine) => {
          return String(medicine)
            .toLowerCase()
            .includes(search.toLowerCase());
        })
        .slice(0, 8);

console.log("Search:", search);
console.log("Total:", allMedicines.length);
console.log("Matches:", filteredMedicines);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  console.log("Navbar cart:", cart);

  return (
  <>
    {isMobile ? (

<div className="bg-white border-b shadow-sm">

  {/* TOP ROW */}

  <div className="flex items-center justify-between px-4 pt-3">

    {/* MENU */}

    <button>

      <FiMenu size={24} />

    </button>

    {/* LOGO */}

    <div className="text-center">

      <h1 className="text-2xl font-bold text-green-600">
        Homiscare
      </h1>

      <p className="text-[10px] italic text-gray-500">
        Healthcare Delivered Faster
      </p>

    </div>

    {/* RIGHT */}

    <div className="flex items-center gap-4">

      <button>

<a
  href="https://wa.me/917302512068"
  target="_blank"
  rel="noopener noreferrer"
>
  <HiOutlineChatBubbleOvalLeftEllipsis size={23} />
</a>
      </button>

      <Link
        to="/cart"
        className="relative"
      >

        <FiShoppingCart size={24} />

        <span className="absolute -top-2 -right-2 bg-green-600 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center">

          {cartCount}

        </span>

      </Link>

    </div>

  </div>

  {/* SEARCH */}

  <div className="px-4 mt-4 relative">

    <div className="flex items-center bg-white border rounded-full overflow-hidden shadow-sm">

<input
  type="text"
  value={search}
  onChange={(e) => {
    console.log("Typing:", e.target.value);
    setSearch(e.target.value);
  }}
  placeholder="Search medicines..."
  className="bg-transparent outline-none w-full ml-3 text-gray-700"
/>

      <button className="px-2 text-gray-500">

        <FiMic size={20} />

      </button>

      <button className="bg-green-600 text-white w-12 h-12 rounded-r-full flex items-center justify-center">

        <FiSearch size={22} />

      </button>

    </div>
    {filteredMedicines.length > 0 && (
  <div className="mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

{filteredMedicines.map((medicine) => (
<div
  key={medicine}
  onClick={() => {
  setSearch("");
  navigate(`/medicines?search=${encodeURIComponent(medicine)}`);
}}
  className="px-5 py-3 hover:bg-green-50 cursor-pointer flex items-center gap-3 border-b last:border-b-0"
>
  <FiSearch className="text-green-600" />
  <span>{medicine}</span>
</div>
))}

  </div>
)}

  </div>

  {/* LOCATION */}

  <div className="px-4 py-4 flex items-center gap-2">

    <FiMapPin
      className="text-green-600"
      size={18}
    />

    <span className="text-sm">

      Delivering across

      <strong className="ml-1">

        Meerut

      </strong>

    </span>

  </div>

</div>

) : (
<header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">

        {/* LOGO */}

        <div className="flex flex-col cursor-pointer">
          <h1 className="text-4xl font-bold text-green-600">
            Homiscare
          </h1>

          <span className="text-gray-500 text-sm italic">
            Healthcare Delivered Faster
          </span>
        </div>

        {/* SEARCH */}
<div className="hidden md:flex flex-1 max-w-2xl relative">

  <div className="w-full flex items-center bg-gray-100 rounded-full px-5 py-3">
    <FiSearch className="text-gray-400" size={22} />

    <input
      type="text"
      placeholder="Search medicines, categories, brands..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="bg-transparent outline-none w-full ml-3 text-gray-700"
    />
  </div>

  {filteredMedicines.length > 0 && (
    <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden">

      {filteredMedicines.map((medicine) => (
        <div
          key={medicine}
          onClick={() => {
            setSearch("");
            navigate(`/medicines?search=${encodeURIComponent(medicine)}`);
          }}
          className="px-5 py-3 hover:bg-green-50 cursor-pointer flex items-center gap-3 border-b last:border-b-0"
        >
          <FiSearch className="text-green-600" />
          <span>{medicine}</span>
        </div>
      ))}

    </div>
  )}

</div>

        {/* RIGHT */}

        <div className="flex items-center gap-6">

          {/* LOCATION */}

          <div className="hidden lg:flex items-center gap-2 cursor-pointer">

            <FiMapPin
              className="text-green-600"
              size={22}
            />

            <div>

              <p className="text-xs text-black">
                Delivering across 
              </p>

              <p className="font-semibold">
                Meerut
              </p>

            </div>

          </div>

          {/* USER */}

<a
  href="https://wa.me/917302512068"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-green-600 transition"
>
  <HiOutlineChatBubbleOvalLeftEllipsis size={28} />
</a>

          {/* CART */}

          <Link
  to="/cart"
  className="relative hover:text-green-600 transition"
>

            <FiShoppingCart size={27} />

            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

              {cart.reduce((total, item) => total + item.quantity, 0)}

            </span>

          </Link>

        </div>

      </div>
    </header>
    )}
</>
  );
}

export default Navbar;