import styled from 'styled-components';
import { useMapContext } from "../context/mapContext";
import { useState } from 'react';

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
  const [checked, SetChecked] = useState(false);

  const handleCheck = () => {
    SetChecked(prevCheck => !prevCheck)

    if (checked === true) {
      changeCenter(mapState.center.latitude, mapState.center.longitude, 'iss');
    } 
    
    if (checked === false) {
      changeCenter(0, 0, 'center');
    }
  };

  const changeCenter = (lat: number, long: number, key: string) => {
    mapActions.setCenter({
      latitude: lat,
      longitude: long,
      key: key
    })
  }

  return(
    <CenterControlContainer>
      <input type={'checkbox'} checked={checked} onChange={handleCheck}></input>
      {/* <p><strong>Center:</strong> <button onClick={() => {changeCenter(mapState.status.latitude, mapState.status.longitude, 'iss')}}>ISS</button> | <button onClick={() => {changeCenter(0, 0, 'center')}}>Center of Map</button></p> */}
    </CenterControlContainer>
  )
}

export default CenterControl;