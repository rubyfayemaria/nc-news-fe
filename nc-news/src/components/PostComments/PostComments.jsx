import { useParams } from "react-router-dom";
import { postCommentOnArticle } from "../../api";

const PostComments = ({updateComments}) => {
    const {article_id} = useParams();
    
    const handleSubmit = ({username, body}) => {
        postCommentOnArticle(article_id, {username, body})
        .then(() => {
            updateComments()
        })
    }

    return (
        <>
        <form method="post" onSubmit={() => {handleSubmit}}>
            <label>
                Add a comment: <input type="text"/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default PostComments;