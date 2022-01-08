import React from "react";
import styled from "styled-components";
import Input from "./Input";

function Post()
{
  return(
    <Form>
      <Input type={"text"}>Nome: </Input>
      <Input type={"date"}>Data de Nascimento: </Input>
      <Input type={"text"}>CPF: </Input>
      <Input type={"text"}>E-mail: </Input>
      <Input type={"text"}>Curso: </Input>
    </Form>
  )    
}

const Form = styled.form`
display: flex;
flex-direction: column;
`

export default Post