import React, { Component } from 'react';
import './Executives.css'

class Person extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="div-table">
                <div className="div-table-col">
                <div className="person">
                    <div className="title">{this.props.title}</div>
                    <div className="name">{this.props.name}</div>
                    <a href={"mailto:"+this.props.email +"@ubcfizz.com"} 
                        className="email">
                        {this.props.email + "@ubcfizz.com"}</a>

                    <div className="description">
                        {this.props.description}
                    </div>
                </div>
                </div>

                <div className="div-table-col">
                    <div className="photo">
                    <img src={this.props.img}
                    //width="300" height="300"
                    ></img>
                </div></div>

            </div>
        )
    }
}

export default Person;