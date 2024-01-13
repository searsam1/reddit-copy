export function PostPreview({ title, selftext, likes, imgSrc }) {
    return (
        <div className='p-3 my-3 container rounded-3 post-box'>
            <h2>{title}</h2>
            {selftext &&
                <p className="selftext">
                    {selftext}
                </p>
            }
            <br />
            <button className='mx-2 btn btn-secondary'>
                👍🏻 {likes}
            </button>
            <button className='mx-2 btn btn-secondary'>
                👎
            </button>
            {imgSrc &&
                <div className="image-container">
                    <img src={imgSrc} alt="Post content" />
                </div>
            }
        </div>
    );
}
