import { useMapContext } from "../context/mapContext";
import { url } from "../util/constants";
import { useEffect } from "react";

const useLocation = () => {
  const { mapActions } = useMapContext();

  const getLocation = (url: string) => {
    return fetch(url)
  }

  const updateLocation = () => {
    getLocation(url).then(async result => {
      const location = await result.json();

      const parsedLatitude = await parseFloat(location.iss_position.latitude);
      const parsedLongitude = await parseFloat(location.iss_position.longitude);
      
      mapActions.setCoordinates({latitude: parsedLatitude, longitude: parsedLongitude});
    });
  }


  const moveMarker = () => {
    setInterval(updateLocation, 5000);
  }

  useEffect(() => {
    moveMarker();
  }, []);
}

export default useLocation;