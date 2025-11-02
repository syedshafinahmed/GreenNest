import React, { use } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { useNavigate } from 'react-router';

const Plants = ({ dataPromise }) => {
  const data = use(dataPromise);
  const navigate = useNavigate();
  const handleDetails = (plantId) => {
    navigate(`/plants/${plantId}`);
  }
  return (
    <div className='max-w-7xl mx-auto pt-10 pb-40'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-8 md:px-0'>
        {
          data.map(toprated =>
            <div className='border border-gray-300 mb-5 md:mb-0 rounded-xl hover:scale-102 transition'>
              <div className='p-5'>
                <img className='h-96 w-full object-cover rounded-tr-md rounded-tl-md' src={toprated.image} alt="" />
                <p className='font-bold text-xl py-4'>{toprated.plantName}</p>
                <div className='flex justify-between items-center pb-5'>
                  <span className='flex items-center text-xs badge text-white bg-emerald-700 font-medium gap-x-2'><FaCreditCard /> {toprated.price}</span>
                  <span className='flex items-center text-xs badge text-white bg-lime-600 font-medium gap-x-2'><IoIosStar /> {toprated.rating}</span>
                </div>
                <button onClick={() => handleDetails(toprated.plantId) } className='btn w-full bg-linear-to-r from-emerald-700 to-lime-600 text-white'>View Details</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Plants;