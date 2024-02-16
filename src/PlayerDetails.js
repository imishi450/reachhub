import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerDetails = ({ selectedPlayer }) => {
  const [playerDetails, setPlayerDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      if (!selectedPlayer) return;

      try {
        const response = await axios.get(`https://lichess.org/api/user/${selectedPlayer.username}`);
        setPlayerDetails(response.data);
      } catch (error) {
        setError('Error fetching player details. Please try again later.');
      }
    };

    fetchPlayerDetails();
  }, [selectedPlayer]);

  if (!selectedPlayer) {
    return <div>Select a player to see details</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Player Details</h2>
      <p>Username: {selectedPlayer.username}</p>
      {playerDetails && (
        <div>
          <p>Profile: {playerDetails.profile.bio}</p>
          <p>Count: {playerDetails.count.all}</p>
          <p>Rating: {playerDetails.perfs.bullet.rating}</p>
          {/* Include other details as needed */}
        </div>
      )}
    </div>
  );
};

export default PlayerDetails;
