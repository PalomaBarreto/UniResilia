import React from "react";
import styled from "styled-components";
import campus from "../assets/campus.jpg"

function Intro(props) {
  return (
    <Principal>
      <Titulo>
        <Nome>{props.title}</Nome>
        <P>{props.description}</P>
        <Img src={campus}></Img>
      </Titulo>
    </Principal>
  );
}

const Principal = styled.div`
display: flex;
justify-content: center;

`;
const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #2a1a5e;
  // border-radius: 5px;
  // border: rgb(0, 0, 0) solid 2px;
`;

const Nome = styled.h2`
  align-self: start;
  font-size: 40px;
  color: #fb9224;
  margin: 20px;
`;
const P = styled.p`
  align-self: start;
  color: white;
`;
const Img = styled.img`
  align-self: end;
  width: 200px;
  color: white;
`;

export default Intro;
