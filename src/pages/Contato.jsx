import React from "react";
import styled from "styled-components";
import contato from "../assets/contato.png";
import Input from "../components/Input";
import Button from "../components/Button";
import Intro from "../components/Intro";
import Textarea from "../components/Textarea";

function Contato() {
  return (
    <div>
      <Intro
        description={
          "Sinta-se livre para deixar sua dúvida, sugestão ou elogio."
        }
        title={"Em que podemos te ajudar?"}
      />
      <Container>
        <ImgContato src={contato}></ImgContato>
        <Form>
          <Input type={"text"}>Nome Completo: </Input>
          <Input type={"email"}>E-mail: </Input>
          <Input type={"tel"}>Celular: </Input>
          <Textarea>Mensagem:</Textarea>
          <Button type={"submit"}>Enviar!</Button>
        </Form>
      </Container>
    </div>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ImgContato = styled.img``;

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

export default Contato;
