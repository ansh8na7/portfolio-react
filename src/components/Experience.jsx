import React from 'react'

const Education = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience & Education</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Wells Fargo</h3>
                        <h5>Software Engineer</h5>
                        <h5>Aug 2023-present</h5>
                        <div>
                            <div className="timeline-list-right">
                                <ul>
                                    <li>Supported the onboarding of FedNow/Instant Payments as a new payment rail for American citizens</li>
                                    <li>Developed the Payment Validation application and microservice using Spring Boot for the company which validates all the payments going through.</li>
                                    <li>Created Full Stack application using spring boot and Reactjs to View edit and manage rules which increased the efficiency and collaboration between teams.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Wells Fargo</h3>
                        <h5>Program Associate</h5>
                        <h5>Aug 2022-Aug 2023</h5>
                        <div>
                            <div className="timeline-list-left">
                                <ul>
                                    <li>Onboarded CTX as a new payment type using service-oriented architecture (SOA) development
                                        of RESTful services, enabling the company to process business-to-business payments with remittance data, enhancing the payment efficiency and accuracy</li>
                                    <li>Supported creating a new payment types with perspective of Payment Validation</li>
                                    <li>Created and developed multiple rules to support different types of payments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>FRAMSIKT TECHNOLOGIES</h3>
                        <h5>Software Development Intern</h5>
                        <h5>Mar 2022 - Jun 2022</h5>
                        <div>
                            <div className="timeline-list-right">
                                <ul>
                                    <li>Created product web pages using HTML, CSS, Javascript and Angular JS</li>
                                    <li>Took full responsibility for web pages' front end</li>
                                    <li>Integrated web pages to backend via Restful APIs</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>RNS Institute of Technology, Bengaluru</h3>
                        <h5>B.E. - Information Science & Engineering</h5>
                        <h5>2018-2022</h5>
                        <div>
                            <div className="timeline-list-left">
                                <ul>
                                    <li>8.04 CGPA</li>
                                    <li>Visvesvaraya Technological University</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Education
