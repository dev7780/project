import { useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = ({ callback, hasMore }) => {
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    if (isLoading) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setIsLoading(true);
        await callback();
        setIsLoading(false);
      }
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, hasMore, isLoading]);

  return { lastElementRef, isLoading };
};