import React from 'react';
import drive from '../Images/drive.png'; // Ensure the correct path to the image

const Drive = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 py-20 bg-white"> {/* Adjusted padding for responsiveness */}
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0"> {/* Adjusted width and margin for responsive stacking */}
        <img
          src={drive}
          alt="Drive"
          className="rounded-lg w-full object-cover" 
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Drive when you want, make what you need
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Make money on your schedule with deliveries or rides—or both. 
          You can use your own car or choose a rental through Uber.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"> {/* Adjusted layout for buttons on mobile */}
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-md w-full sm:w-auto"> {/* Full width on mobile */}
            Get started
          </button>
          <a href="/sign-in" className="text-gray-700 underline w-full sm:w-auto text-center sm:text-left"> {/* Centered link on mobile */}
            Already have an account? Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drive;
