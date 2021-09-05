import React from 'react';
import game from "../static/game.png";

class Games extends React.Component {
  
  render() {
    
    return (
      <div className="games">
        <img src={game} />
      </div>
    );
  }
}

export default Games;
