//import Image from "next/image";
"use client";

import { motion } from "framer-motion";
import React, { FormEvent } from "react";
export default function ContactPage() {
   const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animation */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-24 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-3"
        >
          Discover Endless Style Possibilities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg mb-6"
        >
          Explore our curated collection of premium products for every lifestyle.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100"
        >
          BOOKING NOW
        </motion.button>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-black"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side Info Animated */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-black">Get in Touch</h3>
            <p className="text-black mb-6">
              Have questions about our products or need assistance with your booking?
              Our team is here to help.
            </p>

            {/* Address */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start mb-6"
            >
              <div className="bg-blue-600 text-white p-3 rounded-full mr-4">📍</div>
              <div>
                <h4 className="font-semibold text-black">Address</h4>
                <p className="text-black">No. 24, Street 562,Sangkat Boeung
Kak I,Khan Toul Kork,Phnom Penh,
Cambodia</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start mb-6"
            >
              <div className="bg-blue-600 text-white p-3 rounded-full mr-4">📞</div>
              <div>
                <h4 className="font-semibold text-black">Phone</h4>
                <p className="text-black">092 4382 514</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start"
            >
              <div className="bg-blue-600 text-white p-3 rounded-full mr-4">✉️</div>
              <div>
                <h4 className="font-semibold text-black">Email</h4>
                <p className="text-black">phyreaka@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Side Form Animated */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg shadow"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block font-medium mb-1 text-black">Name</label>
                <input
                  type="text"
                  className="w-full border border-black bg-white text-black placeholder:text-black rounded-md p-3 focus:ring-2 focus:ring-blue-500"

                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block font-medium mb-1 text-black">Email</label>
                <input
                  type="email"
                 className="w-full border border-black bg-white text-black placeholder:text-black rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block font-medium mb-1 text-black">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-black bg-white text-black placeholder:text-black rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

