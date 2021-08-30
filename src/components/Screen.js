import React from 'react';
import '../css/Screen.css';

class Screen extends React.Component {

  render(){
    const {active} = this.props;
    return(

      <div className="display">
                <div className="menu">
                    <ul>
                        {active===1?<li className="active">Home</li>:<li>Home</li>}
                        {active===2?<li className="active">Songs</li>:<li>Songs</li>}
                        {active===3?<li className="active">Games</li>:<li>Games</li>}
                        {active===4?<li className="active">Settings</li>:<li>Settings</li>}
                    </ul>
                </div>

            </div>
    );
  }

}

export default Screen;