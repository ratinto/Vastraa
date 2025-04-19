import React from "react";
import { IoCall } from "react-icons/io5";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GiLoincloth } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F8F4] text-gray-800 py-16 px-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">Contact Us</h1>
        <p className="text-center mb-10 text-gray-500">
          We'd love to hear from you. Reach out to us through any of the methods below.
        </p>

        <div className="space-y-8">
          {/* Contact Method 1: Phone */}
          <div className="flex items-center gap-4">
            <IoCall className="text-3xl text-black" />
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-gray-600">+91 123456789</p>
            </div>
          </div>

          {/* Contact Method 2: Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl text-black" />
            <div>
              <h3 className="font-semibold text-lg">Email Us</h3>
              <p className="text-gray-600">support@vastraa.in</p>
            </div>
          </div>

          {/* Contact Method 3: Address */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-3xl text-black" />
            <div>
              <h3 className="font-semibold text-lg">Visit Us</h3>
              <p className="text-gray-600">Sonipat, Haryana</p>
            </div>
          </div>

          {/* Contact Method 4: Store */}
          <div className="flex items-center gap-4">
            <GiLoincloth className="text-3xl text-black" />
            <div>
              <h3 className="font-semibold text-lg">Vastraa Store</h3>
              <p className="text-gray-600">Come visit us for amazing products!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
