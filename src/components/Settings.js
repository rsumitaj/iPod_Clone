import React from 'react';
import settings from "../static/settings.jpeg"
import '../css/Settings.css';

class Settings extends React.Component {

  render() {
    
    return (
      <div className="settings">
        <img src={settings} />
      </div>
    );
  }
}

export default Settings;
