import React from 'react';
import { useParams } from 'react-router-dom';
import { renderComment } from '../helpers/commentHelper';
import useFetchComments from '../hooks/useFetchComments';

function CommentsPage() {
  const { postId } = useParams();
  const { comments, isLoading, error } = useFetchComments(postId);

  if (isLoading) return <div>Loading comments<span class="material-symbols-outlined">
    hourglass_top
  </span>
  </div>;
  if (error) return <div>Error loading comments: {error}</div>;

  return (
    <div>
      <h1>Comments for Post {postId}</h1>
      <ul>
        {comments.map((comment) => (
          renderComment(comment)
        ))}
      </ul>
    </div>
  );

}

export default CommentsPage;
