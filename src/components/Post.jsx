import React from "react";
import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

function Post()
{
  return(
    <Form>
      <Input type={"text"}>Nome do Aluno: </Input>
      <Input type={"date"}>Data de Nascimento: </Input>
      <Input type={"text"}>CPF: </Input>
      <Input type={"text"}>E-mail: </Input>
      <Input type={"text"}>Curso: </Input>
      <Input type={"date"}>Data de Resgistro: </Input>
      <Button type={"submit"}>Adicionar!</Button>
    </Form>
  )    
}

const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  margin: 30px;
  background-color: var(--yellow);
  box-shadow: 15px 15px 5px var(--navy);
  border-radius: 5px;
`;

export default Post