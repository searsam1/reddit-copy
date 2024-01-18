import React, { useEffect, useState } from 'react';
import { PostPreview } from './PostPreview';
function RedditPopular() {
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
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (post) => {
    // Check if the post has a preview and an image
    if (post.data.preview && post.data.preview.images && post.data.preview.images.length > 0) {
      return post.data.preview.images[0].source.url.replace(/&amp;/g, '&'); // Correctly format the URL
    }
    return null; // Return null if no image is found
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Popular Posts on Reddit</h1>
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
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RedditPopular;
