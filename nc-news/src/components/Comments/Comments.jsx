import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCommentsByArticle } from "../../api";
import './Comments.css'

const Comments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCommentsByArticle(article_id).then((comments) => {
            setComments(comments)
        })
    }, [article_id])

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
        {comments.map((comment) => {
            return (
                <div key={comment.comment_id} className='comments-box'>
                <p><b>{comment.author}:</b> {comment.body}</p>
                </div>
            )
        })}
        <button onClick={goBack}>Back To Article</button>
        </>
    )
}

export default Comments;