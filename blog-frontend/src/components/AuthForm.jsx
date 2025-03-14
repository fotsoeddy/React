import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function AuthForm({ isLogin = true }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    dob: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isLogin ? '/auth/login/' : '/auth/register/';
      const { data } = await axios.post(`http://localhost:8000/api${url}`, formData);

      if (isLogin) {
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        navigate('/dashboard'); 
        toast.success('Logged in successfully!');
      } else {
        navigate('/login');
        toast.success('Registration successful! Please login.');
      }
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
    >
      {/* Navbar */}
      <nav className="bg-white bg-opacity-90 backdrop-blur-sm shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-blue-600 hover:text-blue-400 transition-colors"
            >
              Blogger
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Create Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Form */}
      <motion.div 
        className="flex-1 flex items-center justify-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md md:max-w-xl bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-600">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-600">Date of Birth</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                </motion.div>
              </>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium mb-2 text-gray-600">Username</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </motion.div>

            {!isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium mb-2 text-gray-600">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium mb-2 text-gray-600">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              >
                {loading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
              </button>
            </motion.div>

            <motion.p 
              className="text-center mt-4 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <Link 
                to={isLogin ? '/register' : '/login'} 
                className="text-blue-600 hover:underline font-medium"
              >
                {isLogin ? 'Register here' : 'Login here'}
              </Link>
            </motion.p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}