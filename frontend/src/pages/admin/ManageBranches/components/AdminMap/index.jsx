import { useState } from "react";

// Use location hook
import { useGeolocation } from "@uidotdev/usehooks";

// Pigeon Maps
import { Map, Marker } from "pigeon-maps";
// import { osm } from "pigeon-maps/providers";
import { maptiler } from "pigeon-maps/providers";

const maptilerProvider = maptiler("Zj9yrH5JXUOIXO4Zsxqu", "outdoor-v2");

const AdminMap = ({ updateCoords = () => {}, markerLatLong = [0, 0] }) => {
  const locationState = useGeolocation();
  return (
    <>
      {locationState.loading && (
        <p>Please wait, loading geolocation information...</p>
      )}
      {locationState.error && (
        <p className="font-bold text-error">
          Please allow access to your location to get the best results.
        </p>
      )}
      <Map
        provider={maptilerProvider}
        height={640}
        center={
          markerLatLong[0] === ""
            ? [locationState.latitude, locationState.longitude]
            : markerLatLong
        }
        zoom={12}
        onClick={(event) => updateCoords(event.latLng)}
      >
        <Marker anchor={markerLatLong} width={50} color="#66b896" />
      </Map>
    </>
  );
};

export default AdminMap;
