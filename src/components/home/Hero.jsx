import hero from "../../assets/home/banner/hero.png";

function Hero() {
  return (
   <section className="bg-[#EAF8EE] pt-6 md:pt-0">

      <div className="max-w-7xl mx-auto px-5 md:px-6 py-8 md:py-16 grid md:grid-cols-2 items-center gap-8 md:gap-10">

        {/* LEFT */}

        <div className="text-center md:text-left">

          <p className="text-green-600 font-semibold text-sm md:text-base mb-3">
            Healthcare Delivered Faster
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

            Homeopathy

            <span className="text-green-600">
              {" "}Delivered{" "}
            </span>

            To Your Doorstep.

          </h1>

          <p className="text-gray-600 mt-4 md:mt-6 text-base md:text-lg leading-7">

            Authentic Homeopathy medicines,
            wellness products and healthcare
            essentials delivered quickly across
            Meerut.

          </p>

<button className="mt-6 md:mt-8 w-full md:w-auto bg-green-600 hover:bg-green-700 transition text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
            Explore Medicines

          </button>

        </div>

        {/* RIGHT */}

        <div>

<img
  src={hero}
  alt="Hero"
  className="w-full max-w-md md:max-w-full mx-auto"
/>

        </div>

      </div>

    </section>
  );
}

export default Hero;