import styled from "styled-components";

export const OutterGameContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2d3842;
  color: white;
`;

export const ScrollableContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40%;
  height: 60%;
  width: 100%;
  overflow-y: scroll;
  background: slategray;
`;
export const GoBackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8f836f;
  color: white;
  bottom: 0;
  margin-bottom: 4px;
  width: 10rem;
  border-radius: 5px;
  height: 2rem;
`;
