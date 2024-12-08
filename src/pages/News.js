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
                        <h2>{headline.title}</h2>
                        <p>{headline.content}</p>-{headline.date}
                    </div>
                ))
            ):(
                <p>No sections available</p>
            )}
        </div>
    )
}
export default News;