import React from "react";
import styled from "styled-components";
import campus from "./campus.jpg"
function Intro() {
  return (
    <Titulo>
      <Nome>UNIRESILIA</Nome>
      <P>Lorem ipsum is placeholder text commonly used in the graphic</P>
      <Img src={campus}></Img>
    </Titulo>
  );
}

const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;
  background-color: #2a1a5e;
  border-radius: 5px;
  border: rgb(0, 0, 0) solid 2px;
`;

const Nome = styled.h2`
  align-self: start;
  font-size: 40px;
  color: #fb9224;
`;
const P = styled.p`
  align-self: start;
  color: white;
`;
const Img = styled.img`
  align-self: end;
  width: 300px;
  color: white;
`;

export default Intro;
