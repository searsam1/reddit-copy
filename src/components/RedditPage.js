import React from 'react';
import { PostPreview } from './PostPreview';
import useFetchRedditPosts from '../hooks/useFetchRedditPosts';

function RedditPage({subreddit, header}) {
  const { posts, isLoading, error } = useFetchRedditPosts(subreddit);

  const getImageUrl = (post) => {
    // Check if the post has a preview and an image
    if (post.data.preview && post.data.preview.images && post.data.preview.images.length > 0) {
      return post.data.preview.images[0].source.url.replace(/&amp;/g, '&'); // Correctly format the URL
    }
    return null; // Return null if no image is found
  };

  if (isLoading) return <div className='loading'>Loading
    <span class="material-symbols-outlined">
      hourglass_top
    </span>
  </div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className='text-center text-light display-4'>r/{header}</h2>
      <ul className='posts-ul'>
        {posts.map((post, index) => (
          <li key={index}>
            <PostPreview
              title={post.data.title}
              selftext={post.data.selftext || null}
              likes={post.data.ups}
              imgSrc={getImageUrl(post)}
              author={post.data.author}
              subreddit={post.data.subreddit}
              num_comments={post.data.num_comments}
              postId={post.data.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RedditPage;
