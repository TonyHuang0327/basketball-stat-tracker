import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const [content, setContent] = useState({})

    useEffect(()=>{
        fetch('/data/nba_website_content.json')
        .then(response => response.json())
        .then(data => setContent(data))
        .catch(error => console.error('Error loading JSON:', error));
    },[]);
    return(
        <div className='Home'>
            <h1>Your ultimate source for everything NBA!</h1>
            <div className="Today's Game-display" >
                {Object.}
            </div>
        </div>
    )
}
export default Home;