import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Teams(){
const [teams ,setTeams] = useState([]);

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
                {teams.length > 0 ?((
                    teams.map((team,index)=>
                        <li key={index}><Link to = "">{team}</Link></li>
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