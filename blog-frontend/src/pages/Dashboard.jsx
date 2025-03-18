import React, { useState, useEffect } from 'react';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import BlogPost from '../components/dashboard/BlogPost';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const contentVariants = {
    open: { maxWidth: '72rem' },
    closed: { maxWidth: '88rem' },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <motion.div
          className="flex-1 p-6 transition-all duration-300 mx-4 lg:mx-8"
          initial={sidebarOpen ? 'open' : 'closed'}
          animate={sidebarOpen ? 'open' : 'closed'}
          variants={contentVariants}
        >
          <div
            className="max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
              <motion.h1
                className="text-3xl font-bold font-serif"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Dashboard
              </motion.h1>
              <motion.button
                className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto text-sm sm:text-base"
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
            <div className="space-y-6">
              <BlogPost id="1" author="Jane Smith" />
              <BlogPost id="2" author="Alex Johnson" />
              <BlogPost id="3" author="Emily Brown" />
              <BlogPost id="4" author="Michael Lee" />
              <BlogPost id="5" author="Sarah Davis" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}