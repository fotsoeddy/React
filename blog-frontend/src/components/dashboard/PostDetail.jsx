import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';
import { FaThumbsUp } from 'react-icons/fa';

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
];

const PostDetail = ({ toggleSidebar, isSidebarOpen }) => {
  const { id } = useParams();

  // Mock data with like counts
  const [post, setPost] = useState({
    id,
    title: "This is the title",
    author: "John Doe",
    date: "March 18, 2025",
    image: "https://picsum.photos/800",
    content: "This is the content of the blog post. It can be anything, but here is a placeholder text to represent the content of your post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [
      { user: "Alice", text: "Great post!", likes: 0 },
      { user: "Bob", text: "Really enjoyed reading this.", likes: 0 },
      { user: "Charlie", text: "Thanks for sharing!", likes: 0 },
    ],
  });

  const contentVariants = {
    open: { maxWidth: '72rem' },
    closed: { maxWidth: '88rem' },
  };

  const handleLike = (index) => {
    setPost(prev => ({
      ...prev,
      comments: prev.comments.map((comment, i) =>
        i === index ? { ...comment, likes: comment.likes + 1 } : comment
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex pt-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <motion.div
          className="flex-1 p-6 lg:p-8 transition-all duration-300 mx-4 lg:mx-8"
          initial={isSidebarOpen ? 'open' : 'closed'}
          animate={isSidebarOpen ? 'open' : 'closed'}
          variants={contentVariants}
        >
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <Link
              to="/dashboard"
              className="text-blue-600 hover:text-blue-800 text-sm font-semibold mb-6 inline-block transition-colors"
            >
              ← Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">{post.title}</h1>
            <div className="flex justify-between items-center text-gray-600 text-sm mb-6">
              <p>
                By: <span className="font-semibold text-gray-800">{post.author}</span>
              </p>
              <p>
                Posted: <span className="font-semibold text-blue-600">{post.date}</span>
              </p>
            </div>
            <img
              src={post.image}
              alt="Post Image"
              className="w-full h-96 object-cover rounded-lg mb-6 shadow-md"
            />
            <p className="text-gray-700 text-lg leading-7 font-serif mb-8">{post.content}</p>
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4">Comments</h2>
              {post.comments.length > 0 ? (
                <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {post.comments.map((comment, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={avatars[index % avatars.length]}
                        alt={`${comment.user}'s avatar`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{comment.user}</p>
                        <p className="text-gray-600 text-sm">{comment.text}</p>
                        <button
                          onClick={() => handleLike(index)}
                          className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 mt-2 focus:outline-none"
                        >
                          <FaThumbsUp size={12} /> {/* Small like button */}
                          <span className="text-xs">{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 italic">No comments yet.</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PostDetail;