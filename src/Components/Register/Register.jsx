import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, SetPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const validatePassword = (value) => {
    setPassword(value);
    if (value.length < 6) {
      SetPasswordError('Password must be at least 6 characters long.');
    }
    else if (!/[a-z]/.test(value)) {
      SetPasswordError('Password must include at least one lowercase letter.');
    }
    else if (!/[A-Z]/.test(value)) {
      SetPasswordError('Password must include at least one uppercase letter.');
    }
    else {
      SetPasswordError('');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!pattern.test(password)) {
      SetPasswordError('Password must contain 1 uppercase, 1 lowercase and be at least 6 characters long.');
      return;
    }

    SetPasswordError('');
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            form.reset();
            toast.success('Registration Successful!');
            navigate('/');
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="w-96 hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h3 className="text-center font-black text-3xl bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent mt-5">Register</h3>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input name="name" type="text" className="input" placeholder="Name" required />

              <label className="label">Photo URL</label>
              <input name="photo" type="text" className="input" placeholder="Photo URL" required />

              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" required />

              <label className="label">Password</label>
              <div className="relative">
                <input name="password" type={showPassword ? 'text' : 'password'} className="input" placeholder="Password" required value={password} onChange={(e) => validatePassword(e.target.value)} /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3 z-20">{showPassword ? (<IoEyeSharp size={15} />) :
                  (<FaEyeSlash size={15} />)}</button>
              </div>
              {passwordError && (
                <p className="text-xs text-center text-red-600 mt-1">{passwordError}</p>
              )}
              {!passwordError && password.length > 0 && (
                <p className="text-xs text-center text-green-600 mt-1">Strong Password</p>
              )}
              <button type="submit" className="btn btn-neutral mt-4 border-none bg-linear-to-r from-emerald-700 to-lime-600 text-white hover:scale-105 transition">Register</button>
              <p className='text-xs text-center mt-5'>Already have an account? <NavLink to='/login' className='bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent font-bold'> Login</NavLink></p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;