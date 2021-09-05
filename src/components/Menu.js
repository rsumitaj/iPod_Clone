import React from 'react';
import "../css/Menu.css";
import game from "../static/game.png";
import songs from "../static/songs.jpeg";
import settings from "../static/settings.jpeg";
import home from "../static/home.jpeg";

class Menu extends React.Component {
    render() {
        const { active } = this.props;
        return (

            <div className="menu-container">
                <div className="menu">
                    <ul>
                        {active === 1 ? <li className="active">&nbsp;Home</li> : <li>&nbsp;Home</li>}
                        {active === 2 ? <li className="active">&nbsp;Songs</li> : <li>&nbsp;Songs</li>}
                        {active === 3 ? <li className="active">&nbsp;Games</li> : <li>&nbsp;Games</li>}
                        {active === 4 ? <li className="active">&nbsp;Settings</li> : <li>&nbsp;Settings</li>}
                    </ul>
                </div>
                <div className="rightScreen">
                    {active === 1 && <img className="rightScreen-img" src={home} alt="Home"></img>}
                    {active === 2 && <img className="rightScreen-img" src={songs} alt="Songs"></img>}
                    {active === 3 && <img className="rightScreen-img" src={game} alt="Games"></img>}
                    {active === 4 && <img className="rightScreen-img" src={settings} alt="Settings"></img>}
                </div>
            </div>
        )
    }
}


export default Menu; 
