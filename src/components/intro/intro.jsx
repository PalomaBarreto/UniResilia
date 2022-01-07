import "./style.css"
import React, { Component } from "react";
import campus from './campus.png'

export default class Intro extends Component{
    render(){
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
}