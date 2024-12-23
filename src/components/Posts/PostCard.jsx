import React from 'react';

const PostCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fadeIn h-full">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
      {post.title}
    </h2>
    <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
      {post.body}
    </p>
  </div>
);

export default PostCard;