import styled from "styled-components";
import LayerPicker from "./LayerPicker";
import CenterControl from "./CenterControl";
import Status from "./Status";
import { openGithub } from "../util/constants";

const SidebarContainer = styled.div`
  background-color: #202225;
  color: white;
  flex: 0.4;
  opacity: 0.8;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 2.5vw;
  border: #36393F 2px solid;
  border-radius: 2%;

  hr {
    border: 0.5px solid #36393F;
  }

  p {
    margin-left: 0.5vw;
  }

`
const SidebarHeader = styled.div`
  display: flex;
  margin-top: 1vh;
  justify-content: space-between;
  margin-left: 0.5vw;
  margin-right: 0.5vw;


  i {
    cursor: pointer;
  }
`

const ControlsContainer = styled.div`
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  display: flex;
  flex-direction: column;

`

const InfoContainer = styled.div`
  margin-left: 0.5vw;
  display: flex;

`



const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <strong>ISS Tracker</strong>
        <i className="fa-brands fa-github" onClick={openGithub}></i>
          </SidebarHeader>
            <hr />
            <p>Drag the map to move around. Zoom in or out with scroll wheel. Results update every 5 seconds.</p>
            <hr />
          <ControlsContainer>
            <LayerPicker />
            <CenterControl />          
          </ControlsContainer>
            <hr />
          <InfoContainer>
            <Status />
          </InfoContainer>
    </SidebarContainer>
  )
}

export default Sidebar;