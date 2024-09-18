import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  return (
    <nav className="bg-black text-white px-4 md:px-6 py-3 fixed w-full z-10 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex space-x-2 md:space-x-6 items-center">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold tracking-tight">
            Uber
          </div>
          {/* Menu Links */}
          <div className="hidden md:flex space-x-3 md:space-x-5 text-sm md:text-base font-medium">
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
        <div className="flex space-x-3 md:space-x-4 items-center text-sm md:text-base font-medium">
          <div className="flex items-center space-x-1">
            <span className="text-lg">🌐</span>
            <a href="#" className="hover:text-gray-300">EN</a>
          </div>
          <a href="#" className="hidden md:inline hover:text-gray-300">Help</a>
          <a href="#" className="hidden md:inline hover:text-gray-300">Log in</a>
          <button className="border border-white py-2 px-4 md:px-5 rounded-full hover:bg-gray-800 transition-all font-semibold">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Ride</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Drive</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Business</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Help</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Log in</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
