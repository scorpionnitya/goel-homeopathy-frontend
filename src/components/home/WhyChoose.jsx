import {
  FaShieldAlt,
  FaTruck,
  FaWhatsapp,
  FaRobot,
  FaTags,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={40} />,
    title: "100% Genuine Medicines",
    desc: "Authentic homeopathic medicines from trusted brands.",
  },
  {
    icon: <FaTruck size={40} />,
    title: "Fast Delivery",
    desc: "Quick and reliable delivery across Meerut.",
  },
  {
    icon: <FaWhatsapp size={40} />,
    title: "Easy WhatsApp Ordering",
    desc: "Place your order in just a few clicks through WhatsApp.",
  },
  {
    icon: <FaRobot size={40} />,
title: "AI Medicine Assistant",

desc: "Get instant help finding medicines available on our website.",
  },
  {
    icon: <FaTags size={40} />,
    title: "30% Discount",
    desc: "Save more with exclusive discounts on medicines.",
  },
  {
    icon: <FaAward size={40} />,
title: "Trusted Homeopathy Store",

desc: "Trusted source for genuine homeopathic medicines from leading brands.",
  },
];

function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-14">

<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
  Why Choose <span className="text-green-600">Homiscare</span>
</h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
         Your trusted destination for genuine homeopathic medicines, expert support and fast delivery.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl p-8 border border-transparent shadow-md hover:shadow-2xl hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-8">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;