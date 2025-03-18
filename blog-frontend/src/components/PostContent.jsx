const PostContent = ({ post }) => {
    return (
      <>
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img 
              src={post.image || 'https://picsum.photos/400/300'} 
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 mb-4">{post.content}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default PostContent;