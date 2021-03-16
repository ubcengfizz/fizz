import React, { Component } from 'react';
import './FAQ.css';
import PageTemplate from '../../../Global/PageTemplate';

class FAQ extends Component {
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

                <div className="qa">
                    <div className="title">What is the Engineering Physics Student Association?</div>
                    <div className="content">
                        The Engineering Physics Students' Association is an organization which represents the interests of all Engineering Physics students to the faculty, the industry, and to the Engineering Undergraduate Society (EUS).
                        Led by a group of dedicated students, we serve to build a strong academic and social community through various events such as Fizz Talks and Networking Events, among many others. 
                        Additionally, we offer multiple services such as first-year tutoring, clothing, sports, and a comprehensive course directory (work in progress). 
                        Browse this website to learn more about us!
                    </div>
                </div>

                <div className="qa">
                    <div className="title">How can I join the Engineering Physics Student Association?</div>
                    <div className="content">
                        The Engineering Physics Students' Association Executive Council has both executive and ex-offico positions. 
                        Executive positions have voting privileges, and must be elected. 
                        Ex-officio positions are appointed to the position by the rest of the executive but do not have voting power. 
                        Elections for all executive positions on Executive Council are run in March of each year. 
                        If you do not want a particular position, but still want to help, please contact the President.
                    </div>
                </div>

                <div className="qa">
                    <div className="title">Does the Engineering Physics Student Association have a dedicated student space?</div>
                    <div className="content">
                        The usual home of the Engineering Physics Students' Association on the sixth and seventh floor of the Hebb building is currently closed until further notice.
                    </div>
                </div>
            </PageTemplate>
        );
    }
}

export default FAQ;
