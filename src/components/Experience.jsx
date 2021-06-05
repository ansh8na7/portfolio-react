import React from 'react'

const Experience = () => {
    return (
      <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Experience</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2015-2018</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                ratione delectus a placeat quidem incidunt deserunt explicabo?
                Facere officia rem, at recusandae iste deleniti est. Alias
                repellat quae eos vitae nam accusamus nihil necessitatibus eum
                in facilis, officia fugiat deserunt.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2018-2020</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                ratione delectus a placeat quidem incidunt deserunt explicabo?
                Facere officia rem, at recusandae iste deleniti est. Alias
                repellat quae eos vitae nam accusamus nihil necessitatibus eum
                in facilis, officia fugiat deserunt.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2020-current</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                ratione delectus a placeat quidem incidunt deserunt explicabo?
                Facere officia rem, at recusandae iste deleniti est. Alias
                repellat quae eos vitae nam accusamus nihil necessitatibus eum
                in facilis, officia fugiat deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Experience
