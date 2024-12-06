import '../styles/App.css';
import { useState, useEffect } from 'react';

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
                                <p key={gameIndex}>
                                    <strong>{game.matchup}</strong> - {game.time}
                                </p>
                            ))}
                        {section.highlights &&
                            section.highlights.map((highlight, highlightIndex) => (
                                <p key={highlightIndex}>
                                    <strong>{highlight.category}:</strong> {highlight.player} ({highlight.stat})
                                </p>
                            ))}
                        {section.example && <p>{section.example}</p>}
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