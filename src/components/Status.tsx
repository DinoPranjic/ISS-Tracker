import styled from "styled-components";
import { useMapContext } from "../context/mapContext";

const StatusContainer = styled.div`
  margin-left: 0.5vw;
  display: flex;
  flex-direction: column;
`

const Status = () => {
  const { mapState } = useMapContext();

  return(
    <StatusContainer>
      <p><strong>Current Position:</strong> [{mapState.status.latitude.toFixed(2)}, {mapState.status.longitude.toFixed(2)}]</p>
      <p><strong>Current Altitude:</strong> {mapState.status.altitude.toFixed(2)} km</p>
      <p><strong>Current Speed:</strong> {mapState.status.velocity.toFixed(2)} km/h</p>
      {/* <p><strong>Current Time:</strong> {formattedTime}</p> */}
      <p>The ISS is currently in {mapState.status.visibility === 'daylight' ? (<span><strong>daylight.</strong></span>) : (<span><strong>the Earth's shadow.</strong></span>)}</p>
    </StatusContainer>
  )
}

export default Status;