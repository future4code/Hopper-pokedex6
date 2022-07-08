import styled from "styled-components";

export const DivButtons = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  padding: 0;
  margin: 0;

  justify-content: space-around;
`;
export const ButtonDetails = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  color: gray;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease;
  align-self: center;
  font-size: 0.4em;
  font-weight: 200;
  align-content: center;
  margin-left: 0.2em;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.5s;
  img {
    width: 60px;
  }
  :hover {
    background-color: transparent;
    color: transparent;
    transform: scale(1.5);
  }
  :active {
    background-color: transparent;
  }
`;

export const ButtonAdd = styled.button`
  border: 1px solid transparent;
  background-color: transparent;
  color: gray;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease;
  align-self: center;
  font-size: 0.4em;
  font-weight: 200;
  align-content: center;
  margin-left: 0.2em;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.5s;
  img {
    width: 50px;
  }
  :hover {
    background-color: transparent;
    color: transparent;
    transform: scale(1.5);
  }
  :active {
    background-color: transparent;
  }
`;

export const ButtonRemove = styled.button`
border: 1px solid transparent;
  background-color: transparent;
  color: gray;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease;
  align-self: center;
  font-size: 0.4em;
  font-weight: 200;
  align-content: center;
  margin-left: 0.2em;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.5s;
  img {
    width: 50px;
  }
  :hover {
    background-color: transparent;
    color: transparent;
    transform: scale(1.5);
  }
  :active {
    background-color: transparent;
  }
`;

export const Image = styled.img`
  margin: auto;
  font-weight: lighter;
  width: 60%;
 `;
export const DivCard = styled.div`
  display: flex;
  width: 250px;
  height: 280px;
  flex-direction: column;

  background: rgba(8, 5, 8, 0.2);
  align-items: center;
  justify-content: space-between;
  border: 1px black solid;
  margin-top: 60px;
  padding: 10px;
  border-radius: 5px;
`;

export const BorderDiv = styled.div`
  background-color: #ffffff;
  height: 165px;
  width: 210px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 10px;
  margin: 5px;
  background-color: #1E90FF;
`;