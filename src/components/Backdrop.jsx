import React from "react";
import styled from "styled-components";

const Preto = styled.div `
    
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.75);
    width: 101vw;
    height: 150vh;
    top: -1;
    left: -1;
`;

export default function Backdrop(props){
    return (
        <Preto onClick={props.onClick} />
    );
}