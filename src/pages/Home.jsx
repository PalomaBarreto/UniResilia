import React from "react";
import Intro from "../components/Intro";
import CardHome from "../components/CardHome";
import Depoimentos from "../components/Depoimentos";
import Modalidade from "../components/Modalidade";

export default function Home() {
  return (
    <div>
      <Intro
        description={"Transforme oportunidades em possibilidades. \n Use sua nota do ENEM. "}
        title={"A melhor universidade Tech do Brasil!"}
      />
      <Depoimentos/>
      <Modalidade/>
      <CardHome />
    </div>
  );
}