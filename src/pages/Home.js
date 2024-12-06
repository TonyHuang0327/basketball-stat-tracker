import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const [content, setContent] = useState({})

    useEffect(()=>{
        fetch('/data/nba_website_content.json')
        .then(response => response.json())
        .then((data) => {
            console.log(data); // 確認資料內容
            setContent(data.home);
        })
        .catch(error => console.error('Error loading JSON:', error));
    },[]);
    if (!content) {
        return <p>Loading...</p>; // 在資料尚未加載時顯示
    }
    return(
        <div className='Home'>
            <h1>{content.tagline}</h1>
            <div className="featured-sections">
            {content.featured_sections ? (
                content.featured_sections.map((section, index) => (
                    <div key={index} className="section">
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                        {section.example_games &&
                            section.example_games.map((game, gameIndex) => (
                                <div className = "gamesbox" key ={gameIndex}>
                                    <p>
                                        <span className="team">{game.matchup.split(' vs. ')[0]}</span>
                                        <span className="vs">vs.</span>
                                        <span className="team">{game.matchup.split(' vs. ')[1]}</span>
                                        {game.time}
                                    </p>
                                </div>
                            ))}
                        {section.highlights &&
                            section.highlights.map((highlight, highlightIndex) => (
                                <div className='gamesbox' key={highlightIndex}>
                                    <p>
                                        <span className='category'>{highlight.category}</span>
                                        <span className='player'>{highlight.player}</span>
                                        <span className='stat'>{highlight.stat}</span>
                                    </p>
                                </div>
                            ))}
                        {section.examples &&
                            <ul>
                                {section.examples.map((example,exampleIndex) => (
                                    <li className="history_examples" key={exampleIndex}>
                                        <Link to="/article" className="history_examples">{example}</Link>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                ))
            ) : (
                <p>No sections available</p>
            )}
        </div>
        </div>
    )
}
export default Home;