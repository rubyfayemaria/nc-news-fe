import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCommentsByArticle } from "../../api";
import './Comments.css'

const Comments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetchCommentsByArticle(article_id).then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [article_id])

    const goBack = () => {
        navigate(-1)
    }

    if (isLoading) return <p>Loading...</p>
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