import React from 'react';
import personImage from '../Images/person.png'; // Ensure the correct path to the image

const RentCar = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 py-20 bg-white"> {/* Adjusted padding for responsiveness */}
      
      {/* Image Section (Left on larger screens, Bottom on mobile) */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-12">
        <img
          src={personImage}
          alt="Rent Car"
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Text Section (Right on larger screens, Top on mobile) */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Make money by renting out your car
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Connect with thousands of drivers and earn more per week 
          with Uber’s free fleet management tools.
        </p>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-md w-full sm:w-auto">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentCar;
