import styled from "styled-components";
import { useMapContext } from "../context/mapContext";
import { streetLayer, hybridLayer, satelliteLayer, terrainLayer } from '../util/constants';
import { ITileLayer } from "../context/types";

const LayerPickerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const LayerButton = styled.button`
  cursor: pointer;
  background: #0072ff;
  border-radius: 32px;
  border: none;
  height: 30px;
  padding: 0 20px;
  margin-top: 5px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;

  :hover {
    background:#0050b3;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media(max-width: 1100px) {
    margin-top: 0px;
  }
`;

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
      <ButtonContainer>
      <LayerButton onClick={() => {changeView(streetLayer)}}>Street</LayerButton>
      <LayerButton onClick={() => {changeView(terrainLayer)}}>Terrain</LayerButton>
      <LayerButton onClick={() => {changeView(satelliteLayer)}}>Satellite</LayerButton>
      <LayerButton onClick={() => {changeView(hybridLayer)}}>Hybrid</LayerButton>
      </ButtonContainer>
    </LayerPickerContainer>
  )
};

export default LayerPicker;