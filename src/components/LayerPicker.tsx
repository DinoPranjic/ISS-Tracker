import styled from "styled-components";
import { useMapContext } from "../context/mapContext";
import { streetLayer, hybridLayer, satelliteLayer, terrainLayer } from '../util/constants';
import { ITileLayer } from "../context/types";

const LayerPickerContainer = styled.div`
  margin-left: 0.5vw;

  span {
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
      <p><strong>View:</strong> <span onClick={() => {changeView(streetLayer)}}>Street</span> | <span onClick={() => {changeView(hybridLayer)}}>Hybrid</span> | <span onClick={() => {changeView(satelliteLayer)}}>Satellite</span> | <span onClick={() => {changeView(terrainLayer)}}>Terrain</span></p>
    </LayerPickerContainer>
  )
}

export default LayerPicker;