const ArticleCard = ({article}) => {
    const date = new Date(article.created_at)
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${day}/${month}/${year} ${hour}:${minutes}`;
    
    return (
        <>
            <h4>{article.title}</h4>
            <p>By {article.author}</p>
            <img src={article.article_img_url} alt="article image" className="article-img"/>
            <p>Votes: {article.votes}</p>
            <p>{article.comment_count} comments have been left on this post</p>
            <p>posted: {formattedDate}</p>
        </>
    )
}

export default ArticleCard;