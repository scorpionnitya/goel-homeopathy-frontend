import sbl from "../../assets/home/brands/sbl.png";
import reckeweg from "../../assets/home/brands/reckeweg.png";
import schwabe from "../../assets/home/brands/schwabe.png";

const brands = [
  { name: "SBL", logo: sbl },
  { name: "Dr. Reckeweg", logo: reckeweg },
  { name: "Schwabe", logo: schwabe },
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-8 flex items-center justify-center h-40"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;