import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTint, FaSun, FaLeaf } from "react-icons/fa";
import { GiFertilizerBag } from "react-icons/gi";

const PlantCare = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const careItems = [
    {
      title: "Watering",
      description:
        "Proper watering is key for plant health. Learn how often to water, how much, and techniques for different plant types.",
      icon: <FaTint size={50} className="text-emerald-700" />,
    },
    {
      title: "Sunlight",
      description:
        "Understand your plants' light requirements. Find out which plants thrive in direct, indirect, or low-light conditions.",
      icon: <FaSun size={50} className="text-emerald-700" />,
    },
    {
      title: "Fertilizing",
      description:
        "Nourish your plants with the right nutrients. Learn about fertilizers, their frequency, and natural alternatives.",
      icon: <GiFertilizerBag size={50} className="text-emerald-700" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-22"
      >
        Plant Care Essentials
      </motion.h1>

      <div data-aos="fade-right" className="grid md:grid-cols-3 gap-10">
        {careItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-linear-to-tr from-white via-white to-emerald-700/20 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-300"
          >
            <div className="absolute -top-5 left-5 transform -translate-x-1/2 p-3 bg-base-200 rounded-full shadow-lg border border-emerald-700 z-10">
              {item.icon}
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlantCare;
