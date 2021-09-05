import React from 'react';
import '../css/Home.css';

class Home extends React.Component {

  render() {
    
    return (
      <div className="home">
        <div className="title">Apps</div>
        <div className="apps-container">
          <div className="apps">
            <i class=" apple fab fa-apple fa-4x"></i>
          </div>
          <div className="apps">
            <i class=" music fas fa-music fa-4x"></i>
          </div>
          <div className="apps">
            <i class="games fas fa-gamepad fa-4x"></i>
          </div>
        </div>
        <div className="apps-container">
          <div className="apps">
          <i class="videos fas fa-video fa-4x"></i>
          </div>
          <div className="apps">
          <i class="insta fab fa-instagram fa-4x"></i>
          </div>
          <div className="apps">
          <i class="settings fas fa-cog fa-4x"></i>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Home;
