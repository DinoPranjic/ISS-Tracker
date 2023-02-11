import styled from "styled-components";
import Map from "./Map";
import useStatus from "../hooks/useStatus";
import { useMapContext } from '../context/mapContext';
import Loading from "./Loading";
import Status from "./Status";
import LayerPicker from "./LayerPicker";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  opacity: 0.8;

  hr {
    border: 1px solid black;
    width: 100%;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 24px;
`;

const Description = styled.p`
  color: black;
  font-size: 18px;
`

const AppContainer = () => {
  const { mapState } = useMapContext();
  useStatus();

  return(
    <>
    {mapState.status.loading ? <Loading /> : 
      <MainContainer>
        <ControlContainer>
          <Description>Drag the map to move around. Zoom in or out with scroll wheel. Results update every five seconds.</Description>
          <Status />
          <hr />
          <Title>Map View</Title>
          <LayerPicker />
        </ControlContainer>
      <MapContainer>
        <Map />
      </MapContainer> 
      </MainContainer>
    }
    </>
  )
}

export default AppContainer;