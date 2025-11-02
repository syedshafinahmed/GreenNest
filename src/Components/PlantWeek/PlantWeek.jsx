import React from 'react';

const PlantWeek = ({ data }) => {
  const featuredPlants = data.slice(5, 6);

  return (
    <div className="hero max-w-7xl mx-auto px-5 pb-50">
      <div>
        {
          featuredPlants.map(plant => (
            <div key={plant.plantId} className="hero-content flex-col lg:flex-row-reverse gap-x-30">
              <img
                src={plant.image}
                className="w-64 md:w-96 rounded-lg shadow-2xl hover:scale-102 transition"
              />
              <div>
                <h1 className="text-3xl md:text-5xl font-black bg-linear-to-l from-emerald-700 to-lime-600 bg-clip-text text-transparent mt-5 md:mt-0 animate-pulse">Plant of the Week</h1>
                <h1 className="text-xl md:text-3xl font-bold py-3">{plant.plantName}</h1>
                <p className="">{plant.description}</p>
                <p className="py-3"><span className='font-bold'>Rating:</span> {plant.rating}</p>
                <p className=""><span className='font-bold'>Price:</span> {plant.price}</p>
                <p className="py-3"><span className='font-bold'>Stock:</span> {plant.availableStock}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PlantWeek;
