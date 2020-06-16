import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useRef, useState } from "react";
import useDataInterval from "../hooks/useDataInterval";
import "./Mapbox.css";
import Status from "./Status";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamxpdmluZ3N0b24tb2NlYW5lZXJpbmciLCJhIjoiY2tiaGVuZnkwMDJnMzJ5azBhMWZ0MTFrNyJ9.iP7Tpd6B-2W4MQCfBhIMYA";

function Mapbox() {
  const startTime = useRef();
  const mapRef = useRef();
  const [loadTime, setLoadTime] = useState();
  const mapBoxGl = useRef();

  const position = {
    lng: -98,
    lat: 35,
    zoom: 4,
  };

  useEffect(() => {
    startTime.current = new Date();
    mapBoxGl.current = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [position.lng, position.lat],
      zoom: position.zoom,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDataInterval((values, isComplete) => {
    values.forEach((value) => {
      var el = document.createElement("div");
      el.className = "marker";
      new mapboxgl.Marker(el).setLngLat([value.longitude, value.latitude]).addTo(mapBoxGl.current);
    });

    if (isComplete) {
      setLoadTime(new Date() - startTime.current);
    }
  });

  return (
    <>
      <Status milliseconds={loadTime} />
      <div className="map-container" ref={mapRef}></div>
    </>
  );
}

export default Mapbox;
