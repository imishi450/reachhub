import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopPlayersList = ({ onPlayerClick }) => {
  const [topPlayers, setTopPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopPlayers = async () => {
      try {
        const response = await axios.get('https://lichess.org/api/player/top/10/bullet');
        setTopPlayers(response.data.users);
      } catch (error) {
        setError('Error fetching top players. Please try again later.');
      }
    };

    fetchTopPlayers();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Top 10 Players</h2>
      <ul>
        {topPlayers.map((player) => (
          <li key={player.id} onClick={() => onPlayerClick(player)}>
            {player.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPlayersList;
