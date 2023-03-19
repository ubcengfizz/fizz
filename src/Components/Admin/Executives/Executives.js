import React, { Component } from 'react';
import Person from './Person';
import PageTemplate from '../../../Global/PageTemplate';
import "./Executives.css";

class Executives extends Component {
    render() {
        return (
            <PageTemplate shortTitle="Executives" fullTitle="Fizz Executives">
                <Person 
                    title="Co-Presidents" 
                    name="Andrew Chen, Charles Lee"
                    email="president"
                    description="The co-presidents represent the interests of engineering physics students to the Physics & Astronomy department, faculty of Applied Science, Engineering Undergraduate Society and alumni. The co-presidents chair executive meetings, oversee activities of the association and head any extra projects put forward by the council."
                />

                <Person 
                    title="VP Academic" 
                    name="Manmeet Kaur"
                    email="vpacademic"
                    //img = "http://placekitten.com/200/300"
                    description="The VP Academic is responsible for organizing events relating to the academic and professional
                     development of engineering physics students. These can include but not limited to the Graduate School Information Night,
                     the Fizz Industry Night, and Fizz Tutoring Program for 1st year STEM students."
                />

                <Person 
                    title="VP Events" 
                    name="Anqi Xu, Aileen Zhang, Renu Rajamagesh"
                    email="vpevents"
                    description="The VP Events ensures that students maintain a healthy 
                    social life by organizing and advertising a number of events throughout the year. 
                    Yearly events include Fizz Talks, Fire and Ice and Alumni Night."
                />

                <Person 
                    title="Treasurer" 
                    name="Lesley Hill, Josh Lim"
                    email="treasurer"
                    //img = "http://placekitten.com/200/300"
                    description="The Treasurer handles all of the financial activities and transactions. This includes creating and balancing the budget, giving reimbursements, liaising with the AMS Finance office and acting as one of the two booking representatives for the club."
                />      

                <Person 
                    title="Graduate Representative" 
                    name="David Wang, Thomas Deckers"
                    email="gradrep"
                    //img = "http://placekitten.com/200/300"
                    description="Grad reps fill all the roles of year reps for the 5th year class and also coordinate additional activities for 
                    graduation: grad trip, iron ring ceremony, grad photos, and Slipsticks"
                />

                <Person 
                    title="Year Representatives" 
                    name="Andrew Du & Rishi Landra/ Husan Aulakh & Kyle Mackenzie / Kenneth Xing"
                    email="secondrep / thirdrep / fourthrep"
                    //img = "http://placekitten.com/200/300"
                    description="The year representatives act as liaisons between the executive team and the students of their respective years. They are responsible for informing students about the current activities of the club, selling tickets for pertinent events and helping to organize and execute many of the academic and social events."
                />   

                <Person 
                    title="IT Manager" 
                    name="Jackson Fraser"
                    email="itmanager"
                    //img = "http://placekitten.com/200/300"
                    description="The IT manager is responsible for maintaining the Penthouse computers, 
                    wireless access and printers. They also update and oversee the ubcfizz.com website and mailing lists."
                />  

                <Person 
                    title="Board of Studies Representatives" 
                    name="Michelle Li, Sylvia Zhang"
                    email="bos"
                    //img = "http://placekitten.com/200/300"
                    description="The two Board of Studies representatives organize feedback from current students and advocates for changes to the Engineering Physics curriculum. Feedback is primarily solicited at twice-annual Beef and Pizza events, in addition to mid-term evaluations conducted during class. In the first half of the academic year, the Board of Studies representatives bring collected feedback to a Board of Studies meeting with the Engineering Physics Director and various Engineering department heads to discuss curriculum changes."
                />  

                <Person 
                    title="Sports Representative" 
                    name="Julian Lapenna"
                    email="sports"
                    //img = "http://placekitten.com/200/300"
                    description="The Sports manager is responsible for all Fizz sports and games such as board game nights, 
                    intramurals and sports administrative work. If you would like to have an intramural team that we don't already have,
                     talk to the sports manager about signing up next term!"
                />

                <Person 
                    title="Penthouse Manager" 
                    name="Spencer Bradbury"
                    email="penthouse"
                    //img = "http://placekitten.com/200/300"
                    description="The penthouse manager oversees the maintenance and all upgrades of the Engineering Physics
                    student space, known as the Penthouse. Responsibilities of the penthouse manager include keeping the 
                    vending machines and freezer stocked, keeping the foosball table well maintained, ensuring the space 
                    is respected by all its patrons and liaising with building staff."
                />  

                <Person 
                    title="E-Week Representative" 
                    name="Ethan Predinchuk"
                    email="eweek"
                    //img = "http://placekitten.com/200/300"
                    description="The E-Week representative is responsible for organizing all things pertaining to E-Week. This involves going to EUS meetings in preparation for the week as well as promoting the events and allocating resources to promote a victory for the department."
                />  
            </PageTemplate>
        );
    }
}

export default Executives;
