import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Players(){
    const [ players, setPlayers] = useState({});

    useEffect(()=>{
        fetch('/data/players.json')
        .then(response => response.json())
        .then(data => setPlayers(data))
        .catch(error => console.error('Error loading JSON:', error));
    },[]);
    return (
        <div className="player-div">
            <h1>Current Players</h1>
            <div className="players-display">
                {Object.keys(players).length > 0 ? (
                    Object.entries(players).map(([team, teamPlayers]) => (
                        <div key={team}>
                            <h2>{team}</h2>
                            <ul>
                                {teamPlayers.map((player, index) => (
                                    <li key={index}>
                                        <Link to="">{player}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>Loading players...</p>
                )}
            </div>
        </div>
    );
}

export default Players;