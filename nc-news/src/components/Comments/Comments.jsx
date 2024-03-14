import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCommentsByArticle } from "../../api";
import PostComments from "../PostComments/PostComments";
import UserContext from '../Contexts/UserContext'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Comments.css'
import DeleteComment from "../DeleteComment/DeleteComment";

const Comments = () => {
    const { article_id } = useParams();
    const { user } = useContext(UserContext);
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

    const updateComments = () => {
        fetchCommentsByArticle(article_id).then((updatedComments) => {
            setComments(updatedComments)
        })
    }

    if (comments.length === 0) {
        return (
            <p>No comments have been left on this article yet.</p>
        )
    }
    if (isLoading) return <p>Loading...</p>
    return (
        <>
        <section>
        <PostComments article_id={article_id} updateComments={updateComments}/>
        {comments.map((comment) => {
            return (
                <div key={comment.comment_id} className='comments-box'>
                <p><b>{comment.author}:</b> {comment.body}</p>
                {comment.author === user.username && (
                    <DeleteComment comment_id={comment.comment_id} updateComments={updateComments}/>
                )}
                </div>
            )
        })}
        </section>
        <button onClick={goBack}>Back To Articles</button>
        </>
    )
}

export default Comments;