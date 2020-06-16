import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef, useState } from "react";
import useDataInterval from "../hooks/useDataInterval";
import "./Leaflet.css";
import Status from "./Status";

function Leaflet() {
  const [loadTime, setLoadTime] = useState();
  const map = useRef();
  const mapRef = useRef();
  const startTime = useRef();

  useEffect(() => {
    startTime.current = new Date();
    map.current = leaflet.map(mapRef.current).setView([35, -98], 5);
    leaflet
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDataInterval((values, isComplete) => {
    values.forEach((value) => {
      leaflet.circleMarker([value.latitude, value.longitude], { radius: 6 }).addTo(map.current);
    });
    if (isComplete) {
      setLoadTime(new Date() - startTime.current);
    }
  });

  return (
    <>
      <Status milliseconds={loadTime} />
      <div className="map-container" ref={mapRef} />
    </>
  );
}

export default Leaflet;
