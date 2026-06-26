import hero from "../../assets/home/banner/hero.png";

function Hero() {
  return (
    <section className="bg-[#EAF8EE]">

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 items-center gap-10">

        {/* LEFT */}

        <div>

          <p className="text-green-600 font-semibold mb-4">
            Healthcare Delivered Faster
          </p>

          <h1 className="text-6xl font-bold leading-tight">

            Homeopathy

            <span className="text-green-600">
              {" "}Delivered{" "}
            </span>

            To Your Doorstep.

          </h1>

          <p className="text-gray-600 mt-6 text-lg">

            Authentic Homeopathy medicines,
            wellness products and healthcare
            essentials delivered quickly across
            Meerut.

          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 transition text-white px-8 py-4 rounded-xl text-lg font-semibold">

            Explore Medicines

          </button>

        </div>

        {/* RIGHT */}

        <div>

          <img
            src={hero}
            alt="Hero"
            className="w-full"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;