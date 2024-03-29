import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 10px 0 10px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: black;
  font-size: 36px;
  -webkit-text-fill-color: #fff;
    -webkit-text-stroke: 1px;
`;

const Header = () => {
  return(
    <HeaderContainer>
      <Title>ISS Tracker</Title>
    </HeaderContainer>
  )
};

export default Header;