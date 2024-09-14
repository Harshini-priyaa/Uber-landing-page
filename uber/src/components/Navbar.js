import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-10 py-4 fixed w-full z-10 shadow-lg"> {/* Added shadow for the navbar */}
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex space-x-12 items-center"> {/* Increased spacing for left section */}
          {/* Logo */}
          <div className="text-3xl font-bold tracking-tight"> {/* Slightly bolded and tightened font */}
            Uber
          </div>
          {/* Menu Links */}
          <div className="flex space-x-8 text-base font-medium"> {/* Adjusted font weight and spacing */}
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
        <div className="flex space-x-6 items-center text-base font-medium"> {/* Adjusted font weight */}
          <div className="flex items-center space-x-1">
            <span className="text-lg">🌐</span>
            <a href="#" className="hover:text-gray-300">EN</a>
          </div>
          <a href="#" className="hover:text-gray-300">Help</a>
          <a href="#" className="hover:text-gray-300">Log in</a>
          <button className="border border-white py-2 px-5 rounded-full hover:bg-gray-800 transition-all font-semibold"> {/* Added font weight */}
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
