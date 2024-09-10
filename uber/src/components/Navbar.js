import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 fixed w-full z-10">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex space-x-10 items-center">
          {/* Logo */}
          <div className="text-3xl font-semibold">
            Uber
          </div>
          {/* Menu Links */}
          <div className="flex space-x-6 text-base">
            <a href="#" className="hover:text-gray-300">Ride</a>
            <a href="#" className="hover:text-gray-300">Drive</a>
            <a href="#" className="hover:text-gray-300">Business</a>
            <a href="#" className="flex items-center hover:text-gray-300">
              About
              <span className="ml-1 text-sm">▼</span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6 items-center text-base">
          <div className="flex items-center space-x-1">
            <span className="text-lg">🌐</span>
            <a href="#" className="hover:text-gray-300">EN</a>
          </div>
          <a href="#" className="hover:text-gray-300">Help</a>
          <a href="#" className="hover:text-gray-300">Log in</a>
          <button className="border border-white py-1 px-4 rounded-full hover:bg-gray-800 transition-all">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
