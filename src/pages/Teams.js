import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Teams(){
const [teams ,setTeams] = useState({});

    useEffect(()=>{
        fetch('/data/teams.json')
        .then(response => response.json())
        .then(data => setTeams(data))
        .catch(error => console.error('Error loading JSON:', error));
    },[]);
    return(
        <div className='teams-div'>
            <h1>Teams</h1>
            <div className='teams-display'>
            <ul>
                {Object.keys(teams).length>0?((
                    Object.keys(teams).map((teamName, index)=>
                        <li key={index}>
                        <img 
                                src={teams[teamName].logo} 
                                alt={`${teamName} logo`} 
                            />
                            <Link to = "">{teamName}</Link>
                        </li>
                    ))
                ):(
                    <p>Loading teams...</p>
                )}
            </ul>
            </div>
        </div>
    )
}

export default Teams;