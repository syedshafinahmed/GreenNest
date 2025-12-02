import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
import { FaBoxOpen, FaStar, FaStoreAlt, FaSun, FaTag, FaTint } from 'react-icons/fa';
import { GiFertilizerBag } from "react-icons/gi";
import { RiVoiceprintFill } from "react-icons/ri";
import { MdCategory } from "react-icons/md";


const PlantDetails = ({ dataPromise }) => {
  const [activeTab, setActiveTab] = useState("Slogan");

  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.success('Booking successful!');
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    dataPromise
      .then(data => {
        const found = data.find(p => p.plantId === parseInt(id, 10));
        setPlant(found);
      })
      .catch(err => console.error(err));
  }, [id, dataPromise]);

  if (!plant) {
    return <p className="text-center py-15 text-xl">Loading plant details...</p>;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='max-w-7xl mx-auto py-10'>
      <div className='flex flex-col md:flex-row mt-10 items-center gap-10 px-5 md:px-0'>
        <img
          className='w-full md:w-1/5 h-80 md:h-96 object-cover rounded-2xl'
          src={plant.image}
          alt={plant.plantName}
        />
        <div className='w-full md:w-4/5'>
          <h1 className='text-4xl font-black pb-5'>{plant.plantName}</h1>
          <p className='text-sm text-gray-600 text-justify'>{plant.description}</p>
        </div>
      </div>

      <div data-aos="fade-right" className="mt-10 mx-auto px-5 py-20 md:px-0">
        <div className="flex flex-wrap gap-5 justify-start">
          {[
            { label: "Slogan", icon: <RiVoiceprintFill />, color: "bg-gradient-to-r from-emerald-700 to-lime-600" },
            { label: "Provider", icon: <FaStoreAlt />, color: "bg-gradient-to-r from-emerald-700 to-lime-600" },
            { label: "Category", icon: <MdCategory />, color: "bg-gradient-to-r from-emerald-700 to-lime-600" },
            { label: "Price", icon: <FaTag />, color: "bg-gradient-to-r from-emerald-700 to-lime-600" },
            { label: "Rating", icon: <FaStar />, color: "bg-gradient-to-r from-emerald-700 to-lime-600" },
            { label: "Stock", icon: <FaBoxOpen />, color: "bg-gradient-to-r from-emerald-700 to-lime-600" },
          ].map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-2 font-semibold text-sm rounded-sm flex items-center gap-2 transition-transform duration-300 shadow-md
          ${activeTab === tab.label
                  ? `${tab.color} text-white scale-105`
                  : "text-gray-600 border border-emerald-700 bg-white hover:scale-105 hover:shadow-lg"}`
              }
              onClick={() => setActiveTab(tab.label)}
            ><span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-6 rounded-2xl bg-basae-200 shadow-md text-gray-700 min-h-20 flex items-center justify-start text-center"
        >
          {activeTab === "Slogan" && <p className="text-lg font-semibold">{plant.slogan}</p>}
          {activeTab === "Provider" && <p className="text-lg font-semibold">{plant.providerName}</p>}
          {activeTab === "Category" && <p className="text-lg font-semibold">{plant.category}</p>}
          {activeTab === "Price" && <p className="text-lg font-semibold">{plant.price}</p>}
          {activeTab === "Rating" && <p className="text-lg font-semibold">{plant.rating} ⭐</p>}
          {activeTab === "Stock" && <p className="text-lg font-semibold">{plant.availableStock} available</p>}
        </motion.div>
      </div>

      <div data-aos="fade-right" className="mt-15 mb-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 px-4 md:px-0">

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="relative w-full md:w-72 p-6 border border-emerald-700 flex flex-col items-center gap-4 rounded-2xl bg-base-200 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute -top-6 p-4 bg-white rounded-full border-2 border-emerald-700 shadow-md">
            <FaTint className="text-5xl text-emerald-700" />
          </div>
          <h2 className="text-4xl font-bold mt-20 text-center text-emerald-700">
            Watering
          </h2>
          <p className="text-gray-600 text-sm text-justify mt-2">{plant.watering}</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="relative w-full md:w-72 p-6 border border-emerald-700 flex flex-col items-center gap-4 rounded-2xl bg-base-200 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute -top-6 p-4 bg-white rounded-full border-2 border-emerald-700 shadow-md">
            <FaSun className="text-5xl text-emerald-700" />
          </div>
          <h2 className="text-4xl font-bold mt-20 text-center text-emerald-700">
            Sunlight
          </h2>
          <p className="text-gray-600 text-sm text-justify mt-2">{plant.sunlight}</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="relative w-full md:w-72 p-6 border border-emerald-700 flex flex-col items-center gap-4 rounded-2xl bg-base-200 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute -top-6 p-4 bg-white rounded-full border-2 border-emerald-700 shadow-md">
            <GiFertilizerBag className="text-5xl text-emerald-700" />
          </div>
          <h2 className="text-4xl font-bold mt-20 text-center text-emerald-700">
            Fertilizing
          </h2>
          <p className="text-gray-600 text-sm text-justify mt-2">{plant.fertilizing}</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="relative w-full md:w-72 p-6 border border-emerald-700 flex flex-col items-center gap-4 rounded-2xl bg-base-200 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-center text-4xl text-emerald-700 font-bold py-4">Book Consultation</h1>

            <input
              type="text"
              name="name"
              className="input input-bordered w-full text-black"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              className="input input-bordered w-full text-black"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <textarea
              name="message"
              className="textarea textarea-bordered w-full text-black"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={4}
              required
            />

            <button
              type="submit"
              className="btn text-white bg-linear-to-b from-emerald-700 to-lime-600 hover:scale-105 transition-transform duration-300"
            >
              Book Now
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PlantDetails;

