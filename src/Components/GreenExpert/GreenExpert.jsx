import React from 'react';

const GreenExpert = () => {
  const experts = [
    {
      "id": 1,
      "name": "Jhankar Mahbub",
      "image": "https://i.ibb.co.com/TMPsjFMP/student-image-90-Jhankar-Mahbub-Md-Mahbubur-Rahman-Khan.jpg",
      "specialization": "Indoor Plant Care Specialist"
    },
    {
      "id": 2,
      "name": "Abdur Rakib",
      "image": "https://i.ibb.co.com/XksvPG3S/1751998430634.jpg",
      "specialization": "Tree Plantation & Urban Gardening Expert"
    },
    {
      "id": 3,
      "name": "Ferdous Zihad ",
      "image": "https://i.ibb.co.com/8nMrWbLh/images-3.jpg",
      "specialization": "Botanical Nutrition & Fertilization Expert"
    },
    {
      "id": 4,
      "name": "Syed Shafin Ahmed",
      "image": "https://i.ibb.co.com/84jf6YV2/orangme.jpg",
      "specialization": "Succulent & Cactus Care Specialist"
    }
  ]

  return (
    <div className='max-w-7xl mx-auto py-15'>
      <div>
        <h1 className='font-bold text-xl md:text-2xl text-center mt-20'>Meet Our Green Experts</h1>
        <div className='flex flex-col md:flex-row items-center justify-center gap-x-5 pt-15 pb-40 gap-y-10 md:gap-y-0'>
          {
            experts.map(expert =>
              <div key={expert.id} className='px-5 flex flex-col items-center hover:scale-102 transition'>
                <img className='rounded-full w-62 border-3 border-emerald-700 border-rounded' src={expert.image} alt="" />
                <p className='font-bold text-xl text-center mt-3 md:mt-5 bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent'>{expert.name}</p>
                <p className='font-medium text-xs text-center text-gray-700'>{expert.specialization}</p>
              </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default GreenExpert;