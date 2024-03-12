const TopicCard = ({topic}) => {
    return (
        <>
        <h4>{topic.slug}</h4>
        <p>{topic.description}</p>
        </>
    )
}

export default TopicCard