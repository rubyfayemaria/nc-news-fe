import { useContext, useState } from "react";
import { postCommentOnArticle } from "../../api";
import UserContext from "../Contexts/UserContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PostComments = ({article_id, updateComments}) => {
    const { user } = useContext(UserContext);
    const [comment, setComment] = useState('');
    
    const handleInputChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            username: user.username,
            body: comment
        }
        postCommentOnArticle(article_id, newComment)
        .then(() => {
            updateComments()
            setComment('')
        })
    }

    return (
        <>
        <form 
            method="post" 
            onSubmit={handleSubmit}
        >
            <TextField 
                id="standard-multiline-felxible"
                label="Add a comment"
                multiline
                maxRows={4}
                variant="standard"
                type="text" 
                name="commentBody"
                value={comment}
                onChange={handleInputChange}
            />
            <Button 
                type="submit"
                variant="outlined"
                size="small"
                disabled={!comment}>
                Submit
            </Button>
        </form>
        </>
    )
}

export default PostComments;