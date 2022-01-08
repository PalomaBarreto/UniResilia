import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

function AreaProf()
{
  return(
    <Caixa>
      <Ttl>Bem-vindo a Área do Facilitador!</Ttl>

      <DivBotoes>
        <Button>Buscar Alunos</Button>
        <Button>Buscar Aluno por ID</Button>
        <Link to="post" >
          <Button>Adicionar</Button>  
        </Link>
        <Link to="delete">
          <Button>Deletar</Button>
        </Link>
      </DivBotoes>
          
      <Routes>
          <Route path="/area-prof/post" />
          <Route path="/area-prof/delete" />
      </Routes>
              
    </Caixa>
  )
    
}
  
const Caixa = styled.section`
  width: 90%;
  margin: 20px;
  
`
const DivBotoes = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
`
  
const Ttl = styled.h1`
  margin: 10px;
`
export default AreaProf