import React from 'react';
import './DrawerToggleButton.css';


const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <hr className="line"/>
    <hr className="line"/>
    <hr className="line" />
    <hr className="line" />

  </button>
);

export default DrawerToggleButton;
