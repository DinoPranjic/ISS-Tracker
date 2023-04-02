import styled from "styled-components";
import { useMapContext } from "../context/mapContext";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 1100px) {
    margin-top: 10px;
  }
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StatusTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const StatusResult = styled.span `
  font-size: 18px;
  margin-left: 5px;

  @media (max-width: 1100px) {
    margin-left: 0px;
  }
`;

const Visibility = styled.span`
  display: block;
  font-size: 18px;
  margin-top: 20px;
`;

const Status = () => {
  const { mapState } = useMapContext();

  return(
    <MainContainer>
      <StatusContainer>
      <StatusTitle>Position:</StatusTitle>
      <StatusResult>[{mapState.status.latitude.toFixed(2)}, {mapState.status.longitude.toFixed(2)}]</StatusResult>  
      </StatusContainer>

      <StatusContainer>
        <StatusTitle>Altitude:</StatusTitle>
        <StatusResult> {mapState.status.altitude.toFixed(2)} km</StatusResult>
      </StatusContainer>

      <StatusContainer>
        <StatusTitle>Velocity:</StatusTitle>
        <StatusResult>{mapState.status.velocity.toFixed(2)} km/h</StatusResult>
      </StatusContainer>
      
      <Visibility>The ISS is currently in {mapState.status.visibility === 'daylight' ? (<strong>daylight.</strong>) : (<strong>the Earth's shadow.</strong>)}</Visibility>

    </MainContainer>
  )
};

export default Status;