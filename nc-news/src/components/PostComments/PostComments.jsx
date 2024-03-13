import { useContext } from "react";
import { postCommentOnArticle } from "../../api";
import UserContext from "../Contexts/UserContext";

const PostComments = ({article_id, updateComments}) => {
    const { user } = useContext(UserContext);
    
    const handleSubmit = ({body}) => {
        const comment = {
            username: user.username,
            body: body
        }
        postCommentOnArticle(article_id, comment)
        .then(() => {
            updateComments()
        })
    }

    return (
        <>
        <form 
            method="post" 
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target)
                const body = formData.get('commentBody')
                handleSubmit({body})
            }}
        >
            <label>
                Add a comment: <input type="text" name="commentBody"/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default PostComments;