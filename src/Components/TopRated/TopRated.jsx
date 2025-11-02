import React from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { useNavigate } from 'react-router';

const TopRated = ({ data }) => {
  const navigate = useNavigate();

  const handleDetails = (plantId) => {
    navigate(`/plants/${plantId}`);
  }
  return (
    <div className='max-w-7xl mx-auto py-20'>
      <h1 className='font-bold text-xl md:text-2xl text-center'>Top Rated Indoor Plants</h1>
      <div className='flex flex-col md:flex-row justify-around items-center py-10'>
        {
          data.slice(-4).map(toprated =>
            <div key={toprated.plantId} className='border border-gray-300 mb-10 md:mb-0 rounded-xl hover:scale-102 transition'>
              <div className='p-5'>
                <img className='h-80 w-60 object-cover rounded-tr-xl rounded-tl-xl' src={toprated.image} alt="" />
                <p className='font-bold text-xl py-4'>{toprated.plantName}</p>
                <div className='flex justify-between items-center pb-5'>
                  <span className='flex items-center text-xs badge text-white bg-emerald-700 font-medium gap-x-2'><FaCreditCard /> {toprated.price}</span>
                  <span className='flex items-center text-xs badge text-white bg-lime-600 font-medium gap-x-2'><IoIosStar /> {toprated.rating}</span>
                </div>
                <button onClick={() => handleDetails(toprated.plantId)} className='btn w-full bg-linear-to-r from-emerald-700 to-lime-600 text-white'>View Details</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TopRated;