import '../styles/App.css';
import { useState, useEffect } from 'react';

function Today() {
  const [groupedGameDatas, setGroupedGameDatas] = useState({});

  useEffect(() => {
    fetch('/data/gamedata.json')
      .then(response => response.json())
      .then(data => {
        const grouped = data.reduce((acc, game) => {
          const date = game.date;
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(game);
          return acc;   
        }, {});
        setGroupedGameDatas(grouped);
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="TodayGame">
      <h1>Today's Game</h1>
      <div className="game-display">
      {Object.keys(groupedGameDatas).length > 0 ? (
          Object.keys(groupedGameDatas).map((date, index) => (
            <div key={index}>
              <h2>{date}</h2>
              <ul>
                {groupedGameDatas[date].map((game, idx) => (
                  <li key={idx}>
                    {game.visitor_team} ({game.visitor_score}) vs. {game.home_team} ({game.home_score})
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Loading gamedata...</p>
        )};
      </div>
    </div>
  );
}

export default Today;
