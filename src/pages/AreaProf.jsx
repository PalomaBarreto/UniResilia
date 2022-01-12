import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Post from "../components/Post";
import Delete from "../components/Delete";
import Intro from "../components/Intro";
import Alunos from "../components/Alunos";
import AlunoById from "../components/AlunoById";

function AreaProf() {
  return (
    <div>
      <Intro
        description={
          "Todas as informações de nossos alunos você encontra aqui."
        }
        title={"Bem-vindo a Área do Professor!"}
      />
      <Caixa>

        <DivBotoes>
          <Ttl>Escolha uma ação:</Ttl>
          <NavLink to='alunos'>
            <Button>Buscar Alunos</Button>
          </NavLink>
          <NavLink to='aluno-by-id'>
            <Button>Buscar por ID</Button>
          </NavLink>
          <NavLink to="post">
            <Button>Adicionar</Button>
          </NavLink>
          {/* <NavLink to="delete">
            <Button>Deletar</Button>
          </NavLink> */}
        </DivBotoes>

        <Routes>
          <Route path='/alunos' element={<Alunos/>} />
          <Route path='aluno-by-id' element={<AlunoById/>} />
          <Route path="/post" element={<Post/>} />
          {/* <Route path="/delete" element={<Delete/>} /> */}
        </Routes>
      </Caixa>
    </div>
  );
}

const Caixa = styled.section`
  width: 90%;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const DivBotoes = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px;
`;
const Ttl = styled.h1`
  margin: 10px;
`;

export default AreaProf;