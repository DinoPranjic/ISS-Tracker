import styled from 'styled-components';
import { useMapContext } from "../context/mapContext";

const CenterControlContainer = styled.div`
  margin-left: 0.5vw;

  span {
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
      <p><strong>Center:</strong> <span onClick={() => {changeCenter(mapState.status.latitude, mapState.status.longitude, 'iss')}}>ISS</span> | <span onClick={() => {changeCenter(0, 0, 'center')}}>Center of Map</span></p>
    </CenterControlContainer>
  )
}

export default CenterControl;