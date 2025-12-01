// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import { Outlet } from 'react-router';
// import Footer from '../Footer/Footer';
// import { ToastContainer } from 'react-toastify';

// const Root = () => {
//   return (
//     <div className='poppins bg-gray-200'>
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <Footer></Footer>
//       <ToastContainer></ToastContainer>
//     </div>
//   );
// };

// export default Root;



import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,      
      easing: 'ease-in-out', 
      once: false,         
      mirror: false,       
    });

    AOS.refresh();
  }, []);

  return (
    <div className='poppins bg-gray-200'>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
