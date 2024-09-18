import React from 'react';
import Map from '../Images/Map.png'; 

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start bg-white px-6 md:px-20 lg:px-40 py-10 lg:py-20 mt-20"> {/* Added 'mt-20' to avoid overlap with navbar */}
      
      {/* Left side: Form */}
      <div className="lg:max-w-lg w-full lg:mr-16">
        {/* Header Text */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Go anywhere with Uber
          </h1>
        </div>

        {/* Tabs for Ride and Package */}
        <div className="flex mb-6 md:mb-8 space-x-4 md:space-x-8">
          <button className="flex items-center space-x-2 border-b-4 border-black p-2">
            <span className="text-xl md:text-2xl">🚗</span>
            <span className="font-semibold text-lg md:text-xl">Ride</span>
          </button>
          <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-black transition">
            <span className="text-xl md:text-2xl">📦</span>
            <span className="font-semibold text-lg md:text-xl">Package</span>
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6 md:space-y-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Pickup location" 
              className="w-full p-3 md:p-4 bg-gray-100 rounded-md focus:outline-none text-base md:text-lg" 
            />
            <span className="absolute right-4 top-3 md:top-4 text-lg md:text-xl">📍</span>
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="Dropoff location" 
              className="w-full p-3 md:p-4 bg-gray-100 rounded-md focus:outline-none text-base md:text-lg" 
            />
            <span className="absolute right-4 top-3 md:top-4 text-lg md:text-xl">⬛</span>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Today" 
                className="w-full p-3 md:p-4 bg-gray-100 rounded-md focus:outline-none text-base md:text-lg" 
              />
              <span className="absolute right-4 top-3 md:top-4 text-lg md:text-xl">📅</span>
            </div>
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Now" 
                className="w-full p-3 md:p-4 bg-gray-100 rounded-md focus:outline-none text-base md:text-lg" 
              />
              <span className="absolute right-4 top-3 md:top-4 text-lg md:text-xl">⏰</span>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 md:py-4 rounded-md hover:bg-gray-800 transition text-base md:text-lg font-semibold">
            See prices
          </button>
        </div>
      </div>

      {/* Right side: Map Image */}
      <div className="mt-10 lg:mt-0 lg:ml-12 flex-shrink-0 w-full lg:w-auto">
        <img src={Map} alt="Map" className="h-72 md:h-[500px] lg:h-[700px] w-full object-cover" />
      </div>
    </div>
  );
};

export default Header;
