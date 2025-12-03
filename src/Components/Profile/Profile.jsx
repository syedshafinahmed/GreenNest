import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, setUser, loading } = useContext(AuthContext);

  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  if (loading || !currentUser) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl text-gray-600">Loading profile...</p>
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photo,
      });

      const updatedUser = {
        ...currentUser,
        displayName: name,
        photoURL: photo,
      };

      setCurrentUser(updatedUser);
      setUser(updatedUser);

      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile!");
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto mt-10 mb-40 p-10 bg-white rounded-3xl shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-black mb-12 text-emerald-700">
        Profile Dashboard
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-14">

        <motion.div
          className="bg-white shadow-lg w-1/3 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.img
            src={
              currentUser.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            className="w-96 h-80 rounded-xl object-cover border-2 border-emerald-700 shadow-lg"
            alt="Profile"
            referrerPolicy="no-referrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-2xl w-full p-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6">Update Your Information</h3>

          <form
            className="space-y-6"
            onSubmit={handleUpdate}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block font-semibold">Name</label>
              <input
                className="w-full p-3 border border-emerald-700 rounded-lg outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block font-semibold">Photo URL</label>
              <input
                className="w-full p-3 border border-emerald-700 rounded-lg outline-none"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                type="text"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 btn  bg-emerald-600 text-white rounded-lg font-light"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Save Changes
            </motion.button>
          </form>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Profile;
