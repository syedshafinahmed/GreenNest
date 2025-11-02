import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");


  const [editing, setEditing] = useState(false);


  const [currentUser, setCurrentUser] = useState(user);

  if (!user) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl text-gray-600">Please log in to view your profile.</p>
      </div>
    );
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setCurrentUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        setEditing(false);
      })
      .catch(() => {
        toast.error("Failed to update profile!");
      });
  };

  return (
    <div className="max-w-sm mx-auto m-30 p-8 bg-white shadow-lg rounded-2xl border border-emerald-700 relative">
      <button onClick={() => setEditing(!editing)} className="absolute top-4 right-4 text-emerald-700 hover:text-lime-600 transition" title="Edit Profile"><FaEdit size={35} /></button>

      <h1 className="text-3xl font-black text-center mb-6 bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent">Your Profile</h1>

      <div className="flex flex-col items-center space-y-4 mb-6">
        {currentUser.photoURL && (
          <img src={currentUser.photoURL} alt="Profile" className="w-44 rounded-full object-cover border-4 border-emerald-700" />
        )}

        <div className="text-center space-y-1">
          <p className="text-lg font-semibold">Name:{" "}<span className="font-normal">{currentUser.displayName}</span></p>
          <p className="text-lg font-semibold">Email: <span className="font-normal">{currentUser.email}</span></p>
        </div>
      </div>

      {editing && (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="label font-semibold">Update Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered w-full" />
          </div>
          <div>
            <label className="label font-semibold">Update Photo URL</label>
            <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} className="input input-bordered w-full" />
          </div>
          <button type="submit" className="btn w-full bg-linear-to-r from-emerald-700 to-lime-600 text-white mt-3">Update Profile</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
