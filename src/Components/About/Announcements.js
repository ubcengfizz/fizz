import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

const announcements = require( './Announcements.json' );

class Announcements extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            announcements: announcements
        }
    }

    parseAnnouncement( data ) {
        return (
            <Paper className="announcement-card" key={data.title}>
                <h3>{data.title}</h3>
                <p className="announcement-description" dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </Paper>
        );
    }

    render() {
        return ( 
            <StackGrid
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}
            gutterWidth={2}
            columnWidth={300}>
            

                { this.state.announcements.map( this.parseAnnouncement ) }

            </StackGrid>
        );
    }
}

export default Announcements;