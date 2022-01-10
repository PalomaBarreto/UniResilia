import React from "react";
import styled from "styled-components";
import CardsUnidades from "../components/CardsUnidades";
import Intro from "../components/Intro";
import Campus from "../assets/campus.jpg";
import Campus2 from "../assets/campus2.jpg";
import Campus3 from "../assets/campus3.jpg";

export default function Unidades() {
  return (
    <div>
      <Intro
        description={"Localize a unidade mais próxima de você."}
        title={"Unidades Resilia"}
      />
      <Cards>
        <CardsUnidades
          titulo="Campus Rio de Janeiro"
          img={Campus}
          texto="A Resilia está presente no Rio de Janeiro em duas unidades: Centro e Barra. Nas duas sedes, a Resilia oferece infraestrutura com tecnologia de vanguarda para potencializar o aprendizado com interação e networking. No Centro, o prédio é tombado pelo Instituto Estadual do Patrimônio Cultural. Na Barra, são 4 andares que favorecem a convivência dos alunos, o acesso a serviços e, principalmente, o ambiente de aprendizado. "
        ></CardsUnidades>
        <CardsUnidades
          titulo="Campus São Paulo"
          img={Campus2}
          texto="Expandindo nossa metodologia e abrindo espaço para protagonistas que desejam construir sua própria história, em 2017, a Resilia inaugura seu espaço na cidade de São Paulo, nos Jardins, trazendo em seu portfólio renomados cursos de pós-graduação nas áreas de Gestão, Negócios e Direito. O novo prédio da Resilia São Paulo é um marco na paisagem urbana da região. "
        ></CardsUnidades>
        <CardsUnidades
          titulo="Campus Acre"
          img={Campus3}
          texto="Presente no Acre desde 2008, em consonância com a meta de crescer com foco na excelência educacional, investir continuamente na qualidade acadêmica e prezar pela infraestrutura de ponta nas unidades, a Resilia escreve sua história de protagonismo com a formação de mais de 3.500 alunos."
        ></CardsUnidades>
      </Cards>
    </div>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;
