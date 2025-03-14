import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const isAuthenticated = !!localStorage.getItem('accessToken');

  return (
    <header 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
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
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/register" 
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    Sign Up
                  </Link>
                  <Link 
                    to="/login" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>

        {/* Hero Section */}
        <motion.div 
          className="flex-1 flex items-center justify-center text-center"
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
                {isAuthenticated ? "Go to Dashboard" : "Get Started"}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}