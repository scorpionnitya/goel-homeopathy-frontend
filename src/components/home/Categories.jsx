import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPrescriptionBottle,
  FaLeaf,
  FaCapsules,
  FaTint,
  FaFlask,
  FaHeartbeat,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const categories = [
  {
    name: "Dilutions",
    category: "Dilution",
    icon: <FaPrescriptionBottle />,
  },
  {
    name: "Mother Tinctures",
    category: "Mother Tincture",
    icon: <FaLeaf />,
  },
  {
    name: "Biochemic Salts",
    category: "Biochemic",
    icon: <FaCapsules />,
  },
  {
    name: "R Drops",
    category: "R Drops",
    icon: <FaTint />,
  },
  {
    name: "Bio Combinations",
    category: "BC",
    icon: <FaFlask />,
  },
  {
    name: "SBL Liquid Specialities",
    category: "SBL Liquid Specialities",
    icon: <FaTint />,
  },
  {
    name: "Health & Wellness",
    category: "Health",
    icon: <FaHeartbeat />,
  },
];

export default function Categories() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  const openCategory = (category) => {
    navigate(`/medicines?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="bg-white py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-6">
          Shop by Category
        </h2>

        {/* CATEGORY CAROUSEL */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous categories"
            className="
              absolute
              left-0
              top-[48%]
              -translate-y-1/2
              z-30
              w-10
              h-10
              md:w-11
              md:h-11
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              text-gray-800
              hover:bg-gray-50
              transition
            "
          >
            <FaChevronLeft size={18} />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next categories"
            className="
              absolute
              right-0
              top-[48%]
              -translate-y-1/2
              z-30
              w-10
              h-10
              md:w-11
              md:h-11
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              text-gray-800
              hover:bg-gray-50
              transition
            "
          >
            <FaChevronRight size={18} />
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-3
              md:gap-5
              overflow-x-auto
              scroll-smooth
              px-8
              md:px-10
              py-2
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {categories.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => openCategory(item.category)}
                className="
                  flex-shrink-0
                  w-[145px]
                  md:w-[175px]
                  text-center
                  group
                "
              >
                {/* ICON CARD */}
                <div
                  className="
                    w-full
                    h-[125px]
                    md:h-[150px]
                    rounded-[26px]
                    bg-[#effcf4]
                    flex
                    items-center
                    justify-center
                    transition
                    group-hover:bg-[#e4f8ec]
                    group-hover:scale-[1.02]
                  "
                >
                  <div
                    className="
                      w-[62px]
                      h-[62px]
                      md:w-[72px]
                      md:h-[72px]
                      rounded-full
                      bg-[#e9faef]
                      flex
                      items-center
                      justify-center
                      text-[#16a34a]
                      text-[36px]
                      md:text-[42px]
                    "
                  >
                    {item.icon}
                  </div>
                </div>

                {/* CATEGORY NAME */}
                <div
                  className="
                    mt-3
                    text-[18px]
                    md:text-[18px]
                    font-bold
                    text-gray-900
                    leading-tight
                    line-clamp-2
                  "
                >
                  {item.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}