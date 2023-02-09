import styled from "styled-components";
import Map from "./Map";
import useStatus from "../hooks/useStatus";
import { useMapContext } from '../context/mapContext';
import Loading from "./Loading";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 20px;
  opacity: 0.9;

`
const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const AppContainer = () => {
  const { mapState } = useMapContext();
  useStatus();

  return(
    <>
    {mapState.status.loading ? <Loading /> : 
    <MainContainer>
      <MapContainer>
        <Map />
      </MapContainer> 
    </MainContainer>
    }
    </>
  )
}

export default AppContainer;