import React, { Component } from 'react';
import './temp.css';
import PageTemplate from '../../../Global/PageTemplate';

class temp extends Component {
    render() {
        return (
            <PageTemplate shortTitle="FAQ" fullTitle="Frequently Asked Questions">
                <div className="qa">
                    <div className="title">What is Engineering Physics?</div>
                    <div className="content">
                        Engineering Physics is a five year (or more) interdisciplinary program at UBC within the Faculty of Applied Science. 
                        In Engineering Physics, students take many higher level math and physics courses as well as courses from many branches of engineering. 
                        Continuing with the interdisciplinary theme, Engineering Physics students are required to take 18 credits of technical electives over their degree. 
                        These technical electives may be chosen from a broad range of subjects including abstract mathematics, business and entrepreneurship, applied physics, environmental science and much more.
                    </div>
                </div>
            </PageTemplate>
        );
    }
}

export default temp;
