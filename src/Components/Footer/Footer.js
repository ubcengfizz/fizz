import React, { Component } from 'react';
import logo from '../../Images/fizz-logo.svg';
import './Footer.css';
import twitterlogo from '../../Images/twitter_logo.png';
import facebooklogo from '../../Images/facebook_logo.png';
import instagramlogo from '../../Images/instagram_logo.png';



class Footer extends Component {
  render() {
    return (
      <div>

      <footer id="footer">

        <div id="filler"></div>

        <div id="club-location">
          <img alt="fizz logo" id="footer_fizz_logo" src={logo}/>
          <div id="location-details">UBC Engineering Physics<br/>
            Vancouver Campus<br/>
            6224 Agricultural Road<br/>
            Hennings Building, Room 333A<br/>
            Student Space: HEBB<br/>
        </div>
      </div>

      <div id="contacts">
        <div id="one-person">
        <h4>President</h4>
        <p>president@ubcfizz.com</p>
        </div>

        <div id="one-person">
        <h4>VP Academic</h4>
        <p>vpacademic@ubcfizz.com</p>
        </div>

        <div id="one-person">
        <h4>VP Events</h4>
        <p>vpevents@ubcfizz.com</p>
        </div>

      </div>

      </footer>
    </div>
    );
  }
}

export default Footer;
