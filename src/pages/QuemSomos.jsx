import React from "react";
import styled from "styled-components";
import gente from "../assets/gente.png";
import excelencia from "../assets/excelencia.png";
import inovacao from "../assets/inovacao.png";
import foco from "../assets/foco.png";
import foto from "../assets/bg.png";
import Intro from "../components/Intro";
import { BsCodeSlash } from "react-icons/bs";

function QuemSomos() {
  return (
    <div>
      <Intro
        description={"Aqui você encontra o caminho certo para um futuro brilhante."}
        title={"A melhor universidade Tech do Brasil!"}
      />
      <TituloInstitucional>Institucional</TituloInstitucional>
      <TextoInstitucional>
        A UniResilia nasceu sob o signo da inovação pedagógica. Essa
        característica fundamental, nos permite uma evolução constante para
        ajustar a formação do aluno às transformações tecnológicas, às
        necessidades do mercado e à revolução do conhecimento do século XXI.
        Proporcionamos uma formação profissional de alta qualidade, fornecendo a
        base para que os alunos possam se renovar e permanecerem atualizados num
        mundo em constante transformação. Nosso compromisso é, portanto,
        oferecer ensino de excelência adequado às novas realidades do Brasil e
        do mundo. Antes de tudo, trabalhamos incansavelmente para:
        <Lista>
          <li>
            <BsCodeSlash size="30" color="#f45905"/> Preparar nossos alunos para uma vida profissional de sucesso.
          </li>
          <br/>
          <li>
          <BsCodeSlash size="30" color="#f45905"/> Transmitir e cultivar trabalho dedicado, solidariedade,
            honestidade, lealdade e respeito à diversidade;
          </li>
          <br/>
          <li>
          <BsCodeSlash size="30" color="#f45905"/> Formar cidadãos plenos, capazes de ajudar a transformar o Brasil em
            um país economicamente próspero, socialmente justo e democrático.
          </li>
        </Lista>
       
      </TextoInstitucional>
      <DivImg>
        <Img src={foto}></Img>
      </DivImg>
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
    </div>
  );
}

const TituloInstitucional = styled.h1`
  text-align: center;
  color: #001b44;
  font-size: 50px;
  margin: 70px 0px 50px 0px;
  text-shadow: 1px 1px 4px var(--navy);
`;

const Lista = styled.ul`
margin-top: 30px;
list-style: none;
`

const TextoInstitucional = styled.p`
  text-align: center;
  color: var(--navy);
  font-size: 25px;
  margin: 0px 150px 0px 150px;
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
  align-items: center;
  justify-content: space-around;
  background-color: var(--navy);
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

const DivImg = styled.div`
  text-align: center;
  height: 438px
`

const Img = styled.img`
  height: 500px;
  width: 60%;
`;

export default QuemSomos;