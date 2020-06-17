import { Map } from "@esri/react-arcgis";
import React, { useEffect, useRef, useState } from "react";
import "./ArcGIS.css";
import ArcGISEsriReactMarkers from "./ArcGISEsriReactMarkers";
import Status from "./Status";

function ArcGISEsriReact() {
  const [loadTime, setLoadTime] = useState();
  const viewProperties = {
    center: [-98, 35],
    zoom: 5,
  };
  const startTime = useRef();
  const mapProperties = {
    basemap: "osm",
  };

  useEffect(() => {
    startTime.current = new Date();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Status milliseconds={loadTime} />
      <Map mapProperties={mapProperties} viewProperties={viewProperties}>
        <ArcGISEsriReactMarkers
          onComplete={(value) => {
            setLoadTime(new Date() - startTime.current);
          }}
          startTime={startTime}
        />
      </Map>
    </>
  );
}

export default ArcGISEsriReact;
