import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {fetchArticles, getArticlesByTopic} from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import Filter from "../Filter/Filter";
import './ArticlesList.css'


const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const topicName = searchParams.get('topic')
    
    useEffect(() => {
        setIsLoading(true)
        if (topicName) {
            getArticlesByTopic(topicName)
            .then((articles) => {
                setArticles(articles);
                setIsLoading(false);
            })
        }
        else {
            fetchArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
            })
        }
    }, [topicName])

    if (isLoading) return <p>Loading...</p>
    return (
        <>
        <Filter topic={topicName}/>
        <section>
            {articles.map((article) => {
                return (
                    <div key={article.article_id} className="display-box">
                        <ArticleCard article={article}/>
                    </div>
                )
            })}
        </section>
        </>
    )
}

export default ArticlesList;

