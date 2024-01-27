import { Comment } from "../components/Comment";
export function renderComment(comment) {
    let replies = null;

    // If there are replies, render them recursively
    if (comment.replies) {
        replies = comment.replies.data.children
            .map(child => child.data)
            .map(reply => renderComment(reply));
    }

    return <Comment comment={comment} replies={replies} />;
}
