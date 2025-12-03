// import React, { use } from 'react';
// import { NavLink } from 'react-router';
// import leaves from '../../assets/leaves.png'
// import { AuthContext } from '../Provider/AuthProvider';
// import { toast } from 'react-toastify';
// const Navbar = () => {

//   const { user, logOut } = use(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         toast.success("Logged Out Successfully");
//       })
//       .catch(error => {
//         console.log(error.message);
//       })
//   }

//   const links = (
//     <>
//       <li><NavLink className="hover:scale-105 transition text-sm" to="/">Home</NavLink></li>
//       <li><NavLink className="hover:scale-105 transition text-sm" to="/plants">Plants</NavLink></li>
//       <li><NavLink className="hover:scale-105 transition text-sm" to="/about-us">About Us</NavLink></li>
//       <li><NavLink className="hover:scale-105 transition text-sm" to="/contact">Contact</NavLink></li>

//       {user && (
//         <li>
//           <NavLink className="hover:scale-105 transition text-sm" to="/profile">Profile</NavLink>
//         </li>
//       )}
//     </>
//   );

//   return (
//     <div className=' w-full sticky top-0 z-50 bg-base-200/70 shadow-sm'>
//       <div className='max-w-7xl mx-auto'>
//         <div className="navbar border-none shadow-sm p-5">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//               </div>
//               <ul
//                 tabIndex="-1"
//                 className="menu menu-sm dropdown-content 
//              backdrop-blur-xl bg-white/20 
//              rounded-xl shadow-lg
//              mt-3 p-4 w-40"
//               >
//                 {links}
//               </ul>
//             </div>

//             <div className="text-xl flex justify-center items-center gap-x-1 md:gap-x-3">
//               <img className='w-4 md:w-10' src={leaves} alt="" />
//               <NavLink to='/'><p className="text-xl md:text-4xl font-black bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent">GreenNest</p></NavLink>
//             </div>

//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizonal px-1">
//               {links}
//             </ul>
//           </div>

//           <div className="navbar-end flex gap-x-5">
//             {
//               user ? (<div className="dropdown dropdown-end">
//                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                   <div className="w-10 rounded-full border-2 border-emerald-700">
//                     <img src={user.photoURL} referrerPolicy="no-referrer" alt="User" />
//                   </div>
//                 </label>
//                 <ul
//                   tabIndex={0}
//                   className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-44 shadow-lg"
//                 >
//                   <li className="text-center mb-3 text-gray-700 font-semibold">
//                     {user.displayName}
//                   </li>
//                   <li>
//                     <button onClick={handleLogOut} className="btn w-full text-xs md:text-base bg-linear-to-r from-emerald-700 to-lime-600 text-white hover:scale-105 transition">Logout</button>
//                   </li>
//                 </ul>
//               </div>) :
//                 (<div className='flex gap-x-2 md:gap-x-5'>
//                   <NavLink to="/login"><button className="btn btn-xs md:btn md:btn-sm text-xs font-light w-20 border-none bg-linear-to-r from-emerald-700 to-lime-600 text-white hover:scale-105 transition">Login</button></NavLink>
//                   <NavLink to="/register"><button className="btn btn-xs md:btn md:btn-sm text-xs font-light w-20 border-none bg-linear-to-r from-emerald-700 to-lime-600 text-white hover:scale-105 transition">Register</button></NavLink>
//                 </div>)
//             }

//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Navbar;



import React, { use } from 'react';
import { NavLink } from 'react-router';
import leaves from '../../assets/leaves.png'
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {

  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const links = (
    <>
      <li><NavLink className="hover:scale-105 transition text-sm" to="/">Home</NavLink></li>
      <li><NavLink className="hover:scale-105 transition text-sm" to="/plants">Plants</NavLink></li>
      <li><NavLink className="hover:scale-105 transition text-sm" to="/about-us">About Us</NavLink></li>
      <li><NavLink className="hover:scale-105 transition text-sm" to="/contact">Contact</NavLink></li>
      {user && (
        <li>
          <NavLink className="hover:scale-105 transition text-sm" to="/profile">Profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className='w-full sticky top-0 z-50 backdrop-blur-xl bg-white/40 shadow-sm'>
      <div className='max-w-7xl mx-auto'>
        <div className="navbar border-none shadow-sm p-5">

          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>

              <ul tabIndex={-1} className="menu menu-sm dropdown-content mt-3 p-4 w-40 rounded-xl shadow-lg backdrop-blur-xl bg-white/70 flex flex-col gap-y-1">
                {links}
              </ul>
            </div>

            <div className="text-xl flex justify-center items-center gap-x-1 md:gap-x-3">
              <img className='w-4 md:w-10' src={leaves} alt="" />
              <NavLink to='/'><p className="text-xl md:text-4xl font-black bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent">GreenNest</p></NavLink>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex flex-row gap-x-8">
              {links}
            </ul>
          </div>

          <div className="navbar-end flex gap-x-5">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full border-2 border-emerald-700">
                    <img src={user.photoURL} referrerPolicy="no-referrer" alt="User" />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-44 shadow-lg">
                  <li className="text-center mb-3 text-gray-700 font-semibold">{user.displayName}</li>
                  <li>
                    <button onClick={handleLogOut} className="btn w-full text-xs md:text-base bg-linear-to-r from-emerald-700 to-lime-600 text-white hover:scale-105 transition">Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className='flex gap-x-2 md:gap-x-5'>
                <NavLink to="/login">
                  <button className="btn btn-xs md:btn md:btn-sm text-xs font-light w-20 border-none bg-linear-to-r from-emerald-700 to-lime-600 text-white hover:scale-105 transition">Login</button>
                </NavLink>
                <NavLink to="/register">
                  <button className="btn btn-xs md:btn md:btn-sm text-xs font-light w-20 border-none bg-linear-to-r from-emerald-700 to-lime-600 text-white hover:scale-105 transition">Register</button>
                </NavLink>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
