import { loadModules } from "esri-loader";
import { useRef } from "react";
import useDataInterval from "../hooks/useDataInterval";
import "./ArcGIS.css";

function ArcGISEsriReactMarkers({ onComplete, view }) {
  let Graphic = useRef();

  useDataInterval(async (values, isComplete) => {
    if (!Graphic.current) {
      const [graphic] = await loadModules(["esri/Graphic"], {
        css: true,
      });
      Graphic.current = graphic;
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

    view.graphics.addMany(pointGraphics);

    if (isComplete) {
      onComplete();
    }
  });
  return null;
}

export default ArcGISEsriReactMarkers;
