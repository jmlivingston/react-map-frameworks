import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef, useState } from "react";
import CircleMarker from "react-leaflet/es/CircleMarker";
import Map from "react-leaflet/es/Map";
import TileLayer from "react-leaflet/es/TileLayer";
import useDataInterval from "../hooks/useDataInterval";
import "./Leaflet.css";
import Status from "./Status";

function LeafletReact() {
  const startTime = useRef();
  const corner1 = Leaflet.latLng(-90, -Infinity);
  const corner2 = Leaflet.latLng(90, Infinity);
  const maxBounds = Leaflet.latLngBounds(corner1, corner2);
  const [locations, setLocations] = useState([]);
  const [loadTime, setLoadTime] = useState();
  const position = [35, -98];

  useEffect(() => {
    startTime.current = new Date();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDataInterval((values, isComplete) => {
    setLocations([...locations, ...values]);
    if (isComplete) {
      setLoadTime(new Date() - startTime.current);
    }
  });

  return (
    <div className="map-container">
      <Status milliseconds={loadTime} />
      <Map
        id="map-container"
        className="map-container"
        center={position}
        zoom={5}
        minZoom={5}
        maxZoom={8}
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <CircleMarker key={location.id} center={[location.latitude, location.longitude]} radius={6} />
        ))}
      </Map>
    </div>
  );
}

export default LeafletReact;
