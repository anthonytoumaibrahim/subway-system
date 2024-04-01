// React stuff
import { useState } from "react";

// Use location hook
import { useGeolocation } from "@uidotdev/usehooks";

// Pigeon Maps
import { Map, Marker } from "pigeon-maps";
// import { osm } from "pigeon-maps/providers";
import { maptiler } from "pigeon-maps/providers";

const maptilerProvider = maptiler("Zj9yrH5JXUOIXO4Zsxqu", "outdoor-v2");

const AdminMap = ({ updateCoords = () => {}, markerLatLong = null }) => {
  const locationState = useGeolocation();

  return (
    <>
      {locationState.error && <p>Please enable your location to determine</p>}
      <Map
        provider={maptilerProvider}
        height={300}
        center={[locationState.latitude, locationState.longitude]}
        zoom={12}
        onClick={(event) => updateCoords(event.latLng)}
      >
        <Marker anchor={markerLatLong} width={50} color="#66b896" />
      </Map>
    </>
  );
};

export default AdminMap;
