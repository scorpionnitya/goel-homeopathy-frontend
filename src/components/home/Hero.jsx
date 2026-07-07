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
<div className="mt-10">
  <div className="inline-block flex-col bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg">
    <h3 className="text-2xl font-extrabold leading-tight">
      MOHAN HOMEO STORE
    </h3>

    <p className="text-xl font-medium mt-1">
      is now online.
    </p>
  </div>
</div>
<br/>
<p>
  For <strong>50+ years</strong>, MOHAN HOMEO STORE has been trusted by families for genuine homeopathic medicines. Now, the same trusted care is available online through <strong>HomisCare</strong>.
</p>

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