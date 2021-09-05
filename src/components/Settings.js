import React from 'react';
import settings from "../static/settings.jpeg"
import '../css/Settings.css';

class Settings extends React.Component {

  render() {
    
    return (
      <div className="settings">
        <img src={settings} alt="Settings" />
      </div>
    );
  }
}

export default Settings;
