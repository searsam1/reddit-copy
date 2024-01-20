// hooks/useFetchRedditPosts.js
import { useState, useEffect } from 'react';

const useFetchRedditPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.reddit.com/r/popular.json');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.data.children);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, isLoading, error };
};

export default useFetchRedditPosts;
