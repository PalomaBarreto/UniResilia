import React from "react";
import styled from "styled-components";
import  CardsUnidades from "../components/CardsUnidades";
import Campus from "../assets/campus.jpg";
import Campus2 from "../assets/campus2.jpg";
import Campus3 from "../assets/campus3.jpg";


const Cards = styled.div `
width: 100vw;
display: flex;
align-items: center;
justify-content: space-around;


`

export default function Unidades () {
    return (
        <Cards>
            
            <CardsUnidades texto="Campus Rio de Janeiro" img={Campus}></CardsUnidades>
            <CardsUnidades texto="Campus São Paulo" img={Campus2}></CardsUnidades>
            <CardsUnidades texto="Campus Acre" img={Campus3}></CardsUnidades>
            

        </Cards>
    )  
}