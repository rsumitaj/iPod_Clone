import React from 'react';
import Screen from './Screen'
import Wheel from './Wheel';
import '../css/Case.css';

class Case extends  React.Component {
  render(){
    const {active,updateActiveMenu, currentMenu, changeMenu} = this.props;
    return(
      <div className="case-container">
        <div className="case">
                    <Screen active={active} currentMenu={currentMenu} />
                    <Wheel active={active} currentMenu={currentMenu} changeMenu={changeMenu} updateActiveMenu={updateActiveMenu}/>
      </div>
      </div>
    );
  }
}

export default Case;