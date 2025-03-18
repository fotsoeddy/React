import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none mr-4">
            <FaBars size={24} />
          </button>
          <h1 className="text-2xl font-bold">My Blog</h1>
        </div>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;