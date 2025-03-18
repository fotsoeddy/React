import React from 'react';
import { FaThumbsUp, FaCommentDots, FaCog, FaBookmark, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarVariants = {
    open: { width: '16rem' }, // w-64
    closed: { width: '4rem' }, // w-16
  };

  return (
    <motion.div
      className="bg-gray-800 text-white min-h-screen transition-all duration-300" // Changed to min-h-screen
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <div className="flex justify-end p-4">
        {isOpen && (
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FaTimes size={24} />
          </button>
        )}
      </div>
      <ul className="mt-4 space-y-4">
        <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700">
          <FaThumbsUp />
          {isOpen && <span>Like</span>}
        </li>
        <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700">
          <FaCommentDots />
          {isOpen && <span>Comment</span>}
        </li>
        <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700">
          <FaCog />
          {isOpen && <span>Settings</span>}
        </li>
        <li className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700">
          <FaBookmark />
          {isOpen && <span>Bookmark</span>}
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;