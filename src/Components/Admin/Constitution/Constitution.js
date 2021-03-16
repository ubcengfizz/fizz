import React, { Component } from 'react';
//import './FAQ.css';
import PageTemplate from '../../../Global/PageTemplate';

class Constitution extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Constitution" fullTitle="Constitution">
                {/** TODO: Replace with the actual constitution and not some placeholder doc that I had */}

                <div>

                <iframe src="https://docs.google.com/document/d/e/2PACX-1vSTRVHsW49hMAAekOyfvq-jPYA2QjnSSx78hI_xJ3NHZSDwGGVl6wI-Ldej6o3YdLt2uJ-JgZ3CTRNQ/pub?embedded=true"
                    width="100%"
                    height="750px"
                    >
                    </iframe>
                </div>
            </PageTemplate>
        );
    }
}

export default Constitution;
