import React, { Component } from 'react';
//import ReactPlayer from "react-player"
import Iframe from 'react-iframe';
import PageTemplate from '../../../Global/PageTemplate';
import "./FilmFeust.css"
import '../../../Global/style2.css';

// TODO: Make a YT Video Component by following this: https://stackoverflow.com/questions/52324664/how-to-use-iframe-in-react-js/52325099
// Or by following this: https://coderrocketfuel.com/article/embed-a-youtube-video-in-a-react-webpage
class FilmFeust extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Film" fullTitle="FilmfEUSt">
                <div className="cd">
                    <div className="title">FilmfEUSt: an annual student film E-week event</div>
                    <div className="content">
                        What is FilmfEUSt you may ask? Every year, UBC engineering students take part in 
                        E-Week: a week where different engineering departments compete against each other in various events.
                        One of those events is filmfEUSt! Fizz has won E-week 3 years in a row! 
                        And we've placed 2nd and 1st in filmfEUSt in the past 2 years respectively

                        Check out our YouTube playlist to see all of our past videos!
                    </div>

                    <div className="filmtitle"> 2021 SongfEUSt (1st Place)</div>
                    <Iframe url="https://www.youtube.com/embed/uwHC5f3MJKw"
                        width="95%"
                        height="500"
                        id="myId"
                        allowFullScreen="true"
                        className="Playlist"
                        display="initial"
                        position="relative"/>


                    <div className="filmtitle"> 2021 FilmfEUSt (1st Place)</div>
                    <Iframe url="https://www.youtube.com/embed/e0T8pkWdL0A"
                        width="95%"
                        height="500"
                        id="myId"
                        allowFullScreen="true"
                        className="Playlist"
                        display="initial"
                        position="relative"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                    
                    <div></div>
                    <a className='btn btn-light action-button' href="https://www.youtube.com/playlist?list=PLFGt58bRG-WROI5Sj6zZ2NiOI6Q5wWSMV" target="_blank">Check out all the other videos here</a>
    </div>    </PageTemplate>
        );
    }
}

export default FilmFeust;
