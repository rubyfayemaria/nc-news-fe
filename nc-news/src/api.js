import axios from 'axios';

export const fetchArticles = () => {
    return axios 
    .get('https://nc-news-mavp.onrender.com/api/articles')
    .then((response) => {
        return response.data
    })
}

export const fetchTopics = () => {
    return axios
    .get('https://nc-news-mavp.onrender.com/api/topics')
    .then((response) => {
        return response.data
    })
}

export const fetchArticleById = (article_id) => {
    return axios
    .get(`https://nc-news-mavp.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    })
}
