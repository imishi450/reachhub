import React, { useState } from 'react';
import TopPlayersList from './TopPlayersList';
import PlayerDetails from './PlayerDetails';

const App = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div>
      <TopPlayersList onPlayerClick={handlePlayerClick} />
      <PlayerDetails selectedPlayer={selectedPlayer} />
    </div>
  );
};

export default App;
