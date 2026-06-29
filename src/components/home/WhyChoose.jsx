import {
  FaShieldAlt,
  FaTruck,
  FaWhatsapp,
  FaRobot,
  FaTags,
  FaAward,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
<div className="relative overflow-hidden py-4">

  {/* Left Fade */}

  <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

  <motion.div
    className="flex gap-5"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    }}
  >

    {[...features, ...features].map((item, index) => (

      <div
        key={index}
        className="min-w-[220px] md:min-w-[260px] bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center"
      >

        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4">

          {item.icon}

        </div>

        <h3 className="font-bold text-lg leading-6">

          {item.title}

        </h3>

        <p className="text-sm text-gray-500 mt-3">

          {item.desc}

        </p>

      </div>

    ))}

  </motion.div>

  {/* Right Fade */}

  <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

</div>

    </section>
  );
}

export default WhyChoose;