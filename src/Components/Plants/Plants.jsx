import React, { use } from 'react';
import { FaTag } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Plants = ({ dataPromise }) => {
  const data = use(dataPromise);
  const navigate = useNavigate();
  const handleDetails = (plantId) => {
    navigate(`/plants/${plantId}`);
  }
  return (
    <div className='max-w-7xl mx-auto py-30'>
      <h1 className='font-bold text-xl md:text-4xl text-center'>All Plants: {data.length}</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-10 py-10 px-8 md:px-0'>
        {
          data.map(toprated =>
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
                <p className='font-bold text-xl '>{toprated.plantName}</p>
                <p className="line-clamp-1 py-3 text-xs text-gray-400">
                  {toprated.description}
                </p>
                <div className='flex justify-between items-center py-4'>
                  <span className='flex items-center text-xs badge badge-xs py-2 text-emerald-700 bg-white border-emerald-700 font-medium gap-x-2'>
                    <FaTag /> {toprated.price}
                  </span>
                  <span className='flex items-center text-xs badge badge-xs py-2 text-lime-600 bg-white border-lime-600 font-medium gap-x-2'>
                    <IoIosStar /> {toprated.rating}
                  </span>
                </div>
                <button
                  onClick={() => handleDetails(toprated.plantId)}
                  className='btn font-medium w-full bg-linear-to-r from-emerald-700 to-lime-600 text-white'
                >
                  See More
                </button>
              </div>
            </motion.div>
          )
        }
      </div>
    </div>
  );
};

export default Plants;