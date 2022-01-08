import React from "react";
import styled from "styled-components";

function Intro() {
  return (
    <Titulo>
      <Nome>UNIRESILIA</Nome>
      <P>Lorem ipsum is placeholder text commonly used in the graphic</P>
      <Img></Img>
    </Titulo>
  );
}

const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: #2a1a5e;
  border-radius: 5px;
  border: rgb(0, 0, 0) solid 2px;
`;

const Nome = styled.h2`
  align-self: start;
  color: #fb9224;
`;
const P = styled.p`
  align-self: start;
  color: white;
`;
const Img = styled.img`
  align-self: start;
  color: white;
`;

export default Intro;
