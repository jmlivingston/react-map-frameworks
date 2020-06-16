import { loadModules } from "esri-loader";
import React, { useEffect, useRef, useState } from "react";
import useDataInterval from "../hooks/useDataInterval";
import "./ArcGIS.css";
import Status from "./Status";

function ArcGIS() {
  const [loadTime, setLoadTime] = useState();
  const mapRef = useRef();
  const startTime = useRef();
  let Graphic = useRef();
  let Map = useRef();
  let MapView = useRef();
  let view = useRef(null);

  useEffect(() => {
    startTime.current = new Date();
    return () => {
      if (view) {
        view.current.container = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDataInterval(async (values, isComplete) => {
    if (!Graphic.current) {
      const [map, mapView, graphic] = await loadModules(["esri/Map", "esri/views/MapView", "esri/Graphic"], {
        css: true,
      });
      Map.current = map;
      MapView.current = mapView;
      Graphic.current = graphic;

      view.current = new MapView.current({
        center: [-98, 35],
        container: mapRef.current,
        map: new Map.current({
          basemap: "osm",
        }),
        zoom: 5,
      });
    }
    const pointGraphics = values.map(
      (location) =>
        new Graphic.current({
          geometry: {
            type: "point",
            longitude: location.longitude,
            latitude: location.latitude,
          },
          symbol: {
            type: "simple-marker",
            color: [226, 119, 40],
            size: "12px",
            outline: {
              color: [255, 255, 255],
              width: 0,
            },
          },
        })
    );

    view.current.graphics.addMany(pointGraphics);

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

export default ArcGIS;
