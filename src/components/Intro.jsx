import React from "react";
import styled from "styled-components";
import campus from "../assets/campus.jpg"

function Intro() {
  return (
    <Principal>
      <Titulo>
        <Nome>UNIRESILIA</Nome>
        <P>Seu futuro na prática!</P>
        <Img src={campus}></Img>
      </Titulo>
    </Principal>
  );
}

const Principal = styled.div`
display: flex;
justify-content: center;
background-color: #adb5bd;

`
const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
   width: 600px;
  height: 300px;
  background-color: #2a1a5e;
   border-radius: 10px;
   border: 2px solid darkorange;
   box-shadow: 10px 5px 5px gray;
   margin-top: 15px;
   margin-bottom: 50px;
`;

const Nome = styled.h2`
  align-itens:center;
  font-size: 40px;
  color: #fb9224;
  
`
const P = styled.p`
align-itens: center;
color: ivory;
  font-size: 200%;
  ;
`;
const Img = styled.img`
  align-itens: center;
  width: 400px;
  height:200px;
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export default Intro;
