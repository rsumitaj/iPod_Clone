import React from 'react';
import '../css/Songs.css';
import playing from '../static/playing.jpeg';
import artist from '../static/artist.jpeg';
import songs from '../static/songs.jpeg';

class Songs extends React.Component {

  render() {
    const { active } = this.props;
    return (
      <div className="songs">
                <div className="songs-menu">
                    <ul>
                        {active === 1 ? <li className="active">&nbsp;Playing</li> : <li>&nbsp;Playing</li>}
                        {active === 2 ? <li className="active">&nbsp;Artists</li> : <li>&nbsp;Artists</li>}
                        {active === 3 ? <li className="active">&nbsp;Library</li> : <li>&nbsp;Library</li>}
                    </ul>
                </div>
                <div className="rightScreen">
                    {active === 1 && <img className="rightScreen-img" src={playing} alt="Playing"></img>}
                    {active === 2 && <img className="rightScreen-img" src={artist} alt="Artists"></img>}
                    {active === 3 && <img className="rightScreen-img" src={songs} alt="Library"></img>}
                </div>
      </div>
    );
  }
}

export default Songs;
