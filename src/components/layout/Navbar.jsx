import {
  FiSearch,
  FiMapPin,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";
import { Link } from "react-router-dom";


function Navbar({ cart }) {
  console.log("Navbar cart:", cart);

  return (
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

        <div className="hidden md:flex flex-1 max-w-2xl">

          <div className="w-full flex items-center bg-gray-100 rounded-full px-5 py-3">

            <FiSearch
              className="text-gray-400"
              size={22}
            />

            <input
              type="text"
              placeholder="Search medicines, categories, brands..."
              className="bg-transparent outline-none w-full ml-3 text-gray-700"
            />

          </div>

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

              <p className="text-xs text-gray-400">
                Deliver to
              </p>

              <p className="font-semibold">
                Meerut
              </p>

            </div>

          </div>

          {/* USER */}

          <button className="hover:text-green-600 transition">

            <FiUser size={25} />

          </button>

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
  );
}

export default Navbar;