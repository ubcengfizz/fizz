import React, { Component } from 'react';
//import ReactPlayer from "react-player"
import Iframe from 'react-iframe';
import PageTemplate from '../../../Global/PageTemplate';
import "./FilmFeust.css"
import '../../../Global/style2.css';

// The component I used: https://www.npmjs.com/package/react-iframe
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
                        position="relative"
                        frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>


                    <div className="filmtitle"> 2021 FilmfEUSt (1st Place)</div>
                    <Iframe url="https://www.youtube.com/embed/e0T8pkWdL0A"
                        width="95%"
                        height="500"
                        id="myId"
                        allowFullScreen="true"
                        className="Playlist"
                        display="initial"
                        position="relative"
                        frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>

                    <div className="filmtitle"> 2021 Ball Model (1st Place)</div>
                    <Iframe url="https://www.youtube.com/embed/lLA7zK59G3o"
                        width="95%"
                        height="500"
                        id="myId"
                        allowFullScreen="true"
                        className="Playlist"
                        display="initial"
                        position="relative"
                        frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>

                    <div></div>
                    <a className='btn btn-light action-button' href="https://www.youtube.com/playlist?list=PLFGt58bRG-WROI5Sj6zZ2NiOI6Q5wWSMV" target="_blank">Check out all the other videos here</a>
    </div>    </PageTemplate>
        );
    }
}

export default FilmFeust;
