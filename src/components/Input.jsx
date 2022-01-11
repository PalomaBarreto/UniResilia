import React from "react";
import styled from "styled-components";

function Input(props) {
  return (
    <Container>
      <Label>{props.children}</Label>
      <Ipt
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e)=>{
          props.handler(props.nome, e.target.value);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  text-align: start;
  color: var(--navy);
  margin-top: 20px;
`;
const Ipt = styled.input`
  height: 40px;
  width: 400px;
  border-radius: 5px;
  border: 1px solid var(--navy);
  padding: 0;
  font-size: 18px;
  margin-bottom: 5px;
`;

export default Input;