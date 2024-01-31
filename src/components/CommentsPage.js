import React from 'react';
import { useParams } from 'react-router-dom';
import { renderComment } from '../helpers/commentHelper';
import useFetchComments from '../hooks/useFetchComments';
import { PostPreview } from './PostPreview';

function CommentsPage() {
  const { postId } = useParams();
  const { postDetails, comments, isLoading, error } = useFetchComments(postId);

  if (isLoading) return <div className='loading'>Loading comments<span class="material-symbols-outlined">
    hourglass_top
  </span>
  </div>;
  if (error) return <div>Error loading comments: {error}</div>;


  const getImageUrl = (post) => {
    // Check if the post has a preview and an image
    if (post.preview && post.preview.images && post.preview.images.length > 0) {
      return post.preview.images[0].source.url.replace(/&amp;/g, '&'); // Correctly format the URL
    }
    return null; // Return null if no image is found
  };

  return (
    <div>
      {/* <h1 className='text-center'>{postDetails?.title}</h1> */}
      <PostPreview
        title={postDetails?.title}
        selftext={postDetails?.selftext || null}
        likes={postDetails?.ups}
        imgSrc={postDetails ? getImageUrl(postDetails) : null}
        author={postDetails?.author}
        subreddit={postDetails?.subreddit}
        num_comments={postDetails?.num_comments}
        postId={postDetails?.id}
      />
      <div className='comment-container'>
        <ul>
          {comments.map((comment) => (
            renderComment(comment)
          ))}
        </ul>
      </div>
    </div>
  );

}

export default CommentsPage;
