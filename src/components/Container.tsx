import styled from "styled-components";
import Map from "./Map";
import useStatus from "../hooks/useStatus";


const MapContainer = styled.div`
display: flex;
flex: 0.6;
justify-content: center;
align-items: center;
`
const Container = () => {
  useStatus();

  return(
    <MapContainer>
      <Map />
    </MapContainer>
  )
}

export default Container;