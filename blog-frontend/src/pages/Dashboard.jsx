import React, { useState } from 'react';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import BlogPost from '../components/dashboard/BlogPost';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const contentVariants = {
    open: { maxWidth: '80rem' },
    closed: { maxWidth: '96rem' },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <motion.div
          className="flex-1 p-6 transition-all duration-300 mx-auto"
          initial={sidebarOpen ? 'open' : 'closed'}
          animate={sidebarOpen ? 'open' : 'closed'}
          variants={contentVariants}
        >
          <div
            className="max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Firefox and IE
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex justify-between items-center mb-8">
              <motion.h1
                className="text-3xl font-bold font-serif"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Dashboard
              </motion.h1>
              <motion.button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                Create Blog
              </motion.button>
            </div>
            <motion.p
              className="text-gray-600 mb-8 font-serif"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Welcome to your dashboard! Here, you can manage your posts and profile.
            </motion.p>
            <BlogPost author="Jane Smith" />
            <BlogPost author="Alex Johnson" />
            <BlogPost author="Emily Brown" />
            <BlogPost author="Michael Lee" />
            <BlogPost author="Sarah Davis" />
            <BlogPost author="Sarah Davis" />
            <BlogPost author="Sarah Davis" />
            <BlogPost author="Sarah Davis" />
            <BlogPost author="Sarah Davis" />
            <BlogPost author="Sarah Davis" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}