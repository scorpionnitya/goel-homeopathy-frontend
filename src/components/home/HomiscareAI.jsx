import { FaRobot, FaBrain, FaSearch, FaComments, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function HomiscareAI() {
  const navigate = useNavigate();

  return (
    
<section className="bg-gradient-to-r from-green-50 via-white to-green-50 py-24 px-6 relative">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-6">

            <FaRobot />

            AI Powered

          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900">

            Meet Homiscare AI{" "}

            <span className="text-green-600 font-serif">

              <br/> Your Personal Homeopathy Assistant <br/>

            </span>

          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-8">

            Experience the future of homeopathy with our intelligent AI assistant.
            Find medicines faster, search by symptoms, compare trusted brands,
            and receive instant guidance — all in one place.

          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">

              <FaSearch className="text-green-600 text-xl" />

              <span className="text-gray-700">
                Search medicines instantly
              </span>

            </div>

            <div className="flex items-center gap-4">

              <FaBrain className="text-green-600 text-xl" />

              <span className="text-gray-700">
                AI-powered medicine recommendations
              </span>

            </div>

            <div className="flex items-center gap-4">

              <FaComments className="text-green-600 text-xl" />

              <span className="text-gray-700">
                Natural conversation with voice support
              </span>

            </div>

          </div>

          <Link
            to="/chat"
            className="inline-flex items-center gap-3 mt-12 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try AI Assistant

            <FaArrowRight />

          </Link>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="bg-white rounded-[40px] shadow-2xl p-10 w-full max-w-md border border-green-100">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-3xl">

                🤖

              </div>

              <div>

                <h3 className="font-bold text-2xl">

                  Homiscare AI

                </h3>

                <p className="text-green-600 text-sm">

                  Online • Ready to Help

                </p>

              </div>

            </div>

            <div className="space-y-5">

              <div className="bg-gray-100 rounded-2xl p-4">

                👋 Hello! How can I help you today?

              </div>

              <div className="bg-green-600 text-white rounded-2xl p-4 ml-12">

                I have acidity.

              </div>

              <div className="bg-gray-100 rounded-2xl p-4">

               Based on your symptoms,I found medicines available on Homiscare.

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HomiscareAI;