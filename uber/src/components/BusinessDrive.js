import React from 'react';
import blueImage from '../Images/blue.png'; // Ensure the correct path to the image

const BusinessDrive = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 py-20 bg-white"> {/* Adjusted padding for responsiveness */}
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pr-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          The Uber you know, reimagined for business
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Uber for Business is a platform for managing global rides and meals, 
          and local deliveries, for companies of any size.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-md w-full sm:w-auto">
            Get started
          </button>
          <a href="/solutions" className="text-gray-700 underline w-full sm:w-auto text-center sm:text-left">
            Check out our solutions
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src={blueImage}
          alt="Uber for Business"
          className="rounded-lg w-full object-cover"
        />
      </div>
    </div>
  );
};

export default BusinessDrive;
