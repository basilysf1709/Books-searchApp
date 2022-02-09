import React, { useState, useEffect } from 'react';
import axios from 'axios';


const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/books.json?api-key=${
                process.env.REACT_APP_BOOKS_API_KEY
            }`);
            setNews(res.data.results);
        }
        fetchNews();
    }, []);

    return (
        <>
           <div className="news-container">
                {news.slice(0, 10).map((articles, index) => {
                    const { title, abstract, byline, published_date, short_url } = articles;
                    const { url } = articles.multimedia[0];
                    return (
                        <>
                            <div className="news-img-container">
                                <img src={url} alt="image"/>
                            </div>
                            <div key={index}>
                                <h3>Title: {title}</h3>
                                <h4>Abstract: {abstract}</h4>
                                <h4>Byline: {byline}</h4>
                                <h4>Published Date: {published_date}</h4>
                                <a href={short_url}>Click Me</a>
                            </div>
                        </>
                    )
                })}
            </div> 
        </>
    )
}

export default News
