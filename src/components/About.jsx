import React from 'react'
import aboutDesk from "../img/desk img.jpg"
import Developerimg from "../img/developer.png"
import FrontEndImg from "../img/fronendImg.svg"

const About = () => {
    return (
        <section className="about" id="about">
        <div className="container">
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
                    <h4>A dedicated Front-end Developer <br /> based in Karachi, Pakistan 📍</h4>
                    <p>
                        As a Beginner/Junior Front-End Developer, I am also a Student at SMIT. I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, and Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About