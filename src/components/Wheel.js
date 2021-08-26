import React from 'react';
import '../css/Wheel.css';

class Wheel extends React.Component {

  render(){
    return(
      <div className="wheel-container" id="wheel-container">
        <div className="wheel" id="wheel">
          <div className="control" id="menu">
            <div>MENU</div>
          </div>
          <div className="control" id="forward">
            <i className="fas fa-fast-forward"></i>
          </div>
          <div className="control" id="play-pause">
            <i className="fas fa-play"></i>
            <i className="fas fa-pause"></i>
          </div>
          <div className="control" id="reverse">
            <i className="fas fa-fast-backward"></i>
          </div>

          <div className="centerButton" id="centerButton"></div>
        </div>
      </div>
    )
  }
}

export default Wheel ;

