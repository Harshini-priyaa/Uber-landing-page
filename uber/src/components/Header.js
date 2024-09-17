import React from 'react';
import Map from '../Images/Map.png'; 

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start bg-white px-40 py-20"> {/* Adjusted padding and layout for responsiveness */}
      
      {/* Left side: Form */}
      <div className="lg:max-w-lg w-full lg:mr-16">
        {/* Header Text */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold leading-tight"> {/* Text size adjusted */}
            Go anywhere with Uber
          </h1>
        </div>

        {/* Tabs for Ride and Package */}
        <div className="flex mb-8 space-x-8"> 
          <button className="flex items-center space-x-2 border-b-4 border-black p-2">
            <span className="text-2xl">🚗</span>
            <span className="font-semibold text-xl">Ride</span>
          </button>
          <button className="flex items-center space-x-2 p-2 text-gray-400 hover:text-black transition">
            <span className="text-2xl">📦</span>
            <span className="font-semibold text-xl">Package</span>
          </button>
        </div>

        {/* Form */}
        <div className="space-y-8"> {/* Adjusted vertical spacing */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Pickup location" 
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none text-lg"
            />
            <span className="absolute right-4 top-4 text-xl">📍</span>
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="Dropoff location" 
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none text-lg"
            />
            <span className="absolute right-4 top-4 text-xl">⬛</span>
          </div>

          <div className="flex space-x-6">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Today" 
                className="w-full p-4 bg-gray-100 rounded-md focus:outline-none text-lg"
              />
              <span className="absolute right-4 top-4 text-xl">📅</span>
            </div>
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Now" 
                className="w-full p-4 bg-gray-100 rounded-md focus:outline-none text-lg"
              />
              <span className="absolute right-4 top-4 text-xl">⏰</span>
            </div>
          </div>

          <button className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition text-lg font-semibold">
            See prices
          </button>
        </div>
      </div>

      {/* Right side: Map Image */}
      <div className="mt-50 lg:mt-20 lg:ml-50 flex-shrink-0">
        <img src={Map} alt="Map" className="h-[700px] w-full lg:w-[650px] object-cover" /> {/* Adjusted width and object cover */}
      </div>
    </div>
  );
};

export default Header;
