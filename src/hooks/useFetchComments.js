// hooks/useFetchComments.js
import { useState, useEffect } from 'react';

const useFetchComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setComments(data[1].data.children.map(child => child.data));
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (postId) {
      fetchComments();
    }
  }, [postId]);

  return { comments, isLoading, error };
};

export default useFetchComments;
