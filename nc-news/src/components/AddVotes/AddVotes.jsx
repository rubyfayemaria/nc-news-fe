import { updateArticleVotes } from "../../api"

const AddVotes = ({article_id, updateArticle}) => {
    
    const handleClick = (vote) => {
        updateArticleVotes(article_id, {inc_votes: vote})
        .then(() => {
            updateArticle();
        })
    }

    return (
        <>
        <button onClick={() => handleClick(1)}>👍</button>
        <button onClick={() => handleClick(-1)}>👎</button>
        </>
    )
}

export default AddVotes