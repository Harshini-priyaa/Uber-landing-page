import React from 'react';
import blueImage from '../Images/blue.png'; // Adjust the path as necessary

const BusinessDrive = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-40 py-20 bg-white">
      <div className="md:w-1/2 md:pr-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The Uber you know, reimagined for business
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Uber for Business is a platform for managing global rides and meals, 
          and local deliveries, for companies of any size.
        </p>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-md">
            Get started
          </button>
          <a href="/solutions" className="text-gray-700 underline">
            Check out our solutions
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src={blueImage}
          alt="Uber for Business"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default BusinessDrive;
