import React from 'react'
import styled from "styled-components";
import Style from './Style'


export default function Intro(){
        return(
            <div className="Principal-Intro">
                <div className="Texto-Intro">
                    <h2 className="Titulo-Intro">
                        UNIRESILIA
                    </h2> 
                    <p>Lorem ipsum is placeholder text commonly used in the graphic
                    </p>
                </div>
                <img src={campus} alt="campus" width="300px" className="Imagem-Intro"></img>
            </div>
        )
}