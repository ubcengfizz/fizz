import React, { Component }  from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PageTemplate from '../../../Global/PageTemplate';

import './Courses.css';

//TODO: implement this

// The component I'm using for pop ups is this: https://react-popup.elazizi.com/
// My current plan is to:
// Make each course a "pop-up"
// Each year is a Modal that you can click on, and each course is a pop-up or another modal under the Modal (?)

// For better course updates, I'm thinking that we can have a Google form that people fill out.
// Then we can build a Python parser to store it in JSON or something else that we can read easily with Javascript.
class Course extends Component {
    render() {
        return (
      <PageTemplate shortTitle="FAQ" fullTitle="Course List">
      
      {/* TODO: move this portion to Description.js or another file so it's less messy*/}
      <Popup
        trigger={<button className="button"> Click for a HOT surprise </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> 1st Year or something </div>
            <div className="content">
              {' '}
              Lol imagine being in 1st year
              <br />
              Could NOT be me
            </div>
            <div className="actions">
              <Popup
                trigger={<button className="button"> PHYS 158 </button>}
                position="top center"
                modal
                nested
              >
                <div className="course">
                  HASINOFF SUCKS NO CAP
                </div>
              </Popup>
              <Popup
                trigger={<button className="button"> PHYS 159 </button>}
                position="top center"
                modal
                nested
              >
                <span>
                  LOL IS THIS EVEN A COURSE
                </span>
              </Popup>
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
  </PageTemplate>

        );
    }
}

export default Course;
