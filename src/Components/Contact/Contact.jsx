import React, { useContext } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Contact = () => {
  const { user } = useContext(AuthContext);

  const FormField = ({ label, type, placeholder, defaultValue }) => (
    <div className="flex flex-col">
      <label className="font-semibold text-gray-900 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 
                   focus:border-emerald-700 outline-none transition shadow-sm"
      />
    </div>
  );

  const SocialIcon = ({ href, children }) => (
    <motion.a
      whileHover={{ scale: 1.2, y: -2 }}
      className="text-emerald-700 cursor-pointer transition"
      href={href}
      target="_blank"
    >
      {children}
    </motion.a>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold tracking-tight
                   bg-linear-to-r from-emerald-700 to-lime-600 bg-clip-text text-transparent"
      >
        Reach Out to GreenNest
      </motion.h1>

      <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto text-lg">
        Got a question about plants, GreenNest services, or just want to say hello?
        Connect with us and join our community of plant lovers.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        <motion.div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start py-15 order-2 md:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Stay Connected
          </h2>

          <p className="text-gray-700 text-center md:text-start mt-3 leading-relaxed max-w-md">
            Follow GreenNest for the latest plant tips, gardening advice, and sustainable living ideas.
          </p>

          <div className="flex gap-6 text-3xl mt-6">
            <SocialIcon href="https://github.com/syedshafinahmed">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/syed-shafin-ahmed/">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/__shafin__ahmed/">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://syedshafinahmed.pages.dev/">
              <FaGlobe />
            </SocialIcon>
          </div>
        </motion.div>

        <motion.form
          data-aos="fade-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="bg-white/50 backdrop-blur-xl px-8 py-10 rounded-2xl shadow-2xl 
                     border border-white/30 space-y-6 order-1 md:order-2"
        >

          <FormField
            label="Full Name"
            type="text"
            placeholder="Your Name"
            defaultValue={user?.displayName || ""}
          />

          <FormField
            label="Email Address"
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email || ""}
          />

          <div className="flex flex-col">
            <label className="font-semibold text-gray-900 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 
                         focus:border-emerald-700 outline-none transition resize-none shadow-sm"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full btn font-light py-3  text-white rounded-xl bg-linear-to-r 
                       from-emerald-700 to-lime-600 shadow-lg tracking-wide"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
