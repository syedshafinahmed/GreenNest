import React from 'react';
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa';
import leaves from '../../assets/leaves.png'
import { Link } from 'react-router';
const Footer = () => {
  return (
    <div className='bg-linear-to-r from-emerald-700 to-lime-600 text-white py-10'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left'>

        <div className='md:w-1/3 flex flex-col items-center md:items-start'>
          <div className="flex justify-center items-center gap-x-3 pb-4">
            <img className='w-10' src={leaves} alt="logo" />
            <p className="text-3xl md:text-4xl font-black text-white">GreenNest</p>
          </div>
          <p className='text-justify text-sm leading-relaxed max-w-sm'>
            GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.
          </p>
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl font-semibold mb-3'>Quick Links</h3>
          <ul className="space-y-2 flex flex-col">
            <Link to='/' className='hover:text-lime-200 transition cursor-pointer'>Home</Link>
            <Link to='/plants' className='hover:text-lime-200 transition cursor-pointer'>Plants</Link>
            <Link to='/about-us' className='hover:text-lime-200 transition cursor-pointer'>About Us</Link>
            <Link to='/contact' className='hover:text-lime-200 transition cursor-pointer'>Contact</Link>
            <Link className='hover:text-lime-200 transition cursor-pointer'>Privacy Policy</Link>
          </ul>
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl font-semibold mb-3'>Follow Us</h3>
          <div className='flex justify-center md:justify-start gap-5'>
            <a href="https://github.com/syedshafinahmed" className="hover:scale-110 transition-transform duration-200">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/syed-shafin-ahmed/" className="hover:scale-110 transition-transform duration-200">
              <FaLinkedin size={30} />
            </a>
            <a href="https://syedshafinahmed.pages.dev/" className="hover:scale-110 transition-transform duration-200">
              <FaGlobe size={30} />
            </a>
          </div>
        </div>

      </div>

      <div className='mt-10 border-t border-gray-300 pt-5 text-center text-sm'>
        <p>&copy; 2025 <span className="font-semibold">GreenNest</span>. All rights reserved.</p>
      </div>
    </div>

  );
};

export default Footer;