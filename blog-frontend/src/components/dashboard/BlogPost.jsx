import React from 'react';
import { FaThumbsUp, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogPost = ({ id = "1", author = "John Doe", content = "This is the content of the blog post. It can be anything, but here is a placeholder text to represent the content of your post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="border border-gray-400 rounded-lg p-6 mb-6 bg-white hover:shadow-lg cursor-pointer max-w-4xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
    >
      <div className="flex justify-between items-start">
        <h2 className="font-bold text-red-600 text-2xl font-serif">This is the title</h2>
        <div className="text-right">
          <p className="text-gray-500 font-serif text-base">
            Posted at: <span className="font-semibold text-blue-600">March 18, 2025</span>
          </p>
          <p className="text-gray-600 font-serif text-sm">
            By: <span className="font-semibold">{author}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0 w-full md:w-1/5">
          <img
            src="https://picsum.photos/400"
            alt="Blog Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between space-y-4">
          <p className="text-gray-700 text-lg leading-6 font-serif line-clamp-3"> {/* Limits to 3 lines */}
            {content}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <motion.button
                className="text-blue-600 hover:text-blue-800"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaThumbsUp size={20} />
              </motion.button>
              <motion.button
                className="text-green-600 hover:text-blue-800"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaCommentDots size={20} />
              </motion.button>
            </div>
            <Link
              to={`/post/${id}`}
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;