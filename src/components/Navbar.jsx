import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function NavScrollExample() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigate = useNavigate();

  function gotoContact() {
    console.log("contact clicked");
    return navigate("/contact");
  }
  function gotoHome() {
    console.log("Home clicked");
    return navigate("/");
  }
  function gotoProjects() {
    console.log("Projects clicked");
    return navigate("/projects");
  }
  function gotoAbout() {
    console.log("About clicked");
    return navigate("/about");
  }

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const originalOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [order, setOrder] = useState(originalOrder);

  const shuffleOrder = () => {
    let shuffled = [...order];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setOrder(shuffled);
  };

  const resetOrder = () => {
    setOrder(originalOrder);
  };

  // Home about text effect
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const navbarItems = document.querySelectorAll(".navbar-item");
    navbarItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 100); // Staggering effect
    });
  }, []);
  return (
    <>
      <nav
        className={`blocks animatable fadeInDown your-navbar-class flex justify-between items-center text-center h-auto z-200 text-2xl leading-10 px-14 py-9 w-full top-0 left-0 nav-font  ${
          isMobileMenuOpen ? "bg-emerald-200 text-black" : ""
        } ${scrolling ? "bg-emerald-200 text-black" : ""}`}
      >
        <h3
          className="cursor-pointe cursorLinkr home-button"
          onClick={() =>
            scroll.scrollToTop(
              { smooth: true },
              (onMouseOver = { shuffleOrder }),
              (onMouseOut = { resetOrder })
            )
          }
          duration={200}
          spy={true}
          offset={20}
        >
          {/* Tahir.dev */}
          <AnimatePresence>
            {["T", "a", "h", "i", "r", ".", "D", "e", "v"].map(
              (letter, index) => (
                <motion.div
                  key={index}
                  className="letter"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ order: order[index] }}
                >
                  {letter}
                </motion.div>
              )
            )}
          </AnimatePresence>
        </h3>
        {/* //  is just remove here to toggleMobileMenu(); */}
        <ul className="gap-4 flex justify-between items-center text-center ">
          <li
            className="hidden lg:block cursor-pointer cursorLink navbar-item transform translate-y-[-50px] home-button"
            onClick={() => {
              gotoHome();
            }}
          >
            Home
          </li>
          <li
            className="hidden lg:block cursor-pointer  navbar-item transform translate-y-[-70px] home-button"
            onClick={() => {
              gotoAbout();
            }}
          >
            About
          </li>
          <li
            className="hidden lg:block cursor-pointer  navbar-item transform translate-y-[-90px] home-button"
            onClick={() => {
              gotoProjects();
            }}
          >
            Projects
          </li>
          <li
            className="hidden lg:block cursor-pointer  navbar-item transform translate-y-[-110px] home-button"
            onClick={() => {
              gotoContact();
            }}
          >
            Contact
          </li>
          <li className="lg:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-x"
              >
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mobile-menu"
              >
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
            )}
          </li>
        </ul>
      </nav>

      <div
        className={`mobile-nav ${
          isMobileMenuOpen ? "open-menu" : "closed-menu"
        }`}
      >
        <span onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="tabler-icon tabler-icon-x"
          >
            {/* <path d="M18 6l-12 12"></path> */}
            {/* <path d="M6 6l12 12"></path> */}
          </svg>
        </span>
        <ul>
          <li
            onClick={() => {
              toggleMobileMenu();
              gotoHome();
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              toggleMobileMenu();
              gotoAbout();
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              toggleMobileMenu();
              gotoProjects();
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              toggleMobileMenu();
              gotoContact();
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavScrollExample;
