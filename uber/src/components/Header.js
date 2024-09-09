import React from 'react';

const Header = () => {
  return (
    <header className="bg-white fixed w-full top-0 z-10 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <img
            className="h-8 w-auto"
            src="https://www.uber-assets.com/logo.svg"
            alt="Uber"
          />
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 font-medium hover:text-black">
            Drive
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-black">
            Ride
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-black">
            Help
          </a>
          <a
            href="#"
            className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900"
          >
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
