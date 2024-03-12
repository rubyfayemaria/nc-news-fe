import { useEffect, useState } from "react";
import {fetchArticles} from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import './ArticlesList.css'


const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
        setIsLoading(true)
        fetchArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        });
    }, [])

    if (isLoading) return <p>Loading...</p>
    return (
        <section>
            {articles.map((article) => {
                return (
                    <div key={article.article_id} className="display-box">
                        <ArticleCard article={article}/>
                    </div>
                )
            })}
        </section>
    )
}

export default ArticlesList;

