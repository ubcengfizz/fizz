import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './SideDrawer.css';


const sideDrawer = props => {

let drawerClasses = 'side-drawer';

if (props.show) {
  drawerClasses = 'side-drawer open';
}

  return (
    <nav className={drawerClasses}>
    <ul>
      <li>
        <NavLink to="/faq" className="dropdown-item" activeClassName="dropdown-item">
        FAQ
        </NavLink>
      </li>

      <li>
        <NavLink to="/FizzExecs" className="dropdown-item" activeClassName="dropdown-item">
        Fizz Execs
        </NavLink>
      </li>

    </ul>
  </nav>
);
};

export default sideDrawer;
