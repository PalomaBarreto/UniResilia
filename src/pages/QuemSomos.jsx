import React from "react";
import styled from "styled-components";
import gente from "../assets/gente.png";
import excelencia from "../assets/excelencia.png";
import inovacao from "../assets/inovacao.png";
import foco from "../assets/foco.png";
function SobreNos() {
  return (
    <DivMain>
      <TituloInstitucional>Institucional</TituloInstitucional>
      <TextoInstitucional>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </TextoInstitucional>

      <DivCards>
        <CardQuem>
          <Icone2 src={foco}></Icone2>

          <TituloCards>Foco no Aluno</TituloCards>

          <TextoCards>O aluno é nossa razão de ser.</TextoCards>
        </CardQuem>

        <CardQuem>
          <Icone src={inovacao}></Icone>
          <TituloCards>Inovação</TituloCards>

          <TextoCards> Devemos criar e ousar sempre.</TextoCards>
        </CardQuem>
        <CardQuem>
          <Icone2 src={excelencia}></Icone2>
          <TituloCards>Excelência</TituloCards>

          <TextoCards>
            Perseguimos a excelência na prestação de serviços dentro e fora da
            sala de aula.
          </TextoCards>
        </CardQuem>
        <CardQuem>
          <Icone src={gente}></Icone>
          <TituloCards>Meritocracia</TituloCards>

          <TextoCards>
            Valorizamos e reconhecemos o mérito do maior ativo que possuímos:
            nossa gente.
          </TextoCards>
        </CardQuem>
      </DivCards>
    </DivMain>
  );
}

const DivMain = styled.main``;

const TituloInstitucional = styled.h1`
  text-align: center;
  color: #001b44;
  font-size: 50px;
  margin-bottom: 80px;
  margin-top: 70px;
`;

const TextoInstitucional = styled.p`
  text-align: center;
  color: #001b44;
  font-size: 20px;
  margin-bottom: 80px;
`;

const Icone = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 15px;
`;
const Icone2 = styled.img`
  width: 150px;
  height: 90px;
  border-radius: 15px;
`;
const DivCards = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-around;
  background-color: #2a1a5e;
  margin-bottom: 150px;
`;

const CardQuem = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  width: 260px;
  height: 300px;
  justify-self: center;
`;

const TituloCards = styled.h1`
  font-size: 35px;
  margin-bottom: 05 px;
  color: #ffffff;
  font-weight: bold;
`;
const TextoCards = styled.p`
  color: #ffffff;
  font-size: 1.4rem;
  line-height: 1.2rem;
`;

export default SobreNos;
