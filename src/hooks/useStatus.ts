import { useMapContext } from "../context/mapContext";
import { url } from "../util/constants";
import { useEffect } from "react";

const useStatus = () => {
  const { mapActions } = useMapContext();

  const getStatus = (url: string) => {
    return fetch(url)
  }

  const trackISS = () => {
    getStatus(url).then(async result => {
      const iss = await result.json();

      const parsedLatitude = await parseFloat(iss.latitude);
      const parsedLongitude = await parseFloat(iss.longitude);
      const parsedAltitude = await parseFloat(iss.altitude);
      const parsedVelocity = await parseFloat(iss.velocity);
      const parsedTimestamp = await parseInt(iss.timestamp)

      mapActions.setStatus({
        latitude: parsedLatitude,
        longitude: parsedLongitude,
        altitude: parsedAltitude,
        velocity: parsedVelocity,
        visibility: iss.visibility,
        timestamp: parsedTimestamp
      });

    });
  }

  const updateStatus = () => {
    setInterval(trackISS, 5000);
  }

  useEffect(() => {
    updateStatus();
  }, [])
}

export default useStatus;