import React, { Component } from 'react';
import PageTemplate from '../../../Global/PageTemplate';
import "./Podcast.css"
import '../../../Global/style2.css';
import Iframe from 'react-iframe';


// TODO: Fix spotify embed and add actual intro
class Podcast extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Podcast" fullTitle="Stutter Hour!">
            <div className="cd">
                <div className="title">
                    Stutter Hour! is the official Fizz podcast 
                </div>
                <div className="content">
                    It is currently hosted by Nathan Maguire and Thomas Deckers, and edited by David Wang. 

                    You can contact them at: podcast@ubcfizz.com.
                </div>

                <div className="title">
                    Spotify
                </div>
                <Iframe url="https://open.spotify.com/embed-podcast/show/2IQqd8ek1Zbs4MYIAVSYW3"
                        width="50%"
                        height="100%"
                        id="myId"
                        className="Playlist"
                        display="block"
                        position="relative"
                        scrolling="no"
                        margin="0"
                        padding="0"
                        style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"/>

                <div className="title">
                    Apple Podcasts
                </div>
                <Iframe url="https://embed.podcasts.apple.com/us/podcast/stutter-hour/id1455684225"
                        width="50%"
                        height="450"
                        id="myId"
                        className="Playlist"
                        display="block"
                        position="relative"
                        frameborder="0"
                        style="max-height: 500px;max-width:660px;background:transparent;"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation  allow-top-navigation-by-user-activation"
                        /> 

                <div className="title">
                    Listen Notes
                </div>
                <Iframe url="https://www.listennotes.com/podcasts/stutter-hour-eng-phys-9-SIRTpEovJ/embed"
                        width="50%"
                        height="600px"
                        id="myId"
                        className="Playlist"
                        display="block"
                        position="relative"
                        frameborder="0"
                        style="width: 1px; max-height: 500px;max-width:660px;background:transparent;"
                        frameborder="0" scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation  allow-top-navigation-by-user-activation"
                        /> 
            </div>
        </PageTemplate>
        );
    }
}

export default Podcast;
