import React, { Component } from 'react';
import './misc.css';
import PageTemplate from '../../Global/PageTemplate';

//TODO: Clean up this code cuz I just inspect elemented it from our old website
class Survive extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Survive" fullTitle="Survival Guide">
                <div class="iframe">
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vSTRVHsW49hMAAekOyfvq-jPYA2QjnSSx78hI_xJ3NHZSDwGGVl6wI-Ldej6o3YdLt2uJ-JgZ3CTRNQ/pub?embedded=true"
                    width="80%"
                    height="1000px"
                    frameBorder="0"
                    >
                    </iframe>
                </div>
            </PageTemplate>
        );
    }
}

export default Survive;
