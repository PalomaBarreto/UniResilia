import React from "react";
import Intro from "../components/Intro";
import CardHome from "../components/CardHome";
import Depoimentos from "../components/Depoimentos";

export default function Home() {
  return (
    <div>
      <Intro
        description={"Transforme oportunidades em possibilidades."}
        title={"A melhor universidade Tech do Brasil!"}
      />
      <Depoimentos/>
      <CardHome />
    </div>
  );
}