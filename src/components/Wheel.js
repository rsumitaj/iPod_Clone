import React from 'react';
import '../css/Wheel.css';
import ZingTouch from 'zingtouch';

class Wheel extends React.Component {
  constructor () {
    super();
    this.angel = 0;
  }

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

  actionTaken = (e) => {
        console.log(this.angle);
        if(e.detail.distanceFromOrigin===0){
            this.angle = e.detail.angle;
        }
  }

  componentDidMount(){
    var actionTaken = this.actionTaken;
    const wheel = document.getElementById('wheel');
    const activeRegion = new ZingTouch.Region(wheel);

    activeRegion.bind(wheel,'rotate',function(e){
      actionTaken(e);
    });
  }

}

export default Wheel ;

