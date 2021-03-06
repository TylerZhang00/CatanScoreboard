import styled from "styled-components";

export const IndividualGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: absolute;
`;

export const IndividualGameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 2px;
  border-radius: 12px;
  margin: 2rem;
  padding: 1rem;
  text-align: center;
  font-weight: 200;
  width: 10rem;
  height: 10rem;
  background: #eeeeee;
  color: #252525;
`;

export const HeaderContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40%;
  width: 100%;
  background: #2d3842;
  color: white;
  position: fixed;
  top: 0;
`;

export const InformationColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  text-align: center;
  height: 90%;
`;

export const PlayerImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ScoreContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 100%;
  text-align: center;
`;

export const SubTitleText = styled.div`
  font-weight: 200;
`;

export const TextInformationDiv = styled.div`
  background: black;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0px;
`;

export const TitleDiv = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
  height: 5%;
  padding: 5px;
  width: 100%;
  margin: 5px;
  font-size: x-large;
  font-weight: 200;
`;

export const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
`;

export const GoBackButton = styled.button`
  width: 3.5rem;
  height: 2rem;
  background: transparent;
  margin: 5px;
  color: white;
  border-radius: 6px;
`;

export const HexagonDiv = styled.div`
  position: relative;
  flex-direction: column;
  width: 300px;
  height: 173.21px;
  background-color: #252525;
  margin: 86.6px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  font-weight: 200;
  color: #eeeeee;

  &::before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
  }

  &::before {
    bottom: 100%;
    border-bottom: 86.6px solid #252525;
  }

  &::after {
    top: 100%;
    width: 0;
    border-top: 86.6px solid #252525;
  }
`;

export const SpacingDiv = styled.div`
  height: 25px;
  background: transparent;
`;

export const GameNumberTitle = styled.div`
  padding: 1rem;
`;

export const GameHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DeleteGameButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  position: absolute;
  right: 0;
  width: 2rem;
  height: 2rem;
  background: red;
  color: white;
  margin-right: 1rem;
`;

export const ToggleSeasonButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  margin: 0.5rem;
  padding: 2px;
  border-radius: 5px;
  background: #423826;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div``;

export const ScoreInput = styled.input`
  text-align: center;
  width: 5rem;
  color: #252525;
  background: #eeeeee;
  border-radius: 6px;
`;

export const SaveField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorText = styled.div`
  text-align: center;
  color: salmon;
`;

export const ToggleSeasonButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const NameScore = styled.div`
  padding: 5px;
  display: flex;
  width: 10rem;
  justify-content: space-between;
`;
