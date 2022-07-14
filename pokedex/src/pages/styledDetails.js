import styled from "styled-components";

export const GlobalStyle = styled.div`
   width: 100vw;
   height: 850px;
   font-family: 'Inconsolata', monospace;
   align-content: center;
   align-items: center;
   background-color: #FAFAD2; 
 `;

 export const ContainerGeral = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 300px;
  justify-content: center;
 `;

 export const ContainerImages = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  column-gap: 30px;
  width: 60%;
  height: 600px;
  margin-top: 30px;
  padding: 20px;
  font-family: 'Inconsolata', monospace;
  align-items: center;
  background-color: #1E90FF;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ContainerDiv = styled.span`
  align-items: center;
  justify-content: space-between;
  justiffy-items: center;
  justify-self: center;
  row-gap: 10px;
  width: 70%;
  height: 100%;
  margin-top: 30px;
  padding: 10px;
  font-family: 'Inconsolata', monospace;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  margin-right: 50px;
  border-radius: 10px;
`;


export const ImagensCard = styled.div`
    border: 1px black solid;
    border-radius: 10px;
    background-color: #FAFAD2; ;
    img{
        width: 250px;
        heigth: 200px;
    }
 `;







