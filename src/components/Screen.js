import React from 'react';
import '../css/Screen.css';
import Menu from '../components/Menu';

class Screen extends React.Component {

  render(){
    const { active , currentMenu } = this.props;
    return(
      
      <div className="display">
                {currentMenu===0&&<Menu active={active}/>}
                {currentMenu===1&&<div className="blank-div"><h1> Home </h1> </div>}
                {currentMenu===2&&<div className="blank-div"><h1>Songs</h1> </div>}
                {currentMenu===3&&<div className="blank-div"><h1>Games</h1></div>}
                {currentMenu===4&&<div className="blank-div"><h1>Settings</h1></div>}
      </div>
    );
  }

}

export default Screen;