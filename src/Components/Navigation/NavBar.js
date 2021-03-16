import React, { Component } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/cog.png';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';

//TODO: missing routes for some pages
class NavBar extends Component {
    state = { sideDrawerOpen: false }

    drawerToggleClickHandler = () => this.setState((props) => ({ sideDrawerOpen: !props.sideDrawerOpen }));

    render() {
        return (
            <div>
                <SideDrawer show={this.state.sideDrawerOpen} />
                <div className="nav-bar-outer">
                    <nav className="nav-bar">

                        <div>
                            <DrawerToggleButton click={this.drawerToggleClickHandler} />
                        </div>

                        <NavLink to="/" className="menu-link inactive" exact activeClassName="active-logo">
                            <div id="menu-left">
                                <img alt="cog" id="cog" src={logo} />
                                <div id="title">
                                    <h2>FIZZ</h2>
                                    <h5>The UBC Engineering Physics Student Association</h5>
                                </div>
                            </div>
                        </NavLink>

                        <div className="spacer" />

                        <ul id="menu-list">
                            <li className="menu-list-item">
                                <div className="menu-link">Admin</div>
                                <ul className="dropdown">
                                    <li>
                                        <NavLink to="/executives" className="dropdown-item" activeClassName="dropdown-item">
                                            Executives
                                        </NavLink>
                                        
                                    </li>
                                    <li>
                                        <a href="https://drive.google.com/file/d/1BEgvkOgJ3Wib2Szz8St8hhT85GjHZL8t/view?usp=sharing" target="_blank" className="dropdown-item" activeClassName="dropdown-item">
                                            Constitution
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-list-item">
                                <div className="menu-link">Culture
                                
                                </div>
                                <ul className="dropdown">
                                    <li>
                                        <NavLink to="/FilmFeust" className="dropdown-item" activeClassName="dropdown-item">
                                            Filmfeust
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/Podcast" className="dropdown-item" activeClassName="dropdown-item">
                                            Stutter Hour!
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            {/* <li className="menu-list-item">
                                <div className="menu-link">Events
                                
                                </div>
                                <ul className="dropdown">
                                    <li>
                                        <NavLink to="/Alum" className="dropdown-item" activeClassName="dropdown-item">
                                            Alumni Night
                                        </NavLink>
                                    </li>
                                </ul>
                            </li> */}

                            <li className="menu-list-item">
                                <div className="menu-link">Services
                           
                                </div>
                                <ul className="dropdown">
                                    <li>
                                    <a href="https://www.redbubble.com/people/ubcfizz/shop" target="_blank" className="dropdown-item" activeClassName="dropdown-item">
                                        Merchandise
                                    </a>
                                    </li>

                                    <li>
                                    <NavLink to="/faq" className="dropdown-item" activeClassName="dropdown-item">
                                        FAQ
                                    </NavLink>
                                    </li>

                                    <li>
                                    <NavLink to="/Survive" className="dropdown-item" activeClassName="dropdown-item">
                                        Fizz Survival Guide
                                    </NavLink>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;
