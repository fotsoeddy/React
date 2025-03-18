import React from 'react';
import { FaThumbsUp, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="border border-gray-400 rounded-lg p-6 mb-6 bg-white hover:shadow-lg cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animation triggers only once when in view
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }} // Hover effect
    >
      <div className="flex justify-between items-start">
        <motion.h2
          className="font-bold text-red-600 text-3xl font-serif"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          This is the title
        </motion.h2>
        <motion.p
          className="text-gray-500 font-serif"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Posted at: <span className="font-semibold text-blue-600">March 18, 2025</span>
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-8">
        <motion.div
          className="flex-shrink-0 w-full md:w-1/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <img
            src="https://picsum.photos/500"
            alt="Blog Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>
        <div className="flex-1 flex flex-col justify-between">
          <motion.p
            className="text-gray-700 text-lg leading-6 font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            This is the content of the blog post. It can be anything, but here is a placeholder text to represent the content of your post.
          </motion.p>
          <motion.div
            className="mt-4 flex space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.button
              className="text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <FaThumbsUp size={20} />
            </motion.button>
            <motion.button
              className="text-green-600 hover:text-green-800"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <FaCommentDots size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;