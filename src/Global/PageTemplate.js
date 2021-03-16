import React, { Component } from 'react';
import "./style.css";

class PageTemplate extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount() {
        document.title = "UBC Fizz | " + this.props.shortTitle;
    };

    render() {
        return (
            <div className="container">
                    <div className="header-outer">
                        <div className="header-inner"> 
                            <div className="component-title">{ this.props.fullTitle }</div>
                        </div>
                    </div>

                    <div className="content-center">
                        { this.defaultContent() }
                        { this.props.children }
                    </div>
            </div>
        );
    }

    defaultContent() {
        return ( null );
    }; 
}

export default PageTemplate;
