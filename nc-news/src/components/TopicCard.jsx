import { Link } from "react-router-dom"

const TopicCard = ({topic}) => {
    return (
        <>
        <Link to={`/articles?topic=${topic.slug}`}><h4>{topic.slug}</h4></Link>
        <p>{topic.description}</p>
        </>
    )
}

export default TopicCard