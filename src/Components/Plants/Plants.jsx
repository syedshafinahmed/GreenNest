import React, { use, useMemo, useState } from 'react';
import { FaTag } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Plants = ({ dataPromise }) => {
  const data = use(dataPromise);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleDetails = (plantId) => {
    navigate(`/plants/${plantId}`);
  }

  const filteredPlants = data.filter((plant) => {
    const term = searchTerm.toLowerCase();
    return (
      plant.plantName.toLowerCase().includes(term) ||
      plant.description.toLowerCase().includes(term) ||
      plant.category.toLowerCase().includes(term)
    );
  });

  const sortedPlants = useMemo(() => {
    if (!sortField) return filteredPlants;

    return [...filteredPlants].sort((a, b) => {
      let valA = Number(a[sortField]);
      let valB = Number(b[sortField]);

      if (sortOrder === 'asc') return valA - valB;
      return valB - valA;
    });
  }, [filteredPlants, sortField, sortOrder]);

  return (
    <div className='max-w-7xl mx-auto pb-30 mt-15'>
      <div className='flex flex-wrap justify-between items-center px-5 md:px-0 gap-3'>
        <h1 className='font-bold text-xl md:text-4xl text-center'>Plants Found: {filteredPlants.length}</h1>

        <div className="flex gap-3">
          <input
            className="border border-emerald-700 rounded-md outline-none px-5 py-2 text-sm text-gray-400 w-full md:w-auto"
            type="search"
            placeholder="Search Plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border border-emerald-700 text-emerald-700 font-medium bg-white rounded-md px-4 py-2 text-sm focus:outline-none w-full md:w-auto"
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="availableStock">Stock</option>
          </select>

          <select
            className="border border-emerald-700 text-emerald-700 font-medium bg-white rounded-md px-4 py-2 text-sm focus:outline-none w-full md:w-auto"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>


      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-10 py-15 px-5 md:px-0'>
        {
          sortedPlants.map(toprated =>
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
                <p className='font-bold text-xl'>{toprated.plantName}</p>
                <p className="line-clamp-1 py-3 text-xs text-gray-400">
                  {toprated.description}
                </p>
                <div className='flex items-center py-3 gap-3'>
                  <span className='flex items-center text-xs badge badge-xs text-emerald-700 bg-white border-emerald-700 font-medium py-2'>
                    <FaTag /> ৳ {toprated.price}
                  </span>
                  <span className='flex items-center text-xs badge badge-xs text-emerald-700 bg-white border-emerald-700 font-medium py-2'>
                    <IoIosStar /> {toprated.rating}
                  </span>
                </div>
                <button
                  onClick={() => handleDetails(toprated.plantId)}
                  className='btn btn-sm font-light w-full bg-linear-to-r from-emerald-700 to-lime-600 text-white'
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