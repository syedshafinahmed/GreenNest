import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const PlantDetails = ({ dataPromise }) => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);


  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { type, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [type === 'text' ? 'name' : 'email']: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.success('Booking successful!');
    setFormData({ name: '', email: '' });
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
    return <p className="text-center py-20 text-xl">Loading plant details...</p>;
  }

  return (
    // <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-0 items-center p-20">
    //   <img src={plant.image} alt={plant.plantName} className="w-60 md:w-80 h-full object-cover rounded-lg mb-5" />
    //   <div className='w-60 md:w-80'>
    //     <h1 className="text-4xl font-black mb-3">{plant.plantName}</h1>
    //     <p className="mb-3 text-lg text-justify">{plant.description}</p>
    //     <p><span className='font-bold'>Watering:</span> {plant.watering}</p>
    //     <p><span className='font-bold'>Sunlight:</span> {plant.sunlight}</p>
    //     <p><span className='font-bold'>Fertilizing:</span> {plant.fertilizing}</p>
    //     <p><span className='font-bold'>Price:</span> {plant.price}</p>
    //     <p><span className='font-bold'>Rating:</span> {plant.rating}</p>
    //     <p><span className='font-bold'>Care Level:</span> {plant.careLevel}</p>
    //     <p><span className='font-bold'>Provider:</span> {plant.providerName}</p>
    //     <p><span className='font-bold'>Stock:</span> {plant.availableStock}</p>
    //   </div>

    //   <div className="card bg-base-100 w-60 md:w-80 max-w-sm shrink-0 shadow-2xl border border-emerald-700">
    //     <form onSubmit={handleSubmit} className="card-body">
    //       <h1 className='text-center text-xl font-bold bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent'>Book Consultation</h1>
    //       <fieldset className="fieldset">
    //         <label className="label">Name</label>
    //         <input type="text" className="input" value={formData.name}
    //           onChange={handleChange} placeholder="Name" />
    //         <label className="label">Email</label>
    //         <input type="email" className="input" value={formData.email}
    //           onChange={handleChange} placeholder="Email" />
    //         <button type='submit' className="btn mt-4 bg-linear-to-r from-emerald-700 to-lime-600 text-white">Book Now</button>
    //       </fieldset>
    //     </form>
    //   </div>
    // </div>
    <div>

    </div>
  );
};

export default PlantDetails;
