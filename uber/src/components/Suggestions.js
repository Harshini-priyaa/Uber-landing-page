import React from 'react';

// Import images from the Images folder
import CarImage from '../Images/car.png';
import CalendarImage from '../Images/calendar.png';
import PackageImage from '../Images/package.png';

const Suggestions = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-3xl font-bold mb-8">Suggestions</h2>
      <div className="flex justify-around space-x-8">
        
        {/* Ride Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex w-96">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Ride</h3>
            <p className="text-gray-600 mb-4">Go anywhere with Uber. Request a ride, hop in, and go.</p>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300">Details</button>
          </div>
          <div className="ml-6">
            <img src={CarImage} alt="Car" className="w-20" />
          </div>
        </div>

        {/* Reserve Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex w-96">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Reserve</h3>
            <p className="text-gray-600 mb-4">Reserve your ride in advance so you can relax on the day of your trip.</p>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300">Details</button>
          </div>
          <div className="ml-6">
            <img src={CalendarImage} alt="Calendar" className="w-20" />
          </div>
        </div>

        {/* Package Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex w-96">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Package</h3>
            <p className="text-gray-600 mb-4">Uber Connect makes same-day delivery easier than ever.</p>
            <button className="bg-white text-black px-4 py-2 rounded-full border border-gray-300">Details</button>
          </div>
          <div className="ml-6">
            <img src={PackageImage} alt="Package" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
