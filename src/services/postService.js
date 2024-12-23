const POSTS_PER_PAGE = 10;

export const fetchPosts = async (page) => {
  try {
    const start = page * POSTS_PER_PAGE;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${POSTS_PER_PAGE}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();
    const hasMore = posts.length === POSTS_PER_PAGE;

    return { posts, hasMore };
  } catch (error) {
    throw error;
  }
};