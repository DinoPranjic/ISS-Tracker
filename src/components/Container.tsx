import styled from "styled-components";
import Map from "./Map";
import useLocation from '../hooks/useLocation';
import { useEffect, useState, useRef } from 'react';

const MapContainer = styled.div`
display: flex;
height: 100vh;
justify-content: center;
`
const Container = () => {
  useLocation();

  return(
    <MapContainer>
      <Map />
    </MapContainer>
  )
}

export default Container;