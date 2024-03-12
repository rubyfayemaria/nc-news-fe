import { updateArticleVotes } from "../../api"

const AddVotes = ({article_id}) => {
    
    const handleClick = (vote) => {
        updateArticleVotes(article_id, {inc_votes: vote})
    }

    return (
        <>
        <button onClick={handleClick(1)}>👍</button>
        <button onClick={handleClick(-1)}>👎</button>
        </>
    )
}

export default AddVotes