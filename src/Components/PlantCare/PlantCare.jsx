import React from 'react';

const PlantCare = ({ data }) => {
  return (
    <div className='max-w-7xl mx-auto py-20'>
      <h1 className='font-bold text-xl md:text-2xl text-center mb-10'>Plant Care Tips</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 md:px-0'>
        {
          data.slice(3, 6).map(plant =>
            <div key={plant.plantId} className='border border-gray-300 p-10 rounded-xl hover:scale-102 transition'>
              <h1 className='text-center text-xl font-bold mb-5'>{plant.plantName}</h1>
              <ul className="space-y-2 list-disc list-inside">
                <li className='text-xs text-gray-700 leading-relaxed'><span className='font-bold'>Watering: </span> {plant.watering}</li>
                <li className='text-xs text-gray-700 leading-relaxed'><span className='font-bold'>Sunlight: </span> {plant.sunlight}</li>
                <li className='text-xs text-gray-700 leading-relaxed'><span className='font-bold'>Fertilizing: </span>{plant.fertilizing}</li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default PlantCare;