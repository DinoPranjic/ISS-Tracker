import styled from 'styled-components';
import { useMapContext } from "../context/mapContext";

const CenterControlContainer = styled.div`
  margin-left: 0.5vw;

  button {
    all: unset;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }
`

const CenterControl = () => {
  const { mapState, mapActions } = useMapContext();

  const changeCenter = (lat: number, long: number, key: string) => {
    mapActions.setCenter({
      latitude: lat,
      longitude: long,
      key: key
    })
  }

  return(
    <CenterControlContainer>
      <p><strong>Center:</strong> <button onClick={() => {changeCenter(mapState.status.latitude, mapState.status.longitude, 'iss')}}>ISS</button> | <button onClick={() => {changeCenter(0, 0, 'center')}}>Center of Map</button></p>
    </CenterControlContainer>
  )
}

export default CenterControl;