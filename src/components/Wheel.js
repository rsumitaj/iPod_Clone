import React from 'react';
import '../css/Wheel.css';
import ZingTouch from 'zingtouch';

class Wheel extends React.Component {
  constructor () {
    super();
    this.angel = 0;
  }

  render(){
    const {changeMenu,active} = this.props;
    return(
      <div className="wheel-container" id="wheel-container">
        <div className="wheel" id="wheel">
          <div className="control" id="menu">
            <div onClick={()=>{changeMenu(0)}}>MENU</div>
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

          <div className="centerButton" id="centerButton" onClick={()=>{changeMenu(active)}}></div>
        </div>
      </div>
    )
  }

  wheelAction = (e) =>{ 
    const {updateActiveMenu, currentMenu} = this.props;
    if(currentMenu!==0){
        return;
    }
    if(e.detail.distanceFromOrigin===0){
        this.angle = e.detail.angle;
    }
    if (Math.abs(this.angle - e.detail.angle) > 300) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
          return;
      }
      else if (e.detail.distanceFromLast < 0) {
          updateActiveMenu(1, currentMenu);
      } else {
          updateActiveMenu(0, currentMenu);
      }

  } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
          return;
      }
      else if (e.detail.distanceFromLast > 0) {
          updateActiveMenu(1, currentMenu);
      } else {
          updateActiveMenu(0, currentMenu);
      }

  }
  }

  componentDidMount(){
    const{changeMenu}=this.props;
    const wheelAction = this.wheelAction;
    const wheel = document.getElementById('wheel');
    const activeRegion = new ZingTouch.Region(wheel);
    const menuButton = document.getElementById("menu");

    activeRegion.bind(menuButton, 'tap', function (e) {
        changeMenu(0);
    });

    activeRegion.bind(wheel,'rotate',function(e){
      wheelAction(e);
    });
  }

}

export default Wheel ;

