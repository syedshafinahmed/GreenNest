import React, { use, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';


const Login = () => {
  const { signIn, setUser, signInWithGoogle, resetPassword } = use(AuthContext);
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        setUser(user);
        toast.success('Logged in with Google!');
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };


  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Please check email!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const from = location.state?.from?.pathname || '/';
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    signIn(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        toast.success('Login successful!');
        form.reset();
        // navigate('/');
        navigate(from, { replace: true });
        // console.log(user);
      })
      .catch(error => {
        toast.error(error.message);
      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="w-96 hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h3 className='text-center font-black text-3xl bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent mt-5'>Login</h3>
          <form onSubmit={handleLogIn} className="card-body">
            <fieldset className="fieldset">

              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" required ref={emailRef} />

              <label className="label">Password</label>

              <div className='relative'>
                <input name='password' type={showPassword ? 'text' : 'password'} className="input" placeholder="Password" required />
                <button onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-3 z-20'>{showPassword ? <IoEyeSharp size={15} /> : <FaEyeSlash size={15} />}</button>
              </div>


              <div><button onClick={handleForgotPassword} className="link link-hover">Forgot password?</button></div>

              <button type='button' onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-4">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>

              <button type='submit' className="btn btn-neutral mt-4 border-none bg-linear-to-r from-emerald-700 to-lime-600 text-white hover:scale-105 transition">Login</button>
              <p className='text-xs text-center mt-5'>Don't have an account? <NavLink to='/register' className='bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent font-bold'> Register</NavLink></p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;