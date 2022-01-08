import React from 'react'
import styled from "styled-components";
import Style from './Style'
export default function Header() {
    return (
        <div>
      <Nav>
          <p class="brand">Uni<strong>Resilia</strong></p>
          <ul>
             <li><a href="#home">Início</a></li>
             <li><a href="#about">Sobre nós</a></li>
             <li><a href="#unidades">Unidades</a></li>
             <li><a href="#contato">Fale conosco</a></li>  
             <li><a href="#login">Área do aluno</a></li>  
          </ul>
      </Nav>
      
        </div>
    )
}
