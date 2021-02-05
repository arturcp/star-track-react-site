import React from 'react';
import logo from '../../images/rocket.png';

import './styles.scss'

const header = () => {
  return (
    <header id="top-header">
      <img className="logo" src={logo} alt="Launching rocket to space"/>
      <div className="description">
        <h2>Star Track</h2><br />
        <label>Use your knowledge to help Dr. Ken</label>
      </div>
    </header>
  )
}

export default header;
