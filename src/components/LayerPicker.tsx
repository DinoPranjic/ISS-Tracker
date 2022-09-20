import styled from "styled-components";
import { useMapContext } from "../context/mapContext";
import { streetLayer, hybridLayer, satelliteLayer, terrainLayer } from '../util/constants';
import { ITileLayer } from "../context/types";

const LayerPickerContainer = styled.div`
  margin-left: 0.5vw;

  button {
    all: unset;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  }




`

const LayerPicker = () => {
  const { mapActions } = useMapContext();

  const changeView = (layer: ITileLayer) => {
      mapActions.setTileLayer({
      url: layer.url,
      maxZoom: layer.maxZoom as number,
      subdomains: layer.subdomains,
      key: layer.key
    }) 
  }

  return (
    <LayerPickerContainer>
      <p><strong>View:</strong> <button onClick={() => {changeView(streetLayer)}}>Street</button> | <button onClick={() => {changeView(hybridLayer)}}>Hybrid</button> | <button onClick={() => {changeView(satelliteLayer)}}>Satellite</button> | <button onClick={() => {changeView(terrainLayer)}}>Terrain</button></p>
    </LayerPickerContainer>
  )
}

export default LayerPicker;