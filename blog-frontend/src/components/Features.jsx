import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: '📝',
      title: 'Easy to Use',
      description: 'Create and manage your blog with ease.',
    },
    {
      icon: '🎨',
      title: 'Customizable',
      description: 'Personalize your blog to match your style.',
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Share your ideas with readers worldwide.',
    },
  ];

  return (
    <div className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Blogger?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}