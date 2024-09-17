import React from 'react';
import drive from '../Images/drive.png' // Replace with the correct path to the image

const Drive = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-40 py-20 bg-white">
      <div className="md:w-1/2">
        <img
          src={drive}
          alt="Drive"
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Drive when you want, make what you need
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Make money on your schedule with deliveries or rides—or both. 
          You can use your own car or choose a rental through Uber.
        </p>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-md">
            Get started
          </button>
          <a href="/sign-in" className="text-gray-700 underline">
            Already have an account? Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drive;
