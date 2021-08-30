import React from 'react';
import Screen from './Screen'
import Wheel from './Wheel';
import '../css/Case.css';

class Case extends  React.Component {
  render(){
    const {active} = this.props;
    return(
      <div className="case-container">
        <div className="case">
        <Screen active={active} />
        <Wheel active={active} />
      </div>
      </div>
    );
  }
}

export default Case;