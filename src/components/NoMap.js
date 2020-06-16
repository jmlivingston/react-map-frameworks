import React, { useEffect, useRef, useState } from "react";
import useDataInterval from "../hooks/useDataInterval";
import Status from "./Status";

function NoMap() {
  const startTime = useRef();
  const [loadTime, setLoadTime] = useState();
  const [locations, setLocations] = useState([]);

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
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            {location.latitude} / {location.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoMap;
