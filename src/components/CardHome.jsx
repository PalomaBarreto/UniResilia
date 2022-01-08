import React from "react";
import styled from "styled-components";

function CardHome() {
  return (
    <DivMain>
      <Ead>
      <Titulo>Ead</Titulo>
        <Linha />
        <Texto>Lorem epsum mussum</Texto>
      </Ead>

      <Flex>
        <Titulo>Flex</Titulo>
        <Linha />
        <Texto>Lorem epsum mussum</Texto>
      </Flex>

      <Presencial>
        <Titulo>Presencial</Titulo>
        <Linha />
        <Texto>Lorem epsum mussum</Texto>
      </Presencial>
    </DivMain>
  );
}

const DivMain = styled.main`
    display: flex;
    justify-content: space-around;
    background-color: #adb5bd;
`;

const Ead = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  width: 260px;
  height: 300px;
  justify-self: center;
  background-color: #2a1a5e;
  box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
`;
const Flex = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  width: 260px;
  height: 300px;
  justify-self: center;
  background-color: #2a1a5e;
  box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
`;
const Presencial = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  width: 260px;
  height: 300px;
  justify-self: center;
  background-color: #2a1a5e;
  box-shadow: 0px 0px 24px -2px rgb(0 0 0 / 100%);
`;
const Titulo = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: #f45905;
`;
const Texto = styled.p`
  color: #badcf5;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;
const Linha = styled.div`
  width: 14rem;
  border: 0.1rem solid #badcf5;
  text-align: center;
  margin-bottom: 3rem;
`;

export default CardHome;