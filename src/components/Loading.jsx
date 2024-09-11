/* eslint-disable react/prop-types */
// src/LoadingAnimation.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";

const Loading = ({ show }) => {
  return (
    show && (
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    )
  );
};

export default Loading;
