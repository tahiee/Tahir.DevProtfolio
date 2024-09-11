/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import aboutDesk from "../img/devpic.jpg";
// import aboutDesk from "../img/desk img.jpg";
import Developerimg from "../img/developer.png";
import FrontEndImg from "../img/fronendImg.svg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="containers">
        <div className="about-content">
          <div className="img-side">
            <img src={Developerimg} alt="emoji" className="work-emoji" />
            <img src={aboutDesk} alt="mee" className="img-side__main-img" />
            <span>
              <img src={FrontEndImg} alt="text" />
            </span>
          </div>
          <div className="text-side">
            <h3>About me</h3>
            <h4>
              A dedicated
              <h4 style={{ display: "inline" }}> Front-End Developer </h4>
              based in Karachi, Pakistan 📍
            </h4>
            <p>
              Hey My name is Tahir, I'm a Junior Front-End Developer, also
              Student at SMIT. I possess an impressive arsenal of skills in
              HTML, CSS, Javascript, React.js, Next.js, Material-UI &
              Tailwind.
              <br />
              <br />
              My currently main Stack is <p className="blink2 inline" style={{color:"white"}}>Next.Js</p> 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
