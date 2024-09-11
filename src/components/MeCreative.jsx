import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const MeCreative = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="BoldTitle_section">
      <div className="Layout_container BoldTitle_grid">
        <p className="BoldTitle_paragraph" data-aos="fade-up">
          <div
            className="TextReveal_splitLine"
            style={{
              display: "block",
              textAlign: "start",
              position: "relative",
            }}
          >
            {[
              "I've ",
              " worked ",
              "in ",
              "UI ",
              "design ",
              "and ",
              "front-end ",
              "development,",
              "so",
              "I",
              "can",
              "understand",
              "designs",
              "well",
              "and",
              "builds",
              "effective",
              "communication",
              "between",
              "team",
              "members.",
            ].map((word, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {word}{" "}
              </div>
            ))}
          </div>
        </p>
        <h2 className="BoldTitle_boldTitle">
          <span
            className="BoldTitle_boldTitleLeft"
            data-aos="fade-right"
            style={{
              translate: "none",
              route: "none",
              scale: "none",
              transform: "translate(-24.0128%, 0%) translate3d(0px, 0px, 0px)",
            }}
          >
            {"Creative".split("").map((char, index) => (
              <div
                key={index}
                style={{ position: "relative", display: "inline-block" }}
              >
                {char}
              </div>
            ))}
          </span>
          <span data-aos="fade-in">Frontend</span>
          <span className="BoldTitle_boldTitleRight" data-aos="fade-left">
            {"Developer".split("").map((char, index) => (
              <div
                key={index}
                style={{ position: "relative", display: "inline-block" }}
              >
                {char}
              </div>
            ))}
          </span>
        </h2>
        <p
          className="BoldTitle_paragraph BoldTitle_paragraphAlt"
          data-aos="fade-up"
        >
          <div
            className="TextReveal_splitLine"
            style={{
              display: "block",
              textAlign: "start",
              position: "relative",
            }}
          >
            {[
              "Currently,",
              "I",
              "live",
              "in",
              "Seattle.",
              "In",
              "my",
              "personal",
              "life,",
              "I",
              "love",
              "to",
              "travel",
              "with",
              "my",
              "backpack,",
              "watch",
              "documentaries",
              "about",
              "geography,",
              "and",
              "explore",
              "new",
              "traditional",
              "music.",
            ].map((word, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {word}{" "}
              </div>
            ))}
          </div>
        </p>
        <div
          className="Blobs_blob Blobs_v3 BoldTitle_blob"
          data-aos="zoom-in"
        ></div>
      </div>
    </section>
  );
};

export default MeCreative;
