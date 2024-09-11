import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../img/Projects/todo-img/todo1.png";
import img2 from "../img/Projects/todo-img/todo2.png";
import img3 from "../img/Projects/todo-img/todo3.png";
import Ecimg1 from "../img/Projects/todo-img/ecommer1.png";
import Ecimg2 from "../img/Projects/todo-img/ecommer2.png";
import Ecimg3 from "../img/Projects/todo-img/ecommer3.png";
import Ecimg4 from "../img/Projects/todo-img/ecommer4.png";
import Ecimg5 from "../img/Projects/todo-img/ecommer5.png";
import Ecimg6 from "../img/Projects/todo-img/ecommer6.png";
import "./App.css";

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500, // Adjust as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the interval (in milliseconds)
  };
  return (
    <section id="projects" className="project">
      <div className="containers">
        <h2 className="new-projects">
          {" "}
          A small selection of
          <h2 className="inline"> recent projects</h2>
        </h2>
      </div>
      <br />
      <div className="main-parent">
        {/* my first Project */}
        <div className="flex justify-center items-center text-center mt-[12px]">
          <div className="project-card">
            <div className="project-info">
              <h3
                className="text-2xl font-bold mb-4 text-[22px] mt-[5px]"
                style={{ color: "#fff" }}
              >
                Nest Mart & Grocery Store
              </h3>
              <p
                className="text-lg mb-4 project-para"
                style={{ color: "#cbacf2" }}
              >
                🛒 Nest Mart & Grocery is not just another Ecommerce <br />{" "}
                platform; its a personalized shopping experience designed with
                you in mind.
              </p>
            </div>
            <div className="flex justify-center items-center text-center mt-[2px]">
              <Slider className="" {...sliderSettings}>
                <div>
                  <img className="" src={Ecimg2} alt="Ecommerce1" />
                </div>
                <div>
                  <img src={Ecimg1} alt="Ecommerce2" />
                </div>
                <div>
                  <img src={Ecimg3} alt="Ecommerce3" />
                </div>
                <div>
                  <img src={Ecimg4} alt="Ecommerce3" />
                </div>
                <div>
                  <img src={Ecimg5} alt="Ecommerce3" />
                </div>
                <div>
                  <img src={Ecimg6} alt="Ecommerce3" />
                </div>

                {/* Add more slides as needed */}
              </Slider>
            </div>
            {/* View Project Link */}
            <div style={{ display: "flex",alignItems:"center",justifyContent:"center",marginTop:"8px" }}>
              <div>
                <button
                  className="button-64"
                  role="button"
                  
                >
                  <a
                    href="https://nestmartgrocery.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="no-underline text-[15px] text-blue-500 underline hover:text-blue-700"
                  >
                    View App
                  </a>
                </button>
              </div>
              <div>
                <button
                  className="button-64"
                  role="button"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <a
                    href="https://github.com/tahiee/TodoApp-React-Firbase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </button>
              </div>
              {/* <button
                className="button-85"
                style={{
                  marginLeft: "10px",
                }}
              >
                <a
                  href="https://github.com/tahiee/TodoApp-React-Firbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-[15px] text-blue-500 underline hover:text-blue-700"
                >
                  GitHub
                </a>
              </button> */}
            </div>
          </div>
        </div>

        {/* my sencond project */}
        <div className="flex justify-center items-center text-center mt-[12px]">
          <div className="project-card">
            <div className="project-info">
              <h3
                className="text-2xl font-bold mb-4 text-[22px] mt-[5px]"
                style={{ color: "#fff" }}
              >
                TodoApp
              </h3>
              <br />
              <p className="text-lg mb-4" style={{ color: "#cbacf2" }}>
                A simple Todo App built using React - Material-UI - Firebase
              </p>
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
            {/* View Project Link */}
            <div style={{ display: "flex",alignItems:"center",justifyContent:"center",marginTop:"8px" }}>
              <div>
                <button
                  className="button-64"
                  role="button"
                  
                >
                  <a
                    href="https://todoapp-react-lovat.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="no-underline text-[15px] text-blue-500 underline hover:text-blue-700"
                  >
                    View App
                  </a>
                </button>
              </div>
              <div>
                <button
                  className="button-64"
                  role="button"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  <a
                    href="https://github.com/tahiee/TodoApp-React-Firbase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </button>
              </div>
              {/* <button
                className="button-85"
                style={{
                  marginLeft: "10px",
                }}
              >
                <a
                  href="https://github.com/tahiee/TodoApp-React-Firbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-[15px] text-blue-500 underline hover:text-blue-700"
                >
                  GitHub
                </a>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
