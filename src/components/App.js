import React from 'react';
import Case from './Case'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      active: 1,
      currentMenu:0
    }
  }

    // function to move over menu using wheel
  updateActiveMenu = (direction) => {
    if (direction === 1) {
      if (this.state.active === 4) {
        this.setState({ active: 1 })
      } else {
        this.setState({ active: this.state.active + 1 })
      }
    } else {
      if (this.state.active === 1) {
        this.setState({ active: 4 })
      } else {
        this.setState({ active: this.state.active - 1 })
      }
    }
  }
  // adding function to menu button
  changeMenu=(id)=>{
    this.setState({currentMenu:id});
  }
  
  // render components 
  render() {
    const { active, currentMenu } = this.state;
    return (
      <div className="App">
        <Case active={active} currentMenu={currentMenu} changeMenu={this.changeMenu} updateActiveMenu={this.updateActiveMenu} />
      </div>
    );
  }
}

export default App;
