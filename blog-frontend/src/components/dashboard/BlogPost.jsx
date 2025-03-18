import React from 'react';
import { FaThumbsUp, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogPost = ({ author = "John Doe" }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="border border-gray-400 rounded-lg p-4 mb-4 bg-white hover:shadow-lg cursor-pointer" // Reduced padding and margin
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="flex justify-between items-start">
        <h2 className="font-bold text-red-600 text-xl font-serif">This is the title</h2> {/* Reduced from text-3xl to text-xl */}
        <div className="text-right">
          <p className="text-gray-500 font-serif text-sm"> {/* Reduced text size */}
            Posted at: <span className="font-semibold text-blue-600">March 18, 2025</span>
          </p>
          <p className="text-gray-600 font-serif text-xs"> {/* Reduced from text-sm to text-xs */}
            By: <span className="font-semibold">{author}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-2 space-y-2 md:space-y-0 md:space-x-4"> {/* Reduced spacing */}
        <div className="flex-shrink-0 w-full md:w-1/6"> {/* Reduced from w-1/5 to w-1/6 */}
          <img
            src="https://picsum.photos/300" // Smaller image size
            alt="Blog Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-gray-700 text-base leading-5 font-serif"> {/* Reduced from text-lg to text-base, leading-6 to leading-5 */}
            This is the content of the blog post. It can be anything, but here is a placeholder text.
          </p>
          <div className="mt-2 flex space-x-4"> {/* Reduced margin */}
            <motion.button
              className="text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <FaThumbsUp size={16} /> {/* Reduced icon size */}
            </motion.button>
            <motion.button
              className="text-green-600 hover:text-green-800"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <FaCommentDots size={16} /> {/* Reduced icon size */}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;