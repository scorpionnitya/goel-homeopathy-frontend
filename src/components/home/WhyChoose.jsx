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
   <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-24">
      <div className="flex items-center justify-between mb-8 md:mb-14">

<h2 className="text-2xl md:text-5xl font-extrabold text-gray-900">
  Why Choose <span className="text-green-600">Homiscare</span>
</h2>

       <p className="hidden md:block text-gray-500 mt-4 max-w-2xl">
         Your trusted destination for genuine homeopathic medicines, expert support and fast delivery.
        </p>

      </div>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-2 no-scrollbar">

        {features.map((item) => (
         <div
  key={item.title}
  className="flex-shrink-0 md:flex-shrink w-26 md:w-auto bg-white rounded-3xl p-5 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
>

<div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">              {item.icon}
            </div>

            <h3 className="text-sm md:text-2xl font-semibold md:font-bold mb-2 md:mb-4 text-gray-900 leading-5">
              {item.title}
            </h3>

            <p className="hidden md:block text-gray-600 leading-8">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;