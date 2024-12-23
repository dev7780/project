import React from 'react';
import PostCard from './PostCard';
import Spinner from '../common/Spinner';

const PostsGrid = ({ posts, isLoading, error, lastPostRef }) => {
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {posts.map((post, index) => (
        <div
          key={post.id}
          ref={index === posts.length - 1 ? lastPostRef : undefined}
          className="w-full"
        >
          <PostCard post={post} />
        </div>
      ))}
      {isLoading && (
        <div className="col-span-full flex justify-center py-8">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default PostsGrid;