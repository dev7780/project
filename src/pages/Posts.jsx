import React, { useState, useCallback } from 'react';
import { fetchPosts } from '../services/postService';
import PostsGrid from '../components/Posts/PostsGrid';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const loadMorePosts = useCallback(async () => {
    try {
      const { posts: newPosts, hasMore: moreAvailable } = await fetchPosts(page);
      setPosts(prev => [...prev, ...newPosts]);
      setHasMore(moreAvailable);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch posts'));
    }
  }, [page]);

  const { lastElementRef, isLoading } = useInfiniteScroll({
    callback: loadMorePosts,
    hasMore,
  });

  // Load initial posts
  React.useEffect(() => {
    loadMorePosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Posts</h1>
      <PostsGrid
        posts={posts}
        isLoading={isLoading}
        error={error}
        lastPostRef={lastElementRef}
      />
    </div>
  );
};

export default Posts;