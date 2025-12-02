import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaTag, FaBoxOpen } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router";
import { MdCategory } from "react-icons/md";

const PlantWeek = ({ data }) => {
  const navigate = useNavigate();
  const featuredPlants = data.slice(5, 6);

  const handleDetails = (plantId) => {
    navigate(`/plants/${plantId}`);
  };

  const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
      <div className="text-emerald-700 text-xl">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-gray-700 text-base">{value}</p>
      </div>
    </div>
  );

  return (
    <div
      data-aos="fade-right"
      className="max-w-7xl mx-auto px-5 py-20 bg-gray-200 rounded-sm"
    >
      <div className="mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Weekly Highlight
        </h2>
        <div className="w-80 h-1 bg-linear-to-r from-emerald-700 to-lime-600 rounded-full mt-2"></div>
      </div>

      {featuredPlants.map((plant) => (
        <motion.div
          key={plant.plantId}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col lg:flex-row items-center gap-12 rounded-3xl p-8
                     bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-3 left-3 px-4 py-1 z-50 text-sm font-semibold 
                       bg-linear-to-r from-emerald-700 to-lime-600 
                       text-white rounded-full shadow-md"
          >
            Plant of the Week
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.04 }}
            className="relative"
          >
            <div className="absolute inset-0 blur-2xl bg-emerald-300 opacity-20 rounded-3xl"></div>

            <img
              src={plant.image}
              className="relative w-full md:w-96 h-full md:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {plant.plantName}
              </h1>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDetails(plant.plantId)}
                className="cursor-pointer"
                title="View Details"
              >
                <LuArrowUpRight className="text-emerald-700 text-2xl hover:text-emerald-900 transition" />
              </motion.div>
            </div>


            <motion.p
              className="text-gray-700 text-justify line-clamp-6 leading-relaxed max-w-xl text-base md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {plant.description}
            </motion.p>
            <motion.div
              className="grid grid-cols-2 gap-6 pt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <InfoItem icon={<FaStar size={40} />} label="Rating" value={`${plant.rating} ⭐`} />
              <InfoItem icon={<FaTag size={40} />} label="Price" value={plant.price} />
              <InfoItem icon={<FaBoxOpen size={40} />} label="Stock" value={plant.availableStock} />
              <InfoItem icon={<MdCategory size={40} />} label="Category" value={plant.category} />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default PlantWeek;
