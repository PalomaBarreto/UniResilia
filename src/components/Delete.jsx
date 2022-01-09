import React from "react";
import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

function Delete()
{
  return(
    <Form>
      <Input type={"number"}>ID do Aluno: </Input>
      <Button type={"submit"}>Deletar!</Button>
    </Form>
  )    
}

const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 200px;
  align-items: center;
  margin: 30px;
  background-color: var(--yellow);
  box-shadow: 15px 15px 5px var(--navy);
  border-radius: 5px;
`;

export default Delete