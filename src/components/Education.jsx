import React from 'react'

const Education = () => {
    return (
      <div id="education" className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Education</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>BE - RNS Institute of Technology, Bengaluru</h3>
              <h5>2018-2022</h5>
              <div>
                <ul>
                  <li>8.04 CGPA</li>
                  <li>Visvesvaraya Technological University</li>
                </ul>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content" style={{ textAlign: "right" }}>
              <h3>12th Boards- Central Public School</h3>
              <h5>Passing Year: 2017</h5>
              <div>
                <div dir="rtl">
                  <ul>
                    <li>87.40%</li>
                    <li>CBSE (Central Board of Secondary Education)</li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>10th Boards- DAV Public School</h3>
              <h5>Passing Year: 2015</h5>
              <div>
                <ul>
                  <li>10 CGPA</li>
                  <li>CBSE (Central Board of Secondary Education)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Education
