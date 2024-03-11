import axios from 'axios';

const fetchArticles = () => {
    return axios 
    .get('https://nc-news-mavp.onrender.com/api/articles')
    .then((response) => {
        return response.data
    })
}

export default fetchArticles;