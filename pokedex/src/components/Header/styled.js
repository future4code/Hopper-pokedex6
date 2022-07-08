import styled from "styled-components";

export const DivHeader = styled.header`
  width: 100vw;
  height: 40rem;
  background-color: #ef5350;
  height: 90px;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  img {
    width: 350px;
    height: 80px;
    justify-content: center;
  }
  button{
    justify-items: flex-start;
  }
 `;

export const Botao = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 30px;
  border-color: #8B8989;
  background-color: #EEDD82;
  color: #0000FF;
  :hover {
    background-color: #EEDD82;
    transform: scale(1.5);
  }
  :active {
    background-color: transparent;
  }

`;