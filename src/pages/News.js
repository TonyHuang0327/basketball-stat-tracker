import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function News (){
    const [news, setNews] = useState({});

    useEffect(()=>{
        fetch('/data/nba_website_content.json')
        .then(response => response.json())
        .then((data)=>{
            setNews(data.news)
        })
        .catch(error => console.error('Error loading JSON:', error));
    },[]);
    if(!news){
        return <p>Loading...</p>;
    }
    return(
        <div className='News'>
            <h1>Headline News !</h1>
            {news.headline_news ? (
                news.headline_news.map((headline,index) => (
                    <div key = {index} className='newsbox'>
                        <Link to="">{headline.title}</Link>
                        <p>{headline.content}</p>-{headline.date}
                    </div>
                ))
            ):(
                <p>No sections available</p>
            )}
            <h1>rumors_and_discussions !</h1>
            {news.rumors_and_discussions ? (
                news.rumors_and_discussions.map((rumor,index) => (
                    <div key = {index} className='newsbox'>
                        <Link to="">{rumor.title}</Link>
                        <p>{rumor.content}</p>
                    </div>
                ))
            ):(
                <p>No sections available</p>
            )}
            <h1>featured_columns</h1>
            {news.featured_columns ? (
                news.featured_columns.map((column,index) => (
                    <div key = {index} className='newsbox'>
                        <Link to="">{column.title}</Link>
                        <p>{column.content}</p>
                    </div>
                ))
            ):(
                <p>No sections available</p>
            )}
        </div>
    )
}
export default News;