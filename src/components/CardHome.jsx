import React from "react";
import styled from "styled-components";

function CardHome() {
  return (
    <DivMain>
      <Ead>
        <Titulo>EAD</Titulo>
        <Linha />
        <Texto>100% das aulas online e com mensalidade fixa</Texto>
      </Ead>

      <Flex>
        <Titulo>Flex</Titulo>
        <Linha />
        <Texto>Até 2 dias de aulas presenciais por semana</Texto>
      </Flex>

      <Presencial>
        <Titulo>Presencial</Titulo>
        <Linha />
        <Texto>4 a 5 dias de aulas presenciais por semana</Texto>
      </Presencial>
    </DivMain>
  );
}

const DivMain = styled.main`
  display: flex;
  justify-content: space-around;
  margin-bottom: 70px;
`;
const Ead = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  width: 260px;
  height: 300px;
  justify-self: center;
  background-color: #2a1a5e;
  box-shadow: 10px 5px 5px gray;
  border: 2px solid darkorange;
  margin-bottom: 50px;
`;
const Flex = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  width: 260px;
  height: 300px;
  justify-self: center;
  background-color: #2a1a5e;
  box-shadow: 10px 5px 5px gray;
  border: 2px solid darkorange;
`;
const Presencial = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  width: 260px;
  height: 300px;
  justify-self: center;
  background-color: #2a1a5e;
  box-shadow: 10px 5px 5px gray;
  border: 2px solid darkorange;
`;
const Titulo = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: #ffffff;
`;
const Texto = styled.p`
  color: #ffffff;
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
