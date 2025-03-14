// BlogStats component
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function BlogStats() {
    const stats = [
      { number: '10k+', label: 'Active Blogs' },
      { number: '50k+', label: 'Monthly Readers' },
      { number: '100+', label: 'Featured Posts' },
    ];
  
    return (
      <motion.div 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }