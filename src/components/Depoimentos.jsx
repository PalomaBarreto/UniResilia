import React from "react";
import styled from "styled-components";
import Aluno from "../assets/aluno.png";
import Aluno1 from "../assets/aluno2.jpg";
import Aluno2 from "../assets/aluno3.jpg";
import Aluno3 from "../assets/aluno4.jpg";

export default function Depoimentos() {
  return (
    <div>
      <TituloDepoimentos>Conheça nossos #Resilientes</TituloDepoimentos>
      <TextoDepoimentos>
        O que dizem os alunos formados na Resilia?
      </TextoDepoimentos>
      <DivCards>
        <CardAluno>
          <Foto src={Aluno}></Foto>
          <TextoCards>
            Aproveito a oportunidade, para registrar a minha satisfação com a
            Instituição Resilia. Desde o atendimento envolvendo
            coordenação/gestor do polo até o corpo docente, em especial a
            professora Denise Cardoso. Todas as vezes que precisei de alguma
            orientação, ajuda ou simplesmente uma informação, sempre encontrei
            profissionais dispostos a me ajudarem. Pode ter a certeza que isso
            faz a diferença! Se eu tiver que indicar alguma Instituição a
            alguém, a Resilia está na minha lista. Parabéns pela Equipe!
            <br></br>
            <NomeAluno>Ravel Nogueira</NomeAluno>
            Aluno turma 08 - 2021
          </TextoCards>
        </CardAluno>

        <CardAluno>
          <Foto src={Aluno1}></Foto>
          <TextoCards>
            Prezado Reitor, gostaria de parabenizá-lo pela organização do curso
            de Pós-Graduação de processo civil, principalmente em relação a
            gestora do curso Dra. Rita e do tutor Juvenal, que, apesar de rígido
            com os trabalhos, tem uma organização e preocupação com os alunos no
            desenrolar das tarefas. Mediante o exposto, sinto-me muito
            satisfeito com a escolha desse grupo e só tenho a agradecer a todos
            pela atenção e colaboração para o aprimoramento e desenvolvimento da
            minha carreita.
            <NomeAluno>Giovanna Rossi</NomeAluno>
            Aluno turma 08 - 2021
          </TextoCards>
        </CardAluno>
        <CardAluno>
          <Foto src={Aluno2}></Foto>
          <TextoCards>
            Gostaria de registrar meus agradecimentos a toda equipe da
            Pós-Graduação (EaD) da Faculdade Resilia, em especial à Antônia Mota
            e ao orientador Juvenal Bacellar Neto que foram incansáveis para o
            sucesso na conclusão do meu curso. Sinto-me realizada com a escolha
            dessa faculdade para fazer minha especialização, visto que, o
            atendimento dos colaboradores e o conteúdo do material didático são
            excelentes. Tudo que precisei durante a realização do curso foi
            prontamente atendido e respondido.
            <NomeAluno>Paloma Barreto</NomeAluno>
            Aluno turma 08 - 2021
          </TextoCards>
        </CardAluno>
        <CardAluno>
          <Foto src={Aluno3}></Foto>
          <TextoCards>
            Durante os 7 (sete) meses de curso, a gestora Solange Brunelli (Rio
            de Janeiro - RJ) ofereceu todo apoio que o estudante precisa para
            concluir a graduação devidamente orientado. Foram diversas trocas de
            informações que são imprescindíveis para o aluno buscar o
            conhecimento necessário ao aprimoramento intelectual e profissional.
            No que tange a instituição, ela apresenta ferramentas simples e
            descomplicadas para que o discente aproveite todos os recursos
            disponíveis para as atividades curricular.
            <NomeAluno>Renam Martins</NomeAluno>
            Aluno turma 08 - 2021
          </TextoCards>
        </CardAluno>
      </DivCards>
    </div>
  );
}

const TituloDepoimentos = styled.h1`
  text-align: center;
  color: #001b44;
  font-size: 50px;
  margin: 70px 0px 20px 0px;
  text-shadow: 1px 1px 4px var(--navy);
`;
const TextoDepoimentos = styled.p`
  text-align: center;
  color: var(--navy);
  font-size: 25px;
  margin: 0px 150px 0px 150px;
`;
const DivCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff);
`;
const CardAluno = styled.div`
  margin: 56px 5px 40px 5px;
  background: var(--yellow);
  text-align: left;
  padding: 32px;
  border-radius: 32px;
  box-shadow: 0px 0px 14px rgb(0 0 0 / 8%);
`;
const Foto = styled.img`
  margin-bottom: 16px;
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
`;
const TextoCards = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--black);
  min-height: 220px;
  margin: 0;
  max-width: 305px;
  width: 100%;
`;

const NomeAluno = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`;
