import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header() {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
    >
      {/* Navbar */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link 
              to="/" 
              className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'} hover:text-blue-400 transition-colors`}
            >
              Blogger
            </Link>
            
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/create" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Create Post
                  </Link>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('accessToken');
                      localStorage.removeItem('refreshToken');
                      window.location.href = '/login';
                    }}
                    className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-400 transition-colors`}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-blue-400 transition-colors`}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Create Blog
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        className="min-h-screen flex items-center justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to Blogger
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Create and share your stories with the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Link 
              to={isAuthenticated ? "/dashboard" : "/register"}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {isAuthenticated ? "Go to Dashboard" : "Create Blog"}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}