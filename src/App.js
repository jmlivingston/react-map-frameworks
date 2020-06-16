import React, { lazy, Suspense } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const ArcGIS = lazy(() => import("./components/ArcGIS"));
const LeafletReact = lazy(() => import("./components/LeafletReact"));
const Leaflet = lazy(() => import("./components/Leaflet"));
const MapboxReactMapGl = lazy(() => import("./components/MapboxReactMapGl"));
const Mapbox = lazy(() => import("./components/Mapbox"));
const NoMap = lazy(() => import("./components/NoMap"));

function App({ location }) {
  return (
    <>
      <select
        className="picker"
        value={location.pathname}
        onChange={(e) => (window.location.href = window.location.href.split("#")[0] + "#" + e.target.value)}>
        <option value="/arcgis">ArcGIS (React)</option>
        <option value="/leaflet">Leaflet (React)</option>
        <option value="/leaflet-react">Leaflet (React + leaflet-react package)</option>
        <option value="/mapbox-react-map-gl">Mapbox (React + react-map-gl)</option>
        <option value="/mapbox">Mapbox (React)</option>
        <option value="/no-map">No Map</option>
      </select>
      <Suspense fallback={null}>
        <Switch>
          <Route exact={true} path="/arcgis">
            <ArcGIS />
          </Route>
          <Route exact={true} path="/leaflet-react">
            <LeafletReact />
          </Route>
          <Route exact={true} path="/leaflet">
            <Leaflet />
          </Route>
          <Route exact={true} path="/mapbox-react-map-gl">
            <MapboxReactMapGl />
          </Route>
          <Route exact={true} path="/mapbox">
            <Mapbox />
          </Route>
          <Route exact={true} path="/no-map">
            <NoMap />
          </Route>
          <Route path="/">
            <ArcGIS />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default withRouter(App);
