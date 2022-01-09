import React from "react";
import styled from "styled-components";

function Textarea(props) {
  return (
    <Caixa>
      <Label>{props.children}</Label>
      <Text rows="5" cols="52" />
    </Caixa>
  );
}

const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  heigth: 400px;
  margin: 20px;
`;
const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
`;
const Text = styled.textarea`
  color: var(--navy);
`;

export default Textarea;