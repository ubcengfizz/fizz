import React, { Component } from 'react';
import './misc.css';
import PageTemplate from '../../Global/PageTemplate';
import Iframe from 'react-iframe';

//TODO: Clean up this code cuz I just inspect elemented it from our old website
class CourseReview extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Courses" fullTitle="Course Reviews">
                <div class="iframe">
                <Iframe url="https://docs.google.com/document/d/e/2PACX-1vQs3s-zoElixIBIxrhh76OJ_9rEsYN4Or0GA3T3AMbkhE8_fvt4Fg1QSLxawHl9MHHylwcMU7045V2E/pub?embedded=true"
                        width="80%"
                        height="1000"
                        display="block"
                        frameBorder="0"
                        position="static"/>
                </div>
            </PageTemplate>
        );
    }
}

export default CourseReview;
