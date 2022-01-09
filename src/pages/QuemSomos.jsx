import React from "react";
import styled from "styled-components";
import gente from "../assets/gente.png";
import excelencia from "../assets/excelencia.png";
import inovacao from "../assets/inovacao.png";
import foco from "../assets/foco.png";
function QuemSomos() {
  return (
    <DivMain>
      <TituloInstitucional>Institucional</TituloInstitucional>
      <TextoInstitucional>
    
A UniResilia nasceu sob o signo da inovação pedagógica.

Essa característica fundamental, nos permite uma evolução constante para ajustar a formação do aluno às transformações tecnológicas, às necessidades do mercado e à revolução do conhecimento do século XXI.

Proporcionamos uma formação profissional de alta qualidade, fornecendo a base para que os alunos possam se renovar e permanecerem atualizados num mundo em constante transformação.
Nosso compromisso é, portanto, oferecer ensino de excelência adequado às novas realidades do Brasil e do mundo. Antes de tudo, trabalhamos incansavelmente para:
<ul>
  <li>Preparar nossos alunos para uma vida profissional de sucesso, que permita a conquista de posições de destaque no mercado de trabalho;
</li>
  <li>Transmitir e cultivar valores como trabalho dedicado, solidariedade, honestidade, lealdade, apreço pela cultura e respeito à diversidade;
</li>
  <li>Formar cidadãos plenos, capazes de ajudar a transformar o Brasil em um país economicamente próspero, socialmente justo e democrático.
</li>
</ul>
Para inovar o ensino universitário e capacitar os alunos para enfrentar os desafios da empregabilidade, a FACAMP oferece:

<ul>
  <li>Direção competente e experiente no desenvolvimento do ensino de excelência, sintonizada com o mundo em transformação e na vanguarda das novas tendências educacionais;
</li>
  <li>Professores altamente qualificados, conectados ao mercado de trabalho e que gostam de ensinar e aprender;
</li>
  <li>Ensino personalizado e não de massa, o que permite contato estreito entre coordenadores, professores e alunos, além de ajudar a identificar e maximizar o potencial de cada aluno;
</li>
</ul>


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
  margin-left: 80px;
  margin-right: 80px;
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

export default QuemSomos;
