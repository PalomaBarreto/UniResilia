import React from "react";
import styled from "styled-components";

function CardsUnidadades(props) {
  return (
    <Unidades>
      <ImgUnidade src={props.img} />
      <DivDescri>
        <TituloUni>{props.titulo}</TituloUni>
        <TextoUni>{props.texto}</TextoUni>
      </DivDescri>
    </Unidades>
  );
}

const Unidades = styled.div`
  background: var(--yellow);
  margin: 0 2% 5% 2%;
  display: flex;
  border: 1px solid darkorange;
  box-shadow: 10px 5px 5px gray;
`;
const ImgUnidade = styled.img`
  width: 400px;
  height: 300px;
  box-sizing: border-box;
`;

const DivDescri = styled.div`
  display: flex;
  flex-direction: column;
`;

const TituloUni = styled.p`
  width: 800px;
  margin: 30px 0 0 10px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
`;

const TextoUni = styled.p`
  width: 800px;
  margin: 30px 0 0 10px;
  font-size: 22px;
  border-radius: 15px;
`;

export default CardsUnidadades;
