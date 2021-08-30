import React from 'react';
import Case from './Case'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      active: 1
    }
  }

  render() {
    const {active} = this.state;
    return (
      <div className="App">
        <Case active={active} />
      </div>
    );
  }
}

export default App;
