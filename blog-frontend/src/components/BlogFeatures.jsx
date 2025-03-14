
// BlogFeatures component
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function BlogFeatures() {
    const features = [
      {
        title: 'Rich Editor',
        description: 'Create beautiful posts with our markdown editor',
        icon: '✍️'
      },
      {
        title: 'Analytics',
        description: 'Track your blog performance in real-time',
        icon: '📈'
      },
      {
        title: 'Monetization',
        description: 'Earn money from your content',
        icon: '💰'
      }
    ];
  
    return (
      <motion.div 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }