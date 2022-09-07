import React from "react";
import styled from "styled-components";


function Header () {

  return(
    <HeaderContainer>
      <HeaderLeft>
        
      </HeaderLeft>

      <HeaderRight>
        <i className="fa-brands fa-github"></i>
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
  opacity: 0.8;
  height: 5vh;

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