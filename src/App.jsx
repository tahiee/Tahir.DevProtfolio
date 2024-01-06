import { useState } from 'react'
import './App.css'
import htmlicon from "./img/html-icon.webp"
import cssicon from "./img/css.png"
import jsicon from "./img/js.png"
import reacticon from "./img/react.png"
import tahirimg from "./img/hero-banner-tahir.png"
import hand from "./img/png-transparent-hand-waving-wave-emoji-wave-hand-arm-sign-thumbnail.png"
import NavScrollExample from "./components/Navbar"
import aboutDesk from "./img/desk img.jpg"
import Developerimg from "./img/developer.png"
import FrontEndImg from "./img/fronendImg.svg"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <html>
        <body>

          <NavScrollExample />
          <section id="home" className="hero">
            <div className="container">
              <div className="content">
                <div className="hero-main">
                  <div className="hero-text">
                    <h1>Front-End React Developer </h1>
                    <img src={hand} alt="waving_hand" />
                    <p>Hi, I'm Tahir Khan Niazi. A passionate Front-end React Developer based in Karachi, Pak. 📍</p>
                    <span>
                      <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/m-tahir-khan-niazi-10730a1b4/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin">
                          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                          <path d="M8 11l0 5"></path>
                          <path d="M8 8l0 .01"></path>
                          <path d="M12 16l0 -5"></path>
                          <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                      </a>
                      <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/tahiee">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github">
                          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <div className="hero-img"></div>
                </div>
                <div className="skills">
                  <p>Tech Stack</p>
                  <div className="logos">
                    <ul>
                      <li><img className='h-5 w-5' src={htmlicon} alt="skill-icon" /></li>
                      <li><img src={cssicon} alt="skill-icon" /></li>
                      <li><img src={jsicon} alt="skill-icon" /></li>
                      <li><img src={reacticon} alt="skill-icon" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
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


        </body>
      </html>
    </>
  )
}

export default App
