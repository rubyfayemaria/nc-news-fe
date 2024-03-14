import { useContext, useState } from "react";
import { postCommentOnArticle } from "../../api";
import UserContext from "../Contexts/UserContext";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const PostComments = ({article_id, updateComments}) => {
    const { user } = useContext(UserContext);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            username: user.username,
            body: input
        }
        postCommentOnArticle(article_id, newComment)
        .then(() => {
            updateComments();
            setInput('');
            setError('');
        })
        .catch(() => {
            setError('Failed to post comment. Please try again.')
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
                value={input}
                onChange={handleInputChange}
            />
            <Button 
                type="submit"
                variant="outlined"
                size="small"
                disabled={!input}>
                Submit
            </Button>
        </form>
        <p>{error}</p>
        </>
    )
}

export default PostComments;