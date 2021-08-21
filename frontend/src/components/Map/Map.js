import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    longitude: 31.27419,
    latitude: 58.52557,
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      maxZoom={20} //Макксимальный зум
      minZoom={10} //Минимальный зум
      {...viewport}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={
        "pk.eyJ1Ijoib2JvdyIsImEiOiJja3NqMDVpaTIwZ3J5MnlveG52Nzd2NTg4In0.s5RnIJm4JbS8-Egiq5GYrg"
      }
      mapStyle={"mapbox://styles/obow/ckskyhxdf39u918s0wpmuiqk3/draft"}
    ></ReactMapGL>
  );
};
