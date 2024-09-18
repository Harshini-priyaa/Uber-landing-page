import React from 'react';

// Import images from the Images folder
import CarImage from '../Images/car.png';
import CalendarImage from '../Images/calendar.png';
import PackageImage from '../Images/package.png';

const Suggestions = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4"> {/* Added padding for mobile */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Suggestions</h2>
      
      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center space-y-6 lg:space-y-0 lg:space-x-8 w-full">

        {/* Ride Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex w-full lg:w-96 max-w-md"> {/* Responsive width */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Ride</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">Go anywhere with Uber. Request a ride, hop in, and go.</p>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300 text-sm md:text-base">Details</button>
          </div>
          <div className="ml-4 md:ml-6">
            <img src={CarImage} alt="Car" className="w-16 md:w-20" /> {/* Responsive image size */}
          </div>
        </div>

        {/* Reserve Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex w-full lg:w-96 max-w-md"> {/* Responsive width */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Reserve</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">Reserve your ride in advance so you can relax on the day of your trip.</p>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300 text-sm md:text-base">Details</button>
          </div>
          <div className="ml-4 md:ml-6">
            <img src={CalendarImage} alt="Calendar" className="w-16 md:w-20" /> {/* Responsive image size */}
          </div>
        </div>

        {/* Package Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex w-full lg:w-96 max-w-md"> {/* Responsive width */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Package</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">Uber Connect makes same-day delivery easier than ever.</p>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300 text-sm md:text-base">Details</button>
          </div>
          <div className="ml-4 md:ml-6">
            <img src={PackageImage} alt="Package" className="w-16 md:w-20" /> {/* Responsive image size */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Suggestions;
