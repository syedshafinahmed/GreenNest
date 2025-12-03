import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLeaf, FaSeedling, FaHandsHelping, FaHome } from "react-icons/fa";
import { GiFlowers, GiTalk, GiTreeGrowth } from "react-icons/gi";

const AboutUs = () => {

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent">
          About GreenNest
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Nurturing nature, one plant at a time. GreenNest helps you bring greenery into your life while embracing sustainable living.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {[
          {
            title: "Our Mission",
            description: "Empowering individuals and communities to grow plants effortlessly and make sustainable living a part of everyday life.",
            icon: <FaLeaf size={50} className="text-emerald-700" />,
          },
          {
            title: "Our Vision",
            description: "To be the go-to platform for plant lovers seeking guidance, tools, and inspiration for a greener tomorrow.",
            icon: <GiTreeGrowth size={50} className="text-emerald-700" />,
          },
          {
            title: "Our Values",
            description: "Sustainability, education, and customer delight guide every decision we make.",
            icon: <FaHandsHelping size={50} className="text-emerald-700" />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            className="bg-white/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/30 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          How GreenNest Helps You
        </h2>

        <div className="flex flex-col gap-10 mb-10">
          {[
            {
              title: "Plant Care Guidance",
              description: "Learn how to water, prune, and fertilize your plants properly with easy-to-follow tutorials suitable for beginners and pros.",
              icon: <FaSeedling size={40} className="text-emerald-700" />,
            },
            {
              title: "Sustainable Gardening Tips",
              description: "Discover eco-friendly gardening practices, composting tips, and ways to reduce your carbon footprint while nurturing plants.",
              icon: <GiFlowers size={40} className="text-emerald-700" />,
            },
            {
              title: "Expert Consultation",
              description: "Get one-on-one advice from our certified GreenNest specialists for any plant care challenges or landscaping ideas.",
              icon: <GiTalk size={40} className="text-emerald-700" />,
            },
            {
              title: "Indoor & Office Plants",
              description: "Learn the best ways to integrate greenery into your home or office space for health, aesthetics, and productivity.",
              icon: <FaHome size={40} className="text-emerald-700" />,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              data-aos="fade-right"
              className="w-full bg-white/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/30 flex items-center gap-6 hover:scale-105 transition-transform"
            >
              <div>{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        data-aos="fade-up"
        className="bg-base-200 rounded-2xl py-20 mt-30 mb-30 p-12 text-center text-emerald-700 shadow-2xl"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Join the GreenNest Community
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Subscribe to our newsletter for plant care tips, gardening ideas, and exclusive updates.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 border border-emerald-700 rounded-xl w-full md:w-auto flex-1 text-gray-900"
          />
          <button className="btn px-6 py-6 bg-linear-to-r from-emerald-700 to-lime-600 rounded-xl font-bold text-white transition">
            Subscribe
          </button>
        </div>
      </motion.div>

    </div>
  );
};

export default AboutUs;
