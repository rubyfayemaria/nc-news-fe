const ArticleCard = ({article}) => {
    return (
        <>
            <h4>{article.title}</h4>
            <p>By {article.author}</p>
            <img src={article.article_img_url} alt="article image" className="article-img"/>
            <p>Votes: {article.votes}</p>
            <p>{article.comment_count} comments have been left on this post</p>
        </>
    )
}

export default ArticleCard;