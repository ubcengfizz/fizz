import React, { Component } from 'react';
import './Elections.css';

class Elections extends Component {

  componentDidMount() {
    document.title = "UBC Fizz | Elections";
  };

  render() {
    return (
        <div className="container">

            <div className="text">
                <div className="component-header">
                    <div className="component-title">Candidates for Fizz Elections</div>
                    <hr id="line"/>
                </div>

                <div className="person">
                    <div className="title">Candidates for President</div>
                    <div className="name">Coleman Kaps</div>
                    <div className="description">Hi my name is Coleman and for those who don’t know me I am a 4th year Fizzer going to my 5th (but definitely not last) year and I am excited for the opportunity to run for your President. Though I am relatively new to Fizz council, having only held the E-week rep position last year, I hope you can all agree that I handled the job with the enthusiasm and dedication that will translate perfectly into the presidential position. Some of you may know how much I love Fizz and everyone in it. This is one of the main reasons I have decided to run for president. I want to do whatever I can in leading Fizz through the coming year to help make everyone lives as wonderful as possible. From the potential of overseeing the transition back to the OG Penthouse, to participating in yet another E-week and Advocating for Fizz student interests with faculty staff and the EUS, I am excited for everything the role entails.<br></br><br></br>Please considering voting for me for your next Fizz council President.
                    </div>
                </div>

                <div className="person">
                    <div className="title">Candidates for Treasurer</div>
                    <div className="name">Jessica Ma</div>
                    <div className="description">Betrayal. Passion. Murder. Intrigue. The daily life of the treasurer is equal parts dangerous and thrilling. I've spent the past year checking spreadsheets and filling reimbursements and here I am again. ding dong.</div>
                </div>

                <div className="person">
                    <div className="title">Candidates for VP Events</div>
                    <div className="name">Sydney Seraphim, Tiffany Quon and Richard Echegaray</div>
                    <div className="description">We would like to run for events so that we can ensure we bring the best events Fizz can offer - whether it be penthouse parties, Fizz talks, Fire and Ice.. we want to make sure everyone is included and everyone has a good time.</div>
                </div>

                <div className="person">
                    <div className="title">Candidates for VP Academic</div>
                    <div className="name">Esther Lin and Dominic Shillingford</div>
                    <div className="description">
                        <p>We’re Esther and Dominic and we’d like to be your Academic Representatives for 2019/2020. We hope to bring experience to the position. For example, both of us sat on the Fizz Council this past year, Esther as the Co-Academic Representative with Daniel Schultz and Dominic as the IT Manager who designed the new Fizz Council website.</p>
                    
                        <p>We have four objectives for the position of Academic Representatives:</p>
                        <ul>
                            <li>Develop resources for students.
                                <ul>
                                    <li>Update our student databases with updated course materials</li>
                                    <li>Present the detailed course descriptions that our current Academic representatives and others are developing on the website</li>
                                    <li>Gather course statistics and more informal course advice (time to update that old Fizz Survival Guide!)</li>
                                    <li>Update our student databases with updated course materials </li>
                                    <li>Present the detailed course descriptions that our current Academic representatives and others are developing on the website</li>
                                    <li>Gather course statistics and more informal course advice (time to update that old Fizz Survival Guide!)</li>
                                </ul>
                            </li>
                            <li>Increase alumni and student exchange.
                                <ul>
                                    <li>Start a seminar series to showcase the wide variety of careers that our alumni have pursued. </li>
                                    <li>Provide a platform for note sharing between students both within years and between years</li>
                                </ul>
                            </li>
                            <li>Promote academic and professional development.
                                <ul>
                                    <li>Continue and expand the Graduate School Info Night</li>
                                    <li>Generate a list of suggested courses for certain areas, e.g. take CPSC XXX for the CPSC route.</li>
                                </ul>
                            </li>
                            <li>Promote Fizz and increase outreach.
                                <ul>
                                    <li>Continue Fizz tutoring for PHYS 157.</li>
                                    <li> Develop resources to showcase the courses taken and skills learned by Fizzers during their degrees.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="person">
                    <div className="title">Candidates for Boards of Studies</div>
                    <div className="name">Julia Rosenrauch</div>
                    <div className="description">Hi everyone !! I’m Julia and I am stoked to be running for Board of Studies representative. I am really passionate about bringing my ideas to council, and helping students access resources on common courses, as well as express opinions and improvements for future years. <br></br><br></br>A common challenge with Beef and Pizza, one of the most important ways we are able to gain feedback and a primary responsibility of the Board of Studies rep, has been to cohesively hear everyone’s opinions on time. This year I made sure that the second years had the opportunity to express their opinions on all courses by organizing a second Beef and Pizza with Andre and the council presidents. I believe I have the skills and experience needed to make a great Board of Studies rep and make improvements to academics in Fizz.<br></br><br></br>All that being said, if you have any cool course/tech elective ideas, I would love to work with you on suggesting them to Andre. I look forward to ensuring that we continue to get the most out of our Fizz degrees !!</div>
                    <div className="name">Maria Sottile</div>
                    <div className="description">My name is Maria, I'm currently in third year and currently on Fizz council as sports rep. This past year, I was happy to take a more active role in the Fizz community and hope to continuing working for my fellow Fizzers. I'm always willing to listen and eager to help out, and I will ensure that Andre and the rest of our profs have sufficient feedback on how you feel about their courses. I look forward to advocating for your interests on the Board of Studies.</div>
                </div>
                <div className="person">
                    <div className="title">Candidates for 3rd Year Representative</div>
                    <div className="name">Victoria Schuster</div>
                    <div className="description">Hi everyone! I'm running for third year representative because I'm straightforward, honest and am committed to being a loyal voice to the third year fizzers. Some of my plans include additional tutorial sessions for difficult classes, increasing involvement from the third year student body, adding activities to help de-stress students during midterms and finals season (like dogs,) and third-year only clothing/merch. More importantly, my ears are open and I'm always willing to listen to new suggestions and ideas from you! #Vote4Vic </div>
                    <div className="name">Lewis Mason</div>
                    <div className="description">What would make me the ideal candidate for third year? Well, come to the penthouse any time between 8AM and 8AM the next day and I’ll be there to talk. It is never hard to find me when you want to make suggestions about courses and our program. A successful third year rep is the one that can have his voice heard, and I can make sure that the only thing the council hears for the 8 month term is “council its Lewis we need to talk”. I want us to have a powerful voice for the unique ideas we can come up with that will shape the future of FIZZ. I live by the wisdom that a wise man once told me, “seize the moment” – Ahmad. Thank you all for voting!</div>
                </div>
                <div className="person">
                    <div className="title">Candidates for 4th Year Representative</div>
                    <div className="name">Nicole Navarre and Jeremy Voldeng</div>
                    <div className="description">We have been glad to represent our 2021 class for the past two years, and we would love to continue being the liaison between you and the council. Throughout our time as representatives, we have noticed that many of you guys have great ideas about what you would like to see within our community. We want to continue to be the ones capable of taking your ideas and carrying them forward to the council. No matter how crazy the idea, you can be sure we will bring it up (eg. Penthouse Corgi). We are also very excited about promoting the fizz community and sharing your experiences. This is why we have taken on projects such as the fizz podcast! Our goal is to facilitate the best opportunities for us to promote and grow as an Engineering Physics community, because you are all pretty cool people in case you weren't aware. Please continue to reach out to us if you have any questions about how we can help you succeed, or if you are interested in taking part in our projects to promote all of the awesome people in our community.<br></br><br></br> Nic + Jer</div>
                </div>
                <div className="person">
                    <div className="title">Candidates for Graduate Representative</div>
                    <div className="name">Toren Dofher</div>
                    <div className="description">Toren: I was interested in running for Grad Rep and would like to nominate myself. Anything else I need to do?<br></br><br></br>Us: Yes please send us a blurb<br></br><br></br>Toren: </div>
                </div>
                <div className="person">
                    <div className="title">Candidates for IT Manager</div>
                    <div className="name">Dominic Shillingford</div>
                    <div className="description">I'm Dominic and I would like to return as your IT manager for the upcoming school year. This year I spearheaded the project to create the new Fizz Society website and before the end of this year I hope to implement more functionality in the website including course descriptions. <br></br><br></br> In 2019, I would like to continue improving the website and provide new online services for Fizzers such as course statistics, hosting of course materials and much more; but I need your vote! My past experience, technical expertise and future ideas make me an ideal candidate for the position and I hope you feel the same way.</div>
                </div>
                <div className="person">
                    <div className="title">Candidates for Penthouse Manager</div>
                    <div className="name">Ryley Simpson</div>
                    <div className="description">We're getting our old Penthouse back next year, and I want to make our space better than ever! I'm open to input on snacks we stock in the future, as well as expanding our current game setup.</div>
                    <div className="name">Michael Miller</div>
                    <div className="description">I have no idea why. Maybe clout?</div>
                </div>
                <div className="person">
                    <div className="title">Candidates for Sports Representative</div>
                    <div className="name">Michael Miller</div>
                    <div className="description">I run the current fizz futsal team and have done both semesters now. I participated in the only EUS sports tournament which will be the only such tournament around next year and helped organize the fizz team.</div>
                </div>
                <div className="person">
                    <div className="title">Candidates for E-Week Representative</div>
                    <div className="name">Maria Sottile and Maria Phelan</div>
                    <div className="description">We are the third year and second year Marias, and since joining Fizz, each of us have eagerly joined the community. We both participated in Eweek this past January (as much as school/co-op would allow), helping out with Film Feust, Skulk, and Cooking with Beer. We intend to put maximum effort into ensuring another victory for Fizz, and making sure Eweek continues to be an event that everyone in Fizz can enjoy.</div>
                </div>
            </div>
        </div>
    );
  }
}

export default Elections;
