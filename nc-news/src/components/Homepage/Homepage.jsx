import ArticlesList from "../ArticlesList/ArticlesList";

const Homepage = ({user}) => {
    return (
        <>
            <h2>Welcome {user.name}!</h2>
            <ArticlesList />
        </>
    )
}

export default Homepage;