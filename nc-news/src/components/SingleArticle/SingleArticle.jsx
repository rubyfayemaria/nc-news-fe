import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../../api';
import { Link } from "react-router-dom";


const SingleArticle = () => {
    const { article_id } = useParams();
    const [currArticle, setCurrArticle] = useState({})

    useEffect(() => {
        fetchArticleById(article_id).then((article) => {
            setCurrArticle(article)
        })
    }, [article_id])

    return (
        <>
        <h2>{currArticle.title}</h2>
        <h3>by {currArticle.author}</h3>
        <p>votes: {currArticle.votes}</p>
        <img src={currArticle.article_img_url} alt="article image" className='article-img'/>
        <p>{currArticle.body}</p>
        <section>
            <Link to={`/articles/${article_id}/comments`}><p>Comments</p></Link>
        </section>
        </>
    )
}

export default SingleArticle;