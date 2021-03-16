// React basics
import React, { Component } from 'react';

// React libraries and components 
import { Route, Switch } from 'react-router';

// Website components
import NavBar from "./Components/Navigation/NavBar"
import Footer from "./Components/Footer/Footer"
import Executives from "./Components/Admin/Executives/Executives"
import FAQ from "./Components/Services/FAQ/FAQ"
import About from "./Components/About/About"
import ScrollToTop from './Components/Navigation/ScrollToTop'
import Podcast from './Components/Culture/Podcast/Podcast';
import Film from './Components/Culture/FilmFeust/FilmFeust';
import Survive from './Components/Services/Survive'
import Constitution from './Components/Admin/Constitution/Constitution'

// TODO: fix the routing for podcast, survive, film, and add routing for missing pages
class App extends Component {

    render() {
        return (
            <ScrollToTop>
                {/* Links to Navigation Bar */}
                <Route component={NavBar}/>
                <div style={ { paddingTop: "10vh" } }>
                    <Switch>
                        <Route path="/executives" component={Executives}/>
                        <Route path="/faq" component={FAQ}/>
                        <Route path="/Podcast" component={Podcast}/>
                        <Route path="/FilmFeust" component={Film}/>
                        <Route path="/Survive" component={Survive}/> 
                        {/*<Route path="/Constitution" component={Constitution}/> */}
                        <Route component={About}/>
                    </Switch>
                </div>

                {/* Links to Footer*/}
                <Route component={Footer}/>
            </ScrollToTop>
        ); 
    }
}

export default App;
