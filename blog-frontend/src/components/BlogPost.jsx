// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import PostContent from './PostContent';
// import PostInteractions from './PostInteractions';
// import CommentsSection from './CommentsSection';

// const BlogPost = ({ post }) => {
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [isLiked, setIsLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(post.likes_count);

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//       <PostContent post={post} />
      
//       <PostInteractions 
//         post={post}
//         isLiked={isLiked}
//         likeCount={likeCount}
//         setIsLiked={setIsLiked}
//         setLikeCount={setLikeCount}
//         showComments={showComments}
//         setShowComments={setShowComments}
//       />

//       {showComments && (
//         <CommentsSection 
//           postId={post.id}
//           comments={comments}
//           setComments={setComments}
//         />
//       )}
//     </div>
//   );
// };

// export default BlogPost;