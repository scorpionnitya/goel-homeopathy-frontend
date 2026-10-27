import {
  FiSearch,
  FiMapPin,
  FiShoppingCart,
} from "react-icons/fi";



import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMic } from "react-icons/fi";
import products from "../../data/products";


import {
  dilution,
  biochemic,
  bc,
  rdrops,
  motherPrices,
  sblLiquidSpecialities,
  sblHealthWellness,
} from "../../data/medicinesData";

import { useNavigate } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import {
  FaCapsules,
} from "react-icons/fa";

import {
  BAKSON_PRODUCTS,
  LORDS_PRODUCTS,
  WHEEZAL_PRODUCTS,
  ADEL_PRODUCTS,
  SBL_LIQUID_NAMES,
  SBL_HEALTH_NAMES,
  SBL_BIOCHEMIC_NAMES,
  SBL_BC_NAMES,
  SCHWABE_NAMES,
  SCHWABE_EXTRA_NAMES,
} from "../../pages/BrandPage";

const BRANDS_WITH_PRODUCTS = [
  "ADEL",
  "BAKSON",
  "RECKEWEG",
  "LORDS",
  "SBL",
  "WILLMAR SCHWABE",
  "WHEEZAL",
];

function Navbar({ cart }) {
  const categoryScrollRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
const [search, setSearch] = useState("");
const [isBrandOpen, setIsBrandOpen] = useState(false);
const navigate = useNavigate();
const allMedicines = [
  ...products.map((product) => product.name),
  ...dilution,
  ...biochemic,
  ...bc,
  ...rdrops,
  ...Object.keys(motherPrices),
  ...sblLiquidSpecialities,
  ...sblHealthWellness,
  ...BAKSON_PRODUCTS,
  ...LORDS_PRODUCTS,
  ...WHEEZAL_PRODUCTS,
  ...ADEL_PRODUCTS,
  ...SBL_LIQUID_NAMES,
  ...SBL_HEALTH_NAMES,
  ...SBL_BIOCHEMIC_NAMES,
  ...SBL_BC_NAMES,
  ...SCHWABE_NAMES,
  ...SCHWABE_EXTRA_NAMES,
];


const normalizeSearch = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const filteredMedicines =
  search.trim() === ""
    ? []
    : allMedicines
        .filter((medicine) =>
          normalizeSearch(medicine).includes(normalizeSearch(search))
        )
        .filter((medicine, index, array) =>
          array.findIndex(
            (item) =>
              normalizeSearch(item) === normalizeSearch(medicine)
          ) === index
        )
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
      <>
        <div className="bg-white border-b shadow-sm">

          {/* TOP ROW */}

          <div className="flex items-center justify-between px-4 pt-3">

            {/* LOGO */}

            <div className="text-center">

              <h1 className="text-2xl font-bold text-green-600">
                HomisCare
              </h1>

              <p className="text-[10px] italic text-gray-500">
                Healthcare Delivered Faster
              </p>

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-4">

            

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

{/* MOBILE CATEGORY SHORTCUTS */}

<div className="relative mt-5">

  {/* CATEGORY SCROLL AREA */}
  <div
    ref={categoryScrollRef}
    className="
      flex
      gap-4
      overflow-x-auto
      px-14
      pb-2
      scrollbar-hide
      scroll-smooth
    "
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
{/* MOBILE SHOP BY BRAND */}

<div className="mt-5 border-t border-gray-100 pt-4 px-4">

  <button
    type="button"
    onClick={() => setIsBrandOpen(!isBrandOpen)}
    className="w-full flex items-center justify-between py-5 text-2xl font-bold text-gray-900"
  >
    <span>Shop by Brand</span>

<span className="text-green-600 text-2xl font-bold">
  {isBrandOpen ? "⌃" : "⌄"}
</span>
  </button>

  {isBrandOpen && (
    <div className="mt-2 bg-green-50 rounded-2xl border border-green-100 overflow-hidden">

      {BRANDS_WITH_PRODUCTS.map((company) => (
        <button
          key={company}
          type="button"
onClick={() =>
  navigate(
    `/brand/${encodeURIComponent(company)}`
  )
}
          className="w-full flex items-center gap-3 px-4 py-3 text-left border-b border-green-100 last:border-b-0 hover:bg-green-100"
        >
          <FaCapsules
            size={18}
            className="text-green-600"
          />

          <span className="font-semibold text-sm">
            {company}
          </span>
        </button>
      ))}

    </div>
  )}

</div>

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

        India

      </strong>

    </span>

  </div>

  </div>
<AnnouncementBar />
</>

) : (
<>
<header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">

        {/* LOGO */}

        <div className="flex flex-col cursor-pointer">
          <h1 className="text-4xl font-bold text-green-600">
            HomisCare
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
  onKeyDown={(e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/medicines?search=${encodeURIComponent(search.trim())}`);
    }
  }}
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
                India
              </p>

            </div>

          </div>

          {/* USER */}


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

{/* DESKTOP SHOP BY BRAND */}

<div className="hidden md:block bg-white border-b">

  <div className="max-w-7xl mx-auto px-6 py-3 relative">

    <button
      type="button"
      onClick={() => setIsBrandOpen(!isBrandOpen)}
      className="flex items-center gap-2 mx-auto font-semibold text-gray-800 hover:text-green-600 transition"
    >
      <span>Shop by Brand</span>

      <span className="text-green-600 text-lg">
        {isBrandOpen ? "⌃" : "⌄"}
      </span>
    </button>

    {isBrandOpen && (
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden">

        {BRANDS_WITH_PRODUCTS.map((company) => (
          <button
            key={company}
            type="button"
onClick={() =>
  navigate(
    `/brand/${encodeURIComponent(company)}`
  )
}
            className="w-full flex items-center gap-3 px-5 py-3 text-left border-b border-gray-100 last:border-b-0 hover:bg-green-50 transition"
          >

            <FaCapsules
              size={18}
              className="text-green-600"
            />

            <span className="font-semibold text-sm">
              {company}
            </span>

          </button>
        ))}

      </div>
    )}

  </div>

</div>
    <AnnouncementBar />
  </>
    )}
  </>
  );
}

export default Navbar;
