import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const LoadingMessage = styled.h2`
  color: black;
  font-size: 28px;
  -webkit-text-fill-color: #fff;
    -webkit-text-stroke: 1px;
`

const LoadingIcon = styled.span`
  font-size: 28px;
  animation: rotation 2s infinite linear;
  margin-right: 5px;


  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`

const Loading = () => {
  return(
    <LoadingContainer>
      <LoadingIcon>
        🛰
      </LoadingIcon>
      <LoadingMessage>
        Finding the ISS...
      </LoadingMessage>
    </LoadingContainer>
  )
}

export default Loading;