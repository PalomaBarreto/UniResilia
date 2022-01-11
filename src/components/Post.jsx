import React from "react";
import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";
import { postStudent } from "../utils/Api";
import { BsWindowSidebar } from "react-icons/bs";
function Post(){
  const Obj = {
    nome: '',
    nascimento: '',
    cpf: '',
    email: '',
    carreira: '',
    registro: '',
  };

  function handlerOnBlur(key, valor){
    Obj[key] = valor;
  }

  function handlerSubmit(){
    postStudent({...Obj}).then((res)=>{
      window.location.reload();
    })
  }
  return(
    <Form>
      <Input type={"text"} handler={handlerOnBlur} nome={'nome'}>Nome do Aluno: </Input>
      <Input type={"date"} handler={handlerOnBlur} nome={'nascimento'}>Data de Nascimento: </Input>
      <Input type={"text"} handler={handlerOnBlur} nome={'cpf'}>CPF: </Input>
      <Input type={"text"} handler={handlerOnBlur} nome={'email'}>E-mail: </Input>
      <Input type={"text"} handler={handlerOnBlur} nome={'carreira'}>Curso: </Input>
      <Input type={"date"} handler={handlerOnBlur} nome={'registro'}>Data de Resgistro: </Input>
      <Button type={"submit"} handler={handlerSubmit}>Adicionar!</Button>
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