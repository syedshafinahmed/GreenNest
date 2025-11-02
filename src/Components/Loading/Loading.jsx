import React from 'react';

const Loading = () => {
  return (
    <div className='h-screen'>
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <span className="loading loading-bars loading-lg text-emerald-700"></span>
      </div>
    </div>
  );
};

export default Loading;