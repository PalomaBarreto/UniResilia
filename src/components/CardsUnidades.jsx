import React from "react";
import styled from "styled-components";

function CardsUnidadades(props) {
  return (
    <Unidades>
      <ImgUnidade src={props.img} />
      <TextoUni>{props.texto}</TextoUni>
    </Unidades>
  );
}

const Unidades = styled.div`
  margin-top: 10%;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgUnidade = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 17px;
  border: 5px solid darkorange;
  box-shadow: 10px 5px 5px gray;
`;
const TextoUni = styled.p`
  margin-top: 10%;
  font-size: 25px;
  font-weight: bold;
  border: 4px solid darkorange;
  border-radius: 15px;
  box-shadow: 10px 5px 5px gray;
`;

export default CardsUnidadades;