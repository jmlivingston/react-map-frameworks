import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import useDataInterval from "../hooks/useDataInterval";
import "./Mapbox.css";
import Status from "./Status";

function MapboxReactMapGl() {
  const startTime = useRef();
  const [locations, setLocations] = useState([]);
  const mapRef = useRef();
  const [loadTime, setLoadTime] = useState();

  const position = {
    longitude: -98,
    latitude: 35,
    zoom: 4,
  };

  useEffect(() => {
    startTime.current = new Date();
    mapRef.current.getMap().setStyle("mapbox://styles/mapbox/light-v10");
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
      <ReactMapGL
        ref={mapRef}
        width="100%"
        height="100%"
        {...position}
        mapboxApiAccessToken="pk.eyJ1IjoiamxpdmluZ3N0b24tb2NlYW5lZXJpbmciLCJhIjoiY2tiaGVuZnkwMDJnMzJ5azBhMWZ0MTFrNyJ9.iP7Tpd6B-2W4MQCfBhIMYA">
        {locations.map((location) => (
          <Marker key={location.id} latitude={location.latitude} longitude={location.longitude} className="marker" />
        ))}
      </ReactMapGL>
    </div>
  );
}

export default MapboxReactMapGl;
