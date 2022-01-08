import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Post from "../components/Post"

function AreaProf()
{
  return(
    <Caixa>
      <Ttl>Bem-vindo a Área do Facilitador!</Ttl>

      <DivBotoes>
        <Button>Buscar Alunos</Button>
        <Button>Buscar Aluno por ID</Button>
        <NavLink to="post" >
          <Button>Adicionar</Button>  
        </NavLink>
        <NavLink to="delete">
          <Button>Deletar</Button>
        </NavLink>
      </DivBotoes>
          
      <Routes>
          <Route path="/post" element={<Post/>} />
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