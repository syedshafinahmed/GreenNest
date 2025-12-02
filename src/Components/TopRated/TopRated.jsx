import React from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const TopRated = ({ data }) => {
  const navigate = useNavigate();

  const handleDetails = (plantId) => {
    navigate(`/plants/${plantId}`);
  }
  
  return (
    <div className='max-w-7xl mx-auto py-30'>
      <h1 className='font-bold text-xl md:text-4xl text-center'>Top Rated Indoor Plants</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 py-10'>
        {
          data.slice(-4).map(toprated =>
            <motion.div
              key={toprated.plantId}
              className='border border-gray-300 w-11/12 md:w-72 mb-10 md:mb-0 rounded-xl'
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                className='h-80 w-full md:w-72 object-cover rounded-tr-xl rounded-tl-xl'
                src={toprated.image}
                alt=""
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className='p-5'>
                <p className='font-bold text-xl py-4'>{toprated.plantName}</p>
                <div className='flex justify-between items-center pb-5'>
                  <span className='flex items-center text-xs badge text-emerald-700 bg-white border-emerald-700 font-medium gap-x-2'>
                    <FaCreditCard /> {toprated.price}
                  </span>
                  <span className='flex items-center text-xs badge text-lime-600 bg-white border-lime-600 font-medium gap-x-2'>
                    <IoIosStar /> {toprated.rating}
                  </span>
                </div>
                <button
                  onClick={() => handleDetails(toprated.plantId)}
                  className='btn w-full bg-linear-to-r from-emerald-700 to-lime-600 text-white'
                >
                  View Details
                </button>
              </div>
            </motion.div>
          )
        }
      </div>
    </div>
  );
};

export default TopRated;
