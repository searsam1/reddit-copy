import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CommentsPage() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Set the document title using the postId
    document.title = `Post: ${postId}`;

    // Fetch comments based on postId
    // ... Fetching logic ...
  }, [postId]); // Dependency array ensures this effect runs when postId changes

  return (
    <div>
      {/* Your component content */}
    </div>
  );
}

export default CommentsPage;
