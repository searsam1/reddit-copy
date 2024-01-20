export function renderComment(comment) {
    // Base case: if there are no replies, just return the comment in a list item
    if (!comment.replies) {
        return (
            <li key={comment.id}>
                <p>{comment.body}</p>
                {comment.score && (
                    <div>
                        <span className="material-symbols-outlined">arrow_upward</span>
                        {comment.score}
                    </div>
                )}
            </li>
        );
    }

    // If there are replies, render them recursively as a nested list
    const replies = comment.replies.data.children
        .map(child => child.data)
        .map(reply => renderComment(reply));

    return (
        <li key={comment.id}>
            <p>{comment.body}</p>
            {comment.score && (
                <div>
                    <span className="material-symbols-outlined">arrow_upward</span>
                    {comment.score}
                </div>
            )}
            <ul className="replies">{replies}</ul>
        </li>
    );
}
