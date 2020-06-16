import React from "react";
import MAP from "../constants/MAP";
import "./Status.css";

function Status({ milliseconds }) {
  return (
    <div className="status">
      {milliseconds
        ? `Loaded ${MAP.MAX_LOCATION_INDEX * 1000} POI in: ${milliseconds / 1000.0} seconds`
        : `Loading ${MAP.MAX_LOCATION_INDEX * 1000} POI...`}
    </div>
  );
}

export default Status;
