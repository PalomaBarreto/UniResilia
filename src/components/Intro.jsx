import React from "react";
import styled from "styled-components";
import campus from "../assets/campus.jpg"

function Intro(props) {
  return (
    <Principal>
      <Titulo>
        <Nome>{props.title}</Nome>
        <P>{props.description}</P>
      </Titulo>
      <Img src={campus}></Img>
    </Principal>
  );
}

const Principal = styled.section`
margin-top: 3px;
background-color: var(--navy);
display: flex;
justify-content: center;
align-content: center;
height: 270px;
display: flex;
justify-content: sapce-evenly;
flex-direction: column;
flex-wrap: wrap;

`;
const Titulo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60%;
animation: move 1s;

@keyframes move {
  from {
    left: 2%;
  }
  to {
    left: 85%;
  }
}

`;

const Nome = styled.h2`
align-self: start;
font-size: 40px;
color: #fb9224;
margin: 20px;
text-shadow: 1px 1px 4px var(--yellow);
`;
const P = styled.p`
  align-self: start;
  color: white;
  margin: 20px;
`;
const Img = styled.img`
  align-self: end;
  height: 250px;
  box-shadow: 5px 7px 10px var(--black);
  border-radius: 5px; 
  margin: 20px;
  animation: go-back 1s;

  @keyframes go-back {
    from {
      transform: translateX(400px);
    }
    to {
      transform: translateX(0);
    }
  } 
`;



export default Intro;
