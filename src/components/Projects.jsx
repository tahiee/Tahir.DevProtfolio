import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../img/Projects/todo-img/todo1.png";
import img2 from "../img/Projects/todo-img/todo2.png";
import img3 from "../img/Projects/todo-img/todo3.png";
import "./App.css";

const Projects = () => {
  
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500, // Adjust as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the interval (in milliseconds)
  };
  return (
    <section id="projects" className="project">
      <div className="containers">
        <h2 className="new-projects"> Projects</h2>
      </div>
      <div className="flex justify-center items-center text-center mt-[12px]">
        <div className="project-card">
          <div className="project-info">
            <h3 className="text-2xl font-bold mb-4 text-[22px] mt-[5px]">
              TodoApp
            </h3>
            <p className="text-lg mb-4">
              A simple Todo App built using React - Material-UI - Firebase
            </p>
            {/* View Project Link */}
            <a
              href="https://todoapp-react-lovat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-[15px] text-blue-500 underline hover:text-blue-700"
            >
              View Project
            </a>
          </div>
          <div className="flex justify-center items-center text-center mt-[2px]">
            <Slider className="" {...sliderSettings}>
              <div>
                <img className="" src={img1} alt="Image 1" />
              </div>
              <div>
                <img src={img2} alt="Image 2" />
              </div>
              <div>
                <img src={img3} alt="Image 2" />
              </div>
              {/* Add more slides as needed */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
