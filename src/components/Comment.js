export function Comment({ comment, replies = null }) {
    // Check if the comment is empty or deleted
    const isCommentEmpty = !comment.body && !comment.author && !(comment.ups > 0);

    if (isCommentEmpty) {
        return null; // Don't render the component if the comment is empty
    }

    return (
        <li key={comment.id}>
            <p className="comment-body">
                {comment.body}
                {comment.ups && (
                    <div className="underneath">
                        <span className="comment-author"> {comment.author} </span>
                        <span className="comment-ups text-success">
                            <span className="material-symbols-outlined">arrow_upward</span>
                            {comment.ups}
                        </span>
                    </div>
                )}
            </p>
            {replies && <ul className="replies">{replies}</ul>}
        </li>
    );
}
