import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticle } from "../../api";
import './Comments.css'

const Comments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchCommentsByArticle(article_id).then((comments) => {
            setComments(comments)
        })
    }, [article_id])

    return (
        <>
        {comments.map((comment) => {
            return (
                <div key={comment.comment_id} className='comments-box'>
                <p><b>{comment.author}:</b> {comment.body}</p>
                </div>
            )
        })}
        </>
    )
}

export default Comments;