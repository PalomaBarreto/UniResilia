import React from "react";
import Intro from "../components/Intro";
import CardHome from "../components/CardHome";

export default function Home() {
  return (
    <div>
      <Intro
        description={"Alguma baboseira"}
        title={"A melhor universidade Tech do Brasil!"}
      />
      <CardHome />
    </div>
  );
}