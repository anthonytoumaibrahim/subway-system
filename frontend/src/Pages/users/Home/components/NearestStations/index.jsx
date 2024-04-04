import { useEffect } from "react";

import { useGeolocation } from "@uidotdev/usehooks";

import { findNearest } from "geolib";

const NearestStations = ({ stations }) => {
  const state = useGeolocation();

  const findNearestStation = () => {
    if (stations.length > 0) {
      console.log(
        findNearest(
          { latitude: state.latitude, longitude: state.longitude },
          stations
        )
      );
    }
  };

  useEffect(() => {
    if (stations.length > 0 && !state.loading && !state.error) {
      findNearestStation();
    }
  }, [stations, state.loading]);

  return (
    <div className="user-container">
      {state.loading && <p>Please wait, loading...</p>}
      {state.error && (
        <p>Please allow access to your location to get the nearest stations.</p>
      )}
    </div>
  );
};

export default NearestStations;
