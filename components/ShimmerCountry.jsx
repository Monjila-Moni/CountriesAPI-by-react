// Shimmer.js
import React from "react";
import "./ShimmerCountry.css";

const Shimmer = ({ width = "100%", height = "20px", style = {} }) => {
  return (
    <div
      className="shimmer-wrapper"
      style={{ width, height, borderRadius: "4px", ...style }}
    >
      <div className="shimmer" />
    </div>
  );
};

export default Shimmer;
