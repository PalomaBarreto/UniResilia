import React from "react";
import styled from "styled-components";

import Input from "../components/Input";
import Button from "../components/Button";
import Intro from "../components/Intro";

function Contato(){
  return(
    <div>
      <Intro description={"Alguma baboseira"} title={"Em que podemos te ajudar?"} />
      <Container>
      <Input>Nome: </Input>
      <Input>Telefone: </Input>
      <Input>E-mail: </Input>
      <Input>Nome da mãe: </Input>
      <Input>CPF: </Input>
      <Button>Enviar!</Button>
      
      </Container>

    </div>
  )
}

const Container = styled.section`
display: flex;
flex-direction: column;
heigth: 40%;
align-items: center;
margin: 20px
`
  
export default Contato