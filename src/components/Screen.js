import React from 'react';
import '../css/Screen.css';
import Menu from '../components/Menu';
import Home from '../components/Home';
import Songs from '../components/Songs';
import Games from '../components/Games';
import Settings from '../components/Settings';

class Screen extends React.Component {

  render(){
    const { active , currentMenu } = this.props;
    return(
      
      <div className="display">
                {currentMenu===0&&<Menu active={active}/>}
                {currentMenu===1&&<Home />}
                {currentMenu===2&&<Songs />}
                {currentMenu===3&&<Games />}
                {currentMenu===4&&<Settings />}
                
      </div>
    );
  }

}

export default Screen;