import styled from "styled-components";
import LayerPicker from "./LayerPicker";

const SidebarContainer = styled.div`
  background-color: #202225;
  color: white;
  flex: 0.3;
  max-width: 1000px;
  opacity: 0.8;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 2.5vw;
  border: black 2px solid;
  border-radius: 2%;
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



const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <strong>ISS Tracker</strong>
        <i className="fa-brands fa-github"></i>
      </SidebarHeader>
      <hr />
      Map Controls:
      <LayerPicker />
      <hr />
    </SidebarContainer>
  )
}

export default Sidebar;