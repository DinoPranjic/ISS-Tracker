import React from "react";
import styled from "styled-components";


function Header () {

  return(
    <HeaderContainer>
      <HeaderLeft>
        ISS Tracker
      </HeaderLeft>

      <HeaderRight>
        Github Logo here.
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #202225;
  opacity: 0.9;

`

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;
  margin-right: 10px;
`