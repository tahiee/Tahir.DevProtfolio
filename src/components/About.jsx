import React from 'react'
import './App.css'
import aboutDesk from "../img/desk img.jpg"
import Developerimg from "../img/developer.png"
import FrontEndImg from "../img/fronendImg.svg"

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
                    <h4>A dedicated FrontEnd Developer based in Karachi, Pakistan 📍</h4>
                    <p>
                        Hey, My name is Tahir, As a Beginner / Junior Front-End Developer, <br /> I am also a Student at SMIT. I possess an impressive arsenal of skills <br /> in HTML, CSS, JavaScript, React, Material-UI and Tailwind.
                        <br /><br />
                        My main Stack currently is React/Next.js.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About