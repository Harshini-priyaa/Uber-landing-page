import React from 'react';
import Map from '../Images/Map.png'; // Assuming you are using an image for the map

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-8">
      {/* Left side: Form */}
      <div className="max-w-lg w-full pl-12"> {/* Added padding-left for the form */}
        {/* Header Text */}
        <div className="mb-6"> {/* Added container for the h1 tag */}
          <h1 className="text-5xl font-bold">
            Go anywhere with Uber
          </h1>
        </div>

        {/* Tabs for Ride and Package */}
        <div className="flex mb-4">
          <button className="flex items-center space-x-2 border-b-4 border-black p-2">
            <span className="text-2xl">🚗</span>
            <span className="font-semibold">Ride</span>
          </button>
          <button className="flex items-center space-x-2 p-2 text-gray-400 ml-6 hover:text-black transition">
            <span className="text-2xl">📦</span>
            <span className="font-semibold">Package</span>
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Pickup location */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Pickup location" 
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
            />
            <span className="absolute right-4 top-3 text-xl">📍</span>
          </div>

          {/* Dropoff location */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Dropoff location" 
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
            />
            <span className="absolute right-4 top-3 text-xl">⬛</span>
          </div>

          {/* Date and time */}
          <div className="flex space-x-4">
            {/* Date */}
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Today" 
                className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              />
              <span className="absolute right-4 top-3 text-xl">📅</span>
            </div>

            {/* Time */}
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Now" 
                className="w-full p-4 bg-gray-100 rounded-md focus:outline-none"
              />
              <span className="absolute right-4 top-3 text-xl">⏰</span>
            </div>
          </div>

          {/* Submit button */}
          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
            See prices
          </button>
        </div>
      </div>

      {/* Right side: Map Image */}
      <div className="flex-1 ml-10 flex justify-end items-center">
        <img src={Map} alt="Map" className="h-96 w-auto" />
      </div>
    </div>
  );
};

export default Header;
