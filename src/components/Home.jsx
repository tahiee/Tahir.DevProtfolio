import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import htmlicon from "../img/html-icon.webp";
import cssicon from "../img/css.png";
import jsicon from "../img/js.png";
import reacticon from "../img/react.png";
import nexticon from "../img/nexticon.png";
import tahirimg from "../img/hero-banner-tahir.png";
import hand from "../img/png-transparent-hand-waving-wave-emoji-wave-hand-arm-sign-thumbnail.png";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "./About";
import gsap from "gsap";
import MeCreative from "./MeCreative";

const Home = () => {
  const largeHeaderRef = useRef(null);
  const canvasRef = useRef(null);
  let width,
    height,
    ctx,
    points,
    target,
    animateHeader = true;

  useEffect(() => {
    initHeader();
    initAnimation();
    addListeners();
    return () => {
      // Clean up event listeners if needed
    };
  }, []);

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = { x: width / 2, y: height / 2 };

    largeHeaderRef.current.style.height = height + "px";

    ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // create points
    points = [];
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (let i = 0; i < points.length; i++) {
      const closest = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (!(p1 === p2)) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (let i in points) {
      const c = new Circle(
        points[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
      points[i].circle = c;
    }
  }

  function addListeners() {
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  }

  function mouseMove(e) {
    const posx =
      e.pageX ||
      e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
    const posy =
      e.pageY ||
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    animateHeader = document.body.scrollTop <= height;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeaderRef.current.style.height = height + "px";
    canvasRef.current.width = width;
    canvasRef.current.height = height;
  }

  function initAnimation() {
    animate();
    for (let i in points) {
      shiftPoint(points[i]);
    }
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (let i in points) {
        // detect points in range
        if (Math.abs(getDistance(target, points[i])) < 4000) {
          points[i].active = 0.3;
          points[i].circle.active = 0.6;
        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0;
        }

        drawLines(points[i]);
        points[i].circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    gsap.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: "circ.inOut",
      onComplete: () => {
        shiftPoint(p);
      },
    });
  }

  function drawLines(p) {
    if (!p.active) return;
    for (let i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
      ctx.stroke();
    }
  }

  function Circle(pos, rad, color) {
    const _this = this;
    _this.pos = pos || null;
    _this.radius = rad || null;
    _this.color = color || null;

    _this.draw = function () {
      if (!_this.active) return;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
      ctx.fill();
    };
  }

  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
  // const texts = [
  //   "(JavaScript)",
  //   "(TypeScript)",
  //   "(ReactJS)",
  //   "(NextJS)",
  //   "(NodeJS)",
  //   "(ExpressJS)",
  //   "(Python)",
  //   "(Flask)",
  //   "(RestAPI)",
  //   "(GraphQL)",
  //   "(MongoDB)",
  //   "(PostgreSQL)",
  //   "(ML / AI)",
  // ];

  // const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 2000); // Change text every 2 seconds

  //   return () => clearInterval(interval);
  // }, [texts.length]);
  return (
    <>
      <section id="home" className="hero" ref={largeHeaderRef}>
        <canvas id="demo-canvas" ref={canvasRef}></canvas>
        <div className="cursor"></div>
        <div className="containers">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text ">
                <h1 className="mine-name cursor-pointer font-bold">
                  <h1 style={{ display: "inline" }}>Front-End </h1>
                  React Developer{" "}
                </h1>
                <div className='hand-container"'>
                  <img className="waving-hand" src={hand} alt="waving_hand" />
                </div>
                <p className="font-bold">
                  Hi, I'm Tahir Khan Niazi. A passionate Front-End React
                  Developer based in Karachi, Pak. 📍
                </p>
                <span>
                  <a
                    className="hover:text-emerald-400"
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/m-tahir-khan-10730a1b4/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="tabler-icon blink tabler-icon-brand-linkedin"
                    >
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    className="hover:text-emerald-400"
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/tahiee"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-brand-github blink"
                    >
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
                  <li>
                    <img className="h-5 w-5" src={htmlicon} alt="skill-icon" />
                  </li>
                  <li>
                    <img src={cssicon} alt="skill-icon" />
                  </li>
                  <li>
                    <img src={jsicon} alt="skill-icon" />
                  </li>
                  <li>
                    <img src={reacticon} alt="skill-icon" />
                  </li>
                  <li>
                    <img src={nexticon} alt="skill-icon" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* scroll down svg */}
        {/* <div
          className=""
          style={{
            position: "absolute",
            bottom: "0",
            marginBottom: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between',
            width:"96%",
            padding:"0px -10px"
          }}
        >
          <div className="ml-[20px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-2"
            >
              <rect
                x="0.5"
                y="1.5"
                width="15"
                height="21"
                rx="7.5"
                stroke="currentColor"
              ></rect>
              <line
                x1="8.5"
                y1="5"
                x2="8.5"
                y2="10"
                stroke="currentColor"
              ></line>
            </svg>
            <p className="scroll-class">Scroll down</p>
          </div>
          <div className="">
            <div
              className="position-relative w-100"
              style={{ width: "92px", height: "1rem" }}
            >
              <p className="text-primary-orange flip-down scroll-class">
                {texts[currentTextIndex]}
              </p>
            </div>
          </div>
        </div> */}
      </section>
      <About />
      {/* <MeCreative/> */}
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
