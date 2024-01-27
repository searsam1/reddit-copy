// hooks/useFetchComments.js
import { useState, useEffect } from 'react';

const useFetchComments = (postId) => {
  const [postDetails, setPostDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch post details
        const postResponse = await fetch(`https://www.reddit.com/by_id/t3_${postId}.json`);
        const postData = await postResponse.json();
        setPostDetails(postData.data.children[0].data);

        // Fetch comments
        const commentsResponse = await fetch(`https://www.reddit.com/comments/${postId}.json`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData[1].data.children.map(child => child.data));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (postId) {
      fetchData();
    }
  }, [postId]);

  return { postDetails, comments, isLoading, error };
};

export default useFetchComments;
