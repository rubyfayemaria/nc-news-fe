import { useEffect, useState } from "react";
import fetchArticles from "../../api";
import './ArticlesList.css'

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles().then((articles) => {
            setArticles(articles)
        });
    }, [])

    return (
        <section>
            {articles.map((article) => {
                return (
                    <div key={article.article_id}>
                        <h4>{article.title}</h4>
                        <p>By {article.author}</p>
                        <img src={article.article_img_url} alt="article image" className="article-img"/>
                        <p>Votes: {article.votes}</p>
                        <p>{article.comment_count} comments have been left on this post</p>
                    </div>
                )
            })}
        </section>
    )
}

export default ArticlesList;