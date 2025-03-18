import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // Get post ID from URL

  // Mock data (replace with real data fetching logic)
  const post = {
    id,
    title: "This is the title",
    author: "John Doe",
    date: "March 18, 2025",
    image: "https://picsum.photos/800",
    content: "This is the content of the blog post. It can be anything, but here is a placeholder text to represent the content of your post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [
      { user: "Alice", text: "Great post!" },
      { user: "Bob", text: "Really enjoyed reading this." },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          Back to Dashboard
        </Link>
        <h1 className="font-bold text-red-600 text-3xl font-serif mb-4">{post.title}</h1>
        <p className="text-gray-500 font-serif text-base mb-2">
          Posted at: <span className="font-semibold text-blue-600">{post.date}</span>
        </p>
        <p className="text-gray-600 font-serif text-sm mb-4">
          By: <span className="font-semibold">{post.author}</span>
        </p>
        <img
          src={post.image}
          alt="Post Image"
          className="w-full h-auto object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 text-lg leading-6 font-serif mb-6">{post.content}</p>
        <h2 className="text-2xl font-bold font-serif mb-4">Comments</h2>
        {post.comments.length > 0 ? (
          <ul className="space-y-4">
            {post.comments.map((comment, index) => (
              <li key={index} className="border p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{comment.user}</p>
                <p className="text-gray-700">{comment.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default PostDetail;