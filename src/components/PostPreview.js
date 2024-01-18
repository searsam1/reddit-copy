import { Link } from 'react-router-dom';


function formatLikes(likes) {
    likes = +likes; // Convert to a number if not already
    if (likes < 1000) {
        return likes.toString();
    } else if (likes < 1000000) {
        let thousands = Math.floor(likes / 1000);
        return thousands + "K";
    } else {
        let millions = Math.floor(likes / 1000000);
        return millions + "M";
    }
}


export function PostPreview({
    title, selftext, likes, imgSrc,
    author, subreddit, num_comments, 
    postId

}) {
    return (
        <div className='p-3 my-3 container rounded-3 post-box'>
            <p className="subreddit">r/{subreddit}</p>
            <p className="author">{author}</p>
            <h2 className=" post-title">{title}</h2>
            {selftext &&
                <p className="selftext">
                    {selftext}
                </p>
            }
            <br />
            {imgSrc &&
                <div className="image-container">
                    <img src={imgSrc} alt="Post content" />
                </div>
            }
            <button className='mx-2 btn btn-outline-success'>
                <span class="material-symbols-outlined">
                    arrow_upward
                </span> {formatLikes(likes)}
            </button>
            <button className='mx-2 btn btn-outline-danger'>
                <span class="material-symbols-outlined">
                    south
                </span>
            </button>
            <Link className='btn btn-outline-dark' to={`/comments/${postId}`}>
                <span className="material-symbols-outlined">
                    chat
                </span>
                {num_comments}
            </Link>
        </div>
    );
}
