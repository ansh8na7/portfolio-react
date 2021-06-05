import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//import avatars
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";
import avatar5 from "../images/avatars/avatar-5.png";

const TestimonialsCarousel = () => {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <>
          <img src={avatar1} alt="john snow 1" />
          <div className="myCarousel">
            <h3>Jon Snow 1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam dignissimos accusantium soluta dolores incidunt, beatae
              quasi! Quidem similique rem laborum.
            </p>
          </div>
        </>
        <>
          <img src={avatar2} alt="john snow 2" />
          <div className="myCarousel">
            <h3>Jon Snow 2</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam dignissimos accusantium soluta dolores incidunt, beatae
              quasi! Quidem similique rem laborum.
            </p>
          </div>
        </>
        <>
          <img src={avatar3} alt="john snow 3" />
          <div className="myCarousel">
            <h3>Jon Snow 3</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam dignissimos accusantium soluta dolores incidunt, beatae
              quasi! Quidem similique rem laborum.
            </p>
          </div>
        </>
        <>
          <img src={avatar4} alt="john snow 4" />
          <div className="myCarousel">
            <h3>Jon Snow 4</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam dignissimos accusantium soluta dolores incidunt, beatae
              quasi! Quidem similique rem laborum.
            </p>
          </div>
        </>
        <>
          <img src={avatar5} alt="john snow 5" />
          <div className="myCarousel">
            <h3>Jon Snow 5</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam dignissimos accusantium soluta dolores incidunt, beatae
              quasi! Quidem similique rem laborum.
            </p>
          </div>
        </>
      </Carousel>
    );
}

export default TestimonialsCarousel
