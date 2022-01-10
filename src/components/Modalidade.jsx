import React from "react";
import styled from "styled-components";

export default function Modalidade() {
  return (
    <div>
      <DivCards>
        <Titulo>O melhor para você. E do seu jeito</Titulo>
        <Paragrafo>
          Precisa de flexibilidade de horários? Aqui, você encontra a modalidade
          que mais combina com a sua rotina.
        </Paragrafo>
      </DivCards>
    </div>
  );
}
const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
`;

const Titulo = styled.h1`
  margin: 50px 0px 20px 0px;
  font-size: 50px;
  color: #001b44;
  text-shadow: 1px 1px 4px var(--navy);
`;
const Paragrafo = styled.p`
  font-size: 25px;
  color: #001b44;
`;
