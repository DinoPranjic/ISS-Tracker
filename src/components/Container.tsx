import styled from "styled-components";
import Map from "./Map";
import useStatus from "../hooks/useStatus";
import { useMapContext } from '../context/mapContext';


const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = () => {
  const { mapState } = useMapContext();
  useStatus();

  return(
    <>
    {mapState.status.loading ? <MapContainer><p>loading...</p></MapContainer> : 
        <MapContainer>
          <Map />
        </MapContainer> 
    }
    </>
  )
}

export default Container;